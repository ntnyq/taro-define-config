/**
 * `css-loader` 配置
 *
 * @see https://github.com/webpack-contrib/css-loader#options
 * @compatibility 7.1.4
 */

import type { Awaitable, LiteralUnion } from '../../utils'
import type { WebpackLoaderContext } from './webpack'

export interface CSSLoaderUrl {
  filter: (url: string, resourcePath: string) => boolean
}

export interface CSSLoaderImport {
  filter: (
    url: string,
    media: string,
    resourcePath: string,
    supports?: string,
    layer?: string,
  ) => boolean
}

export type CSSLoaderModulesUnion = LiteralUnion<
  'global' | 'icss' | 'local' | 'pure'
>

export type CSSLoaderModulesExportLocalsConvention = LiteralUnion<
  | 'as-is'
  | 'asIs'
  | 'camel-case-only'
  | 'camel-case'
  | 'camelCase'
  | 'camelCaseOnly'
  | 'dashes-only'
  | 'dashes'
  | 'dashesOnly'
>

export interface CSSLoaderModulesObject {
  /**
   * @see https://github.com/webpack-contrib/css-loader#auto
   */
  auto?:
    | boolean
    | RegExp
    | ((
        resourcePath: string,
        resourceQuery: string,
        resourceFragment: string,
      ) => boolean)

  /**
   * @see https://github.com/webpack-contrib/css-loader#mode
   * @default `local`
   */
  mode?:
    | CSSLoaderModulesUnion
    | ((
        resourcePath: string,
        resourceQuery: string,
        resourceFragment: string,
      ) => CSSLoaderModulesUnion)

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidentname
   * @default `hash:base64`
   */
  localIdentName?: string

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidentcontext
   * @default `compiler.context`
   */
  localIdentContext?: string

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidenthashsalt
   */
  localIdentHashSalt?: string

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidenthashfunction
   * @default `md4`
   */
  localIdentHashFunction?: string

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidenthashdigest
   * @default `hex`
   */
  localIdentHashDigest?: string

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidenthashdigestlength
   * @default 20
   */
  localIdentHashDigestLength?: number

  /**
   * @see https://github.com/webpack-contrib/css-loader#localidentregexp
   */
  localIdentRegExp?: string | RegExp

  /**
   * @see https://github.com/webpack-contrib/css-loader#getlocalident
   */
  getLocalIdent?: (
    loaderContext: WebpackLoaderContext,
    localIdentName: string,
    localName: string,
  ) => string

  /**
   * @see https://github.com/webpack-contrib/css-loader#namedexport
   */
  namedExport?: boolean

  /**
   * @see https://github.com/webpack-contrib/css-loader#exportglobals
   */
  exportGlobals?: boolean

  /**
   * @see https://github.com/webpack-contrib/css-loader#exportlocalsconvention
   */
  exportLocalsConvention?:
    | CSSLoaderModulesExportLocalsConvention
    | ((name: string) => string)

  /**
   * @see https://github.com/webpack-contrib/css-loader#exportonlylocals
   */
  exportOnlyLocals?: boolean

  /**
   * @see https://github.com/webpack-contrib/css-loader#getjson
   */
  getJSON?: ({
    resourcePath,
    imports,
    exports,
    replacements,
  }: {
    resourcePath: string
    exports: Array<{
      name: string
      value: string
    }>
    imports: Array<{
      icss: boolean
      importName: string
      index: number
      type: string
      url: string
    }>
    replacements: Array<{
      importName: string
      localName: string
      replacementName: string
    }>
  }) => Awaitable<void>
}

export type CSSLoaderExportType = LiteralUnion<
  'array' | 'css-style-sheet' | 'string'
>

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
  modules?: boolean | CSSLoaderModulesObject | CSSLoaderModulesUnion

  /**
   * @see https://github.com/webpack-contrib/css-loader#sourcemap
   * @default compiler.devtool
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
