/**
 * `postcss-modules` 配置
 *
 * @see https://github.com/madyankin/postcss-modules
 */

import type { LiteralUnion } from '../../utility-types'

export class CustomLoader {
  constructor(root: string, plugins: any[])

  fetch(file: string, relativeTo: string, depTrace: string): Promise<Record<string, string>>

  finalSource?: string
}

export type PostcssModulesGetJSONFn = (
  cssFilename: string,
  json: Record<string, string>,
  outputFilename?: string,
) => void

export type PostcssModulesLocalsConventionFn = (
  originalClassName: string,
  generatedClassName: string,
  inputFile: string,
) => string

export type PostcssModulesLocalsConvention =
  | LiteralUnion<'camelCase' | 'camelCaseOnly' | 'dashes' | 'dashesOnly'>
  | PostcssModulesLocalsConventionFn

export type PostcssModulesResolveFn = (
  file: string,
  importer: string,
) => string | null | Promise<string | null>

export type PostcssModulesGenerateScopedNameFn = (
  name: string,
  filename: string,
  css: string,
) => string

export type PostcssModulesLoader = typeof CustomLoader

export interface PostcssModulesOptions {
  getJSON?: PostcssModulesGetJSONFn

  /**
   * style of exported classnames, the keys in your json
   */
  localsConvention?: PostcssModulesLocalsConvention

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
   * generate custom classes
   */
  generateScopedName?: string

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
  Loader?: PostcssModulesLoader

  /**
   * resolve custom path alias
   */
  resolve?: PostcssModulesResolveFn

  [key: string]: any
}
