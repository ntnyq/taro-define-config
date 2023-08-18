import type { Compile } from './common'
import type { BuildOptions as ESBuildBuildOptions } from 'esbuild'
import type { Options as SWCOptions } from '@swc/core'
import type { Configuration as WebpackConfig } from 'webpack'
import type { LiteralUnion } from '../utility-types'

export type CompilerType = LiteralUnion<'webpack4' | 'webpack5'>

/**
 * @see https://github.com/NervJS/taro/blob/6a7779d98102c9b7b0082ababbac342cbff2d213/packages/taro-plugin-vue-devtools/src/index.ts#L79C44-L79C47
 */
export type CompilerPrebundleWebpackProvideFn = (
  obj: Record<string, any>,
  taroRuntimeBundlePath: string,
) => void

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
   *
   * @see https://esbuild.github.io/api/#build
   */
  esbuild?: ESBuildBuildOptions

  /**
   * 自定义 `swc` 配置
   *
   * @see https://swc.rs/docs/usage/core#options
   */
  swc?: SWCOptions

  /**
   * 自定义 `webpack` 配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail/#compilerprebundlewebpackprovide
   */
  webpack?: WebpackConfig & {
    provide?: CompilerPrebundleWebpackProvideFn[]
  }
}

export interface CompilerConfigWebpack4 {
  /**
   * 编译工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilertype
   */
  type: 'webpack4'
}

export interface CompilerConfigWebpack5 {
  /**
   * 编译工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilertype
   */
  type: 'webpack5'

  /**
   * 依赖预编译，仅 `webpack5` 支持
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compilerprebundle
   */
  prebundle?: CompilerPrebundle
}

export type CompilerConfig = CompilerConfigWebpack4 | CompilerConfigWebpack5

export type Compiler = CompilerType | CompilerConfig
