/**
 * `mini-css-extract-plugin` 配置
 *
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin#plugin-options
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin/blob/master/types/index.d.ts
 */

import type { WebpackConfiguration } from './webpack'

export interface MiniCSSExtractPluginOptions {
  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#filename
   */
  filename?: Required<WebpackConfiguration>['output']['filename']

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#chunkfilename
   */
  chunkFilename?: Required<WebpackConfiguration>['output']['chunkFilename']

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#ignoreorder
   * @default false
   */
  ignoreOrder?: boolean

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#insert
   * @default `document.head.appendChild(linkTag)`
   */
  insert?: string | ((linkTag: HTMLLinkElement) => void)

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#attributes
   * @default {}
   */
  attributes?: Record<string, string>

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#linktype
   * @default `text/css`
   */
  linkType?: string | false

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#runtime
   * @default true
   */
  runtime?: boolean

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#experimentalUseImportModule
   */
  experimentalUseImportModule?: boolean

  [key: string]: any
}
