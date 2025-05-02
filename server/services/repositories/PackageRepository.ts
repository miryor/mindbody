import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';
import { CacheService } from '../cacheService';
import { CheckoutResponse } from './ProductRepository'; // Assuming CheckoutResponse is similar/reusable

// --- Interfaces (Define based on actual API response structure) ---
interface Package {
    // Define expected fields
    Id: number; // Or string?
    Name: string;
    Price?: number;
    SellOnline?: boolean;
    // ... other fields like Services, Products
}

interface GetPackagesResponse {
    PaginationResponse: any;
    Packages: Package[];
}

// --- Options Interfaces ---
interface GetPackagesOptions {
    limit?: number;
    offset?: number;
    sellOnline?: boolean;
    locationId?: number;
    // Add other relevant options
}

interface PurchasePackageOptions {
    clientId: string;
    packageId: number; // Or string?
    // Add other potential checkout options
}

export class PackageRepository {
    private readonly PACKAGES_CACHE_KEY_PREFIX = 'sale:packages';
    private readonly CACHE_TTL_SECONDS = 15 * 60; // Cache packages for 15 minutes

    /**
     * Fetches a list of packages, utilizing cache with dynamic keys.
     */
    async getPackages(
        headers: AuthorizationHeaders,
        options: GetPackagesOptions = {}
    ): Promise<GetPackagesResponse> {

        // Create a dynamic cache key based on query params that affect results
        const cacheKey = `${this.PACKAGES_CACHE_KEY_PREFIX}:limit=${options.limit || 100}:offset=${options.offset || 0}:sellOnline=${options.sellOnline ?? true}:locId=${options.locationId || 'all'}`;

        const cachedData = CacheService.get<GetPackagesResponse>(cacheKey);
        if (cachedData) {
            console.log(`PackageRepository: Cache HIT for packages: ${cacheKey}`);
            // Note: API returns full response, cache stores full response
            return cachedData;
        }

        console.log(`PackageRepository: Cache MISS for packages: ${cacheKey}. Fetching from API...`, options);

        try {
            const response = await mindbodyApi.get<GetPackagesResponse>('/sale/packages', {
                params: {
                    Limit: options.limit || 100,
                    Offset: options.offset || 0,
                    SellOnline: options.sellOnline ?? true, // Default to true if not specified
                    LocationId: options.locationId || null // Use null if undefined
                    // Add other params based on options
                },
                headers: headers
            });

            console.log('PackageRepository: Packages fetched successfully', {
                totalResults: response.data.PaginationResponse?.TotalResults,
                paramsUsed: options
            });

            // Cache the entire response data using the dynamic key
            CacheService.set(cacheKey, response.data, this.CACHE_TTL_SECONDS);

            return response.data;
        } catch (error) {
            console.error('PackageRepository: Error fetching packages:', error);
            throw error;
        }
    }

    /**
     * Processes a package purchase via the checkout endpoint.
     */
    async purchasePackage(
        headers: AuthorizationHeaders,
        options: PurchasePackageOptions
    ): Promise<CheckoutResponse> {
        console.log('PackageRepository: Processing package purchase:', options);

        try {
            // Use the same /sale/checkout endpoint as products
            const response = await mindbodyApi.post<CheckoutResponse>('/sale/checkout', {
                // Map options to the API request body
                PackageId: options.packageId,
                ClientId: options.clientId,
                // Add Test: true/false based on env?
            }, { headers });

            console.log('PackageRepository: Package purchase successful.', response.data);
            // Clear package cache on successful purchase? Maybe not necessary.
            return response.data;
        } catch (error) {
            console.error('PackageRepository: Error processing package purchase:', error);
            throw error;
        }
    }

}

export const packageRepository = new PackageRepository(); 