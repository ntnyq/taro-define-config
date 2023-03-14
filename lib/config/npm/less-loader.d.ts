/**
 * `less-loader` 配置
 *
 * @see https://github.com/webpack-contrib/less-loader#options
 */

import type { LoaderContext } from '../common'
import type { LessOptions } from './less'

export type LessLoaderLessOptionsFn = (loaderConext: LoaderContext) => LessOptions

export type LessLoaderLessOptions = LessOptions | LessLoaderLessOptionsFn

export type LessLoaderAdditionalDataFn = (
  content: string,
  loaderContext?: LoaderContext,
) => string | Promise<string>

export type LessLoaderAdditionalData = string | LessLoaderAdditionalDataFn

export interface LessLoaderOptions {
  /**
   * less options in camelCase
   */
  lessOptions?: LessLoaderLessOptions

  /**
   * prepends/appends Less code to the actual entry file
   */
  additionalData?: LessLoaderAdditionalData

  /**
   * if generation of source maps
   */
  sourceMap?: boolean

  /**
   * enables/disables the default webpack importer
   *
   * @default true
   */
  webpackImporter?: boolean

  /**
   * determines which implementation of Less to use
   */
  implementation?: string | Record<string, any>

  [key: string]: any
}
