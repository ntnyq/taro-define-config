import type {
  CommonWebpackConfigOptions,
  ICompileOptions,
  IOutputEnhance,
  PostCSSOptions,
  SourceMapType,
} from '../common'
import type { Compiler, CompilerTypes, CompilerWebpackTypes } from '../compiler'
import type { RollupOutputOptions, WebpackConfiguration } from '../packages'

export interface PlatformMiniMinifyXML {
  /**
   * 是否合并 xml 文件中的空格
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#miniminifyxmlcollapsewhitespace
   * @default false
   */
  collapseWhitespace?: boolean
}

export interface PlatformMiniOptimizeMainPackage {
  enable?: boolean
  exclude?: string[]
}

export interface PlatformMiniExperimental {
  /**
   * 半编译模式，暂只支持 `React` 框架
   *
   * @since `Taro v3.6.23`
   * @see https://nervjs.github.io/taro-docs/docs/complier-mode
   * @default false
   */
  compileMode?: boolean | string

  /**
   * 模版渲染时是否使用 wxs 等小程序脚本语言
   */
  useXsForTemplate?: boolean
}

export interface PlatformMiniRuntime {
  enableInnerHTML?: boolean
  enableSizeAPIs?: boolean
  enableAdjacentHTML?: boolean
  enableTemplateContent?: boolean
  enableCloneNode?: boolean
  enableContains?: boolean
  enableMutationObserver?: boolean
}

/**
 * 小程序端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#mini
 */
export interface PlatformMini<T extends CompilerTypes = CompilerWebpackTypes>
  extends CommonWebpackConfigOptions<'mini'> {
  /**
   * 对于 `template` 模板不支持递归的小程序（如：微信、QQ、京东），Taro 会对所有模板循环 `baseLevel` 次，以支持同类模板的循环调用
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minibaselevel
   */
  baseLevel?: number

  /**
   * webpack 编译模式下，可用于修改、拓展 Webpack 的 output 选项，配置项参考[官方文档](https://webpack.js.org/configuration/output/)
   *
   * vite 编译模式下，用于修改、扩展 rollup 的 output，目前仅适配 chunkFileNames 和 assetFileNames 两个配置，修改其他配置请使用 vite 插件进行修改。配置想参考[官方文档](https://rollupjs.org/configuration-options/)
   */
  output?: T extends 'vite'
    ? IOutputEnhance & Pick<RollupOutputOptions, 'chunkFileNames'>
    : IOutputEnhance & WebpackConfiguration['output']

  /**
   * 用于控制是否生成 `js、css` 对应的 `sourceMap`
   *
   * @default watch 模式下为 true，否则为 false
   */
  enableSourceMap?: boolean

  /**
   * `SourceMap` 类型
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minisourcemaptype
   * @default `cheap-module-source-map`
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
   * @since `Taro v3.4.0`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minihot
   * @default false
   */
  hot?: boolean

  /**
   * 指定 React 框架相关的代码是否使用开发环境（未压缩）代码，默认使用生产环境（压缩后）代码
   *
   * @since `Taro v3.0.8`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#minidebugreact
   * @default false
   */
  debugReact?: boolean

  /**
   * 是否跳过第三方依赖 usingComponent 的处理，默认为自动处理第三方依赖的自定义组件
   *
   * @since `Taro v3.6.13`
   * @default false
   */
  skipProcessUsingComponents?: boolean

  /**
   * 用于告诉 Taro 编译器需要抽取的公共文件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minicommonchunks
   */
  commonChunks?: string[] | ((commonChunks: string[]) => string[])

  /**
   * 为某些页面单独指定需要引用的公共文件
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#miniaddchunkpages
   */
  addChunkPages?: (pages: Map<string, string[]>, pagesNames?: string[]) => void

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
   * 实验特性
   */
  experimental?: PlatformMiniExperimental

  /**
   * 小程序编译过程的相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#minicompile
   */
  compile?: ICompileOptions

  /**
   * 使用的编译工具。可选值：webpack5、vite
   */
  compiler?: Compiler<T>

  /**
   * 运行时选项，插件内部使用
   */
  runtime?: PlatformMiniRuntime

  [key: string]: any
}
