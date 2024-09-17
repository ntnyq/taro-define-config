import type {
  AutoprefixerOptions,
  PostcssCssModulesOptions,
  PostcssHtmlTransformOptions,
  PostcssPxtransformOptions,
  PostcssUrlOptions,
} from '../config/packages'
import type { LiteralUnion } from '../utility-types'

export type { LoaderContext } from 'webpack'

/**
 * `Webpack devtool` 类型
 *
 * @see https://webpack.js.org/configuration/devtool/#devtool
 */
export type SourceMapType = LiteralUnion<
  | 'eval'
  | 'eval-cheap-source-map'
  | 'eval-cheap-module-source-map'
  | 'eval-source-map'
  | 'cheap-source-map'
  | 'cheap-module-source-map'
  | 'source-map'
  | 'inline-cheap-source-map'
  | 'inline-cheap-module-source-map'
  | 'inline-source-map'
  | 'eval-nosources-cheap-source-map'
  | 'eval-nosources-cheap-module-source-map'
  | 'eval-nosources-source-map'
  | 'inline-nosources-cheap-source-map'
  | 'inline-nosources-cheap-module-source-map'
  | 'inline-nosources-source-map'
  | 'nosources-cheap-source-map'
  | 'nosources-cheap-module-source-map'
  | 'nosources-source-map'
  | 'hidden-nosources-cheap-source-map'
  | 'hidden-nosources-cheap-module-source-map'
  | 'hidden-nosources-source-map'
  | 'hidden-cheap-source-map'
  | 'hidden-cheap-module-source-map'
  | 'hidden-source-map'
>

export type PlatformUnion = LiteralUnion<'h5' | 'mini' | 'rn' | 'harmony'>

export interface ConfigurablePlugin<T extends Record<string, any>> {
  enable?: boolean
  config?: T
}

export interface FilterOptions {
  /**
   * 需要额外执行预编译的依赖
   */
  include?: string[]

  /**
   * 不需要执行预编译的依赖
   */
  exclude?: string[]
}

/**
 * 小程序编译时的文件类型集合
 */
export type ParseAstType = LiteralUnion<'ENTRY' | 'PAGE' | 'COMPONENT' | 'NORMAL' | 'STATIC'>

export interface BasePostCSSOptions {
  autoprefixer?: ConfigurablePlugin<AutoprefixerOptions>
  pxtransform?: ConfigurablePlugin<PostcssPxtransformOptions>
  cssModules?: ConfigurablePlugin<PostcssCssModulesOptions>
  htmltransform?: ConfigurablePlugin<PostcssHtmlTransformOptions>
  [key: string]: any
}
export type PostCSSOptions<T extends PlatformUnion> = T extends 'h5'
  ? BasePostCSSOptions & { url?: ConfigurablePlugin<PostcssUrlOptions> }
  : BasePostCSSOptions
