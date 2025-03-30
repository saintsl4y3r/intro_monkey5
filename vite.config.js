import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/intro_monkey5/',
  server: {
    proxy: {
      '/api': {
        target: 'https://monkey5-backend.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
