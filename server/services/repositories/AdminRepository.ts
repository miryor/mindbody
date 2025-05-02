import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';

// --- Interfaces ---
interface Service {
    Id: number;
    Name?: string;
    Price?: number;
    // ... other fields
}

interface GetServicesResponse {
    PaginationResponse: any;
    Services: Service[];
}

interface UpdateServiceRequest {
    Services: { Id: number; Price: number }[];
}

interface UpdateServiceResponse {
    // Define based on actual API response
    Services?: Service[];
}

interface GetServicesOptions {
    limit?: number;
    offset?: number;
    searchText?: string;
}

export class AdminRepository {

    /**
     * Fetches a list of services (likely for admin purposes).
     */
    async getServices(
        headers: AuthorizationHeaders,
        options: GetServicesOptions = {}
    ): Promise<GetServicesResponse> {
        console.log('AdminRepository: Fetching services...', options);

        try {
            const response = await mindbodyApi.get<GetServicesResponse>('/sale/services', {
                params: {
                    Limit: options.limit || 100,
                    Offset: options.offset || 0,
                    SearchText: options.searchText || '',
                },
                headers: headers
            });

            console.log('AdminRepository: Services fetched successfully', {
                totalResults: response.data.Services?.length // API might not return PaginationResponse here
            });
            return response.data;
        } catch (error) {
            console.error('AdminRepository: Error fetching services:', error);
            throw error;
        }
    }

    /**
     * Updates the price of a specific service.
     */
    async updateServicePrice(
        headers: AuthorizationHeaders,
        serviceId: number,
        price: number
    ): Promise<UpdateServiceResponse> {
        console.log('AdminRepository: Updating service price...', { serviceId, price });

        const requestBody: UpdateServiceRequest = {
            Services: [
                { Id: serviceId, Price: price }
            ]
        };

        try {
            // Note: API uses PUT /sale/services for updates, not /sale/services/:id
            const response = await mindbodyApi.put<UpdateServiceResponse>('/sale/services', requestBody, { headers });
            console.log('AdminRepository: Service price updated successfully', { serviceId });
            return response.data;
        } catch (error) {
            console.error('AdminRepository: Error updating service price:', error);
            throw error;
        }
    }

}

export const adminRepository = new AdminRepository(); 