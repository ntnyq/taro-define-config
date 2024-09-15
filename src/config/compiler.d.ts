import type { Configuration as WebpackConfig } from 'webpack'
import type { FilterOptions } from './common'
import type { ESBuildBuildOptions, SWCConfigs } from './packages'

export type CompilerViteTypes = 'vite'
export type CompilerWebpackTypes = 'webpack5'
export type CompilerTypes = CompilerViteTypes | CompilerWebpackTypes

/**
 * @see https://github.com/NervJS/taro/blob/6a7779d98102c9b7b0082ababbac342cbff2d213/packages/taro-plugin-vue-devtools/src/index.ts#L79C44-L79C47
 */
export type CompilerPrebundleWebpackProvideFn = (
  obj: Record<string, any>,
  taroRuntimeBundlePath: string,
) => void

export interface CompilerPrebundle extends FilterOptions {
  /**
   * 是否开启依赖预编译
   */
  enable?: boolean

  /**
   * 缓存目录的绝对路径
   */
  cacheDir?: string

  /**
   * 是否强行弃用缓存
   */
  force?: boolean

  /**
   * 是否显示依赖预编译的测速信息
   */
  timings?: boolean

  /**
   * 自定义 `esbuild` 配置
   *
   * @see https://esbuild.github.io/api/#build
   */
  esbuild?: ESBuildBuildOptions

  /**
   * 自定义 `swc` 配置
   *
   * @see https://swc.rs/docs/usage/core#options
   */
  swc?: SWCConfigs

  /**
   * 自定义 `webpack` 配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#compilerprebundlewebpackprovide
   */
  webpack?: WebpackConfig & {
    provide?: CompilerPrebundleWebpackProvideFn[]
  }
}

export interface CompilerConfig<T> {
  /**
   * 编译工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilertype
   */
  type: T

  /**
   * 错误处理级别
   * @default 0
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilererrorlevel
   */
  errorLevel?: number

  /**
   * 依赖预编译，仅 `webpack5` 支持
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilerprebundle
   */
  prebundle?: CompilerPrebundle

  /**
   * Vite 插件
   */
  // TODO: replace any
  vitePlugins?: any
}

export type Compiler<T extends CompilerTypes = CompilerWebpackTypes> = T | CompilerConfig<T>
