/**
 * `stylus-loader` 配置
 *
 * @see https://github.com/webpack-contrib/stylus-loader#options
 */

import type { Buffer } from 'node:buffer'
import type { LoaderContext } from '../common'
import type { AnyFn } from '../../utility-types'
import type { StylusOptions } from './stylus'

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

export type StylusLoaderStylusOptionsFn = (loaderContext: LoaderContext<any>) =>
  | string[]
  | {
      paths: string[]
    }

export type StylusLoaderAdditionalData = (
  content: string | Buffer,
  loaderContex: LoaderContext<any>,
  meta: any,
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
  implementation?: string | AnyFn

  [key: string]: any
}
