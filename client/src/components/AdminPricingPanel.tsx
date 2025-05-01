import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputAdornment,
  Snackbar,
  Alert
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface Service {
  Id: number;
  Name: string;
  Price: number;
  ProgramId: number;
  ProgramName: string;
  CategoryId?: number;
  CategoryName?: string;
}

export const AdminPricingPanel: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchText, setSearchText] = useState<string>('');
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [newPrice, setNewPrice] = useState<string>('');
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async (search = '') => {
    try {
      setLoading(true);
      setError(null);
      
      const queryParams = new URLSearchParams({
        limit: '100',
        offset: '0'
      });
      
      if (search) {
        queryParams.append('searchText', search);
      }
      
      const response = await fetch(`http://localhost:3001/api/v1/admin/services?${queryParams.toString()}`, {
        credentials: 'include'
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      setServices(data.Services || []);
      
    } catch (err) {
      console.error('Error fetching services:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch services');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchServices(searchText);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleEditPrice = (service: Service) => {
    setEditingService(service);
    setNewPrice(service.Price.toFixed(2));
  };

  const handleCloseDialog = () => {
    setEditingService(null);
    setNewPrice('');
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and decimals
    if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
      setNewPrice(value);
    }
  };

  const handleUpdatePrice = async () => {
    if (!editingService) return;
    
    try {
      const price = parseFloat(newPrice);
      if (isNaN(price)) {
        throw new Error('Invalid price');
      }
      
      const response = await fetch(`http://localhost:3001/api/v1/admin/services/${editingService.Id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ price })
      });
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }
      
      const updatedService = await response.json();
      console.log('Service updated:', updatedService);
      
      // Update local data
      setServices(prev => 
        prev.map(service => 
          service.Id === editingService.Id ? { ...service, Price: price } : service
        )
      );
      
      setNotification({
        message: `Price updated for ${editingService.Name}`,
        type: 'success'
      });
      
      handleCloseDialog();
      
    } catch (err) {
      console.error('Error updating service price:', err);
      setNotification({
        message: err instanceof Error ? err.message : 'Failed to update price',
        type: 'error'
      });
    }
  };

  const handleCloseNotification = () => {
    setNotification(null);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Service Pricing Management
      </Typography>
      
      <Box display="flex" mb={3} alignItems="center">
        <TextField
          label="Search services"
          variant="outlined"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyDown={handleSearchKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          sx={{ mr: 2, flexGrow: 1 }}
        />
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      
      {loading ? (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Typography color="error">{error}</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Program</TableCell>
                <TableCell>Category</TableCell>
                <TableCell>Current Price</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {services.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    No services found
                  </TableCell>
                </TableRow>
              ) : (
                services.map((service) => (
                  <TableRow key={service.Id}>
                    <TableCell>{service.Id}</TableCell>
                    <TableCell>{service.Name}</TableCell>
                    <TableCell>{service.ProgramName || 'N/A'}</TableCell>
                    <TableCell>{service.CategoryName || 'N/A'}</TableCell>
                    <TableCell>${service.Price.toFixed(2)}</TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => handleEditPrice(service)}
                      >
                        Edit Price
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      
      {/* Edit Price Dialog */}
      <Dialog open={!!editingService} onClose={handleCloseDialog}>
        <DialogTitle>Update Price</DialogTitle>
        <DialogContent>
          {editingService && (
            <>
              <Typography variant="h6" gutterBottom>
                {editingService.Name}
              </Typography>
              <Typography variant="body1" paragraph>
                Current Price: ${editingService.Price.toFixed(2)}
              </Typography>
              <TextField
                label="New Price"
                variant="outlined"
                fullWidth
                value={newPrice}
                onChange={handlePriceChange}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
                autoFocus
                margin="dense"
              />
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Cancel
          </Button>
          <Button 
            onClick={handleUpdatePrice} 
            color="primary"
            variant="contained"
            disabled={!newPrice || newPrice === editingService?.Price.toString()}
          >
            Update Price
          </Button>
        </DialogActions>
      </Dialog>
      
      {/* Notification */}
      {notification && (
        <Snackbar 
          open={true}
          autoHideDuration={6000} 
          onClose={handleCloseNotification}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
            onClose={handleCloseNotification} 
            severity={notification.type}
            variant="filled"
          >
            {notification.message}
          </Alert>
        </Snackbar>
      )}
    </Box>
  );
}; 