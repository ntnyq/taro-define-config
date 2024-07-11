import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  clean: true,
  dts: true,
  format: ['cjs', 'esm'],
  target: ['es2022', 'node18'],
})
