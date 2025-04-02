# Mindbody Client

This is the client-side application for the Mindbody integration. It's built with React, TypeScript, and Vite.

## Project Structure

- `src/` - Source code
  - `components/` - React components
  - `config/` - Configuration files
  - `services/` - Service modules for API calls
  - `widgets/` - Widget components
  - `App.tsx` - Main application component
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

### Preview Production Build

```bash
# Preview production build
npm run preview
```

## API Integration

The client communicates with the server API at `http://localhost:3001/api/v1/`. The server acts as a proxy for the Mindbody API.

## Environment Variables

The following environment variables are used:

- `VITE_MINDBODY_SITE_ID` - Mindbody site ID
- `VITE_MINDBODY_API_URL` - Mindbody API URL
- `VITE_MINDBODY_API_AUTHORIZE_URL` - Mindbody Authorize URL
- `VITE_MINDBODY_API_TOKEN_URL` - Mindbody Token URL
- `VITE_MINDBODY_CLIENT_ID` - OAuth client ID
- `VITE_OAUTH_REDIRECT_URI` - OAuth redirect URI 
- `VITE_MINDBODY_API_ENDSESSION_URL` - Mindbody endsession URL
- `VITE_OAUTH_LOGOUT_REDIRECT_URI` - OAuth logout redirect URI