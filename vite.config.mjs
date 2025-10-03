import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  assetsInclude: ['**/*.PNG'], // 👈 allow uppercase PNG imports
  assetsInclude: ["**/*.JPEG"], // 👈 allow uppercase .JPEG files
  assetsInclude: ["**/*.PNG"], // 👈 tell Vite to accept .PNG
  assetsInclude: ["**/*.WEBP"], // 👈 allow uppercase .WEBP imports
});