// These type tests assert rejection and control-flow narrowing without runtime assertions.
/* oxlint-disable vitest/expect-expect, vitest/no-conditional-in-test, unicorn/consistent-function-scoping */

import type { Buffer } from 'node:buffer'
import { defineConfig } from 'taro-define-config'
import type {
  Plugin,
  PluginTuple,
  SassLoaderOptions,
  TaroConfig,
  TaroConfigEnv,
  TaroConfigFn,
  TaroConfigFnPromise,
  URLLoaderOptions,
  WebpackLoaderContext,
  WebpackMerge,
} from 'taro-define-config'
import { describe, expectTypeOf, it } from 'vitest'

declare module 'taro-define-config' {
  export interface CustomPluginOptionsMap {
    'taro-plugin-required': {
      token: string
    }
    'taro-plugin-empty': {}
    'taro-plugin-union': { file: string } | { source: string }
  }
}

describe('compiler selection', () => {
  it('inherits Vite options in every platform', () => {
    const config = defineConfig({
      compiler: 'vite',
      h5: {
        legacy: true,
        devServer: { strictPort: true },
        output: { assetFileNames: '[name][extname]' },
      },
      mini: { output: { chunkFileNames: '[name].js' } },
      harmony: {
        projectPath: '/app',
        output: { chunkFileNames: '[name].js' },
      },
    })
    expectTypeOf(config).toEqualTypeOf<TaroConfig<'vite'>>()
    expectTypeOf(defineConfig<'vite'>({ h5: { legacy: true } })).toEqualTypeOf<
      TaroConfig<'vite'>
    >()
  })

  it('preserves compiler selection in functions and promises', () => {
    const config: TaroConfig<'vite'> = {
      compiler: { type: 'vite' },
      h5: { devServer: { strictPort: true } },
      mini: { output: { chunkFileNames: '[name].js' } },
    }
    expectTypeOf(defineConfig(() => config)).returns.toEqualTypeOf<
      TaroConfig<'vite'>
    >()
    expectTypeOf(defineConfig(Promise.resolve(config))).toEqualTypeOf<
      Promise<TaroConfig<'vite'>>
    >()
    expectTypeOf(defineConfig(async () => config)).toEqualTypeOf<
      TaroConfigFnPromise<'vite'>
    >()
  })

  it('supports independent platform compiler overrides', () => {
    defineConfig({
      h5: { compiler: 'vite', legacy: true },
      mini: {
        compiler: { type: 'vite' },
        output: { chunkFileNames: '[name].js' },
      },
    })
    defineConfig<'vite'>({
      compiler: 'vite',
      h5: {
        compiler: { type: 'webpack5' },
        devServer: { setupMiddlewares: middlewares => middlewares },
      },
      mini: { compiler: 'webpack5', output: { chunkFilename: '[name].js' } },
    })
  })

  it('rejects Vite-only settings without selecting Vite', () => {
    // @ts-expect-error The inherited compiler is Webpack.
    defineConfig({ h5: { legacy: true } })
    // @ts-expect-error Webpack output does not support chunkFileNames.
    defineConfig({ mini: { output: { chunkFileNames: '[name].js' } } })
    // @ts-expect-error An explicit Webpack override cannot enable Vite legacy.
    defineConfig({ h5: { compiler: 'webpack5', legacy: true } })
  })
})

describe('plugin options', () => {
  it('accepts matching options, factories, and optionless plugins', () => {
    defineConfig({
      plugins: [
        '@tarojs/plugin-http',
        ['@tarojs/plugin-http', { enableCookie: true }],
        ['@tarojs/plugin-http', () => ({ enableCookie: true })],
        ['@tarojs/plugin-http', async () => ({ enableCookie: true })],
        ['taro-plugin-required', { token: 'secret' }],
        ['taro-plugin-required', async () => ({ token: 'secret' })],
        ['@tarojs/plugin-platform-xhs'],
        ['taro-plugin-empty'],
        ['taro-plugin-union', { file: 'config.json' }],
        ['taro-plugin-union', { source: '{}' }],
      ],
    })
  })

  it('rejects wrong names, option types, and cross-plugin options', () => {
    defineConfig({
      // @ts-expect-error enableCookie must be boolean.
      plugins: [['@tarojs/plugin-http', { enableCookie: 'yes' }]],
    })
    defineConfig({
      // @ts-expect-error HTTP options cannot use HTML plugin properties.
      plugins: [['@tarojs/plugin-http', { pxtransformBlackList: [] }]],
    })
    // @ts-expect-error Options cannot be a number.
    defineConfig({ plugins: [['@tarojs/plugin-http', 123]] })
    defineConfig({
      // @ts-expect-error Optionless plugins cannot accept arbitrary options.
      plugins: [['@tarojs/plugin-platform-xhs', { unknown: true }]],
    })
    // @ts-expect-error Custom plugin options are validated after augmentation.
    defineConfig({ plugins: [['taro-plugin-required', { token: 42 }]] })
    // @ts-expect-error Required custom options cannot be omitted from the object.
    defineConfig({ plugins: [['taro-plugin-required', {}]] })
    defineConfig({
      // @ts-expect-error Factory return values must match the selected plugin.
      plugins: [['taro-plugin-required', async () => ({ token: 42 })]],
    })
    // @ts-expect-error Unknown plugin names still require augmentation.
    defineConfig({ plugins: ['taro-plugin-unknown'] })
  })

  it('retains the relationship when narrowing exported tuples', () => {
    const inspectPlugin = (plugin: PluginTuple) => {
      if (
        plugin[0] === 'taro-plugin-required' &&
        typeof plugin[1] === 'object'
      ) {
        expectTypeOf(plugin[1].token).toEqualTypeOf<string>()
      }
    }
    expectTypeOf(inspectPlugin).parameter(0).toExtend<Plugin>()
  })
})

describe('loader callbacks', () => {
  it('provides the Sass loader context as the only argument', () => {
    const options: SassLoaderOptions = {
      sassOptions(context) {
        expectTypeOf(context).toEqualTypeOf<WebpackLoaderContext>()
        return { loadPaths: [context.rootContext] }
      },
    }
    expectTypeOf(options).toEqualTypeOf<SassLoaderOptions>()
    expectTypeOf<
      Extract<
        NonNullable<SassLoaderOptions['sassOptions']>,
        (...args: any[]) => any
      >
    >().parameters.toEqualTypeOf<[WebpackLoaderContext]>()
  })

  it('provides Buffer content before the URL metadata', () => {
    const options: URLLoaderOptions = {
      generator(content, mimetype, encoding, resourcePath) {
        expectTypeOf(content).toEqualTypeOf<Buffer>()
        expectTypeOf(mimetype).toEqualTypeOf<string>()
        expectTypeOf(encoding).toEqualTypeOf<string>()
        expectTypeOf(resourcePath).toEqualTypeOf<string>()
        return `data:${mimetype};base64,${content.toString('base64')}`
      },
    }
    expectTypeOf(options).toEqualTypeOf<URLLoaderOptions>()
  })
})

describe('config factories', () => {
  it('keeps async factories callable and contextually typed', () => {
    const config = defineConfig(async (merge, env) => {
      expectTypeOf(merge).toEqualTypeOf<WebpackMerge>()
      expectTypeOf(env).toEqualTypeOf<TaroConfigEnv>()
      return { projectName: env.mode }
    })
    expectTypeOf(config).toEqualTypeOf<TaroConfigFnPromise>()
    expectTypeOf(
      config(() => ({}), { mode: 'development', command: 'build' }),
    ).toEqualTypeOf<Promise<TaroConfig>>()
  })

  it('keeps sync-or-async factories callable', () => {
    const factory: TaroConfigFn = () =>
      Math.random() > 0.5 ? {} : Promise.resolve({})
    expectTypeOf(defineConfig(factory)).toEqualTypeOf<TaroConfigFn>()
  })
})
