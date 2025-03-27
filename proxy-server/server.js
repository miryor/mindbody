const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Enable CORS for your frontend
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true
}));

app.use(express.json());

// Proxy endpoint for Mindbody API
app.post('/api/mindbody/*', async (req, res) => {
  try {
    const path = req.params[0];
    const response = await axios({
      method: req.method,
      url: `https://api.mindbodyonline.com/public/v6/${path}`,
      data: req.body,
      headers: {
        'Api-Key': process.env.VITE_MINDBODY_API_KEY,
        'SiteId': process.env.VITE_MINDBODY_SITE_ID,
        'Content-Type': 'application/json',
        ...req.headers
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json(error.response?.data || { message: error.message });
  }
});

app.listen(port, () => {
  console.log(`Proxy server running on port ${port}`);
}); 