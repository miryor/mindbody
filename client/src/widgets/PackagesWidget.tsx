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
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Type definitions based on Mindbody API documentation
interface Service {
  Id: number;
  Name: string;
  Price: number;
}

interface Product {
  Id: number;
  Name: string;
  Price: number;
}

interface Package {
  Id: number;
  Name: string;
  SellOnline: boolean;
  Services: Service[];
  Products: Product[];
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
        console.log('Raw packages data:', data.Packages);
        
        // Set packages directly from API response
        setPackages(data.Packages || []);
      } catch (err) {
        console.error('Error fetching packages:', err);
        setError(err instanceof Error ? err.message : 'Failed to fetch packages');
      } finally {
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  const handlePurchase = async (pkg: Package) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/packages/purchase', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          packageId: pkg.Id
        })
      });

      if (!response.ok) {
        throw new Error('Failed to purchase package');
      }

      const result = await response.json();
      console.log('Purchase successful:', result);
      alert(`Package "${pkg.Name}" purchased successfully!`);
    } catch (err) {
      console.error('Error purchasing package:', err);
      alert('Failed to purchase package. Please try again.');
    }
  };

  // Within the component, calculate the package price
  const getPackagePrice = (pkg: Package): number => {
    let total = 0;
    // Add all service prices
    pkg.Services?.forEach(service => {
      total += service.Price || 0;
    });
    // Add all product prices
    pkg.Products?.forEach(product => {
      total += product.Price || 0;
    });
    return total;
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
          <Grid item xs={12} sm={6} md={4} key={pkg.Id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {pkg.Name}
                </Typography>
                <Typography variant="subtitle1" color="primary.main" gutterBottom>
                  ${getPackagePrice(pkg).toFixed(2)}
                </Typography>
                
                {/* Included Services Accordion */}
                {pkg.Services && pkg.Services.length > 0 && (
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle2">Included Services</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul style={{ paddingLeft: '1.5rem', margin: '0' }}>
                        {pkg.Services.map(service => (
                          <li key={service.Id}>
                            <Typography variant="body2">
                              {service.Name} - ${service.Price.toFixed(2)}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
                )}
                
                {/* Included Products Accordion */}
                {pkg.Products && pkg.Products.length > 0 && (
                  <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                      <Typography variant="subtitle2">Included Products</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <ul style={{ paddingLeft: '1.5rem', margin: '0' }}>
                        {pkg.Products.map(product => (
                          <li key={product.Id}>
                            <Typography variant="body2">
                              {product.Name} - ${product.Price.toFixed(2)}
                            </Typography>
                          </li>
                        ))}
                      </ul>
                    </AccordionDetails>
                  </Accordion>
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