import { defineConfig } from 'vite'
import * as path from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  base: "/sobremim",
  server: {
    host: '0.0.0.0'
  }
});