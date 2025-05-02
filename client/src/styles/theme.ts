import { createTheme, ThemeOptions } from '@mui/material/styles';
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles'; // Optional: Helps catch issues

// Placeholder for the custom MUI theme
// We'll add basic configuration for isolation

// Define a scope for our widgets (can be customized)
const WIDGET_SCOPE_CLASS = 'mindbody-widget-scope';

const themeOptions: ThemeOptions = {
  // If you want unique class names (more advanced, needs build tool integration sometimes)
  // components: {
  //   MuiButton: {
  //     defaultProps: {
  //       disableRipple: true,
  //     },
  //     styleOverrides: { // Example
  //       root: ({ ownerState }) => ({
  //         ...(ownerState.variant === 'contained' &&
  //           ownerState.color === 'primary' && {
  //             backgroundColor: '#202020',
  //             color: '#fff',
  //           }),
  //       }),
  //     },
  //   },
  //   // Add other component overrides
  // },
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    // Add other theme customizations here
  },
  typography: {
    // Define custom typography if needed
  },
  // Add custom components styles or overrides
};

// Create the theme
// Using unstable_createMuiStrictModeTheme can help during development
// const theme = unstable_createMuiStrictModeTheme(themeOptions);
const theme = createTheme(themeOptions);


export { theme, WIDGET_SCOPE_CLASS }; // Export scope class as well 