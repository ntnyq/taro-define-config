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
  insert?: string | ((htmlElement: HTMLElement, options: Record<string, any>) => void)

  /**
   * @see https://github.com/webpack-contrib/style-loader#styleTagTransform
   */
  styleTagTransform?:
    | string
    | ((css: string, styleElement: HTMLStyleElement, options: Record<string, any>) => void)

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
