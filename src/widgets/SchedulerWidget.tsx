import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Tabs,
  Tab,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { format } from 'date-fns';
import { mindbodyService, Class, Appointment } from '../services/mindbodyApi';

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
  const [tabValue, setTabValue] = useState(0);
  const [classes, setClasses] = useState<Class[]>([]);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedItem, setSelectedItem] = useState<Class | Appointment | null>(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const today = format(new Date(), 'yyyy-MM-dd');
      const nextWeek = format(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd');
      
      try {
        const [classesData, appointmentsData] = await Promise.all([
          mindbodyService.getClasses(today, nextWeek),
          mindbodyService.getAppointments(today, nextWeek)
        ]);
        setClasses(classesData);
        setAppointments(appointmentsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  });

  const handleTabChange = (_: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleBook = (item: Class | Appointment) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleConfirmBooking = async () => {
    if (!selectedItem) return;

    try {
      if ('instructor' in selectedItem) {
        // It's a class
        await mindbodyService.bookClass(selectedItem.id);
      } else {
        // It's an appointment
        await mindbodyService.bookAppointment(selectedItem.id);
      }
      setOpenDialog(false);
      // Refresh data
      const today = format(new Date(), 'yyyy-MM-dd');
      const nextWeek = format(new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), 'yyyy-MM-dd');
      const [classesData, appointmentsData] = await Promise.all([
        mindbodyService.getClasses(today, nextWeek),
        mindbodyService.getAppointments(today, nextWeek)
      ]);
      setClasses(classesData);
      setAppointments(appointmentsData);
    } catch (error) {
      console.error('Error booking:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab label="Classes" />
            <Tab label="Appointments" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
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
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
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
                      Staff: {apt.staff.firstName} {apt.staff.lastName}
                    </Typography>
                    <Typography>
                      Price: ${apt.price}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleBook(apt)}
                  >
                    Book Now
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>Confirm Booking</DialogTitle>
        <DialogContent>
          <Typography>
            Are you sure you want to book this {selectedItem && 'instructor' in selectedItem ? 'class' : 'appointment'}?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmBooking} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}; 