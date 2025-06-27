import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Landing/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
