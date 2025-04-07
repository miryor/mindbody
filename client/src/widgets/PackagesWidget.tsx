import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  Box,
  CircularProgress,
  Divider
} from '@mui/material';

// Type definitions for packages
interface Package {
  id: number;
  name: string;
  description?: string;
  price: number;
  programId: number;
  programName: string;
  sellOnline: boolean;
  image?: string;
  sessions?: number;
  services?: { id: number; name: string }[];
}

const PackagesWidget: React.FC = () => {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:3001/api/v1/packages', {
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch packages: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        // Transform the API response to match our interface
        const transformedPackages = (data.Packages || []).map((pkg: any) => ({
          id: pkg.Id,
          name: pkg.Name,
          description: pkg.Description,
          price: pkg.Price,
          programId: pkg.ProgramId,
          programName: pkg.ProgramName,
          sellOnline: pkg.SellOnline,
          image: pkg.ImageUrl,
          sessions: pkg.NumberOfSessions,
          services: pkg.Services?.map((service: any) => ({
            id: service.Id,
            name: service.Name
          }))
        }));
        
        setPackages(transformedPackages);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handlePurchase = (pkg: Package) => {
    // This would be implemented to handle package purchase
    console.log('Purchase package:', pkg);
    alert(`Package "${pkg.name}" would be purchased. This feature is not implemented yet.`);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" p={4}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box p={2}>
        <Typography color="error">Error: {error}</Typography>
      </Box>
    );
  }

  if (packages.length === 0) {
    return (
      <Box p={2}>
        <Typography>No packages available at this time.</Typography>
      </Box>
    );
  }

  return (
    <Box className="packages-widget" p={2}>
      <Typography variant="h4" gutterBottom>
        Membership Packages
      </Typography>
      <Divider sx={{ mb: 3 }} />
      
      <Grid container spacing={3}>
        {packages.map((pkg) => (
          <Grid item xs={12} sm={6} md={4} key={pkg.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              {pkg.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={pkg.image}
                  alt={pkg.name}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {pkg.name}
                </Typography>
                <Typography variant="subtitle1" color="primary.main" gutterBottom>
                  ${pkg.price.toFixed(2)}
                </Typography>
                {pkg.sessions && (
                  <Typography variant="body2" color="text.secondary">
                    {pkg.sessions} sessions
                  </Typography>
                )}
                <Typography variant="body2" color="text.secondary" paragraph>
                  {pkg.programName}
                </Typography>
                {pkg.description && (
                  <Typography variant="body2" paragraph>
                    {pkg.description}
                  </Typography>
                )}
                {pkg.services && pkg.services.length > 0 && (
                  <>
                    <Typography variant="subtitle2">Included Services:</Typography>
                    <ul style={{ paddingLeft: '1.5rem', margin: '0.5rem 0' }}>
                      {pkg.services.map(service => (
                        <li key={service.id}>
                          <Typography variant="body2">{service.name}</Typography>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </CardContent>
              <Box p={2} pt={0}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => handlePurchase(pkg)}
                >
                  Purchase
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PackagesWidget; 