import { defineConfig } from 'vite';
import ReactRefresh from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://www.ofijan.com/',
  plugins: [
    ReactRefresh(),
   
  ],
  optimizeDeps: {
    include: ['@workspace/ckeditor5-custom-build'],
  },
  build: {
    commonjsOptions: {
      include: [/@workspace\/ckeditor5-custom-build/, /node_modules/],
    }
  }
});