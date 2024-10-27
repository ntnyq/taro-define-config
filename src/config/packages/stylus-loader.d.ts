/**
 * `stylus-loader` 配置
 *
 * @see https://github.com/webpack-contrib/stylus-loader#options
 * @compatibility 8.1.1
 */

import type { Buffer } from 'node:buffer'
import type { AnyFn } from '../../utility-types'
import type { StylusOptions } from './stylus'
import type { WebpackLoaderContext } from './webpack'

export interface StylusOptionsResolveURL {
  paths?: string[]
  nocheck?: boolean
}

/**
 * @see https://github.com/webpack-contrib/stylus-loader#object
 */
export interface StylusLoaderStylusOptions extends StylusOptions {
  resolveURL?: boolean | StylusOptionsResolveURL

  compress?: boolean

  paths?: string[]
}

export interface StylusLoaderOptions {
  /**
   * @see https://github.com/webpack-contrib/stylus-loader#stylusOptions
   * @default {}
   */
  stylusOptions?:
    | StylusLoaderStylusOptions
    | ((loaderContext: WebpackLoaderContext) =>
        | string[]
        | {
            paths: string[]
          })

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#sourcemap
   */
  sourceMap?: boolean

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#webpackimporter
   * @default true
   */
  webpackImporter?: boolean

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#additionalData
   */
  additionalData?:
    | string
    | ((content: string | Buffer, loaderContex: WebpackLoaderContext, meta: any) => string)

  /**
   * @see https://github.com/webpack-contrib/stylus-loader#implementation
   */
  implementation?: string | AnyFn

  [key: string]: any
}
