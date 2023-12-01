import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  outDir: 'dist',
  clean: true,
  dts: true,
  minify: true,
  format: ['cjs', 'esm'],
  target: ['es2022', 'node18'],
})
