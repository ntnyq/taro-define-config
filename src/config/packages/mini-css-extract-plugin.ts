/**
 * `mini-css-extract-plugin` 配置
 *
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin#plugin-options
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin/blob/master/types/index.d.ts
 * @compatibility 2.9.2
 */

import type { WebpackConfiguration } from './webpack'

export interface MiniCSSExtractPluginOptions {
  /**
   * determines the name of each output CSS file
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#filename
   */
  filename?: Required<WebpackConfiguration>['output']['filename']

  /**
   * determines the name of non-entry chunk files
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#chunkfilename
   */
  chunkFilename?: Required<WebpackConfiguration>['output']['chunkFilename']

  /**
   * Remove Order Warnings
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#ignoreorder
   * @default false
   */
  ignoreOrder?: boolean

  /**
   * Inserts the link tag at the given position for non-initial (async) CSS chunks
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#insert
   * @default `document.head.appendChild(linkTag)`
   */
  insert?: string | ((linkTag: HTMLLinkElement) => void)

  /**
   * attach given attributes with their values on <link> element, only for non-initial (async) chunks
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#attributes
   * @default {}
   */
  attributes?: Record<string, string>

  /**
   * This option allows loading asynchronous chunks with a custom link type, such as `<link type="text/css" ...>`
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#linktype
   * @default `text/css`
   */
  linkType?: false | string

  /**
   * Allows to enable/disable the runtime generation
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#runtime
   *
   * @default true
   */
  runtime?: boolean

  /**
   * Use a new webpack API to execute modules instead of child compilers
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#experimentalUseImportModule
   */
  experimentalUseImportModule?: boolean

  [key: string]: any
}
