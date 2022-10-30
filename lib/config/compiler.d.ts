import type { LiteralUnion } from '../utility-types'

export type CompilerType = LiteralUnion<'webpack4' | 'webpack5'>

export interface CompilerPrebundle {
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
   */
  esbuild?: any

  /**
   * 自定义 `swc` 配置
   */
  swc?: any

  /**
   * 自定义 `webpack` 配置
   */
  webpack?: any

  /**
   * 需要额外执行预编译的依赖
   */
  include?: string[]

  /**
   * 不需要执行预编译的依赖
   */
  exclude?: string[]
}

export interface CompilerConfig {
  /**
   * 编译工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilertype
   */
  type?: CompilerType

  /**
   * 依赖预编译，仅 `webpack5` 支持
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilerprebundle
   */
  prebundle?: CompilerPrebundle
}

export type Compiler = CompilerType | CompilerConfig
