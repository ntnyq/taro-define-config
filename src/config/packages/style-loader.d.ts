/// <reference lib="dom" />
/**
 * `style-loader` 配置
 *
 * @see https://github.com/webpack-contrib/style-loader#options
 * @compatibility 4.0.0
 */

import type { LiteralUnion } from '../../utility-types'

export type StyleLoaderInjectType = LiteralUnion<
  | 'autoStyleTag'
  | 'lazyAutoStyleTag'
  | 'lazySingletonStyleTag'
  | 'lazyStyleTag'
  | 'linkTag'
  | 'singletonStyleTag'
  | 'styleTag'
>

export interface StyleLoaderOptions {
  /**
   * Allows to setup how styles will be injected into the DOM
   *
   * @see https://github.com/webpack-contrib/style-loader#injecttype
   * @default `styleTag`
   */
  injectType?: StyleLoaderInjectType

  /**
   * attach given attributes with their values on <style> / <link> element
   *
   * @see https://github.com/webpack-contrib/style-loader#attributes
   */
  attributes?: Record<string, string>

  /**
   * @see https://github.com/webpack-contrib/style-loader#insert
   * @default `head`
   */
  insert?:
    | string
    | ((htmlElement: HTMLElement, options: Record<string, any>) => void)

  /**
   * @see https://github.com/webpack-contrib/style-loader#styleTagTransform
   */
  styleTagTransform?:
    | string
    | ((
        css: string,
        styleElement: HTMLStyleElement,
        options: Record<string, any>,
      ) => void)

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
