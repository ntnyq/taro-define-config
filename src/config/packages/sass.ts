/**
 * `sass` 配置
 *
 * @see https://sass-lang.com/documentation/js-api/interfaces/Options
 */

import type {
  DeprecationOrId,
  Logger,
  NodePackageImporter,
  Version,
} from '@sass/types'
import type { AnyFn, LiteralUnion } from '../../utils'

type CallbackValue =
  | boolean
  | number
  | string
  | Array<boolean | number | string>
  | Record<PropertyKey, any>
type Context = {
  options: NodeSassOptions
  callback?: (result: CallbackValue) => void
  [data: string]: any
}
interface AsyncContext extends Context {
  callback: (result: CallbackValue) => void
}
interface SyncContext extends Context {
  callback: undefined
}
type ImporterReturnType =
  | Error
  | { contents: string; file?: string }
  | { file: string }
  | null
type AsyncImporter = (
  this: AsyncContext,
  url: string,
  prev: string,
  done: (data: ImporterReturnType) => void,
) => void
type SyncImporter = (
  this: SyncContext,
  url: string,
  prev: string,
) => ImporterReturnType

/**
 * Taro 配置项中 `sass` 配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail/#sass
 */
export interface TaroSassOptions {
  /**
   * 需要全局注入的 `scss` 文件的绝对路径
   * 当存在 {@link projectDirectory} 配置时，才支持传入相对路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sassresource
   */
  resource?: string | string[]

  /**
   * 项目根目录的绝对地址(若为小程序云开发模板，则应该是 `client` 目录)
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sassprojectdirectory
   */
  projectDirectory?: string

  /**
   * 全局 `scss` 变量，优先级高于 `resource`
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sassdata
   */
  data?: string

  [key: string]: any
}

interface CommonSassOptions {
  /**
   * Path to a file to compile
   * @description `unavailable` and will be ignored
   */
  file?: string

  /**
   * Handles when LibSass encounters the \@import directive
   *
   * @experimental
   */
  importer?: Array<AsyncImporter | SyncImporter> | AsyncImporter | SyncImporter

  /**
   * holds a collection of custom functions that may be invoked by the sass files being compiled
   *
   * @experimental
   */
  functions?: Record<string, AnyFn>

  /**
   * `true` values disable the inclusion of source map information in the output file
   *
   * @default false
   */
  omitSourceMapUrl?: boolean

  /**
   * Enables source map generation during render and renderSync
   */
  sourceMap?: boolean | string

  /**
   * `true` includes the contents in the source map information
   *
   * @default false
   */
  sourceMapContents?: boolean

  /**
   * `true` embeds the source map as a data URI
   *
   * @default false
   */
  sourceMapEmbed?: boolean

  /**
   * the value will be emitted as `sourceRoot` in the source map information
   */
  sourceMapRoot?: string
}

/**
 * `node-sass` 配置, `sass-loader` 仅支持部分配置
 *
 * @see https://www.npmjs.com/package/@types/node-sass?activeTab=code
 * @compatibility 9.0.0
 * @deprecated
 */
export interface NodeSassOptions extends CommonSassOptions {
  /**
   * A string to pass to compile
   * @description `unavailable` and will be ignored
   */
  data?: string

  /**
   * An array of paths that LibSass can look in to attempt to resolve your \@import declarations
   */
  includePaths?: string[]

  /**
   * true values enable Sass Indented Syntax for parsing the data string or file
   *
   * @default false
   */
  indentedSyntax?: boolean

  /**
   * Specify the intended location of the output file
   */
  outFile?: string | null

  /**
   * Determines the output format of the final CSS style
   *
   * @default `nested`
   */
  outputStyle?: LiteralUnion<'compact' | 'compressed' | 'expanded' | 'nested'>

  /**
   * determine whether to use space or tab character for indentation
   *
   * @default `space`
   */
  indentType?: LiteralUnion<'space' | 'tab'>

  /**
   * determine the number of spaces or tabs to be used for indentation, max is 10
   *
   * @default 2
   */
  indentWidth?: number

  /**
   * determine whether to use cr, crlf, lf or lfcr sequence for line break
   *
   * @default `lf`
   */
  linefeed?: LiteralUnion<'cf' | 'crlf' | 'if' | 'lfcr'>

  /**
   * determine how many digits after the decimal will be allowed
   *
   * @default 5
   */
  precision?: number

  /**
   * Enables the line number and file where a selector is defined to be emitted into the compiled CSS as a comment
   *
   * @default false
   */
  sourceComments?: boolean

  [key: string]: any
}

/**
 * `dart-sass` 配置, `sass-loader` 仅支持部分配置
 *
 * @see https://github.com/sass/dart-sass
 * @see https://www.npmjs.com/package/sass?activeTab=code
 * @compatibility 1.92.1
 */
export interface DartSassOptions extends CommonSassOptions {
  /**
   * A string to pass to compile
   * `unavailable` and will be ignored
   */
  data?: never

  /**
   * Paths in which to look for stylesheets loaded by rules like \@use and \@import.
   */
  loadPaths?: string[]

  /**
   * Specify the intended location of the output file
   */
  outFile?: string

  /**
   * Determines the output format of the final CSS style
   *
   * @default `expanded`
   * @deprecated use `style` instead
   */
  outputStyle?: LiteralUnion<'compressed' | 'expanded'>

  /**
   * Determines the output format of the final CSS style
   *
   * @default `expanded`
   */
  style?: LiteralUnion<'compressed' | 'expanded'>

  /**
   * By default, if the CSS document contains non-ASCII characters, Sass adds a
   * `@charset` declaration (in expanded output mode) or a byte-order mark (in
   * compressed mode) to indicate its encoding to browsers or other consumers.
   * If `charset` is `false`, these annotations are omitted
   *
   * @default true
   */
  charset?: boolean

  /**
   * If this option is set to `true`, Sass won’t print warnings that are caused
   * by dependencies
   *
   * @default false
   */
  quietDeps?: boolean

  /**
   * A set of deprecations to treat as fatal
   */
  fatalDeprecations?: (DeprecationOrId | Version)[]

  /**
   * A set of future deprecations to opt into early
   */
  futureDeprecations?: DeprecationOrId[]

  /**
   * A set of active deprecations to ignore
   */
  silenceDeprecations?: DeprecationOrId[]

  /**
   * By default, Dart Sass will print only five instances of the same
   * deprecation warning per compilation to avoid deluging users in console
   * noise. If you set `verbose` to `true`, it will instead print every
   * deprecation warning it encounters
   *
   * @default false
   */
  verbose?: boolean

  /**
   * An object to use to handle warnings and/or debug messages from Sass
   */
  logger?: Logger

  /**
   * If this option is set to an instance of `NodePackageImporter`, Sass will
   * use the built-in Node.js package importer to resolve Sass files with a
   * `pkg:` URL scheme.
   */
  pkgImporter?: NodePackageImporter

  /**
   * If this is true, the compiler will exclusively use ASCII characters in its error and warning  * messages. Otherwise, it may use non-ASCII Unicode characters as well.
   *
   * @default false
   */
  alertAscii?: boolean

  /**
   * If this is true, the compiler will use ANSI color escape codes in its error and warning
   * messages. If it's false, it won't use these. If it's undefined, the compiler will determine
   * whether or not to use colors depending on whether the user is using an interactive terminal.
   *
   * @default false
   */
  alertColor?: boolean

  /**
   * Whether Sass should include the sources in the generated source map.
   * This option has no effect if sourceMap is false.
   *
   * @default false
   */
  sourceMapIncludeSources?: boolean

  [key: string]: any
}

export type {
  Deprecation as DartSassDeprecation,
  DeprecationOrId as DartSassDeprecationOrId,
  Deprecations as DartSassDeprecations,
  DeprecationStatus as DartSassDeprecationStatus,
  LoggerWarnOptions as DartSassLoggerWarnOptions,
  Version as DartSassVersion,

  /**
   * @deprecated use `DartSassDeprecation` instead
   */
  Deprecation,
  /**
   * @deprecated use `DartSassDeprecationOrId` instead
   */
  DeprecationOrId,
  /**
   * @deprecated use `DartSassDeprecations` instead
   */
  Deprecations,
  /**
   * @deprecated use `DartSassDeprecationStatus` instead
   */
  DeprecationStatus,
  /**
   * @deprecated use `DartSassLoggerWarnOptions` instead
   */
  LoggerWarnOptions,
  /**
   * @deprecated use `DartSassVersion` instead
   */
  Version,
} from '@sass/types'
