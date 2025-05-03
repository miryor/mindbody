import React, { useState, useEffect } from 'react';
// Import necessary components (e.g., for Calendar, List views) when created
import CalendarView from './CalendarView';
// Import the new ListView component
import ListView from './ListView';
// Import API functions when created
// import { fetchScheduleData } from '../../api/schedule';
// Import the new API functions
import { fetchClasses, fetchBookableItems } from '../../api/schedule';
// Import specific data types from API definitions
import { ClassData, AppointmentData } from '../../api/schedule';
// Import the unified display type
import { ScheduleItem } from './types';

// Define types for schedule items (adjust based on actual API data)
/*
type ScheduleItem = {
    id: string | number;
    type: 'class' | 'appointment';
    name: string;
    startDateTime: string;
    endDateTime: string;
    instructor?: string;
    location?: string;
    // ... other relevant fields
};
*/

type ViewMode = 'calendar' | 'list';

interface ScheduleWidgetProps {
    defaultView?: ViewMode;
    siteId?: string;
    // Add props for initial date range
    initialStartDate?: string; // Expects 'YYYY-MM-DD'
    initialEndDate?: string; // Expects 'YYYY-MM-DD'
    config?: any; // Accept config prop if passed by lib.tsx
}

// Corrected safeGet helper function signature and implementation
const safeGet = <T,>(obj: any, path: (string | number)[], defaultValue: T): T => {
    try {
        // Use optional chaining (?.) for safer access
        const value = path.reduce((acc, key) => acc?.[key], obj);
        return (value === undefined || value === null) ? defaultValue : value;
    } catch (e) {
        return defaultValue;
    }
};

// Helper to parse YYYY-MM-DD string, defaults to today
const parseDateProp = (dateString?: string): Date => {
    if (dateString) {
        const parts = dateString.split('-');
        if (parts.length === 3) {
            // Note: Month is 0-indexed in JS Date constructor
            const date = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
            if (!isNaN(date.getTime())) {
                return date;
            }
        }
        console.warn(`Invalid date string prop received: ${dateString}. Defaulting to today.`);
    }
    return new Date();
};

const ScheduleWidget: React.FC<ScheduleWidgetProps> = (props) => {
    // Extract props, handle potential nesting if lib.tsx passes a config object
    const { defaultView = 'list', siteId, initialStartDate, initialEndDate } = props.config || props;

    const [viewMode, setViewMode] = useState<ViewMode>(defaultView);
    const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    // Update useState to use initial date props if available
    const [currentDateRange, _setCurrentDateRange] = useState<{ startDate: Date; endDate: Date; }>(() => {
        if (initialStartDate && initialEndDate) {
            const start = parseDateProp(initialStartDate);
            const end = parseDateProp(initialEndDate);
            // Ensure start is before end if necessary, or handle invalid range
            return { startDate: start, endDate: end };
        } else {
            // Default to current week if props not provided
            const start = new Date();
            const end = new Date();
            start.setDate(start.getDate() - start.getDay());
            end.setDate(start.getDate() + 6);
            return { startDate: start, endDate: end };
        }
    });

    // Updated useEffect to call API functions
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            console.log('Fetching schedule data for:', currentDateRange, siteId);
            try {
                // Fetch both classes and appointments in parallel
                const [classes, appointments] = await Promise.all([
                    fetchClasses(currentDateRange.startDate, currentDateRange.endDate),
                    fetchBookableItems(currentDateRange.startDate, currentDateRange.endDate)
                    // TODO: Add options/filters if needed
                ]);

                // Transform fetched data using defined interfaces
                const transformedClasses: ScheduleItem[] = classes.map((c: ClassData) => ({
                    id: `class-${c.Id}`,
                    type: 'class',
                    name: safeGet(c, ['ClassDescription', 'Name'], 'Unnamed Class'),
                    startDateTime: c.StartDateTime,
                    endDateTime: c.EndDateTime,
                    instructorName: safeGet(c, ['Staff', 'Name'], undefined),
                    instructorImageUrl: safeGet(c, ['Staff', 'ImageUrl'], null),
                    locationName: safeGet(c, ['Location', 'Name'], undefined),
                }));

                const transformedAppointments: ScheduleItem[] = appointments.map((a: AppointmentData) => ({
                    id: `appt-${a.Id}`,
                    type: 'appointment',
                    name: safeGet(a, ['SessionType', 'Name'], 'Unnamed Appointment'),
                    startDateTime: a.StartDateTime,
                    endDateTime: a.EndDateTime,
                    instructorName: safeGet(a, ['Staff', 'Name'], undefined),
                    instructorImageUrl: safeGet(a, ['Staff', 'ImageUrl'], null),
                    locationName: safeGet(a, ['Location', 'Name'], undefined),
                }));

                // Combine and sort data (optional)
                const combinedData = [...transformedClasses, ...transformedAppointments];
                combinedData.sort((a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime());

                setScheduleData(combinedData);

            } catch (err) {
                console.error("Error fetching schedule data:", err);
                setError(err instanceof Error ? err.message : 'Failed to load schedule. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [currentDateRange, siteId]); // Refetch when date range or config changes

    // TODO: Implement handlers for changing date range, filters, etc.

    return (
        <div className="schedule-widget">
            <h2>Schedule</h2>
            {/* TODO: Add View Mode Switch (Calendar/List) */}
            <div className="view-controls">
                <button onClick={() => setViewMode('list')} disabled={viewMode === 'list'}>List</button>
                <button onClick={() => setViewMode('calendar')} disabled={viewMode === 'calendar'}>Calendar</button>
            </div>

            {/* TODO: Add Date Range Picker / Filters */}

            {isLoading && <p>Loading schedule...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {!isLoading && !error && (
                <div className="view-container">
                    {viewMode === 'list' ? (
                        // Use the imported ListView component
                        <ListView data={scheduleData} />
                    ) : (
                        // Use the imported CalendarView placeholder component
                        <CalendarView data={scheduleData} />
                    )}
                </div>
            )}
        </div>
    );
};

export default ScheduleWidget; 