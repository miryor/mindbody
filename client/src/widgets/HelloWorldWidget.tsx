import React from 'react';
import { Box, Typography } from '@mui/material';

interface HelloWorldWidgetProps {
  message?: string;
  // Potentially receive other props from the config
  config?: any; // Accept config prop passed from lib.tsx
}

const HelloWorldWidget: React.FC<HelloWorldWidgetProps> = ({ message = 'Hello from Mindbody Widget!' /* , config */ }) => {
  return (
    <Box sx={{ padding: 2, border: '1px dashed grey' }}>
      <Typography variant="h6">{message}</Typography>
      <Typography variant="body2">This is a basic widget structure.</Typography>
    </Box>
  );
};

// We might create a higher-order component or function later
// to automatically wrap widgets with WidgetRoot, but for now,
// the initialization function in lib.ts will handle it.
export default HelloWorldWidget; 