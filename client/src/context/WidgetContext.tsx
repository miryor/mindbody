import React, { createContext, useContext, useState } from 'react';
import { WidgetConfig } from '../types/widgetConfig';

// Define the context state structure
interface WidgetContextState {
  config: WidgetConfig;
  widgetName: string;
  instanceId: string;
  isLoading: boolean;
  error: Error | null;
  setLoading: (isLoading: boolean) => void;
  setError: (error: Error | null) => void;
  // Add any other shared state/methods here
}

// Create the context with default values
const WidgetContext = createContext<WidgetContextState | undefined>(undefined);

// Props for the provider component
interface WidgetProviderProps {
  children: React.ReactNode;
  widgetName: string;
  config: WidgetConfig;
}

// Provider component that will wrap widget content
export const WidgetProvider: React.FC<WidgetProviderProps> = ({ 
  children, 
  widgetName, 
  config 
}) => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  
  // Create a unique instance ID
  const instanceId = `${widgetName}-${config.targetElementId}`;
  
  // Context value
  const contextValue: WidgetContextState = {
    config,
    widgetName,
    instanceId,
    isLoading,
    error,
    setLoading,
    setError,
  };
  
  return (
    <WidgetContext.Provider value={contextValue}>
      {children}
    </WidgetContext.Provider>
  );
};

// Custom hook to use the widget context
export const useWidget = (): WidgetContextState => {
  const context = useContext(WidgetContext);
  if (context === undefined) {
    throw new Error('useWidget must be used within a WidgetProvider');
  }
  return context;
};

export default WidgetContext; 