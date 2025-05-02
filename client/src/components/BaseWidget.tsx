import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { WidgetConfig } from '../types/widgetConfig';

export interface BaseWidgetProps {
  config: WidgetConfig;
  children?: React.ReactNode;
}

/**
 * Base Widget Component
 * Provides common functionality and error handling for all widgets
 */
const BaseWidget: React.FC<BaseWidgetProps> = ({ config, children }) => {
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Common initialization logic
    const initWidget = async () => {
      try {
        setLoading(true);
        // Any shared initialization logic would go here
        // For example, checking for required config values, 
        // initializing analytics, etc.
        
        // Simulate a short loading time for demonstration
        await new Promise(resolve => setTimeout(resolve, 300));
      } catch (err: any) {
        console.error('Error initializing widget:', err);
        setError(err instanceof Error ? err : new Error(err?.message || 'Unknown error'));
      } finally {
        setLoading(false);
      }
    };

    initWidget();

    // Cleanup function
    return () => {
      // Common cleanup logic
      // For example, removing event listeners, etc.
    };
  }, []);

  // Error boundary functionality
  if (error) {
    return (
      <Box 
        sx={{ 
          padding: 2, 
          border: '1px solid #f44336', 
          borderRadius: 1,
          backgroundColor: '#ffebee' 
        }}
      >
        <Typography variant="h6" color="error">Widget Error</Typography>
        <Typography variant="body2">{error.message}</Typography>
      </Box>
    );
  }

  // Loading state
  if (loading) {
    return (
      <Box sx={{ padding: 2, textAlign: 'center' }}>
        <Typography variant="body2">Loading widget...</Typography>
      </Box>
    );
  }

  // Render the widget content
  return (
    <Box className="mindbody-widget" data-widget-id={config.targetElementId}>
      {children}
    </Box>
  );
};

export default BaseWidget; 