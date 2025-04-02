# Mindbody Integration

This project provides a full-stack integration with the Mindbody API, consisting of a client-side React application and a server-side Express application.

## Project Structure

- `client/` - React client application
- `server/` - Express server application

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Install all dependencies (root, client, and server)
npm run install:all
```

### Development

```bash
# Start both client and server in development mode
npm run dev
```

### Building for Production

```bash
# Build both client and server
npm run build
```

### Running in Production

```bash
# Start both client and server in production mode
npm run start
```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

### Server Environment Variables
- `MINDBODY_API_KEY` - Mindbody API key
- `MINDBODY_SITE_ID` - Mindbody site ID
- `MINDBODY_API_URL` - Mindbody API URL
- `MINDBODY_USERNAME` - Mindbody API username
- `MINDBODY_PASSWORD` - Mindbody API password
- `MINDBODY_CLIENT_ID` - OAuth client ID
- `MINDBODY_CLIENT_SECRET` - OAuth client secret
- `OAUTH_REDIRECT_URI` - OAuth redirect URI

### Client Environment Variables
- `VITE_MINDBODY_API_KEY` - Mindbody API key
- `VITE_MINDBODY_SITE_ID` - Mindbody site ID
- `VITE_MINDBODY_API_URL` - Mindbody API URL
- `VITE_MINDBODY_CLIENT_ID` - OAuth client ID
- `VITE_OAUTH_REDIRECT_URI` - OAuth redirect URI

## Documentation

- [Client Documentation](./client/README.md)
- [Server Documentation](./server/README.md)

## API Endpoints

All server API endpoints are prefixed with `/api/v1/`.

## License

This project is licensed under the MIT License. 