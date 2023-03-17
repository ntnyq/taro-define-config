import { expectTypeOf, it } from 'vitest'
import { defineConfig } from '../lib'
import type { TaroConfig } from '../lib'

it('define empty config', () => {
  expectTypeOf(defineConfig({})).toEqualTypeOf<TaroConfig>()
})

it('define base config', () => {
  expectTypeOf(
    defineConfig({
      deviceRatio: {},
      compiler: {
        type: 'webpack4',
      },
      alias: {},
      env: {},
      defineConstants: {},
      cache: {},
      logger: {},
      copy: {},
      sass: {},
      plugins: [],
      presets: [],
      terser: {},
      esbuild: {},
      csso: {},
      h5: {},
      rn: {},
      mini: {},
    }),
  ).toMatchTypeOf<TaroConfig>()
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
          autoprefixer: {},
          pxtransform: {},
          htmltransform: {},
          cssModules: {},
        },
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
      },
    }),
  ).toMatchTypeOf<TaroConfig>()
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
  ).toMatchTypeOf<TaroConfig>()
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
          autoprefixer: {},
          cssModules: {},
          url: {},
          pxtransform: {},
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
  ).toMatchTypeOf<TaroConfig>()
})
