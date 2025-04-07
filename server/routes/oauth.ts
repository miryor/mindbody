import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import geoip from 'geoip-lite';
import { Session } from '../types/session';
import { sessions, createSession, deleteSession } from '../services/sessionStore';

const router = express.Router();

// OAuth configuration interface
interface OAuthConfig {
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  redirectUri: string;
  siteId: string;
  apiKey: string;
}

// Default configuration
let oauthConfig: OAuthConfig = {
  clientId: '',
  clientSecret: '',
  tokenUrl: 'https://signin.mindbodyonline.com/connect/token',
  redirectUri: 'http://localhost:3000/oauth/callback',
  siteId: '',
  apiKey: ''
};

// Initialize function to set configuration
export function initializeOAuth(config: OAuthConfig) {
  oauthConfig = config;
  console.log('OAuth module initialized with config:', {
    clientId: config.clientId ? '****' + config.clientId.slice(-4) : 'missing',
    redirectUri: config.redirectUri,
    tokenUrl: config.tokenUrl,
    siteId: config.siteId ? '****' + config.siteId.slice(-4) : 'missing',
    apiKey: config.apiKey ? '****' + config.apiKey.slice(-4) : 'missing'
  });
}

// OAuth callback endpoint
router.post('/callback', async (req, res) => {
  try {
    const { code, id_token, error, error_description } = req.body;
    
    if (error) {
      console.error('OAuth error received:', { error, error_description });
      return res.status(400).json({ error: error_description || error });
    }

    if (!code || !id_token) {
      console.error('Missing required tokens:', { hasCode: !!code, hasIdToken: !!id_token });
      return res.status(400).json({ error: 'Missing required tokens' });
    }

    // Get client IP and determine timezone
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const geo = geoip.lookup(typeof ip === 'string' ? ip : '');
    const timezone = geo?.timezone || 'UTC'; // Default to UTC if timezone cannot be determined

    console.log('Exchanging code for tokens with config:', {
      clientId: oauthConfig.clientId ? '****' + oauthConfig.clientId.slice(-4) : 'missing',
      redirectUri: oauthConfig.redirectUri,
      tokenUrl: oauthConfig.tokenUrl
    });

    // Exchange code for tokens
    const tokenResponse = await axios.post(
      oauthConfig.tokenUrl,
      new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: oauthConfig.clientId,
        client_secret: oauthConfig.clientSecret,
        code: code || '',
        redirect_uri: oauthConfig.redirectUri,
        subscriberId: oauthConfig.siteId,
        scope: [
          'email',
          'profile',
          'openid',
          'offline_access',
          'Platform.Contacts.Api.Write',
          'Platform.Contacts.Api.Read',
          'Platform.Accounts.Api.Read',
          'Mindbody.Api.Public.v6'
        ].join(' '),
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
      }
    );

    console.log('Token response:', tokenResponse.data);

    // Create a new session with timezone
    const sessionId = uuidv4();
    const session: Session = {
      id: sessionId,
      accessToken: tokenResponse.data.access_token,
      idToken: tokenResponse.data.id_token,
      refreshToken: tokenResponse.data.refresh_token || null,
      tokenType: tokenResponse.data.token_type,
      clientInfo: null,
      expiresAt: Date.now() + (tokenResponse.data.expires_in * 1000),
      timezone: timezone
    };

    try {
      const clientResponse = await axios.get('https://api.mindbodyonline.com/platform/accounts/v1/me', {
        headers: {
          'API-Key': oauthConfig.apiKey,
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
      });
      session.clientInfo = clientResponse.data;
      console.log('Client info:', session.clientInfo);
    } catch (error) {
      console.error('Client info fetch error:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        response: axios.isAxiosError(error) ? {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: JSON.stringify(error.response?.data, null, 2),
          headers: error.response?.headers
        } : null,
        config: axios.isAxiosError(error) ? {
          url: error.config?.url,
          method: error.config?.method,
          headers: error.config?.headers
        } : null
      });
      // Clean up the session since we couldn't get client info
      return res.status(401).json({ error: 'Failed to fetch client information' });
    }

    createSession(session);

    // Set session cookie
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: tokenResponse.data.expires_in * 1000,
    });

    // Redirect to the frontend main page
    res.redirect('http://localhost:3000');
  } catch (error) {
    console.error('OAuth token exchange error:', error);
    if (axios.isAxiosError(error)) {
      console.error('OAuth error details:', {
        status: error.response?.status,
        data: error.response?.data,
        config: {
          url: error.config?.url,
          data: error.config?.data,
          headers: error.config?.headers
        }
      });
    }
    res.status(500).json({ error: 'Failed to exchange authorization code' });
  }
});

// Session endpoint
router.get('/session', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }

    const session = sessions.get(sessionId);
    
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    if (Date.now() > session.expiresAt) {
      sessions.delete(sessionId);
      return res.status(401).json({ error: 'Session expired' });
    }

    res.json({
      clientInfo: {
        ...session.clientInfo,
        IdToken: session.idToken
      },
      sessionId,
      timezone: session.timezone
    });
  } catch (error) {
    console.error('Session retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
});

// Logout callback endpoint
router.get('/logout-callback', (req, res) => {
  console.log('Received endsession callback');
  const sessionId = req.cookies.sessionId;
  
  if (sessionId) {
    console.log('Found session ID:', sessionId);
    const session = sessions.get(sessionId);
    if (session) {
      console.log('Found active session, cleaning up');
      // Clean up our local session
      deleteSession(sessionId);
      console.log('Removed session from storage');
      res.clearCookie('sessionId');
      console.log('Cleared session cookie');
    }
  }
  
  // Redirect to frontend
  console.log('Redirecting to frontend');
  res.redirect('http://localhost:3000');
});

export { router }; 