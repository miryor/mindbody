# Mindbody Server

This is the server-side application for the Mindbody integration. It's built with Express, TypeScript, and Node.js.

## Project Structure

- `routes/` - Express routes
- `services/` - Service modules
- `types/` - TypeScript type definitions
- `utils/` - Utility functions
- `index.ts` - Entry point

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

### Building for Production

```bash
# Build for production
npm run build
```

### Running in Production

```bash
# Run in production
npm run start
```

## API Endpoints

The server provides the following API endpoints:

- `GET /api/v1/classes` - Get classes
- `GET /api/v1/appointments/bookableitems` - Get bookable appointments
- `POST /api/v1/client/create` - Create a new client
- `POST /api/v1/client/password-reset` - Send password reset email
- `GET /api/v1/oauth/session` - Get OAuth session information
- `POST /api/v1/oauth/callback` - OAuth callback endpoint
- `GET /api/v1/oauth/logout-callback` - OAuth logout callback endpoint

## Environment Variables

The following environment variables are used:

- `MINDBODY_API_KEY` - Mindbody API key
- `MINDBODY_SITE_ID` - Mindbody site ID
- `MINDBODY_API_URL` - Mindbody API URL
- `MINDBODY_USERNAME` - Mindbody API username
- `MINDBODY_PASSWORD` - Mindbody API password
- `MINDBODY_CLIENT_ID` - OAuth client ID
- `MINDBODY_CLIENT_SECRET` - OAuth client secret
- `OAUTH_REDIRECT_URI` - OAuth redirect URI 