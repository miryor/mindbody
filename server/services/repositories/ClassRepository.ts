import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi'; // Adjust path as needed
import { AuthorizationHeaders } from '../authService';
import { formatDateWithTimezone, parseDate } from '../../utils/dateUtils'; // Adjust path

// Define interfaces for API responses if needed (or use 'any')
// Example:
interface MindbodyClass {
    // Define expected fields based on API response
    Id: number;
    Name: string;
    StartDateTime: string;
    EndDateTime: string;
    // ... other fields
}

interface GetClassesResponse {
    PaginationResponse: any;
    Classes: MindbodyClass[];
}

export class ClassRepository {
    /**
     * Fetches classes within a specified date range.
     * @param headers Authorization headers obtained from AuthService.
     * @param startDate Start date string (e.g., 'YYYY-MM-DD').
     * @param endDate End date string (e.g., 'YYYY-MM-DD').
     * @param timezone Client's timezone identifier (e.g., 'America/New_York').
     * @param options Optional parameters for the API call.
     * @returns Promise resolving to the API response data.
     */
    async getClasses(
        headers: AuthorizationHeaders,
        startDate: string,
        endDate: string,
        timezone: string,
        options: { limit?: number; offset?: number } = {} // Add other relevant options
    ): Promise<GetClassesResponse> {

        const formattedStartDate = formatDateWithTimezone(parseDate(startDate, timezone), timezone);
        const formattedEndDate = formatDateWithTimezone(parseDate(endDate, timezone), timezone);

        console.log('ClassRepository: Fetching classes from Mindbody API', {
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            timezone,
            options
        });

        try {
            const response = await mindbodyApi.get<GetClassesResponse>('/class/classes', {
                params: {
                    StartDateTime: formattedStartDate,
                    EndDateTime: formattedEndDate,
                    CrossRegionalLookup: true,
                    HideCanceledClasses: false,
                    HideRelatedPrograms: false,
                    IncludeLocation: true,
                    IncludeSemesterId: true,
                    IncludeWaitlistAvailable: true,
                    Limit: options.limit || 100,
                    Offset: options.offset || 0,
                    ShowPublicOnly: false, // Adjust as needed
                    CrossLocationLookup: true
                },
                headers: headers
            });

            console.log('ClassRepository: Classes fetched successfully', {
                totalResults: response.data.PaginationResponse?.TotalResults
            });
            return response.data;
        } catch (error) {
            // Log detailed error using a shared utility or directly
            console.error('ClassRepository: Error fetching classes:', error);
            // Re-throw or handle specific errors
            throw error;
        }
    }

    // Add other class-related methods here (e.g., getClassDescription, addClassVisit)
}

// Export an instance or the class itself depending on usage pattern
export const classRepository = new ClassRepository(); 