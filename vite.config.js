import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  server: {
    port: 3000, // or any port you prefer
    open: true, // automatically open the app in the browser
  },
  build: {
    outDir: 'dist',
    sourcemap: true, // generate source maps for easier debugging
  },
});
