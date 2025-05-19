/**
 * `less-loader` 配置
 *
 * @see https://github.com/webpack-contrib/less-loader#options
 * @compatibility 12.3.0
 */

import type { LoaderAdditionalData } from '../common'
import type { LessOptions } from './less'
import type { WebpackLoaderContext } from './webpack'

export interface LessLoaderOptions {
  /**
   * less options in camelCase, default value is `{ relativeUrls: true }`
   *
   * @see https://github.com/webpack-contrib/less-loader#lessoptions
   */
  lessOptions?:
    | LessOptions
    | ((loaderConext: WebpackLoaderContext) => LessOptions)

  /**
   * prepends/appends Less code to the actual entry file
   *
   * @see https://github.com/webpack-contrib/less-loader#additionaldata
   */
  additionalData?: LoaderAdditionalData<'less'>

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
  webpackImporter?: 'only' | boolean

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
