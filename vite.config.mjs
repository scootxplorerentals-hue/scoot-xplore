import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  // assetsInclude: ['**/*.png'], // 👈 allow uppercase PNG imports
  // assetsInclude: ["**/*.jpeg"], // 👈 allow uppercase .JPEG files
  // assetsInclude: ["**/*.png"], // 👈 tell Vite to accept .PNG
  // assetsInclude: ["**/*.webp"], // 👈 allow uppercase .WEBP imports
});