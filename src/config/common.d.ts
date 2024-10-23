import type {
  AutoprefixerOptions,
  ChainableWebpackConfig,
  CSSLoaderOptions,
  LessLoaderOptions,
  MiniCSSExtractPluginOptions,
  PostcssCssModulesOptions,
  PostcssHtmlTransformOptions,
  PostcssPxtransformOptions,
  PostcssUrlOptions,
  SassLoaderOptions,
  StyleLoaderOptions,
  StylusLoaderOptions,
  URLLoaderOptions,
  Webpack,
} from '../config/packages'
import type { LiteralUnion } from '../utility-types'

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
 * 编译过程配置
 */
export type ICompileOptions = FilterOptions & {
  filter?: (filename: string) => boolean
}

/**
 * 输出文件类型增强
 */
export interface IOutputEnhance {
  /**
   * 编译前清空输出目录
   * @since Taro v3.6.9
   * @description
   * - 默认清空输出目录，可设置 clean: false 不清空
   * - 可设置 clean: { keep: ['project.config.json'] } 保留指定文件
   * - 注意 clean.keep 不支持函数
   */
  clean?:
    | boolean
    | {
        keep?: Array<string | RegExp> | string | RegExp
      }
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

/**
 * 通用 webpack 配置选项
 */
export type BaseWebpackConfigOptions = {
  /**
   * `css-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/css-loader
   */
  cssLoaderOption?: CSSLoaderOptions

  /**
   * `sass-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/sass-loader
   */
  sassLoaderOption?: SassLoaderOptions

  /**
   * `less-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/less-loader
   */
  lessLoaderOption?: LessLoaderOptions

  /**
   * `stylus-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/stylus-loader
   */
  stylusLoaderOption?: StylusLoaderOptions

  /**
   * `mini-css-extract-plugin` 的附加配置
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin
   */
  miniCssExtractPluginOption?: MiniCSSExtractPluginOptions

  /**
   * 针对 `png | jpg | jpeg | gif | bpm | svg` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  imageUrlLoaderOption?: URLLoaderOptions

  /**
   * 针对 `mp4 | webm | ogg | mp3 | wav | flac | aac` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  mediaUrlLoaderOption?: URLLoaderOptions

  /**
   * 针对 `woff | woff2 | eot | ttf | otf` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  fontUrlLoaderOption?: URLLoaderOptions

  /**
   * 自定义 `Webpack` 配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#miniwebpackchain
   */
  webpackChain?: (
    chain: ChainableWebpackConfig,
    webpack: Webpack,
    parseAstType: ParseAstType,
  ) => void
}
export type CommonWebpackConfigOptions<T extends PlatformUnion> = T extends 'h5'
  ? BaseWebpackConfigOptions
  : BaseWebpackConfigOptions & {
      /**
       * `style-loader` 的附加配置
       * @see https://github.com/webpack-contrib/style-loader
       */
      styleLoaderOption?: StyleLoaderOptions
    }
