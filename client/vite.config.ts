import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// import EnvironmentPlugin from 'vite-plugin-environment'; // Reverted

export default defineConfig({
  plugins: [
    react(),
    // EnvironmentPlugin(['NODE_ENV']) // Reverted
  ],
  // Add define back for production builds
  define: {
   'process.env.NODE_ENV': JSON.stringify('production'),
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  build: {
    // Configure Vite for library mode to build embeddable widgets
    lib: {
      entry: path.resolve(__dirname, 'src/lib.tsx'), // Entry point for the library
      name: 'MindbodyWidgets', // Global variable name for UMD build
      formats: ['es', 'umd'], // Output formats (ES Module, Universal Module Definition)
      fileName: (format) => `mindbody-widgets.${format}.js`, // Output filename pattern
    },
    rollupOptions: {
      // Define external dependencies that shouldn't be bundled
      external: ['react', 'react-dom'],
      output: {
        // Define global variable names for external dependencies in UMD build
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Fix named and default exports issue
        exports: 'named',
      },
    },
    outDir: 'dist/lib', // Output directory for the library build
    emptyOutDir: true,
    sourcemap: true, // Generate source maps for easier debugging
  },
  // Removed esbuild options
}); 