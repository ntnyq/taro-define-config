import type { LiteralUnion } from '../utility-types'
import type { Cache } from './cache'
import type { Compiler, CompilerTypes, CompilerWebpackTypes } from './compiler'
import type { Copy } from './copy'
import type { DesignRatio, DesignWidth } from './design'
import type { Logger } from './logger'
import type {
  CSSMinimizer,
  CSSOMinimizer,
  EsbuildMinimizer,
  JSMinimizer,
  TerserMinimizer,
} from './minimizers'
import type { TaroSassOptions } from './packages'
import type {
  PlatformH5,
  PlatformHarmony,
  PlatformMini,
  PlatformRN,
} from './platforms'
import type { Plugin } from './plugin'
import type { Preset } from './preset'

export type Framework = LiteralUnion<
  'none' | 'preact' | 'react' | 'solid' | 'vue3'
>

/**
 * Taro Configuration.
 *
 * @see https://nervjs.github.io/taro-docs/docs/config
 */
export interface TaroConfig<T extends CompilerTypes = CompilerWebpackTypes> {
  /**
   * 项目名称
   */
  projectName?: string

  /**
   * 项目创建日期
   */
  date?: string

  /**
   * 设计稿尺寸, `v3.4.13` 后支持函数
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#designwidth
   * @default 750
   */
  designWidth?: DesignWidth

  /**
   * 设计稿尺寸换算规则
   */
  deviceRatio?: DesignRatio

  /**
   * 项目源码目录
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sourceroot
   */
  sourceRoot?: string

  /**
   * 项目产出目录
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#outputroot
   */
  outputRoot?: string

  /**
   * 框架
   */
  framework?: Framework

  /**
   * 编译工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#compiler
   */
  compiler?: Compiler<T>

  /**
   * 全局变量设置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#defineconstants
   */
  defineConstants?: Record<string, string>

  /**
   * 目录别名
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#alias
   */
  alias?: Record<string, string>

  /**
   * 环境变量
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#env
   * @deprecated 建议使用 `.env` 文件
   */
  env?: Record<string, string>

  /**
   * `Webpack5` 持久化缓存配置
   *
   * @since `Taro v3.5`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#cache
   */
  cache?: Cache

  /**
   * 控制 `Taro` 编译日志的输出方式，目前只在 `Webpack5 compiler` 中支持
   *
   * @since `Taro v3.5`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#logger
   */
  logger?: Logger

  /**
   * 文件拷贝配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#copy
   */
  copy?: Copy

  /**
   * 用于控制对 `scss` 代码的编译行为
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sass
   */
  sass?: TaroSassOptions

  /**
   * Taro 插件配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#plugins
   */
  plugins?: Plugin[]

  /**
   * 插件预设集
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#presets
   */
  presets?: Preset[]

  /**
   * JS 压缩工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#jsminimizer
   * @default `terser`
   */
  jsMinimizer?: JSMinimizer

  /**
   * 配置 `terser`
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#terser
   */
  terser?: TerserMinimizer

  /**
   * 配置 `esbuild`
   *
   * @since `Taro v3.5`
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#esbuild
   */
  esbuild?: EsbuildMinimizer

  /**
   * CSS 压缩工具
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#cssminimizer
   */
  cssMinimizer?: CSSMinimizer

  /**
   * 配置 `csso` 工具以压缩 `CSS` 代码
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#csso
   */
  csso?: CSSOMinimizer

  /**
   * H5 端专用配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#h5
   */
  h5?: PlatformH5

  /**
   * ReactNative 端专用配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rn
   */
  rn?: PlatformRN

  /**
   * 小程序端专用配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#mini
   */
  mini?: PlatformMini

  /**
   * 鸿蒙端专用配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#harmony
   */
  harmony?: PlatformHarmony<T>
}

export * from './copy'
export * from './cache'
export * from './common'
export * from './logger'
export * from './plugin'
export * from './preset'

export * from './packages'
export * from './platforms'
export * from './minimizers'
