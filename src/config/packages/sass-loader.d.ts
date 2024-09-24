/**
 * `sass-loader` 配置
 *
 * @see https://github.com/webpack-contrib/sass-loader#options
 */

import type { Buffer } from 'node:buffer'
import type { WebpackLoaderContext } from './webpack'

export type SassLoaderSassOptions = Record<string, any>

export interface SassLoaderOptions {
  /**
   * @see https://github.com/webpack-contrib/sass-loader#implementation
   * @default `sass`
   */
  implementation?: string | object

  /**
   * @see https://github.com/webpack-contrib/sass-loader#sassoptions
   */
  sassOptions?:
    | SassLoaderSassOptions
    | ((
        content: string | Buffer,
        loaderContext: WebpackLoaderContext,
        meta: any,
      ) => SassLoaderSassOptions)

  /**
   * @see https://github.com/webpack-contrib/sass-loader#sourcemap
   */
  sourceMap?: boolean

  /**
   * @see https://github.com/webpack-contrib/sass-loader#additionaldata
   */
  additionalData?:
    | string
    | ((content: string | Buffer, loaderContext: WebpackLoaderContext) => string)

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

  [key: string]: any
}
