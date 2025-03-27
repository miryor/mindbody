import axios from 'axios';
import { OAUTH_CONFIG } from '../config/oauth';

const API_KEY = import.meta.env.VITE_MINDBODY_API_KEY;
const SITE_ID = import.meta.env.VITE_MINDBODY_SITE_ID;
const API_URL = import.meta.env.VITE_MINDBODY_API_URL;
const USERNAME = import.meta.env.VITE_MINDBODY_USERNAME;
const PASSWORD = import.meta.env.VITE_MINDBODY_PASSWORD;
const CLIENT_SECRET = import.meta.env.VITE_MINDBODY_CLIENT_SECRET;

interface OAuthTokenResponse {
  access_token: string;
  refresh_token: string;
  expires_in: number;
  token_type: string;
}

interface LoginResponse {
  AccessToken: string;
  ExpiresIn: number;
  User: {
    Id: string;
    FirstName: string;
    LastName: string;
    Email: string;
  };
}

interface ClientCompleteInfo {
  Client: {
    Id: string;
    FirstName: string;
    LastName: string;
    Email: string;
    MobilePhone: string;
    HomePhone: string;
    WorkPhone: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    State: string;
    PostalCode: string;
    Country: string;
    EmergencyContactInfoName: string;
    EmergencyContactInfoPhone: string;
    EmergencyContactInfoRelationship: string;
    BirthDate: string;
    Gender: string;
    CreationDate: string;
    LastModifiedDateTime: string;
    Action: string;
    ClientCreditCard: {
      LastFour: string;
      CardType: string;
      ExpirationDate: string;
    }[];
    ClientRelationships: any[];
    CustomClientFields: {
      Name: string;
      Value: string;
    }[];
    LiabilityRelease: boolean;
    ProspectStage: {
      Id: number;
      Name: string;
    };
    UniqueId: number;
    MembershipIcon: number;
    SuspensionInfo: any;
    AccountBalance: number;
    AvailableCredits: number;
  };
}

class MindbodyApiService {
  private accessToken: string | null = null;
  private consumerIdentityToken: string | null = null;
  private userId: string | null = null;
  private tokenExpirationTime: number | null = null;
  private renewalPromise: Promise<void> | null = null;
  private clientInfo: ClientCompleteInfo['Client'] | null = null;

  private api = axios.create({
    baseURL: API_URL,
    headers: {
      'Api-Key': API_KEY,
      'SiteId': SITE_ID,
      'Content-Type': 'application/json',
    },
  });

  constructor() {
    console.log('Initializing MindbodyApiService');
    console.log('API Configuration:', {
      baseURL: API_URL,
      hasApiKey: !!API_KEY,
      hasSiteId: !!SITE_ID,
      hasUsername: !!USERNAME,
      hasPassword: !!PASSWORD
    });

    this.api.interceptors.request.use(async (config) => {
      console.log('Request interceptor called');
      // Ensure API authentication
      if (this.isTokenExpired()) {
        console.log('Token expired or missing, attempting renewal');
        try {
          await this.renewToken();
          console.log('Token renewal successful');
        } catch (error) {
          console.error('Token renewal failed:', error);
          throw error;
        }
      }
      
      if (this.accessToken) {
        config.headers['Authorization'] = `Bearer ${this.accessToken}`;
        console.log('Added authorization header');
      } else {
        console.warn('No access token available for request');
      }

      // Add consumer identity token if available
      if (this.consumerIdentityToken) {
        config.headers['ConsumerIdentityToken'] = this.consumerIdentityToken;
        console.log('Added consumer identity token');
      }

      console.log('Final request config:', {
        url: config.url,
        method: config.method,
        headers: config.headers,
        data: config.data
      });

      return config;
    }, (error) => {
      console.error('Request interceptor error:', error);
      return Promise.reject(error);
    });

    // Add response interceptor for debugging
    this.api.interceptors.response.use(
      (response) => {
        console.log('Response received:', {
          url: response.config.url,
          status: response.status,
          data: response.data
        });
        return response;
      },
      (error) => {
        console.error('Response error:', {
          url: error.config?.url,
          status: error.response?.status,
          data: error.response?.data,
          message: error.message
        });
        return Promise.reject(error);
      }
    );

    // Initialize API authentication
    console.log('Starting initial token renewal');
    this.renewToken().catch(error => {
      console.error('Initial token renewal failed:', error);
    });
  }

  private isTokenExpired(): boolean {
    if (!this.tokenExpirationTime) return true;
    return Date.now() >= this.tokenExpirationTime;
  }

  public async handleOAuthCallback(code: string): Promise<void> {
    const params = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: OAUTH_CONFIG.redirectUri,
      client_id: OAUTH_CONFIG.clientId,
      client_secret: CLIENT_SECRET,
    });

    const response = await axios.post<OAuthTokenResponse>(
      OAUTH_CONFIG.tokenUrl,
      params.toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    // Store the consumer identity token
    this.consumerIdentityToken = response.data.access_token;

    // Fetch complete client information
    await this.fetchClientCompleteInfo();
  }

  private async fetchClientCompleteInfo(): Promise<void> {
    try {
      const response = await this.api.get<ClientCompleteInfo>('/client/clientcompleteinfo');
      this.clientInfo = response.data.Client;
      this.userId = response.data.Client.Id;
    } catch (error) {
      console.error('Failed to fetch client complete info:', error);
      throw error;
    }
  }

  public getClientInfo(): ClientCompleteInfo['Client'] | null {
    return this.clientInfo;
  }

  private async renewToken(): Promise<void> {
    if (this.renewalPromise) {
      console.log('Token renewal already in progress, waiting...');
      return this.renewalPromise;
    }

    console.log('Starting token renewal process...');
    this.renewalPromise = (async () => {
      try {
        console.log('Sending token renewal request...');
        const response = await this.api.post<LoginResponse>('/client/usertoken', {
          Username: USERNAME,
          Password: PASSWORD,
        });

        console.log('Token renewal successful');
        this.accessToken = response.data.AccessToken;
        this.userId = response.data.User.Id;
        this.tokenExpirationTime = Date.now() + (response.data.ExpiresIn * 1000);
      } catch (error) {
        console.error('Token renewal failed:', error);
        throw error;
      } finally {
        this.renewalPromise = null;
      }
    })();

    return this.renewalPromise;
  }

  public getUserId(): string | null {
    return this.userId;
  }

  // Class-related endpoints
  public async getClasses(startDate: string, endDate: string) {
    const response = await this.api.get('/class/classes', {
      params: { StartDate: startDate, EndDate: endDate }
    });
    return response.data;
  }

  public async bookClass(classId: number) {
    const response = await this.api.post('/class/addclienttoclass', {
      ClassId: classId,
      ClientId: this.userId
    });
    return response.data;
  }

  // Appointment-related endpoints
  public async getAppointments(startDate: string, endDate: string) {
    const response = await this.api.get('/appointment/appointments', {
      params: { StartDate: startDate, EndDate: endDate }
    });
    return response.data;
  }

  public async bookAppointment(appointmentId: number) {
    const response = await this.api.post('/appointment/addappointment', {
      AppointmentId: appointmentId,
      ClientId: this.userId
    });
    return response.data;
  }

  // Retail-related endpoints
  public async getProducts() {
    const response = await this.api.get('/sale/products');
    return response.data;
  }

  public async purchaseProduct(productId: number, quantity: number) {
    const response = await this.api.post('/sale/checkout', {
      ProductId: productId,
      Quantity: quantity,
      ClientId: this.userId
    });
    return response.data;
  }

  public async purchaseGiftCard(amount: number) {
    const response = await this.api.post('/sale/giftcard', {
      Amount: amount,
      ClientId: this.userId
    });
    return response.data;
  }

  // Client management endpoints
  public async addClient(client: { 
    FirstName: string; 
    LastName: string; 
    Email: string; 
  }): Promise<string> {
    try {
      console.log('=== Starting addClient process ===');
      console.log('Step 1: Validating input data');
      
      // Input validation
      if (!client.Email || !client.Email.includes('@')) {
        console.error('Validation failed: Invalid email address');
        throw new Error('Invalid email address');
      }
      if (!client.FirstName || client.FirstName.trim().length === 0) {
        console.error('Validation failed: First name is required');
        throw new Error('First name is required');
      }
      if (!client.LastName || client.LastName.trim().length === 0) {
        console.error('Validation failed: Last name is required');
        throw new Error('Last name is required');
      }

      console.log('Step 2: Input validation passed');
      console.log('Client data:', { ...client });

      const requestData = {
        Client: {
          FirstName: client.FirstName,
          LastName: client.LastName,
          Email: client.Email,
          Username: client.Email,
          Password: "tempPass123!",
          ReferredBy: "Website",
          Test: false,
          SendAccountEmails: true,
          Action: "Added"
        }
      };

      console.log('Step 3: Preparing request with data:', JSON.stringify(requestData, null, 2));
      console.log('Current auth token:', this.accessToken ? 'Present' : 'Missing');
      console.log('Headers:', {
        'Api-Key': API_KEY ? 'Present' : 'Missing',
        'SiteId': SITE_ID,
        'Authorization': this.accessToken ? 'Bearer token present' : 'No token',
      });

      console.log('Step 4: Sending request to Mindbody API...');
      const response = await this.api.post('/client/addclient', requestData);

      console.log('Step 5: Received response from API');
      console.log('Response status:', response.status);
      console.log('Response data:', JSON.stringify(response.data, null, 2));

      // Check if the response contains the expected data
      if (!response.data || !response.data.Client || !response.data.Client.Id) {
        console.error('Step 6: Invalid response structure:', response.data);
        throw new Error('Invalid response from server');
      }

      console.log('Step 6: Successfully created client with ID:', response.data.Client.Id);
      console.log('=== End addClient process ===');

      return response.data.Client.Id;
    } catch (error) {
      console.error('=== Error in addClient process ===');
      console.error('Error details:', error);
      
      if (axios.isAxiosError(error)) {
        console.error('Request configuration:', {
          url: error.config?.url,
          method: error.config?.method,
          data: error.config?.data,
          headers: error.config?.headers
        });

        if (error.response) {
          console.error('Response details:', {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response.data,
            headers: error.response.headers
          });
          
          switch (error.response.status) {
            case 400:
              throw new Error(`Invalid client data: ${error.response.data?.Message || JSON.stringify(error.response.data) || 'Bad request'}`);
            case 401:
              throw new Error('Authentication failed. Please check your API credentials.');
            case 403:
              throw new Error('You do not have permission to create clients.');
            case 409:
              throw new Error('A client with this email already exists.');
            case 429:
              throw new Error('Too many requests. Please try again later.');
            case 500:
              throw new Error(`Mindbody server error: ${error.response.data?.Message || 'Please try again later.'}`);
            default:
              throw new Error(`Server error (${error.response.status}): ${error.response.data?.Message || error.message}`);
          }
        } else if (error.request) {
          console.error('No response received from server');
          throw new Error('No response received from Mindbody. Please check your internet connection.');
        }
      }
      
      throw new Error(`Failed to create client: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }

  public async sendPasswordResetEmail(email: string): Promise<void> {
    try {
      // Input validation
      if (!email || !email.includes('@')) {
        throw new Error('Invalid email address');
      }

      await this.api.post('/client/sendpasswordresetemail', {
        UserEmail: email,
        UserFirstName: null,
        UserLastName: null
      });
    } catch (error) {
      // Handle specific API errors
      if (axios.isAxiosError(error)) {
        if (error.response) {
          switch (error.response.status) {
            case 400:
              throw new Error('Invalid email format or missing required fields');
            case 401:
              throw new Error('Authentication failed. Please check your API credentials.');
            case 403:
              throw new Error('You do not have permission to send password reset emails.');
            case 404:
              throw new Error('No account found with this email address.');
            case 429:
              throw new Error('Too many requests. Please try again later.');
            case 500:
              throw new Error('Mindbody server error. Please try again later.');
            default:
              throw new Error(`Server error: ${error.response.data?.Message || error.message}`);
          }
        } else if (error.request) {
          throw new Error('No response received from Mindbody. Please check your internet connection.');
        }
      }
      
      // Handle other types of errors
      throw new Error(`Failed to send password reset email: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  }
}

export const mindbodyService = new MindbodyApiService();

export interface Class {
  id: number;
  name: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  location: {
    id: number;
    name: string;
  };
  instructor: {
    id: number;
    firstName: string;
    lastName: string;
  };
  maxCapacity: number;
  totalBooked: number;
  price: number;
}

export interface Appointment {
  id: number;
  name: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  staff: {
    id: number;
    firstName: string;
    lastName: string;
  };
  price: number;
}

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  inventoryCount: number;
}

export type { LoginResponse }; 