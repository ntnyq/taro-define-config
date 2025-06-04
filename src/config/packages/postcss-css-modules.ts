/**
 * `postcss-modules` 配置
 *
 * @see https://github.com/madyankin/postcss-modules
 * @compatibility 6.0.1
 */

import type { LiteralUnion } from '../../utils'

export declare class CustomLoader {
  constructor(root: string, plugins: any[])

  fetch(
    file: string,
    relativeTo: string,
    depTrace: string,
  ): Promise<Record<string, string>>

  finalSource?: string
}

export interface PostcssCssModulesOptions {
  getJSON?: (
    cssFilename: string,
    json: Record<string, string>,
    outputFilename: string,
  ) => void

  /**
   * style of exported classnames, the keys in your json
   */
  localsConvention?:
    | LiteralUnion<'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'>
    | ((
        originalClassName: string,
        generatedClassName: string,
        inputFile: string,
      ) => string)

  /**
   * change all the classes are local or global
   *
   * @default `local`
   */
  scopeBehaviour?: LiteralUnion<'global' | 'local'>

  /**
   *  define paths for global modules
   */
  globalModulePaths?: RegExp[]

  /**
   * 转换模式，取值为 global/module
   */
  namingPattern?: 'global' | string

  /**
   * generate custom classes
   */
  generateScopedName?:
    | string
    | ((name: string, filename: string, css: string) => string)

  /**
   * add custom hash to generate more unique classes
   */
  hashPrefix?: string

  /**
   * export global names via the JSON object along with the local ones
   */
  exportGlobals?: boolean

  /**
   * root path
   */
  root?: string

  /**
   * use custom loader if needed
   */
  Loader?: typeof CustomLoader

  /**
   * resolve custom path alias
   */
  resolve?: (
    file: string,
    importer: string,
  ) => string | Promise<string | null> | null

  [key: string]: any
}
