import axiosInstance from './axiosInstance'; // Assuming axios is configured

// Define the structure of the location data expected from the API
export interface LocationData {
    Id: number;
    Name: string;
    Timezone: string; // e.g., 'America/New_York'
    // Add other relevant fields like address if needed
}

// Define the structure of the expected API response object
interface LocationsApiResponse {
    locations: LocationData[];
}

/**
 * Fetches location data from the backend server.
 * @returns Promise<LocationData[]>
 */
export const fetchLocations = async (): Promise<LocationData[]> => {
    try {
        // Correctly pass URL as argument and specify response type in generic
        const response = await axiosInstance.get<LocationsApiResponse>('/locations'); 
        // Access the locations array from the response data
        return response.data.locations || []; 
    } catch (error) {
        console.error("Error fetching locations:", error);
        // Re-throw or handle error as appropriate for the application
        throw new Error('Failed to fetch location data.');
    }
}; 