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
// Revert HelloWorldWidget import to direct file path
import HelloWorldWidget from './widgets/HelloWorld/HelloWorldWidget'; 
// Revert ScheduleWidget import to direct file path
import ScheduleWidget from './widgets/ScheduleWidget/ScheduleWidget'; 
// Keep SimpleCalendarTestWidget import using its directory index.ts
import SimpleCalendarTestWidget from './widgets/SimpleCalendarTest';
// Import other widgets as needed

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

// Widget Registry - Ensure no reference to the old SchedulerWidget
const registry: WidgetRegistry = {
  HelloWorld: HelloWorldWidget,
  ScheduleWidget: ScheduleWidget,
  SimpleCalendarTestWidget: SimpleCalendarTestWidget, 
  // Remove any other potential SchedulerWidget entries if they existed
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
  console.log(`[renderWidget] Attempting to render: ${widgetName}`);
  const WidgetComponent = registry[widgetName];
  if (!WidgetComponent) {
    console.error(`[renderWidget] Widget "${widgetName}" not found in registry.`);
    return;
  }
  console.log(`[renderWidget] Found component for ${widgetName}.`);

  const targetElement = document.getElementById(config.targetElementId);
  if (!targetElement) {
    console.error(`[renderWidget] Target element "#${config.targetElementId}" not found.`);
    return;
  }
  console.log(`[renderWidget] Found target element "#${config.targetElementId}".`);

  // Use React 18's createRoot API
  let root: ReturnType<typeof createRoot> | null = null;
  try {
    console.log(`[renderWidget] Calling createRoot for "#${config.targetElementId}"...`);
    root = createRoot(targetElement);
    console.log(`[renderWidget] createRoot successful.`);
  } catch (e) {
     console.error(`[renderWidget] Error during createRoot:`, e);
     targetElement.innerHTML = `<p style="color: red;">Error creating React root.</p>`;
     return; 
  }
  
  try {
    console.log(`[renderWidget] Calling root.render for ${widgetName}...`);
    root.render(
      <React.StrictMode>
        <WidgetRoot> {/* Apply theme and isolation */}
          <WidgetProvider widgetName={widgetName} config={config}>
            {/* Add log inside to see if this part executes */}            
            {React.createElement(WidgetComponent, { config: config, key: widgetName }, 
              React.createElement('script', { dangerouslySetInnerHTML: { __html: `console.log('[renderWidget] WidgetComponent (${widgetName}) is being rendered by React.createElement');` } })
            )} 
          </WidgetProvider>
        </WidgetRoot>
      </React.StrictMode>
    );
    console.log(`[renderWidget] root.render command issued for ${widgetName}.`);
  } catch (e) {
     console.error(`[renderWidget] Error during root.render:`, e);
     targetElement.innerHTML = `<p style="color: red;">Error rendering widget component.</p>`;
     return;
  }

  if (_config.debug) {
    console.log(`Widget "${widgetName}" render initiated into element "#${config.targetElementId}"`);
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

/**
 * Automatically finds and renders widgets based on data attributes.
 */
const autoInitializeWidgets = () => {
    console.log('[MindbodyWidgets] Attempting auto-initialization...');

    // Find script tags that likely loaded this bundle
    const widgetScriptTags = document.querySelectorAll('script[src*="mindbody-widgets"]');
    console.log(`[MindbodyWidgets] Found ${widgetScriptTags.length} potential widget script tag(s).`);

    let isAutoInitEnabled = false;
    widgetScriptTags.forEach((scriptTag, index) => {
        console.log(`[MindbodyWidgets] Checking script tag ${index + 1}:`, scriptTag);
        if (scriptTag.hasAttribute('data-mindbody-widgets-auto-init')) {
            console.log('[MindbodyWidgets] Found data-mindbody-widgets-auto-init attribute.');
            isAutoInitEnabled = true;
        }
    });

    if (!isAutoInitEnabled) {
        console.log('[MindbodyWidgets] Auto-initialization disabled (attribute not found on any relevant script tag).');
        return;
    }

    console.log('[MindbodyWidgets] Auto-initialization enabled. Scanning for widgets...');

    // Find and render elements (rest of the function remains the same)
    const widgetElements = document.querySelectorAll<HTMLElement>('[data-mindbody-widget]');
    console.log(`[MindbodyWidgets] Found ${widgetElements.length} elements with data-mindbody-widget attribute.`);

    widgetElements.forEach((element, index) => {
        console.log(`[MindbodyWidgets] Processing element ${index + 1}:`, element);
        const widgetName = element.dataset.mindbodyWidget;
        if (!widgetName) {
            console.warn('[MindbodyWidgets] Element missing data-mindbody-widget value:', element);
            return;
        }
        console.log(`[MindbodyWidgets] Element wants widget: ${widgetName}`);

        if (!element.id) {
            element.id = `mindbody-widget-auto-${Math.random().toString(36).substring(2, 9)}`;
            console.warn(`[MindbodyWidgets] Auto-initialized widget element lacked an ID, assigned: ${element.id}`, element);
        }

        const config: Partial<WidgetConfig> = {
            targetElementId: element.id,
        };
        for (const key in element.dataset) {
            if (key.startsWith('widget') && key !== 'mindbodyWidget') {
                const configKey = key.substring(6).charAt(0).toLowerCase() + key.substring(7);
                config[configKey] = element.dataset[key];
            }
        }
        console.log(`[MindbodyWidgets] Config for ${widgetName} (#${element.id}):`, config);

        // Render the widget
        render(widgetName, config)
            .then(instance => {
                 console.log(`[MindbodyWidgets] Successfully auto-rendered ${widgetName} into #${element.id}`, { instance });
            })
            .catch(error => {
                console.error(`[MindbodyWidgets] Failed to auto-render ${widgetName} into #${element.id}:`, error);
            });
    });
};

// --- Run Auto-Initialization ---
// Wait for the DOM to be ready before scanning
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInitializeWidgets);
} else {
    autoInitializeWidgets();
}

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