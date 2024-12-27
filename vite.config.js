import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy requests to the actual API
      '/api': 'https://www.freetogame.com',  // Proxy the /api path
    },
  },
});
