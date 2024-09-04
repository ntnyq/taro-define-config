/**
 * `css-loader` 配置
 *
 * @see https://github.com/webpack-contrib/css-loader#options
 */

import type { LiteralUnion } from '../../utility-types'
import type { LoaderContext } from '../common'

export type CSSLoaderUrlFilterFn = (url: string, resourcePath: string) => boolean

export interface CSSLoaderUrl {
  filter: CSSLoaderUrlFilterFn
}

export type CSSLoaderImportFilterFn = (
  url: string,
  media?: string,
  resourcePath?: string,
) => boolean

export interface CSSLoaderImport {
  filter: CSSLoaderImportFilterFn
}

export type CSSLoaderModulesString = LiteralUnion<'local' | 'global' | 'pure' | 'icss'>

export type CSSLoaderModulesAutoFn = (resourcePath: string) => boolean

export type CSSLoaderModulesModeFn = (resourcePath: string) => CSSLoaderModulesString

export type CSSLoaderModulesGetLocalIdentFn = (
  loaderContext: LoaderContext<any>,
  localIdentName: string,
  localName: string,
) => string

export type CSSLoaderModulesExportLocalsConvention = LiteralUnion<
  'asIs' | 'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'
>

export type CSSLoaderModulesExportLocalsConventionFn = (name: string) => string

export interface CSSLoaderModulesObject {
  auto?: boolean | RegExp | CSSLoaderModulesAutoFn

  mode?: CSSLoaderModulesString | CSSLoaderModulesModeFn

  localIdentName?: string
  localIdentContext?: string
  localIdentHashSalt?: string
  localIdentHashFunction?: string
  localIdentHashDigest?: string
  localIdentRegExp?: string | RegExp

  getLocalIdent?: CSSLoaderModulesGetLocalIdentFn

  namedExport?: boolean

  exportGlobals?: boolean

  exportLocalsConvention?:
    | CSSLoaderModulesExportLocalsConvention
    | CSSLoaderModulesExportLocalsConventionFn

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
  modules?: boolean | CSSLoaderModulesString | CSSLoaderModulesObject

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
