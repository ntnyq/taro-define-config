/**
 * `sass-loader` 配置
 *
 * @see https://github.com/webpack-contrib/sass-loader#options
 * @compatibility 16.0.3
 */

import type { Buffer } from 'node:buffer'
import type { LiteralUnion } from '../../utility-types'
import type { LoaderAdditionalData } from '../common'
import type { DartSassOptions, NodeSassOptions } from './sass'
import type { WebpackLoaderContext } from './webpack'

export type SassLoaderSassOptions = DartSassOptions | NodeSassOptions

export interface SassLoaderOptions {
  /**
   * determines which implementation of Sass to use
   *
   * @see https://github.com/webpack-contrib/sass-loader#implementation
   * @default `sass`
   */
  implementation?: string | object

  /**
   * Options for Dart Sass or Node Sass implementation
   *
   * @see https://github.com/webpack-contrib/sass-loader#sassoptions
   */
  sassOptions?:
    | SassLoaderSassOptions
    | ((
        content: string | Buffer,
        loaderContext: WebpackLoaderContext,
        meta: any,
      ) => SassLoaderSassOptions)

  /**
   * Enables/Disables generation of source maps
   *
   * @see https://github.com/webpack-contrib/sass-loader#sourcemap
   * @default compiler.devtool
   */
  sourceMap?: boolean

  /**
   * Prepends Sass/SCSS code before the actual entry file. In this case, the sass-loader will not override the data option but just prepend the entry's content
   *
   * @see https://github.com/webpack-contrib/sass-loader#additionaldata
   */
  additionalData?: LoaderAdditionalData<'sass'>

  /**
   * Enables/Disables the default webpack importer
   *
   * @see https://github.com/webpack-contrib/sass-loader#webpackimporter
   * @default true
   */
  webpackImporter?: boolean

  /**
   * Treats the @warn rule as a webpack warning
   *
   * @see https://github.com/webpack-contrib/sass-loader#warnruleaswarning
   * @default false
   */
  warnRuleAsWarning?: boolean

  /**
   * Allows you to switch between the legacy and modern APIs
   *
   * @see https://github.com/webpack-contrib/sass-loader#api
   * @see https://sass-lang.com/documentation/js-api/
   * @default `modern` for `sass (dart-sass)` and `sass-embedded`, or `legacy` for `node-sass`
   */
  api?: LiteralUnion<'legacy' | 'modern' | 'modern-compiler'>

  [key: string]: any
}
