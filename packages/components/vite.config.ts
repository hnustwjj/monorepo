import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

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
      dts({
        tsConfigFilePath: './tsconfig.json',
        outputDir: './dist/types',
      }),
    ],
  },
)
