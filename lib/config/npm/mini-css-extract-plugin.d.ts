/// <reference lib="dom" />

/**
 * `mini-css-extract-plugin` 配置
 *
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin#plugin-options
 * @see https://github.com/webpack-contrib/mini-css-extract-plugin/blob/8b52feeac2e9d0b539feb1ccd08eaffdf01d50f5/types/index.d.ts#L106
 */

import type { AssetInfo, ChunkData } from 'webpack'

export type MiniCSSExtractPluginFileNameFn = (pathData: ChunkData, assetInfo: AssetInfo) => string

export type MiniCSSExtractPluginInsertFn = (linkTag: HTMLLinkElement) => void

export interface MiniCSSExtractPluginOptions {
  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#filename
   */
  filename?: string | MiniCSSExtractPluginFileNameFn

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#chunkfilename
   */
  chunkFilename?: string | MiniCSSExtractPluginFileNameFn

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#ignoreorder
   * @default false
   */
  ignoreOrder?: boolean

  /**
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin#insert
   * @default `document.head.appendChild(linkTag)`
   */
  insert?: string | MiniCSSExtractPluginInsertFn

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
