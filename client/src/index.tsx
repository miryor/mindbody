// import React from 'react'; // No longer needed
// import { createRoot } from 'react-dom/client'; // No longer needed
// import { App } from './App';
import { renderWidget } from './lib'; // Import our main library function

// Initialize app/widgets when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // No longer need to find #mindbody-app or create root here
  // lib.tsx handles widget rendering

  console.log('[Dev Mode] Rendering test widgets via renderWidget...');

  // Render test widget 1
  renderWidget('HelloWorld', {
    targetElementId: 'widget-hello-dev' // Target the new div
  });

  // Render test widget 2
  renderWidget('HelloWorld', {
    targetElementId: 'widget-hello-custom-dev', // Target the new div
    message: 'Custom Dev Message!'
  });

});

// Export components for direct usage (keep if needed for other purposes)
// export { SchedulerWidget } from './widgets/SchedulerWidget';
// export { RetailWidget } from './widgets/RetailWidget'; 