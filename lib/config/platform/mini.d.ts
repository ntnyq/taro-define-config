import ChainableWebpackConfig = require('webpack-chain')
import type { SourceMapType } from '../common'

export interface PlatformMiniCompile {
  include?: string[]
  exclude?: string[]
}

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

export interface PlatformMiniPostcss {
  autoprefixer?: Record<string, any>
  pxtransform?: Record<string, any>
  url?: Record<string, any>
  cssModules?: Record<string, any>
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
  compile?: PlatformMiniCompile

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
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minihot
   */
  hot?: boolean

  /**
   * 指定 React 框架相关的代码是否使用开发环境（未压缩）代码，默认使用生产环境（压缩后）代码
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minidebugreact
   */
  debugReact?: boolean

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
  postcss?: PlatformMiniPostcss

  /**
   * 自定义 `Webpack` 配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#miniwebpackchain
   */
  webpackChain?: (chain: ChainableWebpackConfig, webpack: any) => void

  /**
   * `style-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/style-loader
   */
  styleLoaderOption?: Record<string, any>

  /**
   * `css-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/css-loader
   */
  cssLoaderOption?: Record<string, any>

  /**
   * `sass-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/sass-loader
   */
  sassLoaderOption?: Record<string, any>

  /**
   * `less-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/less-loader
   */
  lessLoaderOption?: Record<string, any>

  /**
   * `stylus-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/stylus-loader
   */
  stylusLoaderOption?: Record<string, any>

  /**
   * `mini-css-extract-plugin` 的附加配置
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin
   */
  miniCssExtractPluginOption?: Record<string, any>

  /**
   * 针对 `png | jpg | jpeg | gif | bpm | svg` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  imageUrlLoaderOption?: Record<string, any>

  /**
   * 针对 `mp4 | webm | ogg | mp3 | wav | flac | aac` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  mediaUrlLoaderOption?: Record<string, any>

  /**
   * 针对 `woff | woff2 | eot | ttf | otf` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  fontUrlLoaderOption?: Record<string, any>

  [key: string]: any
}
