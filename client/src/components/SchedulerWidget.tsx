import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios';

const localizer = momentLocalizer(moment);

interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  type: 'class' | 'appointment';
  location?: string;
  instructor?: string;
  description?: string;
}

const SchedulerWidget: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      setLoading(true);
      setError(null);

      // Get current date and date 30 days from now
      const startDate = moment().format('YYYY-MM-DD');
      const endDate = moment().add(30, 'days').format('YYYY-MM-DD');

      // Fetch both classes and appointments
      const [classesResponse, appointmentsResponse] = await Promise.all([
        axios.get(`/api/classes?startDate=${startDate}&endDate=${endDate}`),
        axios.get(`/api/appointments?startDate=${startDate}&endDate=${endDate}`)
      ]);

      // Transform classes into events
      const classEvents = classesResponse.data.Classes?.map((cls: any) => ({
        id: cls.Id.toString(),
        title: cls.Name,
        start: new Date(cls.StartDateTime),
        end: new Date(cls.EndDateTime),
        type: 'class' as const,
        location: cls.Location?.Name,
        instructor: `${cls.Instructor?.FirstName} ${cls.Instructor?.LastName}`,
        description: cls.Description
      })) || [];

      // Transform appointments into events
      const appointmentEvents = appointmentsResponse.data.Appointments?.map((apt: any) => ({
        id: apt.Id.toString(),
        title: apt.Name,
        start: new Date(apt.StartDateTime),
        end: new Date(apt.EndDateTime),
        type: 'appointment' as const,
        location: apt.Location?.Name,
        instructor: `${apt.Staff?.FirstName} ${apt.Staff?.LastName}`,
        description: apt.Description
      })) || [];

      // Combine all events
      setEvents([...classEvents, ...appointmentEvents]);
    } catch (err) {
      console.error('Error fetching events:', err);
      setError('Failed to load events. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const eventStyleGetter = (event: Event) => {
    const backgroundColor = event.type === 'class' ? '#3174ad' : '#28a745';
    const style = {
      backgroundColor,
      borderRadius: '5px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
      padding: '2px 5px',
      fontSize: '0.9em',
    };
    return {
      style,
    };
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="scheduler-widget">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        eventPropGetter={eventStyleGetter}
        tooltipAccessor={(event: Event) => 
          `${event.title}\n${event.type === 'class' ? 'Instructor: ' : 'Staff: '}${event.instructor}\n${event.location ? `Location: ${event.location}` : ''}`
        }
      />
    </div>
  );
};

export default SchedulerWidget; 