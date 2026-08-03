import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ludwig-fonk-fliesenleger/',
  server: {
    port: 3016,
    host: true
  },
  preview: {
    port: 3016,
    host: true
  }
});
