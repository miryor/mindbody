import React from 'react';
import { Calendar, dateFnsLocalizer, EventProps } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
import { fromZonedTime } from 'date-fns-tz';
import { ScheduleItem } from './types';

// Remove direct CSS import, as styles are injected by ShadowDomContainer
// import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer by providing the required date-fns functions
const locales = {
  'en-US': enUS,
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarViewProps {
    data: ScheduleItem[];
    userTimezone: string | null; // Keep user timezone prop for potential future use
    selectedDate: Date; // Add selectedDate prop
    // Add other props for event handlers (onSelectEvent, onNavigate, etc.) if needed
}

// Define the structure react-big-calendar expects for events
interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
    resource?: ScheduleItem; // Keep original data attached
}

// Optional: Custom Event component for rendering
const CustomEvent: React.FC<EventProps<CalendarEvent>> = ({ event }) => {
    return (
        <span>
            <strong>{event.title}</strong>
            {/* Display instructor or location if available in event.resource */}
            {event.resource?.instructorName && <small> ({event.resource.instructorName})</small>}
            {event.resource?.locationName && <small> @ {event.resource.locationName}</small>}
        </span>
    );
};

const CalendarView: React.FC<CalendarViewProps> = ({ data, userTimezone, selectedDate }) => {

    // Map ScheduleItem data to the CalendarEvent format using fromZonedTime
    const events: CalendarEvent[] = data.reduce((acc: CalendarEvent[], item) => {
        if (!item.studioTimezone) {
            console.warn(`Event ${item.id} (${item.name}) missing studioTimezone. Cannot display accurately.`);
            return acc; // Skip events without a timezone
        }
        try {
            // Convert studio local time string + studio timezone ID -> correct UTC Date object
            const startUTC = fromZonedTime(item.startDateTime, item.studioTimezone);
            const endUTC = fromZonedTime(item.endDateTime, item.studioTimezone);
            
            acc.push({
                id: item.id,
                title: item.name,
                start: startUTC, 
                end: endUTC,
                allDay: false, 
                resource: item, 
            });
        } catch (error) {
            console.error(`Error converting time using fromZonedTime for event ${item.id} (${item.name}) with timezone ${item.studioTimezone}:`, error);
        }
        return acc;
    }, []);

    console.log("User timezone in CalendarView:", userTimezone); // Log for debugging/future use

    return (
        <div className="calendar-view" style={{ height: 600 }}> {/* Set a height for the calendar */}
            {/* <h3>Calendar View</h3> */}
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }} // Make calendar fill the container height
                views={['week', 'day']} // Limit views to week and day as requested
                defaultView="week" // Set default view to week
                date={selectedDate} // Control the displayed date
                // Optional: Add onNavigate prop if you need to update selectedDate in parent
                // onNavigate={(newDate) => console.log('Calendar navigated to:', newDate)}
                // Optional: Use custom event component
                components={{
                    event: CustomEvent,
                }}
                // Optional: Event handlers
                // onSelectEvent={event => alert(`Selected: ${event.title}`)}
            />
        </div>
    );
};

export default CalendarView; 