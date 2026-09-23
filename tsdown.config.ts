import { defineConfig } from 'tsdown'

export default defineConfig({
  banner: {
    dts: `/// <reference lib="dom" />
/*!
 * Includes webpack-chain declarations adapted under MPL-2.0.
 * See LICENSE.webpack-chain and src/config/packages/webpack-chain.ts.
 */`,
  },
  clean: true,
  dts: true,
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  platform: 'node',
  target: ['es2023', 'node22'],
})
