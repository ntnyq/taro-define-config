import { describe, expectTypeOf, it } from 'vitest'
import type { TaroConfig } from '../lib'
import { defineConfig } from '../lib'

describe(`define`, () => {
  it(`define empty config`, () => {
    expectTypeOf(defineConfig({})).toEqualTypeOf<TaroConfig>()
  })

  it(`define taro config`, () => {
    expectTypeOf(defineConfig({
      compiler: {},
      defineConstants: {},
      cache: {},
      logger: {},
      copy: {},
      sass: {},
      plugins: [],
      presets: [],
      h5: {
        postcss: {
          autoprefixer: {},
          pxtransform: {},
          htmltransform: {},
          cssModules: {},
        },
      },
      rn: {},
      mini: {
        postcss: {
          autoprefixer: {},
          cssModules: {},
          url: {},
          pxtransform: {},
        },
      },
    })).toMatchTypeOf<TaroConfig>()
  })
})
