import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig(
  {
    build: {
      rollupOptions: {
        external: ['vue'],
      },
      lib: {
        entry: './src/main.ts',
        formats: ['es', 'cjs'],
      },
    },
    plugins: [
      vue(),
    ],
  },
)
