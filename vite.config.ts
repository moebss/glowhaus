import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/klaus-barth-beratung/',
  server: {
    port: 3011,
    host: true
  },
  preview: {
    port: 3011,
    host: true
  }
});
