/// <reference lib="dom" />
/**
 * `style-loader` 配置
 *
 * @see https://github.com/webpack-contrib/style-loader#options
 */

import type { LiteralUnion } from '../../utility-types'

export type StyleLoaderInjectType = LiteralUnion<
  | 'styleTag'
  | 'singletonStyleTag'
  | 'autoStyleTag'
  | 'lazyStyleTag'
  | 'lazySingletonStyleTag'
  | 'lazyAutoStyleTag'
  | 'linkTag'
>

export type StyleLoaderInsertFn = (htmlElement: HTMLElement, options: Record<string, any>) => void

export type StyleLoaderStyleTagTransformFn = (
  css: string,
  styleElement: HTMLStyleElement,
  options?: Record<string, any>,
) => void

export interface StyleLoaderOptions {
  /**
   * @see https://github.com/webpack-contrib/style-loader#injecttype
   * @default `styleTag`
   */
  injectType?: StyleLoaderInjectType

  /**
   * @see https://github.com/webpack-contrib/style-loader#attributes
   */
  attributes?: Record<string, string>

  /**
   * @see https://github.com/webpack-contrib/style-loader#insert
   * @default `head`
   */
  insert?: string | StyleLoaderInsertFn

  /**
   * @see https://github.com/webpack-contrib/style-loader#styleTagTransform
   */
  styleTagTransform?: string | StyleLoaderStyleTagTransformFn

  /**
   * @see https://github.com/webpack-contrib/style-loader#base
   */
  base?: number

  /**
   * @see https://github.com/webpack-contrib/style-loader#esmodule
   * @default true
   */
  esModule?: boolean

  [key: string]: any
}
