import express, { Response, NextFunction } from 'express';
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
import { mindbodyApi, initializeMindbodyApiClient } from './services/mindbodyApi';
import { AuthService, initializeAuthService, getAuthServiceInstance, AuthServiceConfig, AuthorizationHeaders } from './services/authService';
import { initializeOAuthRouter, default as oauthRouter } from './routes/oauth';
import { sessions } from './services/sessionStore';
import { CacheService } from './services/cacheService';
import { mindbodyService } from './services/MindbodyService';
import { Location } from './services/repositories/SiteRepository';
import qs from 'qs';

dotenv.config();

const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// 1. Build combined config for AuthService
const authConfig: AuthServiceConfig = {
  apiKey: process.env.MINDBODY_API_KEY || '',
  siteId: process.env.MINDBODY_SITE_ID || '',
  apiUrl: process.env.MINDBODY_API_URL || '',
  staff: {
    username: process.env.MINDBODY_USERNAME || '',
    password: process.env.MINDBODY_PASSWORD || '',
  },
  oauth: {
    clientId: process.env.MINDBODY_CLIENT_ID || '',
    clientSecret: process.env.MINDBODY_CLIENT_SECRET || '',
    tokenUrl: 'https://signin.mindbodyonline.com/connect/token',
  }
};

// Validate essential config
if (!authConfig.apiKey || !authConfig.siteId || !authConfig.apiUrl || !authConfig.staff.username || !authConfig.staff.password || !authConfig.oauth.clientId || !authConfig.oauth.clientSecret) {
    console.error("FATAL: Missing essential Mindbody configuration in environment variables.");
    process.exit(1); // Exit if critical config is missing
}

// 2. Initialize AuthService (Singleton)
initializeAuthService(authConfig);
const authService = getAuthServiceInstance(); // Get instance for potential direct use if needed

// 3. Initialize Mindbody API Client (passing only necessary shared config)
// This assumes mindbodyApi.ts is refactored to accept this config
// and use AuthService via interceptors later.
initializeMindbodyApiClient({
    apiKey: authConfig.apiKey,
    siteId: authConfig.siteId,
    apiUrl: authConfig.apiUrl,
});

// 4. Initialize OAuth Router (passing necessary OAuth config)
// This assumes oauth.ts is refactored to accept this config.
initializeOAuthRouter({
  clientId: authConfig.oauth.clientId,
  clientSecret: authConfig.oauth.clientSecret,
  tokenUrl: authConfig.oauth.tokenUrl,
  redirectUri: process.env.OAUTH_REDIRECT_URI || '', // Keep separate for now
  siteId: authConfig.siteId,
  apiKey: authConfig.apiKey
});

// Middleware to inject Mindbody auth headers into res.locals
// This will be used by route handlers after mindbodyApi.ts is refactored
const injectMindbodyHeaders: RequestHandler = async (req, res: Response, next: NextFunction) => {
    try {
        // Cast req to express.Request if needed by getAuthorizationHeaders
        const headers = await authService.getAuthorizationHeaders(req as express.Request);
        // Attach headers to res.locals for downstream handlers
        res.locals.mindbodyHeaders = headers as AuthorizationHeaders;
        // console.log('Injected Mindbody Headers:', Object.keys(res.locals.mindbodyHeaders)); // Debugging
        next();
    } catch (error) {
        console.error('Error getting Mindbody authorization headers:', error);
        // Decide how to handle failure - block request? Proceed without headers?
        // For now, let's block critical API calls if auth fails
        res.status(503).json({ error: 'Service Unavailable: Could not authenticate with Mindbody API.' });
    }
};

// Create a base router with the /api/v1 prefix
const apiRouter = express.Router();

// Apply the header injection middleware TO THE API ROUTER
// IMPORTANT: This means OAuth routes will NOT have these headers injected automatically,
// which is correct as they handle their own specific token exchange calls.
// If any future routes under /api/v1 should *not* use this, they need finer-grained middleware application.
apiRouter.use(injectMindbodyHeaders);

// Store session types - removed internal state, will use CacheService
// let sessionTypes = {
//   types: [] as any[],
//   lastFetched: null as number | null,
// };

// Store locations - removed internal state, will use CacheService
// let locations = {
//   data: [] as any[],
//   lastFetched: null as number | null,
// };

// Separate async function to fetch session types, now uses cache
/*
async function fetchSessionTypes(headers: AuthorizationHeaders): Promise<any[]> { ... }
*/

// Function to fetch locations, now uses cache
/*
async function fetchLocations(headers: AuthorizationHeaders): Promise<any[]> { ... }
*/

// Fetch initial data on startup using explicitly generated staff headers
console.log('Fetching initial server data (Session Types, Locations)...');
(async () => {
  try {
    const startupHeaders = await authService.getAuthorizationHeaders();
    console.log('Making startup requests with staff token using MindbodyService.');
    const [sessionTypes, locationsData] = await Promise.all([
        mindbodyService.getSessionTypes(startupHeaders),
        mindbodyService.getLocations(startupHeaders)
    ]);

    // Process locations for geoip *after* fetching
    const locationWithCoords = locationsData.find((loc: Location) => // Add type annotation here
        loc.Latitude !== undefined &&
        loc.Longitude !== undefined &&
        loc.Latitude !== null &&
        loc.Longitude !== null
    );
    if (locationWithCoords) {
      const geo = geoip.lookup(locationWithCoords.Latitude + ',' + locationWithCoords.Longitude);
      // console.log('Location timezone lookup:', { location: locationWithCoords.Name, timezone: geo?.timezone || 'UTC' });
    }

    console.log('Initial server data fetched (via MindbodyService).');
  } catch (error) {
    console.error('Failed to fetch initial server data:', error);
  }
})();

// API Routes
apiRouter.post('/client/create', async (req, res) => {
  console.log('Received request for /client/create endpoint');
  try {
    const { firstName, lastName, email, birthDate } = req.body;

    // Input validation (keep in route handler)
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
    if (!firstName || firstName.trim().length === 0) {
      return res.status(400).json({ error: 'First name is required' });
    }
    if (!lastName || lastName.trim().length === 0) {
      return res.status(400).json({ error: 'Last name is required' });
    }
    if (!birthDate) {
      return res.status(400).json({ error: 'Birth date is required' });
    }

    // Use the MindbodyService facade
    const addClientResponse = await mindbodyService.addClient(
        res.locals.mindbodyHeaders,
        {
            FirstName: firstName,
            LastName: lastName,
            Email: email,
            // Username defaults to email in repository
            BirthDate: birthDate // Assuming YYYY-MM-DD format from client
            // Repository sets other defaults like Test, SendAccountEmails, Action
        }
    );

    console.log('Successfully added client via service.');

    // Clean up response data before sending back
    const cleanResponse = {
      Id: addClientResponse.Client?.Id,
      FirstName: addClientResponse.Client?.FirstName,
      LastName: addClientResponse.Client?.LastName,
      Email: addClientResponse.Client?.Email,
      BirthDate: addClientResponse.Client?.BirthDate
    };
    res.json(cleanResponse);

  } catch (error) {
    console.error('Error in /client/create route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to create client via Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing client creation' });
    }
  }
});

apiRouter.post('/client/password-reset', async (req, res) => {
  console.log('Received request for /client/password-reset endpoint');
  try {
    const { email, firstName, lastName } = req.body;

    // Input validation (keep in route handler)
    if (!email || !email.includes('@')) {
      return res.status(400).json({ error: 'Invalid email address' });
    }
    if (!firstName || firstName.trim().length === 0) {
      return res.status(400).json({ error: 'First name is required' });
    }
    if (!lastName || lastName.trim().length === 0) {
      return res.status(400).json({ error: 'Last name is required' });
    }

    // Use the MindbodyService facade
    await mindbodyService.sendPasswordResetEmail(
        res.locals.mindbodyHeaders,
        { UserEmail: email, UserFirstName: firstName, UserLastName: lastName }
    );

    console.log('Successfully triggered password reset email via service.');

    // Send a generic success response
    res.json({ success: true, message: 'Password reset email initiated successfully' });

  } catch (error) {
    console.error('Error in /client/password-reset route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to send password reset email via Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing password reset' });
    }
  }
});

apiRouter.get('/classes', async (req, res) => {
  console.log('Received request for /classes endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }

    const tz = session.timezone;
    const { startDate, endDate, limit, offset } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate query parameters are required' });
    }

    // Use the MindbodyService facade
    const classesData = await mindbodyService.getClasses(
        res.locals.mindbodyHeaders,
        startDate as string,
        endDate as string,
        tz,
        { limit: limit ? parseInt(limit as string) : undefined, offset: offset ? parseInt(offset as string) : undefined }
    );

    // No need for detailed logging here, repository handles it
    console.log('Successfully retrieved class data via service.');

    // Send the data obtained from the repository
    res.json(classesData);

  } catch (error) {
    // Standardized error logging and response
    console.error('Error in /classes route handler:', error);
    // Check if it's an Axios error passed up from the repository
    if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).json({
            error: error.response?.data?.Message || 'Failed to fetch classes from Mindbody'
        });
    } else {
        res.status(500).json({ error: 'Internal server error processing classes request' });
    }
  }
});

apiRouter.get('/appointments/bookableitems', async (req, res) => {
  console.log('Received request for /appointments/bookableitems endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }

    const tz = session.timezone;
    const { startDate, endDate, sessionTypeIds, staffIds, locationIds, limit, offset } = req.query;

    if (!startDate || !endDate) {
      return res.status(400).json({ error: 'startDate and endDate query parameters are required' });
    }

    // Helper function to parse comma-separated IDs from query string
    // Explicitly type the input parameter
    const parseIds = (ids?: string | string[] | qs.ParsedQs | qs.ParsedQs[]): number[] | undefined => {
        if (!ids) return undefined;
        // Handle array case from qs parsing which might contain mixed types
        const idString = Array.isArray(ids) ? ids.map(String).join(',') : String(ids);
        return idString.split(',').map(id => parseInt(id.trim())).filter(id => !isNaN(id));
    };

    // Use the MindbodyService facade
    const bookableItemsData = await mindbodyService.getBookableItems(
        res.locals.mindbodyHeaders,
        startDate as string,
        endDate as string,
        tz,
        {
            sessionTypeIds: parseIds(sessionTypeIds as string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined),
            staffIds: parseIds(staffIds as string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined),
            locationIds: parseIds(locationIds as string | string[] | qs.ParsedQs | qs.ParsedQs[] | undefined),
            limit: limit ? parseInt(limit as string) : undefined,
            offset: offset ? parseInt(offset as string) : undefined
        }
    );

    console.log('Successfully retrieved bookable items data via service.');
    res.json(bookableItemsData);

  } catch (error) {
    console.error('Error in /appointments/bookableitems route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to fetch bookable items from Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing bookable items request' });
    }
  }
});

// Products endpoint - Refactored to use MindbodyService
apiRouter.get('/products', async (req, res) => {
  console.log('Received request for /products endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }

    // Extract options (add more if needed by repository)
    const { searchText, limit, offset, includeInactive } = req.query;

    // Use the MindbodyService facade
    const productsData = await mindbodyService.getProducts(
        res.locals.mindbodyHeaders,
        {
            searchText: searchText as string | undefined,
            limit: limit ? parseInt(limit as string) : undefined,
            offset: offset ? parseInt(offset as string) : undefined,
            includeInactive: includeInactive === 'true'
        }
    );

    console.log('Successfully retrieved product data via service.');

    // Send the data obtained from the repository
    res.json(productsData);

  } catch (error) {
    console.error('Error in /products route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to fetch products from Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing products request' });
    }
  }
});

// Purchase endpoint - Refactored to use MindbodyService
apiRouter.post('/products/purchase', async (req, res) => {
  console.log('Received request for /products/purchase endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session || !session.clientInfo) { // Ensure clientInfo exists
        return res.status(401).json({ error: 'Invalid or incomplete session' });
    }

    const { productId, quantity } = req.body;
    if (!productId || quantity === undefined || quantity === null) { // Check quantity presence
      return res.status(400).json({ error: 'productId and quantity are required in the request body' });
    }

    const parsedQuantity = parseInt(quantity);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
        return res.status(400).json({ error: 'Invalid quantity specified' });
    }

    // Use the MindbodyService facade
    const purchaseData = await mindbodyService.purchaseProduct(
        res.locals.mindbodyHeaders,
        { clientId: session.clientInfo.Id, productId: productId as string, quantity: parsedQuantity }
    );

    console.log('Successfully processed product purchase via service.');
    res.json(purchaseData);

  } catch (error) {
    console.error('Error in /products/purchase route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to process product purchase via Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing product purchase' });
    }
  }
});

// Gift card purchase endpoint - Refactored to use MindbodyService
apiRouter.post('/products/giftcard', async (req, res) => {
  console.log('Received request for /products/giftcard endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session || !session.clientInfo) { // Ensure clientInfo exists
        return res.status(401).json({ error: 'Invalid or incomplete session' });
    }

    const { amount } = req.body;
    if (amount === undefined || amount === null) { // Check amount presence
      return res.status(400).json({ error: 'amount is required in the request body' });
    }

    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount <= 0) {
        return res.status(400).json({ error: 'Invalid amount specified' });
    }

    // Use the MindbodyService facade
    const giftCardData = await mindbodyService.purchaseGiftCard(
        res.locals.mindbodyHeaders,
        { clientId: session.clientInfo.Id, amount: parsedAmount }
    );

    console.log('Successfully processed gift card purchase via service.');
    res.json(giftCardData);

  } catch (error) {
    console.error('Error in /products/giftcard route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to process gift card purchase via Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing gift card purchase' });
    }
  }
});

// Packages endpoint - Refactored to use MindbodyService
apiRouter.get('/packages', async (req, res) => {
  console.log('Received request for /packages endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }

    // Extract options
    const { limit, offset, sellOnline, locationId } = req.query;

    // Use the MindbodyService facade
    const packagesData = await mindbodyService.getPackages(
        res.locals.mindbodyHeaders,
        {
            limit: limit ? parseInt(limit as string) : undefined,
            offset: offset ? parseInt(offset as string) : undefined,
            sellOnline: sellOnline !== undefined ? sellOnline === 'true' : undefined, // Only pass if specified
            locationId: locationId ? parseInt(locationId as string) : undefined
        }
    );

    console.log('Successfully retrieved package data via service.');

    // Send the data obtained from the repository
    res.json(packagesData);

  } catch (error) {
    console.error('Error in /packages route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to fetch packages from Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing packages request' });
    }
  }
});

// Package purchase endpoint - Refactored to use MindbodyService
apiRouter.post('/packages/purchase', async (req, res) => {
  console.log('Received request for /packages/purchase endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session || !session.clientInfo) { // Ensure clientInfo exists
        return res.status(401).json({ error: 'Invalid or incomplete session' });
    }

    const { packageId } = req.body;
    if (!packageId) { // Check packageId presence
      return res.status(400).json({ error: 'packageId is required in the request body' });
    }

    const parsedPackageId = parseInt(packageId);
    if (isNaN(parsedPackageId)) {
        return res.status(400).json({ error: 'Invalid packageId specified' });
    }

    // Use the MindbodyService facade
    const purchaseData = await mindbodyService.purchasePackage(
        res.locals.mindbodyHeaders,
        { clientId: session.clientInfo.Id, packageId: parsedPackageId }
    );

    console.log('Successfully processed package purchase via service.');
    res.json(purchaseData);

  } catch (error) {
    console.error('Error in /packages/purchase route handler:', error);
    if (axios.isAxiosError(error)) {
      res.status(error.response?.status || 500).json({
        error: error.response?.data?.Message || 'Failed to process package purchase via Mindbody'
      });
    } else {
      res.status(500).json({ error: 'Internal server error processing package purchase' });
    }
  }
});

// List services for pricing updates
apiRouter.get('/admin/services', async (req, res) => {
  console.log('Received request for /admin/services endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }
    // TODO: Add admin role check here if necessary

    const { limit, offset, searchText } = req.query;

    // Use MindbodyService facade
    const servicesData = await mindbodyService.getAdminServices(
        res.locals.mindbodyHeaders,
        {
            limit: limit ? parseInt(limit as string) : undefined,
            offset: offset ? parseInt(offset as string) : undefined,
            searchText: searchText as string | undefined
        }
    );

    console.log('Successfully retrieved services data via service.');

    // Logging of response structure can be kept if useful
    // Log response metadata
    console.log('Services API response metadata:', {
        statusCode: 200, // Assuming success if no error thrown
        totalResults: servicesData.Services?.length || 0,
        paginationResponse: servicesData.PaginationResponse,
        topLevelFields: Object.keys(servicesData),
    });
    // Log detailed information about first service
    if (servicesData.Services && servicesData.Services.length > 0) {
        const firstService = servicesData.Services[0];
        // console.log('Complete first service document structure:');
        // console.log(JSON.stringify(firstService, null, 2));
        // console.log('First service document fields:', Object.keys(firstService));
    }

    res.json(servicesData);

  } catch (error) {
    console.error('Error in /admin/services route handler:', error);
    if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).json({
            error: error.response?.data?.Message || 'Failed to fetch services from Mindbody'
        });
    } else {
        res.status(500).json({ error: 'Internal server error processing services request' });
    }
  }
});

// Update service pricing
apiRouter.put('/admin/services/:id', async (req, res) => {
  console.log('Received request for /admin/services/:id endpoint');
  try {
    // Session check remains
    const sessionId = req.cookies.sessionId;
    if (!sessionId) { return res.status(401).json({ error: 'No active session' }); }
    const session = sessions.get(sessionId);
    if (!session) { return res.status(401).json({ error: 'Invalid session' }); }
    // TODO: Add admin role check here if necessary

    const { id } = req.params;
    const { price } = req.body;

    // Validation
    if (!id) { return res.status(400).json({ error: 'Service ID parameter is required' }); }
    if (price === undefined || price === null) { return res.status(400).json({ error: 'Price is required in the request body' }); }

    const parsedId = parseInt(id);
    const parsedPrice = parseFloat(price);

    if (isNaN(parsedId) || isNaN(parsedPrice)) {
        return res.status(400).json({ error: 'Invalid Service ID or Price format' });
    }

    // Use MindbodyService facade
    const updateResponse = await mindbodyService.updateAdminServicePrice(
        res.locals.mindbodyHeaders,
        parsedId,
        parsedPrice
    );

    console.log('Successfully updated service price via service.');
    res.json(updateResponse);

  } catch (error) {
    console.error('Error in /admin/services/:id route handler:', error);
    if (axios.isAxiosError(error)) {
        res.status(error.response?.status || 500).json({
            error: error.response?.data?.Message || 'Failed to update service price via Mindbody'
        });
    } else {
        res.status(500).json({ error: 'Internal server error processing service update' });
    }
  }
});

// Mount OAuth routes under the base router
apiRouter.use('/oauth', oauthRouter);

// Mount the base router under /api/v1
app.use('/api/v1', apiRouter);

// Error handling middleware
app.use((err: Error, req: express.Request, res: Response, next: NextFunction) => {
  console.error('Unhandled error:', err);
  // Provide a generic error message in production
  const errorMessage = process.env.NODE_ENV === 'production' ? 'Internal server error' : err.message;
  res.status(500).json({ error: errorMessage });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`[${new Date().toISOString()}] Server running on port ${PORT}`);
}); 