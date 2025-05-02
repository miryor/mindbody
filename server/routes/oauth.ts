import express from 'express';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import geoip from 'geoip-lite';
import { Session } from '../types/session';
import { sessions } from '../services/sessionStore';

// Interface for the config this router needs
interface OAuthRouterConfig {
  clientId: string;
  clientSecret: string;
  tokenUrl: string;
  redirectUri: string;
  siteId: string;
  apiKey: string;
}

const router = express.Router();

// Module-scoped variable to hold the config
let oauthRouterConfig: OAuthRouterConfig;

// Renamed initializer function
function initializeOAuthRouter(config: OAuthRouterConfig) {
  if (oauthRouterConfig) {
      console.warn('OAuth Router is already initialized.');
      return;
  }
  console.log('Initializing OAuth Router...');
  oauthRouterConfig = config;
  console.log('OAuth Router initialized successfully.');
}

// Middleware to check if router is initialized
router.use((req, res, next) => {
    if (!oauthRouterConfig) {
        console.error('FATAL: OAuth Router accessed before initialization.');
        return res.status(503).json({ error: 'OAuth service not available.' });
    }
    next();
});

// OAuth endpoints
router.post('/callback', async (req, res) => {
  // Now uses oauthRouterConfig instead of oauthConfig
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
    const timezone = geo?.timezone || 'EST'; // Default to EST

    console.log('OAuth Callback: Exchanging code for tokens...');
    // Exchange code for tokens
    const tokenResponse = await axios.post(
      oauthRouterConfig.tokenUrl,
      new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: oauthRouterConfig.clientId,
        client_secret: oauthRouterConfig.clientSecret,
        code: code || '',
        redirect_uri: oauthRouterConfig.redirectUri,
        subscriberId: oauthRouterConfig.siteId, // Important for Mindbody
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
        timeout: 15000 // Slightly longer timeout for token exchange
      }
    );

    console.log('OAuth Callback: Token exchange successful.'); // Avoid logging tokens

    // Create a new session with timezone
    const sessionId = uuidv4();
    const session: Session = {
      id: sessionId,
      accessToken: tokenResponse.data.access_token,
      idToken: tokenResponse.data.id_token,
      refreshToken: tokenResponse.data.refresh_token || null,
      tokenType: tokenResponse.data.token_type,
      clientInfo: null, // Fetch next
      expiresAt: Date.now() + (tokenResponse.data.expires_in * 1000),
      timezone: timezone
    };

    try {
      console.log('OAuth Callback: Fetching client info...');
      // Fetch client info using the Platform API
      // NOTE: This call uses axios directly, NOT mindbodyApi instance,
      // because it needs the *client's* access token specifically.
      const clientResponse = await axios.get('https://api.mindbodyonline.com/platform/accounts/v1/me', {
        headers: {
          'API-Key': oauthRouterConfig.apiKey, // Use the API key from config
          'Authorization': `Bearer ${session.accessToken}`,
          'Content-Type': 'application/json',
        },
        timeout: 10000
      });
      session.clientInfo = clientResponse.data;
      console.log('OAuth Callback: Client info fetched successfully for:', session.clientInfo?.Email);
    } catch (error) {
      console.error('OAuth Callback: Client info fetch error:', {
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
      return res.status(401).json({ error: 'Failed to fetch client information' });
    }

    sessions.set(sessionId, session);
    console.log(`OAuth Callback: Session created and stored for ID: ${sessionId}`);

    // Set session cookie
    res.cookie('sessionId', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax', // Consider 'strict' if possible
      maxAge: tokenResponse.data.expires_in * 1000,
    });

    // Redirect to the frontend main page (TODO: Make URL configurable?)
    console.log('OAuth Callback: Redirecting to frontend.');
    res.redirect('http://localhost:3000');
  } catch (error) {
    console.error('OAuth Callback: Token exchange or processing error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined
    });
    res.status(500).json({ error: 'Failed to process OAuth callback' });
  }
});

// Session management endpoints
router.get('/session', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }

    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }

    // Use the same expiry check logic as AuthService
    const TOKEN_EXPIRY_BUFFER_MS = 5 * 60 * 1000;
    if (Date.now() >= (session.expiresAt - TOKEN_EXPIRY_BUFFER_MS)) {
        console.log(`Session Endpoint: Client session expired for ID: ${sessionId}.`);
        sessions.delete(sessionId);
        res.clearCookie('sessionId'); // Clear the expired cookie
        return res.status(401).json({ error: 'Session expired' });
    }

    // Return relevant, non-sensitive session info
    res.json({
      clientInfo: {
        FirstName: session.clientInfo?.FirstName,
        LastName: session.clientInfo?.LastName,
        Email: session.clientInfo?.Email,
        // DO NOT return IdToken or AccessToken here unless absolutely needed by frontend
      },
      timezone: session.timezone
      // DO NOT return sessionId here
    });
  } catch (error) {
    console.error('Session retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
});

// Handle the endsession callback
router.get('/logout-callback', (req, res) => {
  console.log('OAuth Logout Callback: Received endsession callback');
  const sessionId = req.cookies.sessionId;
  
  if (sessionId) {
    console.log('OAuth Logout Callback: Found session ID:', sessionId);
    const session = sessions.get(sessionId);
    if (session) {
      console.log('OAuth Logout Callback: Found active session, cleaning up');
      sessions.delete(sessionId);
      console.log('OAuth Logout Callback: Removed session from storage');
    } else {
        console.log('OAuth Logout Callback: Session ID cookie present, but no matching session found.');
    }
    res.clearCookie('sessionId');
    console.log('OAuth Logout Callback: Cleared session cookie');
  }
  
  // Redirect to frontend (TODO: Make URL configurable?)
  console.log('OAuth Logout Callback: Redirecting to frontend');
  res.redirect('http://localhost:3000');
});

// Export the renamed initializer and the router
export { initializeOAuthRouter };
export default router; 