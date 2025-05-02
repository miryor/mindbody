import React from 'react';
import { Box, Typography } from '@mui/material';
import { BaseWidget } from '../components';
import { WidgetConfig } from '../types/widgetConfig';

interface HelloWorldWidgetProps {
  config: WidgetConfig;
}

const HelloWorldWidget: React.FC<HelloWorldWidgetProps> = ({ config }) => {
  // Extract configuration options with defaults
  const message = config.message || 'Hello from Mindbody Widget!';

  return (
    <BaseWidget config={config}>
      <Box sx={{ padding: 2, border: '1px dashed grey' }}>
        <Typography variant="h6">{message}</Typography>
        <Typography variant="body2">This is a basic widget built with the standard architecture.</Typography>
      </Box>
    </BaseWidget>
  );
};

// We might create a higher-order component or function later
// to automatically wrap widgets with WidgetRoot, but for now,
// the initialization function in lib.ts will handle it.
export default HelloWorldWidget; 