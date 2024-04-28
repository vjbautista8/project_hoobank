import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/project_hoobank/',
  plugins: [react()],
  server: {
    host: true,
  },
});
