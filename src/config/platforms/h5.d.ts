import type { LiteralUnion } from '../../utility-types'
import type {
  CommonWebpackConfigOptions,
  FilterOptions,
  PostCSSOptions,
  SourceMapType,
} from '../common'
import type { HtmlWebpackPluginOptions } from '../packages'

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

export interface PlatformH5Router extends CommonWebpackConfigOptions<'h5'> {
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
   * @default watch 模式下为 true，否则为 false
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
   * @default watch 模式下为 false，否则为 true
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
  postcss?: PostCSSOptions<'h5'>

  /**
   * Web 编译过程的相关配置
   *
   * @since `Taro v3.6`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#h5compile
   */
  compile?: FilterOptions

  /**
   * 控制在 H5 端是否使用旧版本适配器
   *
   * @since `Taro v3.6.3`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#h5usedeprecatedadaptercomponent
   * @default false
   */
  useDeprecatedAdapterComponent?: boolean

  /**
   * `html-webpack-plugin` 的具体配置
   *
   * @since `Taro v3.5`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5htmlpluginoption
   */
  htmlPluginOption?: HtmlWebpackPluginOptions

  [key: string]: any
}
