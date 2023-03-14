/**
 * `sass-loader` 配置
 *
 * @see https://github.com/webpack-contrib/sass-loader#options
 */

import type { LoaderContext } from '../common'

export type SassLoaderAdditionalData = (
  content: string | Buffer,
  loaderContext?: LoaderContext,
) => string

export type SassLoaderSassOptions = Record<string, any>

export type SassLoaderSassOptionsFn = (
  content: string | Buffer,
  loaderContext?: LoaderContext,
  meta?: any,
) => SassLoaderSassOptions

export interface SassLoaderOptions {
  /**
   * @see https://github.com/webpack-contrib/sass-loader#implementation
   * @default `sass`
   */
  implementation?: string | object

  /**
   * @see https://github.com/webpack-contrib/sass-loader#sassoptions
   */
  sassOptions?: SassLoaderSassOptions | SassLoaderSassOptionsFn

  /**
   * @see https://github.com/webpack-contrib/sass-loader#sourcemap
   */
  sourceMap?: boolean

  /**
   * @see https://github.com/webpack-contrib/sass-loader#additionaldata
   */
  additionalData?: string | SassLoaderAdditionalData

  /**
   * @see https://github.com/webpack-contrib/sass-loader#webpackimporter
   * @default true
   */
  webpackImporter?: boolean

  /**
   * @see https://github.com/webpack-contrib/sass-loader#warnruleaswarning
   * @default false
   */
  warnRuleAsWarning?: boolean
}
