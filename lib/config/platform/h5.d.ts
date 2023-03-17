import type { LiteralUnion } from '../../utility-types'
import type { Compile, ConfigurablePlugin, SourceMapType } from '../common'
import type {
  AutoprefixerOptions,
  CSSLoaderOptions,
  ChainableWebpackConfig,
  HtmlWebpackPluginOptions,
  LessLoaderOptions,
  MiniCSSExtractPluginOptions,
  PostcssHtmlTransformOptions,
  PostcssModulesOptions,
  PostcssPxtransformOptions,
  SassLoaderOptions,
  StyleLoaderOptions,
  StylusLoaderOptions,
  URLLoaderOptions,
} from '../npm'

/**
 * H5端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5
 */

export type PlatformH5Entry = Record<string, string | string[]>

export interface PlatformH5Output {
  filename?: string

  chunkFilename?: string

  [key: string]: any
}

export interface PlatformH5DevServer {
  proxy?: string | object

  [key: string]: any
}

export interface PlatformH5Router {
  /**
   * 配置路由模式
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5routermode
   */
  mode?: LiteralUnion<'hash' | 'browser' | 'multi'>

  /**
   * 配置路由基准路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5routerbasename
   */
  basename?: string

  /**
   * 配置自定义路由
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5routercustomroutes
   */
  customRoutes?: Record<string, string | string[]>

  lazyload?: boolean | ((pagename: string) => boolean)

  renamePagename?: (pagename: string) => string

  forcePath?: string
}

export interface PlatformH5Postcss {
  autoprefixer?: ConfigurablePlugin<AutoprefixerOptions>
  pxtransform?: ConfigurablePlugin<PostcssPxtransformOptions>
  htmltransform?: ConfigurablePlugin<PostcssHtmlTransformOptions>
  cssModules?: ConfigurablePlugin<PostcssModulesOptions>
}

export interface PlatformH5 {
  /**
   * 可用于修改、拓展 `Webpack` 的 `input` 选项
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5entry
   */
  entry?: PlatformH5Entry

  /**
   * 可用于修改、拓展 `Webpack` 的 `output` 选项
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5output
   */
  output?: PlatformH5Output

  /**
   * 设置输出解析文件的目录
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5publicpath
   */
  publicPath?: string

  /**
   * `h5` 编译后的静态文件目录
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5staticdirectory
   */
  staticDirectory?: string

  /**
   * 编译后非 `entry` 的 `js` 文件的存放目录，主要影响动态引入的 `pages` 的存放路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5chunkdirectory
   */
  chunkDirectory?: string

  /**
   * 预览服务的配置，可以更改端口等参数
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5devserver
   */
  devServer?: PlatformH5DevServer

  /**
   * 路由相关的配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5router
   */
  router?: PlatformH5Router

  /**
   * 用于控制是否生成 `js、css` 对应的 `sourceMap`
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5enablesourcemap
   */
  enableSourceMap?: boolean

  /**
   * `SourceMap` 类型
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5sourcemaptype
   */
  sourceMapType?: SourceMapType

  /**
   * 用于控制在 H5 端是否使用兼容性组件库
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5usehtmlcomponents
   */
  useHtmlComponents?: boolean

  /**
   * `extract` 功能开关，开启后将使用 `mini-css-extract-plugin` 分离 `css` 文件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5enableextract
   */
  enableExtract?: boolean

  /**
   * 配置需要额外的经由 `Taro` 预设的 `postcss` 编译的模块
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5esnextmodules
   */
  esnextModules?: string[]

  /**
   * 配置 `postcss` 相关插件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5postcss
   */
  postcss?: PlatformH5Postcss

  /**
   * Web 编译过程的相关配置
   *
   * @since `Taro v3.6`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#h5compile
   */
  compile?: Compile

  /**
   * `html-webpack-plugin` 的具体配置
   *
   * @since `Taro v3.5`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5htmlpluginoption
   */
  htmlPluginOption?: HtmlWebpackPluginOptions

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
   * 自定义 `Webpack` 配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#miniwebpackchain
   */
  webpackChain?: (chain: ChainableWebpackConfig, webpack: any) => void

  [key: string]: any
}
