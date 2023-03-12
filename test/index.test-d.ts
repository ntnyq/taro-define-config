import { describe, expectTypeOf, it } from 'vitest'
import type { TaroConfig } from '../lib'
import { defineConfig } from '../lib'

describe('typecheck', () => {
  it('define empty config', () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<TaroConfig>()
  })

  it('define taro config', () => {
    expectTypeOf(defineConfig({
      deviceRatio: {},
      compiler: {},
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
    })).toMatchTypeOf<TaroConfig>()
  })
})
