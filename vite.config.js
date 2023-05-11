import { defineConfig } from 'vite'

import path from 'path';
import react from '@vitejs/plugin-react-swc';
import sass from 'sass';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});