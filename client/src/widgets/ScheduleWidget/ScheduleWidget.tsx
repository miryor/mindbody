import React, { useState, useEffect, useMemo } from 'react';
// MUI Components
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
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
// Import location API and type
import { fetchLocations, LocationData } from '../../api/locations';
// date-fns helpers
import { startOfWeek, endOfWeek, startOfDay } from 'date-fns';

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
    initialStartDate?: string; // Expects 'YYYY-MM-DD'
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
    const { defaultView = 'list', siteId, initialStartDate } = props.config || props;

    const [viewMode, setViewMode] = useState<ViewMode>(defaultView);
    const [scheduleData, setScheduleData] = useState<ScheduleItem[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [locations, setLocations] = useState<LocationData[]>([]);
    const [locationsLoading, setLocationsLoading] = useState<boolean>(true);
    const [locationsError, setLocationsError] = useState<string | null>(null);
    const [userTimezone, setUserTimezone] = useState<string | null>(null);
    const [selectedDate, setSelectedDate] = useState<Date>(() => {
        const initial = parseDateProp(initialStartDate);
        return startOfDay(initial) >= startOfDay(new Date()) ? initial : new Date();
    });

    // --- Derive date range for API calls based on selectedDate and viewMode --- 
    const dateRangeForAPI = useMemo(() => {
        let start: Date;
        let end: Date;
        // Currently, we always fetch a week for calendar view, day for list/day view can be optimized later
        // For now, let's fetch a week regardless of view mode to simplify
        // TODO: Optimize fetching based on viewMode (e.g., only fetch day for day view)
        start = startOfWeek(selectedDate, { weekStartsOn: 0 }); // Sunday as start
        end = endOfWeek(selectedDate, { weekStartsOn: 0 });

        // If viewMode is 'list', maybe we fetch a longer range? For now, use the week.
        // if (viewMode === 'list') { ... }

        return { startDate: start, endDate: end };
    }, [selectedDate]); // Only recalculate when selectedDate changes

    // Effect to fetch locations and detect user timezone on mount
    useEffect(() => {
        const loadInitialData = async () => {
            setLocationsLoading(true);
            setLocationsError(null);
            try {
                // Detect user timezone
                try {
                    const detectedTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                    setUserTimezone(detectedTz);
                    console.log('Detected user timezone:', detectedTz);
                } catch (e) {
                    console.warn('Could not detect user timezone:', e);
                }
                
                // Fetch locations
                const fetchedLocations = await fetchLocations();
                setLocations(fetchedLocations);
                console.log('Fetched locations:', fetchedLocations);

            } catch (err) {
                console.error("Error fetching locations:", err);
                const errorMessage = err instanceof Error ? err.message : 'Failed to load location data.';
                setLocationsError(errorMessage);
                // Optionally set overall error state if locations are critical
                // setError(errorMessage);
            } finally {
                setLocationsLoading(false);
            }
        };
        loadInitialData();
    }, []); // Run only once on mount

    // Effect to fetch schedule data - uses derived dateRangeForAPI
    useEffect(() => {
        if (locationsLoading || locationsError || locations.length === 0) {
            // If locations failed to load, set schedule loading to false and show error
            if (locationsError) {
                setError(`Could not load schedule because location data failed: ${locationsError}`);
                setIsLoading(false);
            }
            // If locations are just loading, keep schedule loading true
            if (locationsLoading) {
                setIsLoading(true);
            }
            return; 
        }

        const fetchData = async () => {
            setIsLoading(true);
            setError(null);
            // Use the derived date range
            console.log('Fetching schedule data for derived range:', dateRangeForAPI, siteId);
            
            const locationTimezoneMap = new Map<number, string>();
            locations.forEach(loc => locationTimezoneMap.set(loc.Id, loc.Timezone));

            try {
                const [classes, appointments] = await Promise.all([
                    // Pass derived start/end dates
                    fetchClasses(dateRangeForAPI.startDate, dateRangeForAPI.endDate),
                    fetchBookableItems(dateRangeForAPI.startDate, dateRangeForAPI.endDate)
                ]);

                // Transform fetched data using defined interfaces
                const transformedClasses: ScheduleItem[] = classes.map((c: ClassData) => {
                    const locationId = safeGet(c, ['Location', 'Id'], undefined);
                    return {
                        id: `class-${c.Id}`,
                        type: 'class',
                        name: safeGet(c, ['ClassDescription', 'Name'], 'Unnamed Class'),
                        startDateTime: c.StartDateTime,
                        endDateTime: c.EndDateTime,
                        instructorName: safeGet(c, ['Staff', 'Name'], undefined),
                        instructorImageUrl: safeGet(c, ['Staff', 'ImageUrl'], null),
                        locationName: safeGet(c, ['Location', 'Name'], undefined),
                        locationId: locationId,
                        studioTimezone: locationId ? locationTimezoneMap.get(locationId) : undefined,
                    };
                });

                const transformedAppointments: ScheduleItem[] = appointments.map((a: AppointmentData) => {
                    const locationId = safeGet(a, ['Location', 'Id'], undefined);
                    return {
                        id: `appt-${a.Id}`,
                        type: 'appointment',
                        name: safeGet(a, ['SessionType', 'Name'], 'Unnamed Appointment'),
                        startDateTime: a.StartDateTime,
                        endDateTime: a.EndDateTime,
                        instructorName: safeGet(a, ['Staff', 'Name'], undefined),
                        instructorImageUrl: safeGet(a, ['Staff', 'ImageUrl'], null),
                        locationName: safeGet(a, ['Location', 'Name'], undefined),
                        locationId: locationId,
                        studioTimezone: locationId ? locationTimezoneMap.get(locationId) : undefined,
                    };
                });

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
    // Depend on the derived range (or its inputs: selectedDate)
    // Also depend on location loading state
    }, [dateRangeForAPI, siteId, locations, locationsLoading, locationsError]); 

    // Handler for view mode change
    const handleViewChange = (
        _event: React.MouseEvent<HTMLElement>,
        newViewMode: ViewMode | null,
    ) => {
        if (newViewMode !== null) {
            setViewMode(newViewMode);
        }
    };

    // Handler for date picker change
    const handleDateChange = (newValue: Date | null) => {
        if (newValue) {
            const today = startOfDay(new Date());
            if (startOfDay(newValue) >= today) {
                 setSelectedDate(newValue);
            } else {
                console.warn("Cannot select a past date.");
            }
        }
    };

    // Loading/error for locations (remains the same)
    if (locationsLoading) return <p>Loading location data...</p>;
    if (locationsError) return <p style={{ color: 'red' }}>Error loading locations: {locationsError}</p>; 

    // Today constant for disabling past dates in picker
    const today = new Date();

    return (
        // Wrap controls needing date context in LocalizationProvider
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <div className="schedule-widget">
                {/* Header and Controls */}            
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2, flexWrap: 'wrap' }}>
                    <Typography variant="h5" component="h2" sx={{ mr: 2 }}>Schedule</Typography>
                    
                    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', flexWrap: 'wrap' }}>
                         {/* View Mode Toggle */}            
                         <ToggleButtonGroup
                            value={viewMode}
                            exclusive
                            onChange={handleViewChange}
                            aria-label="View mode"
                            size="small"
                        >
                            <ToggleButton value="list" aria-label="List view">
                                List
                            </ToggleButton>
                            <ToggleButton value="calendar" aria-label="Calendar view">
                                Calendar
                            </ToggleButton>
                        </ToggleButtonGroup>

                        {/* Date Picker */}            
                        <DatePicker
                            label="Select Date"
                            value={selectedDate}
                            onChange={handleDateChange}
                            minDate={today} // Disable past dates
                            // Use slotProps for TextField size if needed
                            // slotProps={{ textField: { size: 'small' } }}
                         />
                    </Box>
                 </Box>

                {/* Display detected user timezone (remains the same) */}
                {userTimezone && <p style={{fontSize: '0.8em', color: 'grey', marginTop: '-8px', marginBottom: '8px'}}>Detected Timezone: {userTimezone}</p>}
                
                {/* Schedule Loading/Error state (remains the same) */}
                {isLoading && <p>Loading schedule...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}

                {/* View Container */}            
                {!isLoading && !error && (
                    <div className="view-container">
                        {viewMode === 'list' ? (
                            <ListView data={scheduleData} userTimezone={userTimezone} />
                        ) : (
                            // Pass selectedDate to CalendarView to potentially control its displayed date
                            <CalendarView data={scheduleData} userTimezone={userTimezone} selectedDate={selectedDate} /> 
                        )}
                    </div>
                )}
            </div>
        </LocalizationProvider>
    );
};

export default ScheduleWidget; 