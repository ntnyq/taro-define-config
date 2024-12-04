/**
 * 鸿蒙端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#harmony
 */

import type {
  CommonWebpackConfigOptions,
  ICompileOptions,
  IOutputEnhance,
  PostCSSOptions,
  SourceMapType,
} from '../common'
import type { CompilerTypes, CompilerViteTypes } from '../compiler'
import type { RollupOutputOptions, WebpackConfiguration } from '../packages'

export interface PlatformHarmonyOhPackage {
  main?: string
  dependencies?: { [name: string]: string }
  devDependencies?: { [name: string]: string }
  [k: string]: any
}

export interface PlatformHarmonyCompileModeSetting {
  componentReplace?: {
    [key: string]: {
      current_init: string
      dependency_define: string
    }
  }
}

export interface PlatformHarmonyRouter {
  customRoutes?: Record<string, any>
}

export interface PlatformHarmony<T extends CompilerTypes = CompilerViteTypes>
  extends CommonWebpackConfigOptions<'harmony'> {
  /**
   * 项目地址
   */
  projectPath: string

  /**
   * @default `entry`
   */
  hapName?: string

  /**
   * @default `default`
   */
  name?: string

  /**
   * oh-package.json 配置
   */
  ohPackage?: PlatformHarmonyOhPackage

  /**
   * ohpm-cli
   *
   * @default `~/Library/Huawei/ohpm/bin/ohpm"`
   */
  ohpm?: string

  /**
   * 核心依赖前缀
   * @description 用于告诉编译内容如何解析核心依赖，传入时将直接使用依赖前缀，同时不会为工程导入核心依赖
   */
  chorePackagePrefix?: string

  /**
   * 公共文件
   */
  commonChunks?: string[] | ((commonChunks: string[]) => string[])

  /**
   * 编译相关配置
   */
  compile?: ICompileOptions

  /**
   * 半编译模式下的选项
   */
  compileModeSetting?: PlatformHarmonyCompileModeSetting

  /**
   * 用于控制是否生成 js、css 对应的 sourceMap
   * @default `true` in when watch mode, otherwise `false`
   */
  enableSourceMap?: boolean

  /**
   * Webpack sourceMap
   * @default `cheap-module-source-map`
   */
  sourceMapType?: SourceMapType

  /**
   * 指定 React 框架相关的代码是否使用开发环境（未压缩）代码，默认使用生产环境（压缩后）代码
   */
  debugReact?: boolean

  /**
   * webpack 编译模式下，可用于修改、拓展 Webpack 的 output 选项，配置项参考[官方文档](https://webpack.js.org/configuration/output/)
   *
   * vite 编译模式下，用于修改、扩展 rollup 的 output，目前仅适配 chunkFileNames 和 assetFileNames 两个配置，修改其他配置请使用 vite 插件进行修改。配置想参考[官方文档](https://rollupjs.org/configuration-options/)
   */
  output?: T extends CompilerViteTypes
    ? IOutputEnhance & Pick<RollupOutputOptions, 'chunkFileNames'>
    : IOutputEnhance & WebpackConfiguration['output']

  /**
   * 路由配置
   */
  router?: PlatformHarmonyRouter

  /**
   * 自定义 PostCSS 配置
   */
  postcss?: PostCSSOptions<'harmony'>

  [key: string]: any
}
