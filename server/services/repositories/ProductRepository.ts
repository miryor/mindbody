import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';
import { CacheService } from '../cacheService';

// --- Interfaces (Define based on actual API response structure) ---
interface Product {
    // Define expected fields
    Id: string; // Or number?
    Name: string;
    Price: number;
    // ... other fields
}

interface GetProductsResponse {
    PaginationResponse: any;
    Products: Product[];
}

export interface CheckoutResponse {
    // Define based on /sale/checkout response
    ShoppingCart: any;
    // ... other fields
}

// --- Options Interfaces ---
interface GetProductsOptions {
    searchText?: string;
    limit?: number;
    offset?: number;
    includeInactive?: boolean;
    // Add other relevant options like categoryId, subCategoryId, sellLocationId
}

interface PurchaseProductOptions {
    clientId: string;
    productId: string; // Or number?
    quantity: number;
    // Add other potential checkout options (e.g., payment info? test flag?)
}

interface PurchaseGiftCardOptions {
    clientId: string;
    amount: number;
    // Add other potential checkout options
}

export class ProductRepository {
    private readonly PRODUCTS_CACHE_KEY = 'sale:products';
    private readonly CACHE_TTL_SECONDS = 15 * 60; // Cache products for 15 minutes

    /**
     * Fetches a list of products, utilizing cache.
     */
    async getProducts(
        headers: AuthorizationHeaders,
        options: GetProductsOptions = {}
    ): Promise<GetProductsResponse> {

        // For simplicity, we use a static cache key here.
        // If filtering options significantly change the result set often,
        // a dynamic cache key based on options might be needed (like in /packages).
        const cacheKey = this.PRODUCTS_CACHE_KEY;

        const cachedData = CacheService.get<GetProductsResponse>(cacheKey);
        if (cachedData) {
            console.log('ProductRepository: Cache HIT for products.');
            // Note: API returns full response, cache stores full response
            return cachedData;
        }

        console.log('ProductRepository: Cache MISS for products. Fetching from API...', options);

        try {
            const response = await mindbodyApi.get<GetProductsResponse>('/sale/products', {
                params: {
                    SearchText: options.searchText || '',
                    Limit: options.limit || 100,
                    Offset: options.offset || 0,
                    IncludeInactive: options.includeInactive || false,
                    // Add other params based on options
                },
                headers: headers
            });

            console.log('ProductRepository: Products fetched successfully', {
                totalResults: response.data.PaginationResponse?.TotalResults
            });

            // Cache the entire response data
            CacheService.set(cacheKey, response.data, this.CACHE_TTL_SECONDS);

            return response.data;
        } catch (error) {
            console.error('ProductRepository: Error fetching products:', error);
            throw error;
        }
    }

    /**
     * Processes a product purchase via the checkout endpoint.
     */
    async purchaseProduct(
        headers: AuthorizationHeaders,
        options: PurchaseProductOptions
    ): Promise<CheckoutResponse> {
        console.log('ProductRepository: Processing product purchase:', options);

        try {
            const response = await mindbodyApi.post<CheckoutResponse>('/sale/checkout', {
                // Map options to the API request body
                ProductId: options.productId,
                Quantity: options.quantity,
                ClientId: options.clientId,
                // Add Test: true/false based on env?
            }, { headers });

            console.log('ProductRepository: Product purchase successful.', response.data);
            // Clear product cache on successful purchase? Maybe not necessary.
            return response.data;
        } catch (error) {
            console.error('ProductRepository: Error processing product purchase:', error);
            throw error;
        }
    }

    /**
     * Processes a gift card purchase via the checkout endpoint.
     */
    async purchaseGiftCard(
        headers: AuthorizationHeaders,
        options: PurchaseGiftCardOptions
    ): Promise<CheckoutResponse> {
        console.log('ProductRepository: Processing gift card purchase:', options);

        try {
            const response = await mindbodyApi.post<CheckoutResponse>('/sale/checkout', {
                // Map options to the API request body
                GiftCardAmount: options.amount,
                ClientId: options.clientId,
                // Add Test: true/false based on env?
            }, { headers });

            console.log('ProductRepository: Gift card purchase successful.', response.data);
            return response.data;
        } catch (error) {
            console.error('ProductRepository: Error processing gift card purchase:', error);
            throw error;
        }
    }

}

export const productRepository = new ProductRepository(); 