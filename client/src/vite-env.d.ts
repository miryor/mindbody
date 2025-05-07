/// <reference types="vite/client" />

// Re-add explicit declaration for CSS raw imports
declare module '*.css?raw' {
    const content: string;
    export default content;
} 