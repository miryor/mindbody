import { createTheme, ThemeOptions } from '@mui/material/styles';
import { deepmerge } from '@mui/utils';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles'; // Optional: Helps catch issues

// Placeholder for the custom MUI theme
// We'll add basic configuration for isolation

// Define a scope for our widgets
export const WIDGET_SCOPE_CLASS = 'mindbody-widget-scope';

// Define a prefix for class names to avoid collisions with host site
export const CLASS_NAME_PREFIX = 'mb-widget';

// Create a base theme with our brand colors
const baseThemeOptions: ThemeOptions = {
  // Configure the palette with our brand colors
  palette: {
    primary: {
      main: '#006bb6', // Mindbody blue
      light: '#3d8dce',
      dark: '#004a80',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#69b578', // Mindbody green
      light: '#8cc89a',
      dark: '#487f53',
      contrastText: '#ffffff',
    },
    error: {
      main: '#e53935',
      light: '#ea6c6a',
      dark: '#a02725',
    },
    warning: {
      main: '#ffc107',
      light: '#ffcd38',
      dark: '#b28704',
    },
    info: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
    },
    success: {
      main: '#4caf50',
      light: '#6fbf73',
      dark: '#357a38',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  
  // Define consistent typography across all widgets
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14,
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: 500,
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: 500,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 500,
    },
    button: {
      textTransform: 'none', // Don't uppercase button text
    },
  },
  
  // Add some spacing customization
  spacing: 8,
  
  // Round corners by default
  shape: {
    borderRadius: 4,
  },
};

// Add component customizations
const componentOverrides = {
  components: {
    // Style all buttons
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '8px 16px',
          fontWeight: 500,
        },
      },
    },
    
    // Make sure all Material-UI styles have our prefix for isolation
    MuiCssBaseline: {
      styleOverrides: `
        .${WIDGET_SCOPE_CLASS} {
          all: initial;
          * {
            box-sizing: border-box;
          }
          
          /* Isolate typography */
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
          line-height: 1.5;
          color: #333333;
          
          /* Ensure widgets have a clean background */
          background-color: transparent;
          
          /* Reset some problematic properties that could be inherited */
          text-align: left;
          text-transform: none;
        }
      `,
    },
    
    // Add more widget component styling here
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 8,
        },
      },
    },
  },
};

// Merge the base theme options with component overrides
const themeOptions = deepmerge(baseThemeOptions, componentOverrides);

// Create the theme
// Using unstable_createMuiStrictModeTheme can help during development
// const theme = unstable_createMuiStrictModeTheme(themeOptions);
const theme = createTheme(themeOptions);

export { theme }; 