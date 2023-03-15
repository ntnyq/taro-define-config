/**
 * ReactNative端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#rn
 */

import type { LessOptions, PostcssPxtransformOptions, SassOptions, StylusOptions } from '../npm'
import type { ConfigurablePlugin } from '../common'

export interface PlatformRNLessOptions {
  options?: LessOptions

  additionalData?: string | ((...args: any[]) => string)
}

export interface PlatformRNSassOptions {
  options?: SassOptions

  additionalData?: string | ((...args: any[]) => string)
}

export interface PlatformRNStylusOptions {
  options?: StylusOptions

  additionalData?: string | ((...args: any[]) => string)
}

export interface PlatformRNPostCSSOptions {
  /**
   * PostCSS 配置
   */
  options?: Record<string, any>

  /**
   * 控制是否对 css value 进行 scalePx2dp 转换，pxtransform配置 enable 才生效
   * @default true
   */
  scalable?: boolean

  pxtransform?: ConfigurablePlugin<PostcssPxtransformOptions>

  [key: string]: any
}

export interface PlatformRNResolve {
  /**
   * 配置多个 npm 包名的数组，将 npm 包当作项目文件处理
   */
  include: string[]

  [key: string]: any
}

export interface PlatformRN {
  /**
   * 设置 `RN bundle` 中注册应用的名称
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnappname
   */
  appName?: string

  /**
   * `entry` 利用模块查找规则 `{name}.{platform}.{ext}` 自动区分平台
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnentry
   */
  entry?: string

  /**
   * 设置 `Metro` 打包生成 `bundle` 的输出路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnoutput
   */
  output?: Record<string, string>

  /**
   * `postcss` 相关配置，其他样式语言预处理后经过此配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnpostcss
   */
  postcss?: PlatformRNPostCSSOptions

  /**
   * `sass` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnsass
   */
  sass?: PlatformRNSassOptions

  /**
   * `less` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnless
   */
  less?: PlatformRNLessOptions

  /**
   * `stylus` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnstylus
   */
  stylus?: PlatformRNStylusOptions

  /**
   * `resolve` 处理依赖文件配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnresolve
   */
  resolve?: PlatformRNResolve

  /**
   * 支持多 `className` 转换，以 `classname` 或 `style` 结尾的，提取前缀，然后根据前缀，再生成对应的 `xxxStyle`
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnenablemultipleclassname
   */
  enableMultipleClassName?: boolean

  /**
   * 当标签 `style` 属性值是数组时转换成对象
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnenablemergestyle
   */
  enableMergeStyle?: boolean

  /**
   * 将 `svg` 文件转换为组件引入
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnenablesvgtransform
   */
  enableSvgTransform?: boolean

  [key: string]: any
}
