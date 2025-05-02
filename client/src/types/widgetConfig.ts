export interface WidgetConfig {
  targetElementId: string; // ID of the DOM element to render the widget into
  // Add other common configuration options here later
  // e.g., locale?: string;
  // e.g., studioId?: string;
  [key: string]: any; // Allow widget-specific options
}

export interface WidgetRegistry {
  [widgetName: string]: React.ComponentType<any>; // Map widget names to React components
} 