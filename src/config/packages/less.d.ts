/**
 * `less` 配置
 *
 * @see https://lesscss.org/usage/#less-options
 * @see https://lesscss.org/usage/#less-options-source-map-options
 * @compatibility 4.2.0
 */

import type { AnyFn, LiteralUnion } from '../../utility-types'

export interface LessSourceMap {
  outputFilename?: string
  sourceMapRootpath?: string
  sourceMapBasepath?: string
  outputSourceFiles?: boolean
  sourceMapFileInline?: boolean
  sourceMapURL?: string
}

export interface LessOptions {
  /**
   * Source map options
   */
  sourceMap?: LessSourceMap

  /**
   * Filename of the main file to be passed to less.render()
   */
  filename?: string

  /**
   * The locations for less looking for files in @import rules
   */
  paths?: string[]

  /**
   * True, if run the less parser and just reports errors without any output
   */
  lint?: boolean

  /**
   * Pre-load global Less.js plugins
   */
  plugins?: AnyFn[]

  strictImports?: boolean

  /**
   * If true, allow imports from insecure https hosts
   */
  insecure?: boolean

  depends?: boolean

  maxLineLen?: number

  /**
   * Add a path to every generated import and url in output css files
   */
  rootpath?: string

  /**
   * allows you to rewrite URLs in imported files so that the URL is always relative to the base file that has been passed to Less
   *
   * @see https://lesscss.org/usage/#less-options-rewrite-urls
   * @default `off`
   */
  rewriteUrls?: LiteralUnion<'off' | 'all' | 'local'>

  /**
   * Math mode options for avoiding symbol conflicts on math expressions
   * @description
   *  - `always` (3.x default) - Less does math eagerly
   *  - `parens-division` (4.0 default) - No division is performed outside of parens using / operator (but can be "forced" outside of parens with ./ operator - ./ is deprecated)
   *  - `parens` | `strict` - Parens required for all math expressions
   *  - `strict-legacy` (removed in 4.0) - In some cases, math will not be evaluated if any part of the expression cannot be evaluated
   */
  math?: 'always' | 'strict' | 'parens-division' | 'parens' | 'strict-legacy'

  /**
   * If true, stops any warnings from being shown
   */
  silent?: boolean

  /**
   * Without this option, Less attempts to guess at the output unit when it does maths
   *
   * @default false
   */
  strictUnits?: boolean

  /**
   * Defines a variable that can be referenced by the file
   */
  globalVars?: Record<string, string>

  /**
   * Puts Var declaration at the end of base file
   */
  modifyVars?: Record<string, string>

  /**
   * This option allows you to specify a argument to go on to every URL, This may be used for cache-busting for instance
   */
  urlArgs?: string

  /**
   * Read files synchronously in Node.js
   */
  syncImport?: boolean

  /**
   * If false, No color in compiling
   *
   * @deprecated
   */
  color?: boolean

  /**
   * @deprecated
   * @default false
   */
  ieCompat?: boolean

  /**
   * If true, compress using less built-in compression
   *
   * @deprecated use a third-party tool instead
   */
  compress?: boolean

  /**
   * @deprecated use `math` instead
   */
  strictMath?: boolean

  /**
   * @deprecated use `{ rewriteUrls: 'all' }` instead
   */
  relativeUrls?: boolean

  /**
   * Whether output file information and line numbers in compiled CSS code
   *
   * @deprecated
   */
  dumpLineNumbers?: 'comments' | 'mediaquery' | 'all' | string

  /**
   * If true, enable evaluation of JavaScript inline in `.less` files
   *
   * @deprecated use `plugins` instead
   */
  javascriptEnabled?: boolean

  [key: string]: any
}
