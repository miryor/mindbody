import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createGenerateClassName, StylesProvider } from '@mui/styles';
import { theme, WIDGET_SCOPE_CLASS, CLASS_NAME_PREFIX, GlobalStyles } from './styles';

// Import RBC CSS - needed if not using Shadow DOM and relying on direct injection or bundling
// NOTE: This might not be necessary if Vite includes it via CalendarView now, 
// but keeping it imported here for clarity during the no-shadow-dom test.
import rbcCss from 'react-big-calendar/lib/css/react-big-calendar.css?raw';

interface WidgetRootProps {
  children: React.ReactNode;
}

// Restore original ShadowDomContainer 
const ShadowDomContainer: React.FC<WidgetRootProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shadowRootRef = useRef<ShadowRoot | null>(null);
  const shadowRootContainerRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<any>(null);

  useEffect(() => {
    if (containerRef.current && !shadowRootRef.current) {
      shadowRootRef.current = containerRef.current.attachShadow({ mode: 'open' });
      shadowRootContainerRef.current = document.createElement('div');
      shadowRootContainerRef.current.className = WIDGET_SCOPE_CLASS;
      shadowRootRef.current.appendChild(shadowRootContainerRef.current);
      
      // Add base styles
      const styleElement = document.createElement('style');
      styleElement.textContent = `...`; // Original base styles 
      shadowRootRef.current.appendChild(styleElement);
      
      // Inject RBC styles
      const rbcStyleElement = document.createElement('style');
      rbcStyleElement.textContent = rbcCss;
      shadowRootRef.current.appendChild(rbcStyleElement);
      
      if (shadowRootContainerRef.current) {
        rootRef.current = createRoot(shadowRootContainerRef.current);
        rootRef.current.render(
          <StyledEngineProvider injectFirst>
            <StylesProvider generateClassName={generateClassName}>
              <ThemeProvider theme={theme}>
                {/* Restore CssBaseline and GlobalStyles */}
                <CssBaseline />
                <GlobalStyles />
                {children}
              </ThemeProvider>
            </StylesProvider>
          </StyledEngineProvider>
        );
      }
    }
    
    return () => {
      if (rootRef.current) {
        rootRef.current.unmount();
        rootRef.current = null;
      }
      shadowRootContainerRef.current = null; // Cleanup ref
      shadowRootRef.current = null; // Cleanup ref
    };
  }, [children]);

  return <div ref={containerRef} className="mindbody-widget-container" />;
};

// --- Remove temporary NO-SHADOW-DOM VERSION --- 
/*
const NoShadowDomContainer: React.FC<WidgetRootProps> = ({ children }) => {
  // ... implementation ...
};
*/

const WidgetRoot: React.FC<WidgetRootProps> = ({ children }) => {
  // Restore usage of ShadowDomContainer
  return <ShadowDomContainer>{children}</ShadowDomContainer>; 
};

// Create class name generator with our prefix for CSS isolation
const generateClassName = createGenerateClassName({
  productionPrefix: CLASS_NAME_PREFIX,
  seed: CLASS_NAME_PREFIX,
});

export default WidgetRoot; 