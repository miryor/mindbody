import React from 'react';
import { GlobalStyles as MuiGlobalStyles } from '@mui/material';
import { WIDGET_SCOPE_CLASS } from './theme';

/**
 * Global styles component that adds scoped CSS rules for widget isolation
 * 
 * This ensures that widgets are isolated from the host page styles by:
 * 1. Using 'all: initial' to reset all CSS properties
 * 2. Applying our own consistent styling within the widget scope
 * 3. Setting up CSS custom properties for theming
 * 4. Preventing host styles from bleeding through
 */
const GlobalStyles: React.FC = () => {
  return (
    <MuiGlobalStyles
      styles={{
        [`.${WIDGET_SCOPE_CLASS}`]: {
          // Reset all CSS properties
          all: 'initial',
          display: 'block',
          boxSizing: 'border-box',
          // Add consistent container styling
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          color: '#333333',
          
          // Isolate from parent styles
          '& *': {
            boxSizing: 'border-box',
            maxWidth: '100%',
            color: 'inherit',
          },
          
          // Reset common elements that might inherit unwanted styles
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            margin: '0 0 0.5em 0',
            lineHeight: 1.2,
            fontWeight: 500,
            color: '#333333',
          },
          
          '& p': {
            margin: '0 0 1em 0',
            lineHeight: 1.5,
            color: '#333333',
          },
          
          '& a': {
            color: '#006bb6',
            textDecoration: 'none',
          },
          
          '& img, & svg': {
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
          },
          
          // Ensure proper form element resets
          '& button, & input, & select, & textarea': {
            font: 'inherit',
            color: '#333333',
          },
          
          // Ensure lists are reset
          '& ul, & ol': {
            listStyle: 'none',
            padding: 0,
            margin: 0,
          },
          
          // Reset table styles
          '& table': {
            borderCollapse: 'collapse',
            width: '100%',
          },
          
          // Ensure consistent text alignment
          textAlign: 'left',
        },
      }}
    />
  );
};

export default GlobalStyles; 