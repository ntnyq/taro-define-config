/**
 * H5端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5
 */

import type { LiteralUnion } from '../../utility-types'
import type {
  CommonWebpackConfigOptions,
  ICompileOptions,
  IOutputEnhance,
  PostCSSOptions,
  SourceMapType,
} from '../common'
import type { Compiler, CompilerTypes, CompilerWebpackTypes } from '../compiler'
import type {
  DevServerConfiguration,
  HtmlWebpackPluginOptions,
  RollupOutputOptions,
  WebpackConfiguration,
} from '../packages'

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

  /**
   * 加上这个参数，可以解决返回页面的时候白屏的问题，但是某些不支持 :has() 选择器的浏览器会有问题
   */
  enhanceAnimation?: boolean
}

export interface PlatformH5<T extends CompilerTypes = CompilerWebpackTypes>
  extends CommonWebpackConfigOptions<'h5'> {
  /**
   * 可用于修改、拓展 `Webpack` 的 `input` 选项
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5entry
   */
  entry?: Record<string, string | string[]>

  /**
   * webpack 编译模式下，可用于修改、拓展 Webpack 的 output 选项，配置项参考[官方文档](https://webpack.js.org/configuration/output/)
   *
   * vite 编译模式下，用于修改、扩展 rollup 的 output，目前仅适配 chunkFileNames 和 assetFileNames 两个配置，修改其他配置请使用 vite 插件进行修改。配置想参考[官方文档](https://rollupjs.org/configuration-options/)
   */
  output?: T extends 'vite'
    ? Pick<RollupOutputOptions, 'chunkFileNames' | 'assetFileNames'> & IOutputEnhance
    : WebpackConfiguration['output']

  /**
   * 设置输出解析文件的目录
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5publicpath
   * @default `/`
   */
  publicPath?: string

  /**
   * `h5` 编译后的静态文件目录
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5staticdirectory
   * @default `static`
   */
  staticDirectory?: string

  /**
   * 编译后非 `entry` 的 `js` 文件的存放目录，主要影响动态引入的 `pages` 的存放路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5chunkdirectory
   * @default `chunk`
   */
  chunkDirectory?: string

  /**
   * Webpack 配置
   */
  webpack?:
    | WebpackConfiguration
    | ((config: WebpackConfiguration, webpack: Webpack) => WebpackConfiguration)

  /**
   * 预览服务的配置，可以更改端口等参数
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5devserver
   */
  devServer?: DevServerConfiguration

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
  compile?: ICompileOptions

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

  /**
   * 生成的代码是否要兼容旧版浏览器，值为 true 时，会去读取 package.json 的 browserslist 字段。
   * 只在 vite 编译模式下有效
   */
  legacy?: T extends 'vite' ? boolean : never

  /**
   * 使用的编译工具。可选值：webpack5、vite
   */
  compiler?: Compiler<T>

  [key: string]: any
}
