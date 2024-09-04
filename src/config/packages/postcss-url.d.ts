/**
 * `postcss-url` 配置
 *
 * @see https://github.com/postcss/postcss-url
 */

import type { Buffer } from 'node:buffer'
import type { LiteralUnion } from '../../utility-types'

export type PostCSSUrlUrl = LiteralUnion<'copy' | 'inline' | 'rebase'>

export interface PostCSSUrlUrlAsset {
  url: string
  pathname?: string
  absolutePath?: string
  relativePath?: string
  search?: string
  hash?: string
}

export interface PostCSSUrlUrlDir {
  from?: string
  to?: string
  file?: string
}

export type PostCSSUrlTransformFn = (asset: PostCSSUrlUrlAsset, dir: PostCSSUrlUrlDir) => string

export type PostcssUrlFilterFn = (file: string) => boolean

export type PostcssUrlHashOptionsMethod = LiteralUnion<'xxhash32' | 'xxhash64'>

export type PostcssUrlHashOptionsMethodFn = (file: Buffer) => string

export interface PostcssUrlHashOptions {
  method?: PostcssUrlHashOptionsMethod | PostcssUrlHashOptionsMethodFn
  shrink?: number
  append?: boolean
}

export interface PostcssUrlOptions {
  /**
   * @see https://github.com/postcss/postcss-url#url
   * @default `rebase`
   */
  url?: PostCSSUrlUrl | PostCSSUrlTransformFn

  /**
   * @see https://github.com/postcss/postcss-url#maxsize
   */
  maxSize?: number

  /**
   * @see https://github.com/postcss/postcss-url#ignorefragmentwarning
   * @default false
   */
  ignoreFragmentWarning?: boolean

  /**
   * @default false
   */
  optimizeSvgEncode?: boolean

  /**
   * @see https://github.com/postcss/postcss-url#filter
   */
  filter?: string | RegExp | PostcssUrlFilterFn

  /**
   * @see https://github.com/postcss/postcss-url#includeurifragment
   * @default false
   */
  includeUriFragment?: boolean

  /**
   * @see https://github.com/postcss/postcss-url#fallback
   */
  fallback?: PostCSSUrlTransformFn

  /**
   * @see https://github.com/postcss/postcss-url#basepath
   */
  basePath?: string | string[]

  /**
   * @see https://github.com/postcss/postcss-url#assetspath
   * @default false
   */
  assetsPath?: boolean | string

  /**
   * @see https://github.com/postcss/postcss-url#usehash
   * @default false
   */
  useHash?: boolean

  /**
   * @see https://github.com/postcss/postcss-url#hashoptions
   */
  hashOptions?: PostcssUrlHashOptions

  [key: string]: any
}
