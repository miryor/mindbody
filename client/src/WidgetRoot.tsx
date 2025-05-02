import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import { theme, WIDGET_SCOPE_CLASS, CLASS_NAME_PREFIX, GlobalStyles } from './styles';

interface WidgetRootProps {
  children: React.ReactNode;
}

/**
 * ShadowDomContainer - Creates a Shadow DOM container for complete CSS isolation
 * This approach provides the strongest isolation from host page styles
 */
const ShadowDomContainer: React.FC<WidgetRootProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);
  const shadowRootContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current && !shadowRootRef.current) {
      // Create shadow root
      shadowRootRef.current = containerRef.current.attachShadow({ mode: 'open' });
      
      // Create a div inside the shadow root to render into
      shadowRootContainerRef.current = document.createElement('div');
      shadowRootContainerRef.current.className = WIDGET_SCOPE_CLASS;
      shadowRootRef.current.appendChild(shadowRootContainerRef.current);
      
      // Add styles to the shadow root
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .${WIDGET_SCOPE_CLASS} {
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
          color: #333333;
          line-height: 1.5;
          box-sizing: border-box;
          text-align: left;
          padding: 16px;
          margin: 0;
          background: #f8f9fa;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        * {
          box-sizing: border-box;
        }

        h1, h2, h3, h4, h5, h6 {
          font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
          color: #333333;
          margin-top: 0;
          margin-bottom: 0.5em;
          font-weight: 500;
        }

        p {
          margin-top: 0;
          margin-bottom: 1em;
          color: #333333;
        }

        .widget-style-info {
          background: rgba(0, 107, 182, 0.1);
          padding: 12px;
          border-radius: 4px;
          border-left: 4px solid #006bb6;
          font-size: 14px;
          margin-top: 16px;
        }
      `;
      shadowRootRef.current.appendChild(styleElement);
      
      // Render children to the shadow root using React
      if (shadowRootContainerRef.current) {
        const root = createRoot(shadowRootContainerRef.current);
        root.render(
          <StyledEngineProvider injectFirst>
            <StylesProvider generateClassName={generateClassName}>
              <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {children}
              </ThemeProvider>
            </StylesProvider>
          </StyledEngineProvider>
        );
      }
    }
    
    // Cleanup function
    return () => {
      if (shadowRootContainerRef.current && shadowRootRef.current) {
        try {
          const root = createRoot(shadowRootContainerRef.current);
          root.unmount();
        } catch (e) {
          console.error('Error unmounting React from shadow root:', e);
        }
      }
    };
  }, [children]);

  // Render just a container div that will host our shadow root
  return <div ref={containerRef} className="mindbody-widget-container" />;
};

/**
 * Provides MUI Theme and CSS isolation context for widgets.
 * 
 * This component uses several MUI utilities to ensure CSS isolation plus Shadow DOM:
 * 1. ShadowDOM container - Provides complete isolation from host page styles
 * 2. StyledEngineProvider - Controls injection order of styles
 * 3. StylesProvider - Uses a custom class name generator with our prefix
 * 4. ThemeProvider - Applies our custom theme
 * 5. CssBaseline - Resets CSS to a consistent baseline
 * 6. GlobalStyles - Adds additional CSS isolation rules
 */
const WidgetRoot: React.FC<WidgetRootProps> = ({ children }) => {
  // Use the Shadow DOM for maximum isolation
  return <ShadowDomContainer>{children}</ShadowDomContainer>;
};

// Create class name generator with our prefix for CSS isolation
const generateClassName = createGenerateClassName({
  productionPrefix: CLASS_NAME_PREFIX,
  seed: CLASS_NAME_PREFIX,
});

export default WidgetRoot; 