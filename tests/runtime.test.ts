import { createRequire } from 'node:module'
import { defineConfig } from 'taro-define-config'
import type { ChainableWebpackConfig } from 'taro-define-config'
import { describe, expect, it } from 'vitest'
import webpack from 'webpack'

const require = createRequire(import.meta.url)
// Exercise the real runtime using the adapted declarations, not its Webpack 4 types.
const WebpackChain: new () => ChainableWebpackConfig = require('webpack-chain')
const commonjs: typeof import('taro-define-config') = require('taro-define-config')

describe.each([
  ['ESM', defineConfig],
  ['CommonJS', commonjs.defineConfig],
] as const)('%s entry', (_format, define) => {
  it.each([
    ['object', { projectName: 'example' }],
    ['promise', Promise.resolve({ projectName: 'example' })],
    ['factory', () => ({ projectName: 'example' })],
    ['async factory', async () => ({ projectName: 'example' })],
  ] as const)('preserves %s identity', (_kind, config) => {
    expect(define(config)).toBe(config)
  })
})

describe('webpack-chain compatibility', () => {
  it('uses the declared chain API with the real runtime', () => {
    const chain = new WebpackChain()
    defineConfig({
      mini: {
        webpackChain(configuration, compiler) {
          configuration
            .plugin('define')
            .use(compiler.DefinePlugin, [{ __DEV__: true }])
          configuration.module
            .rule('scripts')
            .test(/\.ts$/u)
            .use('ts')
            .loader('ts-loader')
          configuration.output.filename('[name].js')
          configuration.resolve.alias.set('@', '/app/src')
        },
      },
    }).mini?.webpackChain?.(chain, webpack, 'ENTRY')

    expect(chain.toConfig()).toMatchObject({
      output: { filename: '[name].js' },
      resolve: { alias: { '@': '/app/src' } },
      plugins: [expect.any(webpack.DefinePlugin)],
      module: { rules: [{ test: /\.ts$/u, use: [{ loader: 'ts-loader' }] }] },
    })
  })
})
