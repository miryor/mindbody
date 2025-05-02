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

## Architecture Overview

The Mindbody Widgets library is built as an embeddable widget system that can be easily integrated into third-party websites. It follows a modular architecture pattern that allows for isolated development, proper encapsulation, and scalability.

### Key Architectural Components

#### 1. Widget Registry System

The library uses a centralized widget registry in `src/lib.tsx` that automatically imports widgets from the `src/widgets` directory. Each widget is registered with a unique name that can be used to render it.

```typescript
// Example of widget registry
const registry: WidgetRegistry = {
  HelloWorld: widgets.HelloWorldWidget,
  Scheduler: widgets.SchedulerWidget,
  // Other widgets...
};
```

#### 2. Core Components

- **WidgetRoot**: Provides theme and CSS isolation for widgets
- **BaseWidget**: A common base component for all widgets with shared functionality:
  - Loading states
  - Error handling
  - Common lifecycle methods

#### 3. Context System

- **WidgetContext**: Provides state sharing and context between components within a widget
- **useWidget**: A custom hook to access widget context

#### 4. Library API

The library exposes a clean, promise-based API for widget interaction:

- `init(config)`: Initialize the library with configuration
- `render(widgetName, config)`: Render a specific widget
- `unmount(id)`: Unmount a specific widget
- `destroy()`: Unmount all widgets and reset

#### 5. Folder Structure

```
src/
├── api/              # API services and data fetching
├── components/       # Shared components
├── context/          # Context providers for state management
├── styles/           # MUI theming and CSS isolation
├── types/            # TypeScript type definitions
├── utils/            # Utility functions
├── widgets/          # Individual widget implementations
├── WidgetRoot.tsx    # Root component for theme/isolation
└── lib.tsx           # Main library entry point
```

### Widget Development Guidelines

1. All widgets should extend the BaseWidget component
2. Use the WidgetContext for state sharing between components
3. Follow the configuration pattern defined in the WidgetConfig interface
4. Implement proper error handling and loading states
5. Keep widgets self-contained with minimal external dependencies

### Embedding Process

Widgets can be embedded on third-party websites using the provided `embed.js` script:

```html
<!-- Basic embedding -->
<script src="https://cdn.mindbody.io/widgets/embed.js"></script>

<!-- With a target element -->
<div id="mindbody-widget"></div>

<script>
  MindbodyWidgets.init({ debug: true })
    .then(() => {
      MindbodyWidgets.render('HelloWorld', {
        targetElementId: 'mindbody-widget'
      });
    });
</script>
```

For more details on embedding options, see the `embed-test.html` file in the public directory.