#!/bin/bash

# Install dependencies
npm install

# Create necessary directories
mkdir -p src/widgets src/services

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
  echo "VITE_MINDBODY_API_KEY=your_api_key_here" > .env
  echo "VITE_MINDBODY_SITE_ID=your_site_id_here" >> .env
  echo "VITE_MINDBODY_API_URL=https://api.mindbodyonline.com/public/v6" >> .env
  echo "Created .env file. Please update with your Mindbody API credentials."
fi

# Make the script executable
chmod +x setup.sh

echo "Setup complete! Please update the .env file with your Mindbody API credentials." 