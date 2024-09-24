/**
 * `css-loader` 配置
 *
 * @see https://github.com/webpack-contrib/css-loader#options
 */

import type { LiteralUnion } from '../../utility-types'
import type { WebpackLoaderContext } from './webpack'

export interface CSSLoaderUrl {
  filter: (url: string, resourcePath: string) => boolean
}

export interface CSSLoaderImport {
  filter: (url: string, media?: string, resourcePath?: string) => boolean
}

export type CSSLoaderModulesUnion = LiteralUnion<'local' | 'global' | 'pure' | 'icss'>

export type CSSLoaderModulesExportLocalsConvention = LiteralUnion<
  'asIs' | 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'
>

export interface CSSLoaderModulesObject {
  auto?: boolean | RegExp | ((resourcePath: string) => boolean)

  mode?: CSSLoaderModulesUnion | ((resourcePath: string) => CSSLoaderModulesUnion)

  localIdentName?: string
  localIdentContext?: string
  localIdentHashSalt?: string
  localIdentHashFunction?: string
  localIdentHashDigest?: string
  localIdentRegExp?: string | RegExp

  getLocalIdent?: (
    loaderContext: WebpackLoaderContext<any>,
    localIdentName: string,
    localName: string,
  ) => string

  namedExport?: boolean

  exportGlobals?: boolean

  exportLocalsConvention?: CSSLoaderModulesExportLocalsConvention | ((name: string) => string)

  exportOnlyLocals?: boolean
}

export type CSSLoaderExportType = LiteralUnion<'array' | 'string' | 'css-style-sheet'>

export interface CSSLoaderOptions {
  /**
   * @see https://github.com/webpack-contrib/css-loader#url
   * @default true
   */
  url?: boolean | CSSLoaderUrl

  /**
   * @see https://github.com/webpack-contrib/css-loader#import
   * @default true
   */
  import?: boolean | CSSLoaderImport

  /**
   * @see https://github.com/webpack-contrib/css-loader#modules
   */
  modules?: boolean | CSSLoaderModulesUnion | CSSLoaderModulesObject

  /**
   * @see https://github.com/webpack-contrib/css-loader#sourcemap
   */
  sourceMap?: boolean

  /**
   * @see https://github.com/webpack-contrib/css-loader#importloaders
   * @default 0
   */
  importLoaders?: number

  /**
   * @see https://github.com/webpack-contrib/css-loader#esmodule
   * @default true
   */
  esModule?: boolean

  /**
   * @see https://github.com/webpack-contrib/css-loader#exporttype
   * @default `array`
   */
  exportType?: CSSLoaderExportType

  [key: string]: any
}
