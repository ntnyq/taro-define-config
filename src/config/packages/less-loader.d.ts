/**
 * `less-loader` 配置
 *
 * @see https://github.com/webpack-contrib/less-loader#options
 * @compatibility 12.2.0
 */

import type { LessOptions } from './less'
import type { WebpackLoaderContext } from './webpack'

export interface LessLoaderOptions {
  /**
   * less options in camelCase
   *
   * @see https://github.com/webpack-contrib/less-loader#lessoptions
   * @default { relativeUrls: true }
   */
  lessOptions?: LessOptions | ((loaderConext: WebpackLoaderContext) => LessOptions)

  /**
   * prepends/appends Less code to the actual entry file
   *
   * @see https://github.com/webpack-contrib/less-loader#additionaldata
   */
  additionalData?:
    | string
    | ((content: string, loaderContext: WebpackLoaderContext) => string | Promise<string>)

  /**
   * if generation of source maps
   *
   * @see https://github.com/webpack-contrib/less-loader#sourcemap
   * @default compiler.devtool
   */
  sourceMap?: boolean

  /**
   * enables/disables the default webpack importer
   *
   * @see https://github.com/webpack-contrib/less-loader#webpackimporter
   * @default true
   */
  webpackImporter?: boolean

  /**
   * determines which implementation of Less to use
   *
   * @see https://github.com/webpack-contrib/less-loader#implementation
   */
  implementation?: string | Record<string, any>

  /**
   * warnings and errors will be webpack warnings and errors, not just logs
   *
   * @see https://github.com/webpack-contrib/less-loader#lesslogaswarnorerr
   * @default false
   */
  lessLogAsWarnOrErr?: boolean

  [key: string]: any
}
