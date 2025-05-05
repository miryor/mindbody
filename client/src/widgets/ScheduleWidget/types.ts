// Removed erroneous import of itself
// import { ScheduleItem } from './types';

// Define types for data fetched from the API (Not needed here, used in ScheduleWidget.tsx)
// import { ClassData, AppointmentData } from '../../api/schedule';

// Define the unified type for display
export interface ScheduleItem {
    id: string; // Unique identifier (e.g., 'class-123', 'appt-456')
    type: 'class' | 'appointment';
    name: string;
    startDateTime: string; // ISO 8601 format string
    endDateTime: string; // ISO 8601 format string
    instructorName?: string;
    instructorImageUrl?: string | null;
    locationName?: string;
    locationId?: number; // Added location ID
    studioTimezone?: string; // Added timezone for the studio location
    // Add other relevant fields as needed (e.g., capacity, description)
} 