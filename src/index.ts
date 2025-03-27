import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App';

// Initialize app when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('mindbody-app');
  if (container) {
    const root = createRoot(container);
    root.render(React.createElement(App));
  }
});

// Export components for direct usage
export { SchedulerWidget } from './widgets/SchedulerWidget';
export { RetailWidget } from './widgets/RetailWidget'; 