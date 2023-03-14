/**
 * `stylus-loader` 配置
 *
 * @see https://github.com/webpack-contrib/stylus-loader#options
 */

import type { LoaderContext } from '../common'

export type StylusOptionsDefineItemValue = string | number | boolean

export type StylusOptionsDefineItem = [string, StylusOptionsDefineItemValue, boolean?]

export interface StylusOptionsResolveURL {
  paths?: string[]

  nocheck?: boolean
}

/**
 * @see https://github.com/webpack-contrib/stylus-loader#object
 */
export interface StylusLoaderStylusOptions {
  use?: string[] | Function[]

  include?: string[]

  import?: string[]

  define?: StylusOptionsDefineItem[]

  includeCSS?: boolean

  resolveURL?: boolean | StylusOptionsResolveURL

  lineNumbers?: boolean

  hoistAtrules?: boolean

  compress?: boolean

  paths?: string[]
}

export type StylusLoaderStylusOptionsFn = (loaderContext: LoaderContext) =>
  | string[]
  | {
      paths: string[]
    }

export type StylusLoaderAdditionalData = (
  content: string | Buffer,
  loaderContext?: LoaderContext,
  meta?: any,
) => string

export interface StylusLoaderOptions {
  /**
   * @see https://github.com/webpack-contrib/stylus-loader#stylusOptions
   * @default {}
   */
  stylusOptions?: StylusLoaderStylusOptions | StylusLoaderStylusOptionsFn

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#sourcemap
   */
  sourceMap?: boolean

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#webpackimporter
   */
  webpackImporter?: boolean

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#additionalData
   */
  additionalData?: string | StylusLoaderAdditionalData

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#implementation
   */
  implementation?: string | Function

  [key: string]: any
}
