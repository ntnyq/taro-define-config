import { defineConfig } from 'tsdown'

export default defineConfig({
  clean: true,
  dts: {
    tsgo: true,
  },
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  platform: 'node',
  target: ['es2022', 'node18'],
})
