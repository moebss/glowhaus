import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/schmitz-hairline/',
  server: {
    port: 3013,
    host: true
  },
  preview: {
    port: 3013,
    host: true
  }
});
