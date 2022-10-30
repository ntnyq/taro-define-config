import { expectTypeOf } from 'expect-type'
import { describe, it } from 'vitest'
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
      h5: {},
      rn: {},
      mini: {},
    })).toMatchTypeOf<TaroConfig>()
  })
})
