import { defineConfig } from 'vite'; // Добавьте импорт
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    historyApiFallback: true,
    port: 5173
  }
});