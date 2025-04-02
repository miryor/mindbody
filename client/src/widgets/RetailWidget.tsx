import React, { useEffect, useState } from 'react';
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Box,
  Container
} from '@mui/material';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl?: string;
  inventoryCount: number;
}

interface RetailWidgetProps {
  showGiftCards?: boolean;
}

export const RetailWidget: React.FC<RetailWidgetProps> = ({ showGiftCards = false }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [giftCardAmount, setGiftCardAmount] = useState('');

  const fetchProducts = async () => {
    if (showGiftCards) return; // Don't fetch products for gift cards view
    
    try {
      setLoading(true);
      const response = await fetch('http://localhost:3001/api/v1/products', {
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      
      // Transform the API response to match our interface
      const transformedProducts = (data.Products || []).map((product: any) => ({
        id: product.Id,
        name: product.Name,
        description: product.Description,
        price: product.Price,
        imageUrl: product.ImageUrl,
        inventoryCount: product.InventoryCount
      }));
      
      setProducts(transformedProducts);
    } catch (err) {
      console.error('Error fetching products:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [showGiftCards]);

  const handlePurchase = (product: Product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleGiftCardPurchase = () => {
    setOpenDialog(true);
  };

  const handleConfirmPurchase = async () => {
    try {
      if (showGiftCards) {
        const response = await fetch('http://localhost:3001/api/v1/products/giftcard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            amount: parseFloat(giftCardAmount)
          })
        });

        if (!response.ok) {
          throw new Error('Failed to purchase gift card');
        }
      } else if (selectedProduct) {
        const response = await fetch('http://localhost:3001/api/v1/products/purchase', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
          body: JSON.stringify({
            productId: selectedProduct.id,
            quantity: quantity
          })
        });

        if (!response.ok) {
          throw new Error('Failed to purchase product');
        }

        // Refresh products after purchase
        await fetchProducts();
      }
      setOpenDialog(false);
    } catch (err) {
      console.error('Error purchasing:', err);
      setError(err instanceof Error ? err.message : 'Failed to purchase');
    }
  };

  if (loading && !showGiftCards) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Container maxWidth="lg">
      <Box sx={{ width: '100%' }}>
        {showGiftCards ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography variant="h5" gutterBottom>
              Purchase a Gift Card
            </Typography>
            <Typography variant="body1" paragraph>
              Give the gift of wellness to someone special
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleGiftCardPurchase}
            >
              Buy Gift Card
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <Card>
                  {product.imageUrl && (
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.imageUrl}
                      alt={product.name}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography variant="h6" color="primary">
                      ${product.price}
                    </Typography>
                    <Typography>
                      In Stock: {product.inventoryCount}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handlePurchase(product)}
                    disabled={product.inventoryCount <= 0}
                  >
                    Purchase
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle>
          {showGiftCards ? 'Purchase Gift Card' : 'Confirm Purchase'}
        </DialogTitle>
        <DialogContent>
          {showGiftCards ? (
            <TextField
              autoFocus
              margin="dense"
              label="Gift Card Amount"
              type="number"
              fullWidth
              value={giftCardAmount}
              onChange={(e) => setGiftCardAmount(e.target.value)}
            />
          ) : (
            <>
              <Typography>
                Are you sure you want to purchase {selectedProduct?.name}?
              </Typography>
              <Box mt={2}>
                <TextField
                  type="number"
                  label="Quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  inputProps={{ min: 1, max: selectedProduct?.inventoryCount }}
                />
              </Box>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmPurchase} color="primary">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};