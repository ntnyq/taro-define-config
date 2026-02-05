import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  platform: 'node',
  target: ['es2022', 'node18'],
  dts: {
    tsgo: true,
  },
})
