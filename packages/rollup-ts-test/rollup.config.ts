// rollup.config.js
import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import json from '@rollup/plugin-json'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.ts',
  output: [{
    dir: 'dist',
    format: 'cjs',
  }],
  plugins: [
    nodeResolve(),
    json(),
    commonjs(),
    typescript({
      compilerOptions: {
        lib: ['es5', 'es6', 'dom'],
        target: 'es5',
      },
    }),
  ],
},
)
