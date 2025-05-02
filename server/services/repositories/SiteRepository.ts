import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';
import { CacheService } from '../cacheService';

// --- Interfaces (Define based on actual API response structure) ---
interface SessionType {
    Id: number;
    Name?: string;
    // ... other fields
}

// Export Location interface for use in index.ts
export interface Location {
    Id: number;
    Name?: string;
    Latitude?: number;
    Longitude?: number;
    // ... other fields
}

interface GetSessionTypesResponse {
    PaginationResponse?: any;
    SessionTypes: SessionType[];
}

interface GetLocationsResponse {
    PaginationResponse?: any;
    Locations: Location[];
}

export class SiteRepository {
    private readonly SESSION_TYPES_CACHE_KEY = 'site:sessionTypes';
    private readonly LOCATIONS_CACHE_KEY = 'site:locations';
    private readonly CACHE_TTL_SECONDS = 15 * 60; // Cache site data for 15 minutes

    /**
     * Fetches session types, utilizing cache.
     */
    async getSessionTypes(headers: AuthorizationHeaders): Promise<SessionType[]> {
        const cachedTypes = CacheService.get<SessionType[]>(this.SESSION_TYPES_CACHE_KEY);
        if (cachedTypes) {
            console.log('SiteRepository: Cache HIT for session types.');
            return cachedTypes;
        }

        console.log('SiteRepository: Cache MISS for session types. Fetching from API...');
        try {
            const response = await mindbodyApi.get<GetSessionTypesResponse>('/site/sessiontypes', { headers });
            const types = response.data.SessionTypes || [];
            CacheService.set(this.SESSION_TYPES_CACHE_KEY, types, this.CACHE_TTL_SECONDS);
            console.log('SiteRepository: Session types fetched and cached:', { count: types.length });
            return types;
        } catch (error) {
            console.error('SiteRepository: Error fetching session types:', error);
            return []; // Return empty array on error
        }
    }

    /**
     * Fetches locations, utilizing cache.
     */
    async getLocations(headers: AuthorizationHeaders): Promise<Location[]> {
        const cachedLocations = CacheService.get<Location[]>(this.LOCATIONS_CACHE_KEY);
        if (cachedLocations) {
            console.log('SiteRepository: Cache HIT for locations.');
            return cachedLocations;
        }

        console.log('SiteRepository: Cache MISS for locations. Fetching from API...');
        try {
            const response = await mindbodyApi.get<GetLocationsResponse>('/site/locations', { headers });
            const locationsData = response.data.Locations || [];
            CacheService.set(this.LOCATIONS_CACHE_KEY, locationsData, this.CACHE_TTL_SECONDS);
            console.log(`SiteRepository: Fetched and cached ${locationsData.length} locations.`);
            return locationsData;
        } catch (error) {
            console.error('SiteRepository: Error fetching locations:', error);
            return []; // Return empty array on error
        }
    }
}

export const siteRepository = new SiteRepository(); 