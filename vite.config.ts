import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  // Base path is the repository name so the app works when served from
  // GitHub Pages at https://<user>.github.io/Bamboutos-Menoua/
  base: process.env.VITE_BASE_PATH || '/Bamboutos-Menoua/',
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
