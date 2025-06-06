import { defineConfig } from 'taro-define-config'
import { expectTypeOf, it } from 'vitest'
import type {
  TaroConfig,
  TaroConfigExport,
  TaroConfigFnObject,
} from 'taro-define-config'

declare module 'taro-define-config' {
  export interface CustomPluginOptionsMap {
    'taro-plugin-custom': {
      enable?: boolean
    }
  }
}

const getConfigurablePluginConfig = () => ({
  enable: Math.random() > 0.5,
  config: {},
})

it('define object config', () => {
  expectTypeOf(defineConfig({})).toEqualTypeOf<TaroConfig>()
})

it('define function config', () => {
  expectTypeOf(defineConfig(() => ({}))).toEqualTypeOf<TaroConfigFnObject>()
})

it('define async function config', () => {
  // eslint-disable-next-line @typescript-eslint/require-await
  expectTypeOf(defineConfig(async () => ({}))).toEqualTypeOf<TaroConfigExport>()
})

it('define base config', () => {
  expectTypeOf(
    defineConfig({
      deviceRatio: {},
      compiler: {
        type: 'webpack5',
      },
      alias: {},
      env: {},
      jsMinimizer: 'esbuild',
      cssMinimizer: 'csso',
      defineConstants: {},
      cache: {},
      logger: {},
      copy: {},
      sass: {},
      plugins: [
        '@tarojs/plugin-http',
        ['@tarojs/plugin-html'],
        [
          '@tarojs/plugin-inject',
          {
            asyncApis: [],
          },
        ],
        [
          'taro-plugin-custom',
          {
            enable: true,
          },
        ],
        [
          '@tarojs/plugin-indie',
          () => ({
            pathStyleImportWithCustomRule: () => true,
          }),
        ],
      ],
      presets: [],
      terser: {
        enable: true,
        config: {
          ecma: 2015,
        },
      },
      esbuild: {
        minify: getConfigurablePluginConfig(),
      },
      csso: getConfigurablePluginConfig(),
      h5: {},
      rn: {},
      mini: {},
    }),
  ).toExtend<TaroConfigExport>()
})

it('define platform h5 config', () => {
  expectTypeOf(
    defineConfig({
      h5: {
        entry: {},
        output: {},
        devServer: {},
        router: {},
        compile: {},
        postcss: {
          autoprefixer: getConfigurablePluginConfig(),
          pxtransform: getConfigurablePluginConfig(),
          htmltransform: getConfigurablePluginConfig(),
          cssModules: getConfigurablePluginConfig(),
          url: getConfigurablePluginConfig(),
        },
        enableExtract: false,
        enableSourceMap: false,
        sourceMapType: 'cheap-source-map',
        useDeprecatedAdapterComponent: true,
        htmlPluginOption: {},
        styleLoaderOption: {},
        cssLoaderOption: {
          modules: {},
        },
        sassLoaderOption: {},
        lessLoaderOption: {},
        stylusLoaderOption: {
          stylusOptions: {
            define: [],
          },
        },
        miniCssExtractPluginOption: {},
        mediaUrlLoaderOption: {},
        imageUrlLoaderOption: {},
        fontUrlLoaderOption: {},
        webpackChain(chain) {
          chain.devtool('#cheap-eval-source-map')
        },
      },
    }),
  ).toExtend<TaroConfigExport>()
})

it('define platform rn config', () => {
  expectTypeOf(
    defineConfig({
      rn: {
        appName: '',
        output: {},
        postcss: {},
        sass: {
          options: {},
        },
        less: {
          options: {},
        },
        stylus: {
          options: {},
        },
        resolve: {
          include: [],
        },
        enableMultipleClassName: false,
        enableMergeStyle: true,
        enableSvgTransform: true,
      },
    }),
  ).toExtend<TaroConfigExport>()
})

it('define platform mini config', () => {
  expectTypeOf(
    defineConfig({
      mini: {
        hot: true,
        debugReact: false,
        compile: {},
        minifyXML: {},
        commonChunks: [],
        optimizeMainPackage: {
          enable: false,
          exclude: [],
        },
        postcss: {
          autoprefixer: getConfigurablePluginConfig(),
          cssModules: getConfigurablePluginConfig(),
          url: getConfigurablePluginConfig(),
          pxtransform: getConfigurablePluginConfig(),
        },
        styleLoaderOption: {},
        cssLoaderOption: {},
        lessLoaderOption: {},
        sassLoaderOption: {},
        stylusLoaderOption: {},
        miniCssExtractPluginOption: {},
        imageUrlLoaderOption: {},
        mediaUrlLoaderOption: {},
        fontUrlLoaderOption: {},
      },
    }),
  ).toExtend<TaroConfigExport>()
})

it('define platform harmony config', () => {
  expectTypeOf(
    defineConfig({
      harmony: {
        projectPath: '/app',
      },
    }),
  ).toExtend<TaroConfigExport>()
})
