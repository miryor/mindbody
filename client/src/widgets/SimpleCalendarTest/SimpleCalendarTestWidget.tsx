import React, { useRef, useEffect } from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format';
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';

// react-big-calendar CSS is injected globally into Shadow DOM by WidgetRoot.tsx

// Setup the localizer using imported date-fns functions
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

// Define the structure react-big-calendar expects for events
interface CalendarEvent {
    id: string;
    title: string;
    start: Date;
    end: Date;
    allDay?: boolean;
}

// Simple component props (currently none needed for this basic test)
interface SimpleCalendarTestWidgetProps {
    config?: any; // Standard prop passed by lib.tsx
}

const SimpleCalendarTestWidget: React.FC<SimpleCalendarTestWidgetProps> = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            console.log('SimpleCalendarTestWidget Container Dimensions on Mount:', {
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight,
                clientWidth: containerRef.current.clientWidth,
                clientHeight: containerRef.current.clientHeight,
            });
        }
    }, []);

    // Define a single sample event for today
    const now = new Date();
    const sampleEvents: CalendarEvent[] = [
        {
            id: 'sample-1',
            title: 'Simple Test Event',
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0), // Today at 10 AM
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0),   // Today at 12 PM
            allDay: false,
        },
    ];

    return (
        <div ref={containerRef} className="simple-calendar-test-widget" style={{ height: 600 }}> {/* Set height */} 
            <Calendar
                localizer={localizer}
                events={sampleEvents}
                startAccessor="start"
                endAccessor="end"
                defaultView="week"
                defaultDate={now}
                style={{ height: '100%' }}
            />
        </div>
    );
};

export default SimpleCalendarTestWidget; 