import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
} from '@mui/material';
import { mindbodyService, Product } from '../services/mindbodyApi';

interface RetailWidgetProps {
  showGiftCards?: boolean;
}

export const RetailWidget: React.FC<RetailWidgetProps> = ({ showGiftCards = false }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [giftCardAmount, setGiftCardAmount] = useState('');
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    if (!showGiftCards) {
      const fetchProducts = async () => {
        try {
          const productsData = await mindbodyService.getProducts();
          setProducts(productsData);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      };

      fetchProducts();
    }
  }, [showGiftCards]);

  const handleProductPurchase = (product: Product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleGiftCardPurchase = () => {
    setOpenDialog(true);
  };

  const handleConfirmPurchase = async () => {
    try {
      if (showGiftCards) {
        await mindbodyService.purchaseGiftCard(
          parseFloat(giftCardAmount)
        );
      } else if (selectedProduct) {
        await mindbodyService.purchaseProduct(
          selectedProduct.id,
          quantity
        );
      }
      setOpenDialog(false);
      // Refresh products if not showing gift cards
      if (!showGiftCards) {
        const productsData = await mindbodyService.getProducts();
        setProducts(productsData);
      }
    } catch (error) {
      console.error('Error making purchase:', error);
    }
  };

  const handleGiftCardAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGiftCardAmount(e.target.value);
  };

  const handleQuantityChange = (e: SelectChangeEvent<number>) => {
    setQuantity(Number(e.target.value));
  };

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
                      height="200"
                      image={product.imageUrl}
                      alt={product.name}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography color="textSecondary">
                      {product.description}
                    </Typography>
                    <Typography>
                      Price: ${product.price}
                    </Typography>
                    <Typography>
                      In Stock: {product.inventoryCount}
                    </Typography>
                  </CardContent>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleProductPurchase(product)}
                    disabled={product.inventoryCount === 0}
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
          {showGiftCards ? 'Purchase Gift Card' : 'Confirm Product Purchase'}
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
              onChange={handleGiftCardAmountChange}
            />
          ) : selectedProduct ? (
            <>
              <Typography variant="h6" gutterBottom>
                {selectedProduct.name}
              </Typography>
              <Typography>
                Price: ${selectedProduct.price}
              </Typography>
              <FormControl fullWidth sx={{ mt: 2 }}>
                <InputLabel>Quantity</InputLabel>
                <Select
                  value={quantity}
                  label="Quantity"
                  onChange={handleQuantityChange}
                >
                  {[...Array(selectedProduct.inventoryCount)].map((_, i) => (
                    <MenuItem key={i + 1} value={i + 1}>
                      {i + 1}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </>
          ) : null}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button onClick={handleConfirmPurchase} color="primary">
            Confirm Purchase
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}; 