// Removed erroneous import of itself
// import { ScheduleItem } from './types';

// Define types for data fetched from the API (Not needed here, used in ScheduleWidget.tsx)
// import { ClassData, AppointmentData } from '../../api/schedule';

// Define the unified type for display
export type ScheduleItem = {
    id: string; // Use unique string IDs: class-[id] or appt-[id]
    type: 'class' | 'appointment';
    name: string;
    startDateTime: string;
    endDateTime: string;
    instructorName?: string;
    instructorImageUrl?: string | null;
    locationName?: string;
    // Add any other fields needed for display across both types
}; 