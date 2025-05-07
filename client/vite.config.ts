import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
// import EnvironmentPlugin from 'vite-plugin-environment'; // Reverted

export default defineConfig({
  plugins: [
    // Configure react plugin to disable Fast Refresh
    react({ 
      fastRefresh: false 
    }),
    dts({ 
      insertTypesEntry: true, // Output types for library entry
      include: ['src/lib.tsx', 'src/types/**/*.ts', 'src/widgets/**/*.ts'] // Specify files to include in type generation
     }),
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
    outDir: 'dist/lib', // Output to dist/lib for library
    // Restore Library configuration
    lib: { 
      entry: resolve(__dirname, 'src/lib.tsx'),
      name: 'MindbodyWidgets',
      fileName: 'mindbody-widgets',
      formats: ['es', 'umd'], 
    },
    rollupOptions: {
      // Keep external/globals for library build
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        // Can likely remove this for library build, let Rollup decide
        // inlineDynamicImports: false, 
      },
      // Remove multi-page input for library build
      // input: { 
      //   main: resolve(__dirname, 'index.html'),
      //   calendarTest: resolve(__dirname, 'calendar-test-page.html'), 
      // }
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  // Removed esbuild options
}); 