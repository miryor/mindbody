import { AxiosRequestConfig } from 'axios';
import { mindbodyApi } from '../mindbodyApi';
import { AuthorizationHeaders } from '../authService';
import { formatDateWithTimezone, parseDate } from '../../utils/dateUtils';

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
        // Destructure options for clarity and make sessionTypeIds required
        options: GetBookableItemsOptions
    ): Promise<GetBookableItemsResponse> {

        const formattedStartDate = formatDateWithTimezone(parseDate(startDate, timezone), timezone);
        const formattedEndDate = formatDateWithTimezone(parseDate(endDate, timezone), timezone);

        // sessionTypeIds are now passed directly in options
        console.log('AppointmentRepository: Fetching bookable items from Mindbody API', {
            startDate: formattedStartDate,
            endDate: formattedEndDate,
            timezone,
            sessionTypeIds: options.sessionTypeIds, // Use directly from options
            staffIds: options.staffIds,
            locationIds: options.locationIds,
            limit: options.limit,
            offset: options.offset
        });

        try {
            const response = await mindbodyApi.get<GetBookableItemsResponse>('/appointment/bookableitems', {
                params: {
                    StartDate: formattedStartDate,
                    EndDate: formattedEndDate,
                    SessionTypeIds: options.sessionTypeIds, // Use required IDs from options
                    StaffIds: options.staffIds || [],
                    LocationIds: options.locationIds || [],
                    Limit: options.limit || 100,
                    Offset: options.offset || 0
                },
                headers: headers
            });

            console.log('AppointmentRepository: Bookable items fetched successfully', {
                totalResults: response.data.PaginationResponse?.TotalResults
            });
            return response.data;
        } catch (error) {
            console.error('AppointmentRepository: Error fetching bookable items:', error);
            throw error;
        }
    }

    // Add other appointment-related methods (e.g., bookAppointment)
}

export const appointmentRepository = new AppointmentRepository(); 