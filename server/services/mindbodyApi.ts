import axios, { AxiosInstance, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';
import { getAuthServiceInstance, AuthorizationHeaders } from './authService'; // Import AuthService instance getter

// Interface for the simplified configuration needed by this client
interface MindbodyClientConfig {
  apiKey: string;
  siteId: string;
  apiUrl: string;
}

// Keep mindbodyApi as a let variable, initialized later
let mindbodyApi: AxiosInstance;

// Function to setup interceptors (now simplified)
function setupInterceptors(instance: AxiosInstance) {
  // Request interceptor: Just for logging now, header injection happens upstream
  instance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      // Basic logging of the outgoing request WITHOUT sensitive headers
      console.log(`[${new Date().toISOString()}] MB API Request: ${config.method?.toUpperCase()} ${config.url}`);

      // Header injection is now expected to happen *before* the request reaches here,
      // typically by passing a headers object in the axios call (e.g., axios.get(url, { headers: ... }))
      // The 'injectMindbodyHeaders' middleware in index.ts prepares these headers.

      // Log headers if present (for debugging, be cautious in production)
      // if (config.headers) {
      //   console.log('MB API Request Headers:', Object.keys(config.headers));
      // }

      return config;
    },
    (error) => {
      console.error(`[${new Date().toISOString()}] MB API Request Error (before sending):`, error);
      return Promise.reject(error);
    }
  );

  // Response interceptor: Keep for logging and basic error handling
  instance.interceptors.response.use(
    response => {
      console.log(`[${new Date().toISOString()}] MB API Response: ${response.config.method?.toUpperCase()} ${response.config.url} -> Status: ${response.status}`);
      return response;
    },
    async error => {
      if (axios.isAxiosError(error)) {
        console.error(`[${new Date().toISOString()}] MB API Response Error: ${error.config?.method?.toUpperCase()} ${error.config?.url} -> Status: ${error.response?.status}`, {
            message: error.message,
            code: error.code,
            responseData: error.response?.data // Log response data on error for debugging
        });
        // Note: We no longer clear tokens here; AuthService handles its own state.
        // If a 401 occurs, the AuthService logic should handle subsequent token checks/renewals.
      } else {
        console.error(`[${new Date().toISOString()}] MB API Response Error (Non-Axios):`, error);
      }
      return Promise.reject(error); // Always reject to propagate the error
    }
  );
}

// Renamed and simplified initializer function
function initializeMindbodyApiClient(config: MindbodyClientConfig) {
    // Explicitly check if the instance has been assigned (is not null/undefined)
    if (mindbodyApi != null) { 
        console.warn('Mindbody API Client is already initialized.');
        return;
    }

    console.log('Initializing Mindbody API Client...');
    // Create axios instance for Mindbody API with timeout
    // No default Authorization header here.
    // API-Key and SiteId will be added by AuthService.getAuthorizationHeaders
    mindbodyApi = axios.create({
        baseURL: config.apiUrl,
        headers: {
        // API-Key and SiteId are added dynamically by AuthService
        // Default Content-Type for POST/PUT etc.
        'Content-Type': 'application/json',
        },
        timeout: 10000, // 10 second timeout
    });

    // Set up the simplified interceptors
    setupInterceptors(mindbodyApi);
    console.log('Mindbody API Client initialized successfully.');
}

// Export the initializer and the Axios instance
// Ensure mindbodyApi is accessed only after initialization
export { initializeMindbodyApiClient, mindbodyApi }; 