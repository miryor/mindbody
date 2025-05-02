/**
 * Mindbody Widgets Embedding Script
 * 
 * This script provides an easy way to include and initialize Mindbody widgets
 * on studio websites. It handles dynamic loading of the widget library, widget 
 * initialization, and provides a simple API for widget interaction.
 */

(function() {
  // Configuration
  const DEFAULT_CONFIG = {
    baseUrl: '', // Default to same location as script
    version: 'latest',      // Version of the widget library to load
    debug: false            // Enable/disable debug logging
  };

  // Global namespace for the Mindbody Widgets
  window.MindbodyWidgets = window.MindbodyWidgets || {
    _instances: {},          // Stores widget instances
    _loadPromise: null,      // Promise for library loading status
    _config: {...DEFAULT_CONFIG},
    _scriptLoaded: false,
    
    /**
     * Initialize the widget library with configuration options
     * @param {Object} config - Configuration options
     */
    init: function(config = {}) {
      // Merge provided config with defaults
      this._config = {...DEFAULT_CONFIG, ...config};
      
      // If baseUrl is empty, use the script's location
      if (!this._config.baseUrl) {
        // Find our own script
        const scripts = document.getElementsByTagName('script');
        for (let i = 0; i < scripts.length; i++) {
          const src = scripts[i].src;
          if (src && src.indexOf('embed.js') > -1) {
            this._config.baseUrl = src.substring(0, src.lastIndexOf('/'));
            break;
          }
        }
      }
      
      // Enable debug logging if specified
      if (this._config.debug) {
        console.log('[MindbodyWidgets] Initializing with config:', this._config);
      }
      
      // Load the widget library if not already loaded
      return this.loadLibrary();
    },
    
    /**
     * Load the widget library scripts dynamically
     * @returns {Promise} - Resolves when the library is loaded
     */
    loadLibrary: function() {
      // Return existing promise if already loading
      if (this._loadPromise) {
        return this._loadPromise;
      }
      
      this._loadPromise = new Promise((resolve, reject) => {
        // Skip loading if already loaded
        if (this._scriptLoaded) {
          resolve();
          return;
        }
        
        // Determine script URL based on version
        const version = this._config.version;
        const baseUrl = this._config.baseUrl;
        
        // Use version-specific URL if not 'latest'
        const scriptUrl = version === 'latest' 
          ? `${baseUrl}/mindbody-widgets.umd.js`
          : `${baseUrl}/mindbody-widgets.${version}.umd.js`;
        
        // Create script element
        const script = document.createElement('script');
        script.async = true;
        script.src = scriptUrl;
        
        // Add React dependencies if needed (host sites might already have React)
        const loadReactIfNeeded = () => {
          if (window.React && window.ReactDOM) {
            return Promise.resolve();
          }
          
          // Load React and ReactDOM
          return new Promise((resolveReact, rejectReact) => {
            const reactScript = document.createElement('script');
            reactScript.async = true;
            reactScript.src = 'https://unpkg.com/react@18.2.0/umd/react.production.min.js';
            
            const reactDomScript = document.createElement('script');
            reactDomScript.async = true;
            reactDomScript.src = 'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js';
            
            reactScript.onload = () => {
              document.head.appendChild(reactDomScript);
            };
            
            reactDomScript.onload = resolveReact;
            reactDomScript.onerror = rejectReact;
            reactScript.onerror = rejectReact;
            
            document.head.appendChild(reactScript);
          });
        };
        
        // Handle script load events
        script.onload = () => {
          this._scriptLoaded = true;
          
          if (this._config.debug) {
            console.log('[MindbodyWidgets] Library loaded successfully');
          }
          
          resolve();
        };
        
        script.onerror = (error) => {
          console.error('[MindbodyWidgets] Failed to load library:', error);
          reject(error);
        };
        
        // Load dependencies first, then our script
        loadReactIfNeeded()
          .then(() => {
            document.head.appendChild(script);
          })
          .catch(error => {
            console.error('[MindbodyWidgets] Failed to load dependencies:', error);
            reject(error);
          });
      });
      
      return this._loadPromise;
    },
    
    /**
     * Render a widget into a target element
     * @param {string} widgetName - The name of the widget to render
     * @param {Object} config - Widget configuration
     * @returns {Promise} - Resolves with the widget control object
     */
    render: function(widgetName, config = {}) {
      if (!widgetName) {
        console.error('[MindbodyWidgets] Widget name is required');
        return Promise.reject(new Error('Widget name is required'));
      }
      
      if (!config.targetElementId) {
        console.error('[MindbodyWidgets] targetElementId is required in config');
        return Promise.reject(new Error('targetElementId is required'));
      }
      
      // Load the library if not already loaded
      return this.loadLibrary()
        .then(() => {
          if (this._config.debug) {
            console.log(`[MindbodyWidgets] Rendering ${widgetName} with config:`, config);
          }
          
          try {
            // Call the library's renderWidget function
            const renderWidget = window.MindbodyWidgets.renderWidget;
            
            if (typeof renderWidget !== 'function') {
              console.error('[MindbodyWidgets] renderWidget function not found');
              return Promise.reject(new Error('renderWidget function not found'));
            }
            
            const unmountFn = renderWidget(widgetName, config);
            
            // Create an instance ID
            const instanceId = `${widgetName}-${config.targetElementId}`;
            
            // Store instance with control functions
            this._instances[instanceId] = {
              widgetName,
              config,
              unmount: unmountFn,
              update: (newConfig) => {
                // Update config and re-render
                this.unmount(instanceId);
                return this.render(widgetName, {...config, ...newConfig});
              }
            };
            
            return this._instances[instanceId];
          } catch (error) {
            console.error(`[MindbodyWidgets] Failed to render ${widgetName}:`, error);
            return Promise.reject(error);
          }
        });
    },
    
    /**
     * Unmount a widget by instance ID or target element ID
     * @param {string} id - Instance ID or target element ID
     * @returns {boolean} - True if successfully unmounted, false otherwise
     */
    unmount: function(id) {
      // If it's an instance ID
      if (this._instances[id]) {
        if (this._config.debug) {
          console.log(`[MindbodyWidgets] Unmounting widget instance: ${id}`);
        }
        
        try {
          // Call the unmount function
          if (typeof this._instances[id].unmount === 'function') {
            this._instances[id].unmount();
          }
          
          // Remove from instances
          delete this._instances[id];
          return true;
        } catch (error) {
          console.error(`[MindbodyWidgets] Failed to unmount instance ${id}:`, error);
          return false;
        }
      }
      
      // If it's a target element ID, find the instance
      for (const instanceId in this._instances) {
        if (this._instances[instanceId].config.targetElementId === id) {
          return this.unmount(instanceId);
        }
      }
      
      console.warn(`[MindbodyWidgets] No widget found for ID: ${id}`);
      return false;
    },
    
    /**
     * Unmount all widgets and reset the library
     */
    destroy: function() {
      if (this._config.debug) {
        console.log('[MindbodyWidgets] Destroying all widgets');
      }
      
      // Unmount all instances
      Object.keys(this._instances).forEach(id => {
        this.unmount(id);
      });
      
      // Reset state
      this._instances = {};
      this._config = {...DEFAULT_CONFIG};
      this._loadPromise = null;
      // Note: We don't reset _scriptLoaded to avoid reloading the script
    }
  };
  
  // Auto-initialize if data-auto-init attribute is present
  document.addEventListener('DOMContentLoaded', () => {
    const autoInit = document.querySelector('script[data-mindbody-widgets-auto-init]');
    if (autoInit) {
      let config = {};
      
      // Try to parse config from the attribute
      try {
        const configAttr = autoInit.getAttribute('data-mindbody-widgets-config');
        if (configAttr) {
          config = JSON.parse(configAttr);
        }
      } catch (error) {
        console.error('[MindbodyWidgets] Failed to parse auto-init config:', error);
      }
      
      // Initialize the library
      window.MindbodyWidgets.init(config);
      
      // Find and initialize widgets with data attributes
      document.querySelectorAll('[data-mindbody-widget]').forEach(el => {
        const widgetName = el.getAttribute('data-mindbody-widget');
        if (!widgetName) return;
        
        // Build config from data attributes
        const config = {
          targetElementId: el.id
        };
        
        // Add all data-widget-* attributes to config
        Array.from(el.attributes).forEach(attr => {
          if (attr.name.startsWith('data-widget-')) {
            const key = attr.name.substring('data-widget-'.length);
            config[key] = attr.value;
          }
        });
        
        // Render the widget
        window.MindbodyWidgets.render(widgetName, config);
      });
    }
  });
})(); 