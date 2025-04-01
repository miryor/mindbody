import axios, { AxiosInstance } from 'axios';

interface MindbodyConfig {
  apiKey: string;
  siteId: string;
  apiUrl: string;
  username: string;
  password: string;
}

interface TokenState {
  accessToken: string | null;
  expirationTime: number | null;
  renewalPromise: Promise<string> | null;
  username: string;
  password: string;
}

let mindbodyApi: AxiosInstance;
let tokenState: TokenState;

function setupInterceptors() {
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
}

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
        username: tokenState.username,
        password: tokenState.password,
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
        headers: mindbodyApi.defaults.headers,
        data: {
          username: tokenState.username,
          password: tokenState.password
        }
      });

      const response = await axios.post(
        `${mindbodyApi.defaults.baseURL}/usertoken/issue`,
        JSON.stringify({
          username: tokenState.username,
          password: tokenState.password
        }),
        {
          headers: {
            'Content-Type': 'application/json',
            'API-Key': mindbodyApi.defaults.headers['API-Key'],
            'SiteId': mindbodyApi.defaults.headers['SiteId']
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

function initializeMindbody(config: MindbodyConfig) {
  // Create axios instance for Mindbody API with timeout
  mindbodyApi = axios.create({
    baseURL: config.apiUrl,
    headers: {
      'API-Key': config.apiKey,
      'SiteId': config.siteId,
      'Content-Type': 'application/json',
    },
    timeout: 10000, // 10 second timeout
  });

  // Initialize token state
  tokenState = {
    accessToken: null,
    expirationTime: null,
    renewalPromise: null,
    username: config.username,
    password: config.password
  };

  // Set up interceptors
  setupInterceptors();
}

export { initializeMindbody, renewToken, mindbodyApi }; 