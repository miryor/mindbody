import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';
import { formatDateWithTimezone, parseDate } from '../../utils/dateUtils';
import axios from 'axios';

// --- Interfaces (Define based on actual API response structure) ---
interface BookableItem {
    Id?: number; // Example field
    Name?: string;
    SessionType?: any;
    Staff?: any;
    Location?: any;
    // ... other fields
}

interface GetBookableItemsResponse {
    PaginationResponse: any;
    BookableItems: BookableItem[];
}

// --- Options Interface --- Updated: sessionTypeIds is now potentially required
interface GetBookableItemsOptions {
    sessionTypeIds: number[]; // Make this required or handle fetching upstream
    staffIds?: number[];
    locationIds?: number[];
    limit?: number;
    offset?: number;
}

export class AppointmentRepository {

    /**
     * Fetches bookable appointment items within a specified date range.
     * Assumes required sessionTypeIds are provided.
     */
    async getBookableItems(
        headers: AuthorizationHeaders,
        startDate: string,
        endDate: string,
        timezone: string,
        options: GetBookableItemsOptions
    ): Promise<GetBookableItemsResponse> {

        const formattedStartDate = formatDateWithTimezone(parseDate(startDate, timezone), timezone);
        const formattedEndDate = formatDateWithTimezone(parseDate(endDate, timezone), timezone);

        // Construct parameters object matching the curl example's nested structure
        const paramsObject: { [key: string]: any } = {
            'request.startDate': formattedStartDate,
            'request.endDate': formattedEndDate,
            'request.limit': options.limit || 100,
            'request.offset': options.offset || 0,
            // Add other boolean/single value params if needed, e.g.:
            // 'request.ignoreDefaultSessionLength': false,
            // 'request.includeResourceAvailability': false,
        };

        // Add array parameters with indexed keys
        options.sessionTypeIds.forEach((id, index) => {
            paramsObject[`request.sessionTypeIds[${index}]`] = id;
        });

        if (options.staffIds && options.staffIds.length > 0) {
            options.staffIds.forEach((id, index) => {
                paramsObject[`request.staffIds[${index}]`] = id;
            });
        }

        if (options.locationIds && options.locationIds.length > 0) {
            options.locationIds.forEach((id, index) => {
                paramsObject[`request.locationIds[${index}]`] = id;
            });
        }

        console.log('AppointmentRepository: Fetching bookable items with indexed params:', paramsObject);
        const endpointUrl = '/appointment/bookableitems';

        try {
            // Axios should serialize this object correctly into the query string
            const response = await mindbodyApi.get<GetBookableItemsResponse>(endpointUrl, {
                params: paramsObject,
                headers: headers
            });

            console.log('AppointmentRepository: Bookable items fetched successfully', {
                totalResults: response.data.PaginationResponse?.TotalResults
            });
            return response.data;
        } catch (error) {
            console.error('AppointmentRepository: Error fetching bookable items:', error);
            // Keeping the detailed error logging for now
            if (axios.isAxiosError(error) && error.response) {
                console.error('Mindbody API Error Details:', JSON.stringify(error.response.data, null, 2));
            }
            throw error;
        }
    }

    // Add other appointment-related methods (e.g., bookAppointment)
}

export const appointmentRepository = new AppointmentRepository(); 