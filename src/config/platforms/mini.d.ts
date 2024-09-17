import type { FilterOptions, ParseAstType, PostCSSOptions, SourceMapType } from '../common'
import type {
  ChainableWebpackConfig,
  CSSLoaderOptions,
  LessLoaderOptions,
  MiniCSSExtractPluginOptions,
  SassLoaderOptions,
  StyleLoaderOptions,
  StylusLoaderOptions,
  URLLoaderOptions,
  Webpack,
} from '../packages'

export interface PlatformMiniMinifyXML {
  /**
   * 是否合并 xml 文件中的空格
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#miniminifyxmlcollapsewhitespace
   */
  collapseWhitespace?: boolean
}

export type PlatformMiniCommonChunksFn<T extends string = string> = (commonChunks: T[]) => T[]
export type PlatformMiniCommonChunks = string[] | PlatformMiniCommonChunksFn<string>

export type PlatformMiniAddChunkPages = (pages: Map<string, string[]>, pagesNames: string[]) => void

export interface PlatformMiniOptimizeMainPackage {
  enable?: boolean
  exclude?: string[]
}

export interface PlatformMiniExperimental {
  /**
   * 半编译模式，暂只支持 `React` 框架
   *
   * @default false
   * @since `Taro v3.6.23`
   * @see https://nervjs.github.io/taro-docs/docs/complier-mode
   */
  compileMode?: boolean
}

/**
 * 小程序端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#mini
 */
export interface PlatformMini {
  /**
   * 对于 `template` 模板不支持递归的小程序（如：微信、QQ、京东），Taro 会对所有模板循环 `baseLevel` 次，以支持同类模板的循环调用
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minibaselevel
   */
  baseLevel?: number

  /**
   * 小程序编译过程的相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minicompile
   */
  compile?: FilterOptions

  /**
   * `SourceMap` 类型
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minisourcemaptype
   */
  sourceMapType?: SourceMapType

  /**
   * 关于压缩小程序 `xml` 文件的相关配置
   *
   * @since `Taro v3.0.8`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#miniminifyxml
   */
  minifyXML?: PlatformMiniMinifyXML

  /**
   * 是否注入兼容微信小程序热重载的代码
   *
   * @default false
   * @since `Taro v3.4.0`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minihot
   */
  hot?: boolean

  /**
   * 指定 React 框架相关的代码是否使用开发环境（未压缩）代码，默认使用生产环境（压缩后）代码
   *
   * @default false
   * @since `Taro v3.0.8`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minidebugreact
   */
  debugReact?: boolean

  /**
   * 是否跳过第三方依赖 usingComponent 的处理，默认为自动处理第三方依赖的自定义组件
   *
   * @default false
   * @since `Taro v3.6.13`
   */
  skipProcessUsingComponents?: boolean

  /**
   * 用于告诉 Taro 编译器需要抽取的公共文件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minicommonchunks
   */
  commonChunks?: PlatformMiniCommonChunks

  /**
   * 为某些页面单独指定需要引用的公共文件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#miniaddchunkpages
   */
  addChunkPages?: PlatformMiniAddChunkPages

  /**
   * 优化主包的体积大小
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minioptimizemainpackage
   */
  optimizeMainPackage?: PlatformMiniOptimizeMainPackage

  /**
   * 配置 `postcss` 相关插件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minipostcss
   */
  postcss?: PostCSSOptions<'mini'>

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

  /**
   * `style-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/style-loader
   */
  styleLoaderOption?: StyleLoaderOptions

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
   * 实验特性
   */
  experimental?: PlatformMiniExperimental

  [key: string]: any
}
