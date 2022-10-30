import type { LiteralUnion } from '../../utility-types'

export type JSMinimizer = LiteralUnion<'terser' | 'esbuild'>

// TODO: https://github.com/terser/terser#minify-options
export type TerserConfig = Record<string, any>

export interface Terser {
  /**
   * 是否开启 `JS` 代码压缩
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#terserenable
   */
  enable?: boolean

  /**
   * `terser` 的具体配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#terserconfig
   */
  config?: TerserConfig
}

// TODO: https://github.com/privatenumber/esbuild-loader#minifyplugin
export type EsbuildMinifyConfig = Record<string, any>

export interface EsbuildMinify {
  /**
   * 是否开启 `JS` 代码压缩
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#esbuildminifyenable
   */
  enable?: boolean

  /**
   * `Esbuild MinifyPlugin` 具体配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#esbuildminifyconfig
   */
  config?: EsbuildMinifyConfig
}

export interface Esbuild {
  /**
   * 配置 `ESBuildMinifyPlugin`
   */
  minify?: EsbuildMinify
}
