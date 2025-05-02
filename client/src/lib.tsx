// Main entry point for the Mindbody Widgets library
// This file will export the necessary components and initialization functions.

import React from 'react';
import { createRoot } from 'react-dom/client';
import WidgetRoot from './WidgetRoot'; // The wrapper component
import { WidgetConfig, WidgetRegistry } from './types/widgetConfig';
import { WidgetProvider } from './context/WidgetContext';

// Import CSS isolation styles
import './styles/isolation.css';

// Import Widgets
import * as widgets from './widgets';

console.log('Mindbody Widgets Library Loaded');

// Configuration
const DEFAULT_CONFIG = {
  baseUrl: '', // Will default to current URL
  version: 'latest',
  debug: false
};

// Internal state
let _instances: Record<string, any> = {};
let _config = { ...DEFAULT_CONFIG };

// Widget Registry - automatically populated from the widgets directory
const registry: WidgetRegistry = {
  HelloWorld: widgets.HelloWorldWidget,
  Scheduler: widgets.SchedulerWidget,
  Retail: widgets.RetailWidget,
  Packages: widgets.PackagesWidget,
  // Register other widgets here as they are created
};

/**
 * Initialize the widget library with configuration options
 * @param config - Configuration options
 */
export const init = (config = {}) => {
  // Merge provided config with defaults
  _config = { ..._config, ...config };
  
  // Enable debug logging if specified
  if (_config.debug) {
    console.log('[MindbodyWidgets] Initializing with config:', _config);
  }
  
  return Promise.resolve(); // For API compatibility with embed.js
};

/**
 * Render a specific widget
 * @param widgetName - Name of the widget to render
 * @param config - Widget configuration
 * @returns A function to unmount the widget
 */
export const renderWidget = (widgetName: string, config: WidgetConfig) => {
  const WidgetComponent = registry[widgetName];
  if (!WidgetComponent) {
    console.error(`Widget "${widgetName}" not found in registry.`);
    return;
  }

  const targetElement = document.getElementById(config.targetElementId);
  if (!targetElement) {
    console.error(`Target element with ID "${config.targetElementId}" not found.`);
    return;
  }

  // Use React 18's createRoot API
  const root = createRoot(targetElement);
  root.render(
    <React.StrictMode>
      <WidgetRoot> {/* Apply theme and isolation */}
        <WidgetProvider widgetName={widgetName} config={config}>
          <WidgetComponent config={config} />
        </WidgetProvider>
      </WidgetRoot>
    </React.StrictMode>
  );

  if (_config.debug) {
    console.log(`Widget "${widgetName}" rendered into element "#${config.targetElementId}"`);
  }

  // Return an unmount function
  return () => {
    root.unmount();
    if (_config.debug) {
      console.log(`Widget "${widgetName}" unmounted from element "#${config.targetElementId}"`);
    }
  };
};

/**
 * Render a widget with the given name and configuration
 * @param widgetName - Name of the widget to render
 * @param config - Widget configuration
 * @returns Promise that resolves with the widget instance
 */
export const render = (widgetName: string, config: Partial<WidgetConfig> = {}): Promise<any> => {
  if (!widgetName) {
    console.error('[MindbodyWidgets] Widget name is required');
    return Promise.reject(new Error('Widget name is required'));
  }
  
  if (!config.targetElementId) {
    console.error('[MindbodyWidgets] targetElementId is required in config');
    return Promise.reject(new Error('targetElementId is required'));
  }
  
  if (_config.debug) {
    console.log(`[MindbodyWidgets] Rendering ${widgetName} with config:`, config);
  }
  
  try {
    // Call the library's renderWidget function
    const widgetConfig: WidgetConfig = {
      targetElementId: config.targetElementId,
      ...config
    };
    
    const unmountFn = renderWidget(widgetName, widgetConfig);
    
    // Create an instance ID
    const instanceId = `${widgetName}-${config.targetElementId}`;
    
    // Store instance with control functions
    _instances[instanceId] = {
      widgetName,
      config,
      unmount: unmountFn,
      update: (newConfig: Partial<WidgetConfig>) => {
        // Update config and re-render
        unmount(instanceId);
        return render(widgetName, {...config, ...newConfig});
      }
    };
    
    return Promise.resolve(_instances[instanceId]);
  } catch (error) {
    console.error(`[MindbodyWidgets] Failed to render ${widgetName}:`, error);
    return Promise.reject(error);
  }
};

/**
 * Unmount a widget by instance ID or target element ID
 * @param id - Instance ID or target element ID
 * @returns True if successfully unmounted, false otherwise
 */
export const unmount = (id: string): boolean => {
  // If it's an instance ID
  if (_instances[id]) {
    if (_config.debug) {
      console.log(`[MindbodyWidgets] Unmounting widget instance: ${id}`);
    }
    
    try {
      // Call the unmount function
      if (typeof _instances[id].unmount === 'function') {
        _instances[id].unmount();
      }
      
      // Remove from instances
      delete _instances[id];
      return true;
    } catch (error) {
      console.error(`[MindbodyWidgets] Failed to unmount instance ${id}:`, error);
      return false;
    }
  }
  
  // If it's a target element ID, find the instance
  for (const instanceId in _instances) {
    if (_instances[instanceId].config.targetElementId === id) {
      return unmount(instanceId);
    }
  }
  
  console.warn(`[MindbodyWidgets] No widget found for ID: ${id}`);
  return false;
};

/**
 * Unmount all widgets and reset the library
 */
export const destroy = () => {
  if (_config.debug) {
    console.log('[MindbodyWidgets] Destroying all widgets');
  }
  
  // Unmount all instances
  Object.keys(_instances).forEach(id => {
    unmount(id);
  });
  
  // Reset state
  _instances = {};
  _config = { ...DEFAULT_CONFIG };
};

/**
 * Get information about available widgets
 * @returns Array of widget names
 */
export const getAvailableWidgets = (): string[] => {
  return Object.keys(registry);
};

// Export for UMD/global access
// These exports will be available as MindbodyWidgets.X in the global scope
export default {
  init,
  render,
  renderWidget,
  unmount,
  destroy,
  getAvailableWidgets
};

// Example export (to be replaced later)
// export const initializeWidgets = (config: any) => {
//  console.log('Initializing widgets with config:', config);
// }; 