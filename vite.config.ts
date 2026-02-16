import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: change '/portfolio/' to match your repo name
  // e.g. if your repo is 'my-portfolio', use base: '/my-portfolio/'
  // For custom domain, use base: '/'
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
