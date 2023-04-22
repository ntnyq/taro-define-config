import type { Compile } from './common'
import type { Config as SWCConfig } from '@swc/core'
import type { Configuration as WebpackConfig } from 'webpack'
import type { LiteralUnion } from '../utility-types'

export type CompilerType = LiteralUnion<'webpack4' | 'webpack5'>

export interface CompilerPrebundle extends Compile {
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
  esbuild?: Record<string, any>

  /**
   * 自定义 `swc` 配置
   */
  swc?: SWCConfig

  /**
   * 自定义 `webpack` 配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#compilerprebundlewebpackprovide
   */
  webpack?: WebpackConfig & {
    provide?: any[]
  }
}

export interface CompilerConfig {
  /**
   * 编译工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilertype
   */
  type: CompilerType

  /**
   * 依赖预编译，仅 `webpack5` 支持
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilerprebundle
   */
  prebundle?: CompilerPrebundle
}

export type Compiler = CompilerType | CompilerConfig
