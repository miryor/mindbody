import React from 'react';
import { Calendar, dateFnsLocalizer, EventProps } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';
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
    // Add props for event handlers (onSelectEvent, onNavigate, etc.) if needed
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

const CalendarView: React.FC<CalendarViewProps> = ({ data }) => {

    // Map ScheduleItem data to the CalendarEvent format
    const events: CalendarEvent[] = data.map(item => ({
        id: item.id,
        title: item.name,
        start: new Date(item.startDateTime), // Convert ISO string to Date object
        end: new Date(item.endDateTime), // Convert ISO string to Date object
        allDay: false, // Assuming no all-day events for now
        resource: item, // Attach original item
    }));

    return (
        <div className="calendar-view" style={{ height: 600 }}> {/* Set a height for the calendar */}
            {/* <h3>Calendar View</h3> */}
            <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%' }} // Make calendar fill the container height
                views={['month', 'week', 'day', 'agenda']} // Specify available views
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