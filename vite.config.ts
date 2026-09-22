import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from the custom domain probler.uk, so the base path is the root.
export default defineConfig({
  plugins: [react()],
  base: '/',
});
