import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./docs/.vitepress', import.meta.url)),
      '@components': fileURLToPath(
        new URL('./docs/.vitepress/components', import.meta.url)
      ),
      '@theme': fileURLToPath(
        new URL('./docs/.vitepress/theme', import.meta.url)
      ),
      '@utils': fileURLToPath(
        new URL('./docs/.vitepress/utils', import.meta.url)
      ),
    },
  },
  // 其他 Vite 配置选项
});
