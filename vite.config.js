import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from "path"
import tailwindcss from 'tailwindcss';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
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
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
