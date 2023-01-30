/**
 * `less` 配置
 *
 * @see https://lesscss.org/usage/#less-options
 */

export interface LessSourceMapOptions {
  outputFilename?: string
  sourceMapRootpath?: string
  sourceMapBasepath?: string
  outputSourceFiles?: boolean
  sourceMapFileInline?: boolean
  sourceMapURL?: string
}

export interface LessOptions {
  /**
   * source map options
   */
  sourceMap?: SourceMapOption

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
  plugins?: Plugin[]

  /**
   * If true, compress using less built-in compression
   *
   * @deprecated
   */
  compress?: boolean

  strictImports?: boolean

  /**
   * If true, allow imports from insecure https hosts
   */
  insecure?: boolean

  depends?: boolean

  maxLineLen?: number

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
   * If true, enable evaluation of JavaScript inline in `.less` files
   *
   * @deprecated
   */
  javascriptEnabled?: boolean

  /**
   * Whether output file information and line numbers in compiled CSS code
   */
  dumpLineNumbers?: 'comment' | string

  /**
   * Add a path to every generated import and url in output css files
   */
  rootpath?: string

  /**
   * Math mode options for avoiding symbol conflicts on math expressions
   */
  math?: 'always' | 'strict' | 'parens-division' | 'parens' | 'strict-legacy' | number

  /**
   * If true, stops any warnings from being shown
   */
  silent?: boolean

  /**
   * Without this option, Less attempts to guess at the output unit when it does maths
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
   * Read files synchronously in Node.js
   */
  syncImport?: boolean

  [key: string]: any
}
