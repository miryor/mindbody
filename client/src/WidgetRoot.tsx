import React from 'react';
import { ThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, WIDGET_SCOPE_CLASS } from './styles/theme';

interface WidgetRootProps {
  children: React.ReactNode;
}

/**
 * Provides MUI Theme and CSS isolation context for widgets.
 * Wraps children with StyledEngineProvider (injectFirst) and ThemeProvider.
 * Applies a scoped CssBaseline.
 */
const WidgetRoot: React.FC<WidgetRootProps> = ({ children }) => {
  // StyledEngineProvider with injectFirst helps prioritize MUI styles
  // over potential global styles from the host page within our scope.
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        {/* Apply CssBaseline to reset styles within the widget scope */}
        <CssBaseline />
        {/* Add a wrapper div with the scope class */}
        <div className={WIDGET_SCOPE_CLASS}>
           {children}
        </div>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default WidgetRoot; 