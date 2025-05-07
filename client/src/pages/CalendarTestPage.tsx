import React from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import { format } from 'date-fns/format'; 
import { parse } from 'date-fns/parse';
import { startOfWeek } from 'date-fns/startOfWeek';
import { getDay } from 'date-fns/getDay';
import { enUS } from 'date-fns/locale/en-US';

// Import the CSS directly into the component module
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Setup the localizer
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

const CalendarTestPage: React.FC = () => {
    console.log('[CalendarTestPage] Component function body executed.');

    const now = new Date();
    const events = [
        {
            id: 1,
            title: 'Test Event from App Build',
            start: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 10, 0, 0),
            end: new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0),
        }
    ];

    return (
        <div style={{ padding: '20px' }}>
            <h1>Calendar Test Page (Rendered via App Build)</h1>
            <div style={{ height: '650px', border: '1px solid #ccc' }}>
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    defaultDate={now}
                    defaultView="week"
                />
            </div>
        </div>
    );
};

export default CalendarTestPage; 