import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import cookieParser from 'cookie-parser';
import { RequestHandler } from 'express';
import path from 'path';

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser() as any);

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const API_KEY = process.env.MINDBODY_API_KEY;
const SITE_ID = process.env.MINDBODY_SITE_ID;
const API_URL = process.env.MINDBODY_API_URL;
const USERNAME = process.env.MINDBODY_USERNAME;
const PASSWORD = process.env.MINDBODY_PASSWORD;

console.log('Server Configuration:', {
  hasApiKey: !!API_KEY,
  hasSiteId: !!SITE_ID,
  hasUsername: !!USERNAME,
  hasPassword: !!PASSWORD,
  apiUrl: API_URL
});

// Create axios instance for Mindbody API with timeout
const mindbodyApi = axios.create({
  baseURL: API_URL,
  headers: {
    'API-Key': API_KEY,
    'SiteId': SITE_ID,
    'Content-Type': 'application/json',
  },
  timeout: 10000, // 10 second timeout
});

// Token management
let tokenState = {
  accessToken: null as string | null,
  expirationTime: null as number | null,
  renewalPromise: null as Promise<string> | null,
};

// Token renewal function with proper cleanup
async function renewToken(): Promise<string> {
  console.log('Token renewal requested');
  
  // If we have a valid token that's not expired, return it
  if (tokenState.accessToken && tokenState.expirationTime && Date.now() < tokenState.expirationTime) {
    console.log('Using existing valid token');
    return tokenState.accessToken;
  }

  // If renewal is already in progress, wait for it
  if (tokenState.renewalPromise !== null) {
    console.log('Token renewal already in progress, waiting for result...');
    return tokenState.renewalPromise;
  }

  console.log('Starting new token renewal process');
  
  // Create new renewal promise
  const renewalPromise = (async () => {
    console.log('Sending token renewal request to Mindbody');
    console.log('Request configuration:', {
      url: '/usertoken/issue',
      method: 'POST',
      data: {
        username: USERNAME,
        password: PASSWORD,
      },
      headers: mindbodyApi.defaults.headers,
      baseURL: mindbodyApi.defaults.baseURL,
      fullUrl: `${mindbodyApi.defaults.baseURL}/usertoken/issue`,
      allHeaders: {
        ...mindbodyApi.defaults.headers,
        'Content-Type': 'application/json'
      }
    });

    try {
      // Log the exact request being sent
      console.log('Making request with:', {
        url: `${mindbodyApi.defaults.baseURL}/usertoken/issue`,
        method: 'POST',
        headers: {
          'API-Key': API_KEY,
          'SiteId': SITE_ID,
          'Content-Type': 'application/json'
        },
        data: {
          username: USERNAME,
          password: PASSWORD
        }
      });

      const response = await axios.post(
        `${API_URL}/usertoken/issue`,
        JSON.stringify({
          username: USERNAME,
          password: PASSWORD
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'API-Key': API_KEY,
            'SiteId': SITE_ID
          }
        }
      );

      console.log('Token renewal response received:', {
        status: response.status,
        statusText: response.statusText,
        data: response.data
      });

      const newToken = response.data.AccessToken;
      tokenState.accessToken = newToken;
      // Convert the Expires string to a timestamp
      tokenState.expirationTime = new Date(response.data.Expires).getTime();
      console.log('Token renewal successful, expires at:', response.data.Expires);
      return newToken;
    } catch (error) {
      console.error('Token renewal request failed:', {
        error: error instanceof Error ? error.message : 'Unknown error',
        isAxiosError: axios.isAxiosError(error),
        config: axios.isAxiosError(error) ? {
          url: error.config?.url,
          method: error.config?.method,
          baseURL: error.config?.baseURL,
          headers: error.config?.headers,
          timeout: error.config?.timeout
        } : null,
        response: axios.isAxiosError(error) ? {
          status: error.response?.status,
          statusText: error.response?.statusText,
          data: error.response?.data
        } : null,
        request: axios.isAxiosError(error) ? error.request : null
      });
      // Clear the token state on failure
      tokenState.accessToken = null;
      tokenState.expirationTime = null;
      throw error;
    } finally {
      // Clear the renewal promise
      tokenState.renewalPromise = null;
      console.log('Token renewal process completed');
    }
  })();

  // Store the promise in state
  tokenState.renewalPromise = renewalPromise;

  // Return the local promise, not the state variable
  return renewalPromise;
}

// Request interceptor with proper cleanup
mindbodyApi.interceptors.request.use(async (config) => {
  console.log(`[${new Date().toISOString()}] Making request to:`, config.url);
  
  // Check if token is expired or missing
  if (!tokenState.accessToken || !tokenState.expirationTime || Date.now() >= tokenState.expirationTime) {
    console.log('Token expired or missing, renewing...');
    try {
      const token = await renewToken();
      config.headers['Authorization'] = `Bearer ${token}`;
      console.log('Added new authorization header');
    } catch (error) {
      console.error('Failed to renew token:', error);
      return Promise.reject(error);
    }
  } else {
    config.headers['Authorization'] = `Bearer ${tokenState.accessToken}`;
    console.log('Using existing authorization header');
  }
  
  return config;
});

// Response interceptor with error handling
mindbodyApi.interceptors.response.use(
  response => {
    console.log(`[${new Date().toISOString()}] Response received from:`, response.config.url);
    return response;
  },
  async error => {
    console.error(`[${new Date().toISOString()}] Request failed:`, {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message
    });
    if (axios.isAxiosError(error) && error.response?.status === 401) {
      console.log('Authentication error, clearing token');
      tokenState.accessToken = null;
      tokenState.expirationTime = null;
    }
    return Promise.reject(error);
  }
);

// Initialize token when server starts
console.log('Initializing server token...');
renewToken()
  .then(token => {
    console.log('Server token initialized successfully');
  })
  .catch(error => {
    console.error('Failed to initialize server token:', error);
  });

// API Routes with proper error handling and cleanup
app.post('/api/client/create', async (req, res) => {
  console.log('Received client creation request:', {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    birthDate: req.body.birthDate
  });

  try {
    const { firstName, lastName, email, birthDate } = req.body;

    // Input validation
    if (!email || !email.includes('@')) {
      console.log('Invalid email address provided');
      return res.status(400).json({ error: 'Invalid email address' });
    }
    if (!firstName || firstName.trim().length === 0) {
      console.log('Missing first name');
      return res.status(400).json({ error: 'First name is required' });
    }
    if (!lastName || lastName.trim().length === 0) {
      console.log('Missing last name');
      return res.status(400).json({ error: 'Last name is required' });
    }
    if (!birthDate) {
      console.log('Missing birth date');
      return res.status(400).json({ error: 'Birth date is required' });
    }

    console.log('Sending request to Mindbody API to create client');
    const response = await mindbodyApi.post('/client/addclient', {
      FirstName: firstName,
      LastName: lastName,
      Email: email,
      Username: email,
      ReferredBy: "Website",
      Test: false,
      SendAccountEmails: true,
      Action: "Added",
      BirthDate: birthDate
    });

    console.log('Client creation successful:', {
      clientId: response.data.Client?.Id,
      firstName: response.data.Client?.FirstName,
      lastName: response.data.Client?.LastName,
      email: response.data.Client?.Email,
      birthDate: response.data.Client?.BirthDate
    });

    // Clean up response data
    const cleanResponse = {
      Id: response.data.Client?.Id,
      FirstName: response.data.Client?.FirstName,
      LastName: response.data.Client?.LastName,
      Email: response.data.Client?.Email,
      BirthDate: response.data.Client?.BirthDate
    };

    res.json(cleanResponse);
  } catch (error) {
    console.error('Error creating client:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to create client'
      });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.post('/api/client/password-reset', async (req, res) => {
  console.log('Received password reset request:', {
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  try {
    const { email, firstName, lastName } = req.body;

    if (!email || !email.includes('@')) {
      console.log('Invalid email address provided');
      return res.status(400).json({ error: 'Invalid email address' });
    }

    if (!firstName || firstName.trim().length === 0) {
      console.log('Missing first name');
      return res.status(400).json({ error: 'First name is required' });
    }

    if (!lastName || lastName.trim().length === 0) {
      console.log('Missing last name');
      return res.status(400).json({ error: 'Last name is required' });
    }

    console.log('Sending password reset request to Mindbody API');
    const response = await mindbodyApi.post('/client/sendpasswordresetemail', {
      UserEmail: email,
      UserFirstName: firstName,
      UserLastName: lastName
    });

    console.log('Password reset email sent successfully');

    // Clean up response data
    const cleanResponse = {
      success: true,
      message: 'Password reset email sent successfully'
    };

    res.json(cleanResponse);
  } catch (error) {
    console.error('Error sending password reset:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to send password reset email'
      });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.get('/api/classes', async (req, res) => {
  console.log('Received request for classes');
  try {
    const { startDate, endDate } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    console.log('Fetching classes from Mindbody API');
    const response = await mindbodyApi.get('/class/classes', {
      params: {
        StartDate: startDate,
        EndDate: endDate
      }
    });

    console.log('Classes fetched successfully');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching classes:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to fetch classes'
      });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

app.get('/api/appointments', async (req, res) => {
  console.log('Received request for appointments');
  try {
    const { startDate, endDate } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    console.log('Fetching appointments from Mindbody API');
    const response = await mindbodyApi.get('/appointment/appointments', {
      params: {
        StartDate: startDate,
        EndDate: endDate
      }
    });

    console.log('Appointments fetched successfully');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to fetch appointments'
      });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Session store
interface Session {
  id: string;
  accessToken: string;
  idToken: string;
  refreshToken: string | null;
  tokenType: string;
  clientInfo: any;
  expiresAt: number;
}

const sessions = new Map<string, Session>();

// OAuth configuration
const OAUTH_CONFIG = {
  clientId: process.env.MINDBODY_CLIENT_ID,
  clientSecret: process.env.MINDBODY_CLIENT_SECRET,
  tokenUrl: 'https://signin.mindbodyonline.com/connect/token',
  redirectUri: process.env.OAUTH_REDIRECT_URI || 'http://localhost:3000/oauth/callback',
};

// OAuth endpoints
app.post('/oauth/callback', async (req, res) => {
  try {
    const { code, id_token, error, error_description, state, nonce } = req.body;
    
    if (error) {
      console.error('OAuth error received:', { error, error_description });
      return res.status(400).json({ error: error_description || error });
    }

    if (!code || !id_token) {
      console.error('Missing required tokens:', { hasCode: !!code, hasIdToken: !!id_token });
      return res.status(400).json({ error: 'Missing required tokens' });
    }

    // Exchange code for tokens
    const tokenResponse = await axios.post(
      OAUTH_CONFIG.tokenUrl,
      new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: OAUTH_CONFIG.clientId || '',
        client_secret: OAUTH_CONFIG.clientSecret || '',
        code: code || '',
        redirect_uri: OAUTH_CONFIG.redirectUri,
        subscriberId: SITE_ID || '',
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

    // Create a new session
    const sessionId = uuidv4();
    const session: Session = {
      id: sessionId,
      accessToken: tokenResponse.data.access_token,
      idToken: tokenResponse.data.id_token,
      refreshToken: tokenResponse.data.refresh_token || null,
      tokenType: tokenResponse.data.token_type,
      clientInfo: null,
      expiresAt: Date.now() + (tokenResponse.data.expires_in * 1000),
    };

    try {
      // Fetch client info
      /*const clientResponse = await mindbodyApi.get('/client/clientcompleteinfo', {
        headers: {
          'Content-Type': 'application/json',
          'API-Key': API_KEY,
          'SiteId': SITE_ID,
          'consumer-identity-token': session.accessToken
        },
      });
      session.clientInfo = clientResponse.data;*/

      const clientResponse = await axios.get('https://api.mindbodyonline.com/platform/accounts/v1/me', {
        headers: {
          'API-Key': API_KEY,
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

    sessions.set(sessionId, session);

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
    res.status(500).json({ error: 'Failed to exchange authorization code' });
  }
});

app.get('/oauth/callback', (req, res) => {
  // Handle GET request by serving the frontend app
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Session management endpoints
app.get('/api/oauth/session', async (req, res) => {
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

    console.log('Session data:', {
      clientInfo: session.clientInfo,
      hasIdToken: !!session.idToken,
      expiresAt: new Date(session.expiresAt).toISOString()
    });

    res.json({
      clientInfo: {
        ...session.clientInfo,
        IdToken: session.idToken // Make sure we include the ID token in the response
      },
      sessionId,
    });
  } catch (error) {
    console.error('Session retrieval error:', error);
    res.status(500).json({ error: 'Failed to retrieve session' });
  }
});

// Add new endpoint to handle the endsession callback
app.get('/oauth/logout-callback', (req, res) => {
  console.log('Received endsession callback');
  const sessionId = req.cookies.sessionId;
  
  if (sessionId) {
    console.log('Found session ID:', sessionId);
    const session = sessions.get(sessionId);
    if (session) {
      console.log('Found active session, cleaning up');
      // Clean up our local session
      sessions.delete(sessionId);
      console.log('Removed session from storage');
      res.clearCookie('sessionId');
      console.log('Cleared session cookie');
    }
  }
  
  // Redirect to frontend
  console.log('Redirecting to frontend');
  res.redirect('http://localhost:3000');
});

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server running on port ${PORT}`);
}); 