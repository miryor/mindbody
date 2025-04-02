import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tabs,
  Tab,
  Box
} from '@mui/material';
import { format } from 'date-fns';

interface Class {
  id: number;
  name: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  location: {
    id: number;
    name: string;
  };
  instructor: {
    id: number;
    firstName: string;
    lastName: string;
  };
  maxCapacity: number;
  totalBooked: number;
  waitlistAvailable: boolean;
  isAvailable: boolean;
  isCanceled: boolean;
  price: number;
}

interface Availability {
  id: number;
  name: string;
  description: string;
  startDateTime: string;
  endDateTime: string;
  location: {
    id: number;
    name: string;
  };
  staff: {
    id: number;
    firstName: string;
    lastName: string;
  };
  price: number;
  isAvailable: boolean;
  sessionType: {
    id: number;
    name: string;
    description: string;
  };
  maxCapacity: number;
  totalBooked: number;
  waitlistAvailable: boolean;
  isCanceled: boolean;
  bookingWindow: {
    startDateTime: string;
    endDateTime: string;
  };
  bookingStatus: string;
  paymentAmount: number;
  paymentStatus: string;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scheduler-tabpanel-${index}`}
      aria-labelledby={`scheduler-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export const SchedulerWidget: React.FC = () => {
  const [classes, setClasses] = useState<Class[]>([]);
  const [appointments, setAppointments] = useState<Availability[]>([]);
  const [tabValue, setTabValue] = useState(0);
  const [selectedItem, setSelectedItem] = useState<Class | Availability | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Set default date to today
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today.toISOString().split('T')[0]);

  // Calculate max date (7 days from today)
  const maxDate = new Date(today);
  maxDate.setDate(today.getDate() + 7);
  const maxDateString = maxDate.toISOString().split('T')[0];

  const fetchClasses = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/api/v1/classes?startDate=${selectedDate}&endDate=${selectedDate}`, {
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch classes');
      }
      const data = await response.json();
      
      // Transform the API response to match our interface
      const transformedClasses = (data.Classes || []).map((cls: any) => ({
        id: cls.Id,
        name: cls.Name,
        description: cls.Description,
        startDateTime: cls.StartDateTime,
        endDateTime: cls.EndDateTime,
        location: {
          id: cls.Location.Id,
          name: cls.Location.Name
        },
        instructor: {
          id: cls.Staff.Id,
          firstName: cls.Staff.Name.split(' ')[0],
          lastName: cls.Staff.Name.split(' ')[1] || ''
        },
        maxCapacity: cls.MaxCapacity,
        totalBooked: cls.TotalBooked,
        waitlistAvailable: cls.WaitlistAvailable,
        isAvailable: cls.IsAvailable,
        isCanceled: cls.IsCanceled,
        price: 0 // Add default price or get from API if available
      }));
      
      setClasses(transformedClasses);
    } catch (err) {
      console.error('Error fetching classes:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch classes');
    } finally {
      setLoading(false);
    }
  };

  const fetchAppointments = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http://localhost:3001/api/v1/appointments/bookableitems?startDate=${selectedDate}&endDate=${selectedDate}`, {
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch appointments');
      }
      const data = await response.json();
      
      // Transform the API response to match our interface
      const transformedAppointments = (data.Availabilities || []).map((apt: any) => ({
        id: apt.Id,
        name: apt.Name || 'Appointment',
        description: apt.Description || '',
        startDateTime: apt.StartDateTime,
        endDateTime: apt.EndDateTime,
        location: {
          id: apt.Location?.Id || 0,
          name: apt.Location?.Name || 'No location specified'
        },
        staff: {
          id: apt.Staff?.Id || 0,
          firstName: apt.Staff?.Name?.split(' ')[0] || '',
          lastName: apt.Staff?.Name?.split(' ')[1] || ''
        },
        price: apt.PaymentAmount || 0,
        isAvailable: apt.IsAvailable || false,
        sessionType: {
          id: apt.SessionType?.Id || 0,
          name: apt.SessionType?.Name || 'Unknown Type',
          description: apt.SessionType?.Description || ''
        },
        maxCapacity: apt.MaxCapacity || 0,
        totalBooked: apt.TotalBooked || 0,
        waitlistAvailable: apt.WaitlistAvailable || false,
        isCanceled: apt.IsCanceled || false,
        bookingWindow: {
          startDateTime: apt.BookingWindow?.StartDateTime || '',
          endDateTime: apt.BookingWindow?.EndDateTime || ''
        },
        bookingStatus: apt.BookingStatus || '',
        paymentAmount: apt.PaymentAmount || 0,
        paymentStatus: apt.PaymentStatus || ''
      }));
      
      setAppointments(transformedAppointments);
    } catch (err) {
      console.error('Error fetching appointments:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch appointments');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tabValue === 0) {
      fetchClasses();
    } else {
      fetchAppointments();
    }
  }, [selectedDate, tabValue]);

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleBook = (item: Class | Availability) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  return (
    <div className="scheduler-widget">
      <div className="date-filters">
        <div className="date-field">
          <label htmlFor="selectedDate">Select Date:</label>
          <input
            type="date"
            id="selectedDate"
            value={selectedDate}
            min={today.toISOString().split('T')[0]}
            max={maxDateString}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>
      </div>

      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={tabValue} onChange={handleTabChange}>
          <Tab label="Classes" />
          <Tab label="Appointments" />
        </Tabs>
      </Box>

      <TabPanel value={tabValue} index={0}>
        {loading ? (
          <div>Loading classes...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Grid container spacing={3}>
            {classes.map((cls) => (
              <Grid item xs={12} sm={6} md={4} key={cls.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{cls.name}</Typography>
                    <Typography color="textSecondary">
                      {format(new Date(cls.startDateTime), 'PPp')}
                    </Typography>
                    <Typography>
                      Instructor: {cls.instructor.firstName} {cls.instructor.lastName}
                    </Typography>
                    <Typography>
                      Location: {cls.location.name}
                    </Typography>
                    <Typography>
                      Price: ${cls.price}
                    </Typography>
                    <Typography>
                      Spots: {cls.totalBooked}/{cls.maxCapacity}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBook(cls)}
                    disabled={cls.totalBooked >= cls.maxCapacity}
                  >
                    Book Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </TabPanel>

      <TabPanel value={tabValue} index={1}>
        {loading ? (
          <div>Loading appointments...</div>
        ) : error ? (
          <div>Error: {error}</div>
        ) : (
          <Grid container spacing={3}>
            {appointments.map((apt) => (
              <Grid item xs={12} sm={6} md={4} key={apt.id}>
                <Card>
                  <CardContent>
                    <Typography variant="h6">{apt.name}</Typography>
                    <Typography color="textSecondary">
                      {format(new Date(apt.startDateTime), 'PPp')}
                    </Typography>
                    <Typography>
                      Type: {apt.sessionType.name}
                    </Typography>
                    <Typography>
                      Staff: {apt.staff.firstName} {apt.staff.lastName}
                    </Typography>
                    <Typography>
                      Location: {apt.location.name}
                    </Typography>
                    <Typography>
                      Price: ${apt.paymentAmount}
                    </Typography>
                    <Typography>
                      Status: {apt.bookingStatus}
                    </Typography>
                    <Typography>
                      Spots: {apt.totalBooked}/{apt.maxCapacity}
                    </Typography>
                    {apt.waitlistAvailable && (
                      <Typography color="primary">
                        Waitlist Available
                      </Typography>
                    )}
                    {apt.isCanceled && (
                      <Typography color="error">
                        Canceled
                      </Typography>
                    )}
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBook(apt)}
                    disabled={!apt.isAvailable || apt.isCanceled}
                  >
                    Book Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </TabPanel>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Booking</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to book this {selectedItem && 'instructor' in selectedItem ? 'class' : 'appointment'}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={() => {
            // Handle booking confirmation
            setOpenDialog(false);
          }} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      <style>{`
        .scheduler-widget {
          padding: 2rem;
        }
        .date-filters {
          display: flex;
          gap: 2rem;
          margin-bottom: 2rem;
          align-items: center;
        }
        .date-field {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        .date-field label {
          font-weight: 500;
          color: #333;
        }
        .date-field input {
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
      `}</style>
    </div>
  );
}; 