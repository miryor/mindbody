import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import cookieParser from 'cookie-parser';
import { RequestHandler } from 'express';
import path from 'path';
import fetch, { HeadersInit } from 'node-fetch';
import { createHash } from 'crypto';
import geoip from 'geoip-lite';
import { formatDateWithTimezone, parseDate } from './utils/dateUtils';
import { initializeMindbody, mindbodyApi, renewToken } from './services/mindbodyApi';
import { initializeOAuth, default as oauthRouter } from './routes/oauth';
import { sessions } from './services/sessionStore';

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

// Create a base router with the /api/v1 prefix
const apiRouter = express.Router();

// Initialize Mindbody API with configuration
initializeMindbody({
  apiKey: process.env.MINDBODY_API_KEY || '',
  siteId: process.env.MINDBODY_SITE_ID || '',
  apiUrl: process.env.MINDBODY_API_URL || '',
  username: process.env.MINDBODY_USERNAME || '',
  password: process.env.MINDBODY_PASSWORD || ''
});

// Initialize OAuth with configuration
initializeOAuth({
  clientId: process.env.MINDBODY_CLIENT_ID || '',
  clientSecret: process.env.MINDBODY_CLIENT_SECRET || '',
  tokenUrl: 'https://signin.mindbodyonline.com/connect/token',
  redirectUri: process.env.OAUTH_REDIRECT_URI || '',
  siteId: process.env.MINDBODY_SITE_ID || '',
  apiKey: process.env.MINDBODY_API_KEY || ''
});

// Store session types in memory
let sessionTypes = {
  types: [] as any[],
  lastFetched: null as number | null,
};

// Store locations in memory
let locations = {
  data: [] as any[],
  lastFetched: null as number | null,
};

// Separate async function to fetch session types
async function fetchSessionTypes() {
  try {
    console.log('Fetching session types...');
    const response = await mindbodyApi.get('/site/sessiontypes');
    sessionTypes.types = response.data.SessionTypes || [];
    sessionTypes.lastFetched = Date.now();
    console.log('Session types fetched successfully:', {
      count: sessionTypes.types.length,
      types: sessionTypes.types.map((type: any) => ({
        id: type.Id,
        name: type.Name,
        description: type.Description
      }))
    });
  } catch (error) {
    console.error('Error fetching session types:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
  }
}

// Function to fetch locations
async function fetchLocations(): Promise<void> {
  try {
    console.log('Fetching locations...');
    const response = await mindbodyApi.get('/site/locations');
    locations.data = response.data.Locations || [];
    locations.lastFetched = Date.now();

    // Find first location with valid coordinates
    const locationWithCoords = locations.data.find(loc => 
      loc.Latitude !== undefined && 
      loc.Longitude !== undefined && 
      loc.Latitude !== null && 
      loc.Longitude !== null
    );

    if (locationWithCoords) {
      const geo = geoip.lookup(locationWithCoords.Latitude + ',' + locationWithCoords.Longitude);
      console.log('Location timezone lookup:', {
        location: locationWithCoords.Name,
        latitude: locationWithCoords.Latitude,
        longitude: locationWithCoords.Longitude,
        timezone: geo?.timezone || 'UTC'
      });
    }

    console.log(`Fetched ${locations.data.length} locations:`, locations.data.map(loc => ({
      id: loc.Id,
      name: loc.Name,
      address: loc.Address,
      city: loc.City,
      state: loc.State,
      postalCode: loc.PostalCode,
      phone: loc.Phone,
      timezone: loc.Timezone,
      latitude: loc.Latitude,
      longitude: loc.Longitude
    })));
  } catch (error) {
    console.error('Error fetching locations:', error);
    if (axios.isAxiosError(error)) {
      console.error('Error details:', {
        status: error.response?.status,
        data: error.response?.data,
        headers: error.response?.headers
      });
    }
  }
}

// Initialize token when server starts
console.log('Initializing server token...');
(async () => {
  try {
    const token = await renewToken();
    console.log('Server token initialized successfully');
    await fetchSessionTypes();
    await fetchLocations();
  } catch (error) {
    console.error('Failed to initialize server token:', error);
  }
})();

// API Routes
apiRouter.post('/client/create', async (req, res) => {
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

apiRouter.post('/client/password-reset', async (req, res) => {
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

apiRouter.get('/classes', async (req, res) => {
  console.log('Received request for classes');
  try {
    const sessionId = req.cookies.sessionId;    
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const tz = session.timezone;
    const { startDate, endDate } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    // Format dates for Mindbody API
    const formattedStartDate = formatDateWithTimezone(parseDate(startDate as string, tz), tz);
    const formattedEndDate = formatDateWithTimezone(parseDate(endDate as string, tz), tz);

    console.log('Fetching classes from Mindbody API with dates:', {
      requestStartDate: startDate,
      requestEndDate: endDate,
      tz: tz,
      startDate: formattedStartDate,
      endDate: formattedEndDate
    });

    const response = await mindbodyApi.get('/class/classes', {
      params: {
        StartDateTime: formattedStartDate,
        EndDateTime: formattedEndDate,
        CrossRegionalLookup: true,
        HideCanceledClasses: false,
        HideRelatedPrograms: false,
        IncludeLocation: true,
        IncludeSemesterId: true,
        IncludeWaitlistAvailable: true,
        Limit: 100,
        Offset: 0,
        ShowPublicOnly: false,
        CrossLocationLookup: true
      }
    });

    // Log response metadata
    console.log('Classes API response metadata:', {
      statusCode: response.status,
      totalResults: response.data.TotalResults,
      paginationResponse: response.data.PaginationResponse,
      topLevelFields: Object.keys(response.data),
    });
    
    // Log detailed information about first class
    if (response.data.Classes && response.data.Classes.length > 0) {
      const firstClass = response.data.Classes[0];
      console.log('Complete first class document structure:');
      console.log(JSON.stringify(firstClass, null, 2));
      
      // Log keys at each level of nesting
      console.log('First class document fields:', Object.keys(firstClass));
      
      // Log ClassDescription fields if present
      if (firstClass.ClassDescription) {
        console.log('ClassDescription fields:', Object.keys(firstClass.ClassDescription));
      }
      
      // Log Staff fields if present
      if (firstClass.Staff) {
        console.log('Staff fields:', Object.keys(firstClass.Staff));
      }
      
      // Log Location fields if present
      if (firstClass.Location) {
        console.log('Location fields:', Object.keys(firstClass.Location));
      }
    }

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

apiRouter.get('/appointments/bookableitems', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const tz = session.timezone;
    const { startDate, endDate, sessionTypeIds } = req.query;
    
    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate are required' });
    }

    // Format dates for Mindbody API
    const formattedStartDate = formatDateWithTimezone(parseDate(startDate as string, tz), tz);
    const formattedEndDate = formatDateWithTimezone(parseDate(endDate as string, tz), tz);

    // Get all session type IDs if none provided
    const typeIds = sessionTypeIds || sessionTypes.types.map(type => type.Id);

    console.log('Fetching appointments from Mindbody API with dates:', {
      requestStartDate: startDate,
      requestEndDate: endDate,
      tz: tz,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      sessionTypeIds: typeIds
    });

    const response = await mindbodyApi.get('/appointment/bookableitems', {
      params: {
        StartDate: formattedStartDate,
        EndDate: formattedEndDate,
        SessionTypeIds: typeIds,
        StaffIds: [], // Optional: filter by staff
        LocationIds: [], // Optional: filter by locations
        Limit: 100
      }
    });

    // Log response metadata
    console.log('Appointments API response metadata:', {
      statusCode: response.status,
      totalResults: response.data.TotalResults,
      paginationResponse: response.data.PaginationResponse,
      topLevelFields: Object.keys(response.data),
    });
    
    // Log detailed information about first appointment
    if (response.data.BookableItems && response.data.BookableItems.length > 0) {
      const firstAppointment = response.data.BookableItems[0];
      console.log('Complete first appointment document structure:');
      console.log(JSON.stringify(firstAppointment, null, 2));
      
      // Log keys at each level of nesting
      console.log('First appointment document fields:', Object.keys(firstAppointment));
      
      // Log SessionType fields if present
      if (firstAppointment.SessionType) {
        console.log('SessionType fields:', Object.keys(firstAppointment.SessionType));
      }
      
      // Log Staff fields if present
      if (firstAppointment.Staff) {
        console.log('Staff fields:', Object.keys(firstAppointment.Staff));
      }
      
      // Log Location fields if present
      if (firstAppointment.Location) {
        console.log('Location fields:', Object.keys(firstAppointment.Location));
      }
    }

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

// Products endpoint
apiRouter.get('/products', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    console.log('Fetching products from Mindbody API');
    const response = await mindbodyApi.get('/sale/products', {
      params: {
        SearchText: '',
        Limit: 100,
        Offset: 0,
        IncludeInactive: false
      }
    });

    // Log response metadata
    console.log('Products API response metadata:', {
      statusCode: response.status,
      totalResults: response.data.TotalResults,
      paginationResponse: response.data.PaginationResponse,
      topLevelFields: Object.keys(response.data),
    });
    
    // Log detailed information about first product
    if (response.data.Products && response.data.Products.length > 0) {
      const firstProduct = response.data.Products[0];
      console.log('Complete first product document structure:');
      console.log(JSON.stringify(firstProduct, null, 2));
      
      console.log('First product document fields:', Object.keys(firstProduct));
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
    res.status(500).json({ error: 'Failed to fetch products' });
  }
});

// Purchase endpoint
apiRouter.post('/products/purchase', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const { productId, quantity } = req.body;
    if (!productId || !quantity) {
      return res.status(400).json({ error: 'productId and quantity are required' });
    }

    console.log('Processing purchase:', { productId, quantity });
    const response = await mindbodyApi.post('/sale/checkout', {
      ProductId: productId,
      Quantity: quantity,
      ClientId: session.clientInfo.Id
    });

    console.log('Purchase processed successfully:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error processing purchase:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
    res.status(500).json({ error: 'Failed to process purchase' });
  }
});

// Gift card purchase endpoint
apiRouter.post('/products/giftcard', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const { amount } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    console.log('Processing gift card purchase:', { amount });
    const response = await mindbodyApi.post('/sale/checkout', {
      GiftCardAmount: amount,
      ClientId: session.clientInfo.Id
    });

    console.log('Gift card purchase processed successfully:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error processing gift card purchase:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
    res.status(500).json({ error: 'Failed to process gift card purchase' });
  }
});

// Add the packages endpoint under apiRouter
apiRouter.get('/packages', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    // Get query parameters with defaults
    const { 
      limit = '100', 
      offset = '0', 
      sellOnline = 'true',
      locationId 
    } = req.query;

    console.log('Fetching packages from Mindbody API');
    const response = await mindbodyApi.get('/sale/packages', {
      params: {
        Limit: parseInt(limit as string),
        Offset: parseInt(offset as string),
        SellOnline: sellOnline === 'true',
        LocationId: locationId || null
      }
    });

    // Log response metadata
    console.log('Packages API response metadata:', {
      statusCode: response.status,
      paginationResponse: response.data.PaginationResponse,
      topLevelFields: Object.keys(response.data),
    });
    
    // Log detailed information about first package
    if (response.data.Packages && response.data.Packages.length > 0) {
      const firstPackage = response.data.Packages[0];
      console.log('Complete first package document structure:');
      console.log(JSON.stringify(firstPackage, null, 2));
      
      console.log('First package document fields:', Object.keys(firstPackage));
      
      // Log Services fields if present
      if (firstPackage.Services && firstPackage.Services.length > 0) {
        console.log('Package Services fields:', Object.keys(firstPackage.Services[0]));
      }
      
      // Log Products fields if present
      if (firstPackage.Products && firstPackage.Products.length > 0) {
        console.log('Package Products fields:', Object.keys(firstPackage.Products[0]));
      }
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching packages:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to fetch packages'
      });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

// Package purchase endpoint
apiRouter.post('/packages/purchase', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const { packageId } = req.body;
    if (!packageId) {
      return res.status(400).json({ error: 'packageId is required' });
    }

    console.log('Processing package purchase:', { packageId });
    const response = await mindbodyApi.post('/sale/checkout', {
      PackageId: packageId,
      ClientId: session.clientInfo.Id
    });

    console.log('Package purchase processed successfully:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error processing package purchase:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
    res.status(500).json({ error: 'Failed to process package purchase' });
  }
});

// List services for pricing updates
apiRouter.get('/admin/services', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const { limit = '100', offset = '0', searchText = '' } = req.query;

    console.log('Fetching services from Mindbody API');
    const response = await mindbodyApi.get('/sale/services', {
      params: {
        Limit: parseInt(limit as string),
        Offset: parseInt(offset as string),
        SearchText: searchText
      }
    });

    // Log response metadata
    console.log('Services API response metadata:', {
      statusCode: response.status,
      totalResults: response.data.Services?.length || 0,
      paginationResponse: response.data.PaginationResponse,
      topLevelFields: Object.keys(response.data),
    });
    
    // Log detailed information about first service
    if (response.data.Services && response.data.Services.length > 0) {
      const firstService = response.data.Services[0];
      console.log('Complete first service document structure:');
      console.log(JSON.stringify(firstService, null, 2));
      
      console.log('First service document fields:', Object.keys(firstService));
    }

    res.json(response.data);
  } catch (error) {
    console.error('Error fetching services:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

// Update service pricing
apiRouter.put('/admin/services/:id', async (req, res) => {
  try {
    const sessionId = req.cookies.sessionId;
    if (!sessionId) {
      return res.status(401).json({ error: 'No active session' });
    }
    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(401).json({ error: 'Invalid session' });
    }

    const { id } = req.params;
    const { price } = req.body;

    if (!id) {
      return res.status(400).json({ error: 'Service ID is required' });
    }
    if (price === undefined || price === null) {
      return res.status(400).json({ error: 'Price is required' });
    }

    console.log(`Updating service ${id} with price ${price}`);
    
    // Format the API request according to documentation
    const response = await mindbodyApi.put('/sale/services', {
      Services: [
        {
          Id: parseInt(id),
          Price: parseFloat(price)
        }
      ]
    });

    console.log('Service price updated successfully:', response.data);
    res.json(response.data);
  } catch (error) {
    console.error('Error updating service price:', error);
    if (axios.isAxiosError(error)) {
      console.error('Mindbody API error:', {
        status: error.response?.status,
        message: error.response?.data?.Message,
        data: error.response?.data
      });
    }
    res.status(500).json({ error: 'Failed to update service price' });
  }
});

// Mount OAuth routes under the base router
apiRouter.use('/oauth', oauthRouter);

// Mount the base router under /api/v1
app.use('/api/v1', apiRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server running on port ${PORT}`);
}); 