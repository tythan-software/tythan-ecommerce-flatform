import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true, // also necessary
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["legacy-js-api"],
      }
    }
  }
});
