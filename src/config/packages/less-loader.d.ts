/**
 * `less-loader` 配置
 *
 * @see https://github.com/webpack-contrib/less-loader#options
 */

import type { LessOptions } from './less'
import type { WebpackLoaderContext } from './webpack'

export interface LessLoaderOptions {
  /**
   * less options in camelCase
   */
  lessOptions?: LessOptions | ((loaderConext: WebpackLoaderContext) => LessOptions)

  /**
   * prepends/appends Less code to the actual entry file
   */
  additionalData?:
    | string
    | ((content: string, loaderContext: WebpackLoaderContext) => string | Promise<string>)

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
