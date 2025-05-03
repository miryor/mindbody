import axios from 'axios'; // Or use fetch API

// Define base URL for the server API
// TODO: Make this configurable via environment variables
const API_BASE_URL = 'http://localhost:3001/api/v1';

// --- Interface Definitions based on API samples & Docs ---

// Represents the nested Staff object
// Exporting interfaces used by other modules
export interface Staff {
    Id: number;
    FirstName?: string;
    LastName?: string;
    Name?: string; // Often FirstName + LastName
    DisplayName?: string;
    Bio?: string | null;
    ImageUrl?: string | null;
    // Add other potentially relevant staff fields
}

// Represents the nested Location object
// Exporting interfaces used by other modules
export interface Location {
    Id: number;
    Name?: string;
    Address?: string;
    City?: string;
    StateProvCode?: string;
    PostalCode?: string;
    Latitude?: number | null;
    Longitude?: number | null;
    Phone?: string | null;
    // Add other relevant location fields
}

// Represents the nested SessionType object
// Exporting interfaces used by other modules
export interface SessionType {
    Id: number;
    Name?: string;
    Type?: string; // e.g., "All"
    DefaultTimeLength?: number | null;
    NumDeducted?: number;
    ProgramId?: number;
    // Add other relevant session type fields
}

// Represents the nested ClassDescription object
// Exporting interfaces used by other modules
export interface ClassDescription {
    Id: number;
    Name?: string;
    Description?: string | null;
    ImageURL?: string | null;
    SessionType?: SessionType | null;
    Level?: { Id?: number; Name?: string; } | null;
    Program?: { Id?: number; Name?: string; ScheduleType?: string; } | null;
    // Add other relevant fields
}

// Interface for the main Class object from /class/classes
// Exporting interfaces used by other modules
export interface ClassData {
    Id: number;
    IsAvailable?: boolean;
    StartDateTime: string; // ISO 8601 format
    EndDateTime: string; // ISO 8601 format
    LastModifiedDateTime?: string;
    ClassDescription?: ClassDescription | null;
    Staff?: Staff | null;
    Location?: Location | null;
    Resource?: { Id?: number; Name?: string; } | null;
    MaxCapacity?: number;
    WebCapacity?: number;
    TotalBooked?: number;
    TotalBookedWaitlist?: number;
    WebBooked?: number;
    IsCanceled?: boolean;
    Substitute?: boolean;
    Active?: boolean;
    IsWaitlistAvailable?: boolean;
    // Add other relevant class fields like Visits, Clients, BookingWindow etc. if needed
}

// Interface for the main BookableItem object from /appointment/bookableitems
// Exporting interfaces used by other modules
export interface AppointmentData { // Renamed from sample AppointmentData for clarity
    Id: number; // This seems to be Availability ID, not a specific Appointment ID
    SessionType?: SessionType | null;
    Location?: Location | null;
    Staff?: Staff | null;
    StartDateTime: string; // ISO 8601 format, includes offset e.g., -07:00
    EndDateTime: string; // ISO 8601 format, includes offset
    // BookableEndDateTime?: string; // Consider if needed
    // Add other fields like ResourceAvailabilities if needed
}

// --- API Response Interfaces ---
// These might not need exporting if only used internally here
interface GetClassesResponse {
    PaginationResponse: any; // Define further if pagination is used
    Classes: ClassData[];
}

interface GetBookableItemsResponse {
    PaginationResponse?: any; // Seems optional for this endpoint
    BookableItems: AppointmentData[];
}

/**
 * Fetches classes from the backend server.
 * Note: Assumes the server handles authentication (via cookies) for these public endpoints if necessary,
 * but Task 3 specifies this widget works without auth.
 * The server should ideally use staff tokens for these public data requests.
 *
 * @param startDate The start date for the range.
 * @param endDate The end date for the range.
 * @param options Optional parameters like limit, offset.
 * @returns Promise resolving to an array of classes.
 */
export const fetchClasses = async (
    startDate: Date,
    endDate: Date,
    options: { limit?: number; offset?: number } = {}
): Promise<ClassData[]> => {
    try {
        // Format dates as YYYY-MM-DD strings for the API query
        const startDateString = startDate.toISOString().split('T')[0];
        const endDateString = endDate.toISOString().split('T')[0];

        const response = await axios.get<GetClassesResponse>(`${API_BASE_URL}/classes`, {
            params: {
                startDate: startDateString,
                endDate: endDateString,
                limit: options.limit,
                offset: options.offset,
                // Add any other relevant default params for public view
            },
            withCredentials: true // Important to send session cookies if needed for server-side checks
        });
        return response.data.Classes || [];
    } catch (error) {
        console.error('API Error fetching classes:', error);
        // Handle specific error types (e.g., network error, 4xx, 5xx)
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error || 'Failed to fetch classes');
        } else {
            throw new Error('An unexpected error occurred while fetching classes');
        }
    }
};

/**
 * Fetches bookable appointment items from the backend server.
 *
 * @param startDate The start date for the range.
 * @param endDate The end date for the range.
 * @param options Optional parameters like sessionTypeIds, staffIds, limit, offset.
 * @returns Promise resolving to an array of bookable items.
 */
export const fetchBookableItems = async (
    startDate: Date,
    endDate: Date,
    options: { sessionTypeIds?: number[]; staffIds?: number[]; locationIds?: number[]; limit?: number; offset?: number } = {}
): Promise<AppointmentData[]> => {
    try {
        const startDateString = startDate.toISOString().split('T')[0];
        const endDateString = endDate.toISOString().split('T')[0];

        const response = await axios.get<GetBookableItemsResponse>(`${API_BASE_URL}/appointments/bookableitems`, {
            params: {
                startDate: startDateString,
                endDate: endDateString,
                sessionTypeIds: options.sessionTypeIds?.join(','), // Join array into comma-separated string for API
                staffIds: options.staffIds?.join(','),
                locationIds: options.locationIds?.join(','),
                limit: options.limit,
                offset: options.offset,
            },
            withCredentials: true
        });
        return response.data.BookableItems || [];
    } catch (error) {
        console.error('API Error fetching bookable items:', error);
        if (axios.isAxiosError(error)) {
            throw new Error(error.response?.data?.error || 'Failed to fetch bookable items');
        } else {
            throw new Error('An unexpected error occurred while fetching bookable items');
        }
    }
}; 