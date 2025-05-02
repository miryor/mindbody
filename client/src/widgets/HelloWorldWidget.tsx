import React from 'react';
import { Box, Typography, Divider } from '@mui/material';
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
      <Box sx={{ padding: 2, border: '1px dashed #ccc', borderRadius: 2 }}>
        <Typography variant="h5" sx={{ mb: 2 }}>{message}</Typography>
        <Typography variant="body1">This is a basic widget built with the standard architecture.</Typography>
        
        <Divider sx={{ my: 2 }} />
        
        <div className="widget-style-info">
          <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
            Widget Styling Information:
          </Typography>
          <Typography variant="body2" paragraph>
            This widget should have the following styling:
          </Typography>
          <ul style={{ margin: '0 0 0.5rem 1.5rem', listStyleType: 'disc' }}>
            <li>Font: Roboto (not Comic Sans)</li>
            <li>Text color: Dark gray (#333), not purple</li>
            <li>Background: Light gray (#f8f9fa)</li>
            <li>Proper border radius and subtle box shadow</li>
            <li>Material-UI typography and components</li>
          </ul>
          <Typography variant="body2">
            If the styling matches this description, the Shadow DOM CSS isolation is working correctly!
          </Typography>
        </div>
      </Box>
    </BaseWidget>
  );
};

// We might create a higher-order component or function later
// to automatically wrap widgets with WidgetRoot, but for now,
// the initialization function in lib.ts will handle it.
export default HelloWorldWidget; 