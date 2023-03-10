import { describe, expectTypeOf, it } from 'vitest'
import type { TaroConfig } from '../lib'
import { defineConfig } from '../lib'

describe('define', () => {
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
        cssLoaderOption: {},
        sassLoaderOption: {},
        lessLoaderOption: {},
        stylusLoaderOption: {},
        miniCssExtractPluginOption: {},
        mediaUrlLoaderOption: {},
        imageUrlLoaderOption: {},
        fontUrlLoaderOption: {},
      },
      rn: {
        appName: '',
        output: {},
        postcss: {},
        sass: {},
        less: {},
        stylus: {},
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
        optimizeMainPackage: {},
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
