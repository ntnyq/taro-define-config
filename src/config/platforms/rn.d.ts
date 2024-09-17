/**
 * ReactNative 端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#rn
 */

import type { ConfigurablePlugin } from '../common'
import type {
  LessOptions,
  PostcssCssModulesOptions,
  PostcssPxtransformOptions,
  SassOptions,
  StylusOptions,
} from '../packages'

/**
 * @internal
 */
type ProcessorOptionsWithAdditionalData<T> = {
  options?: T
  additionalData?: string | ((...args: any[]) => string)
}

/**
 * @see https://github.com/NervJS/taro/blob/next/packages/taro-rn-style-transformer/README.md#rnpostcss
 */
export interface PlatformRNPostCSSOptions {
  /**
   * PostCSS 配置
   * @see https://github.com/postcss/postcss#options
   */
  options?: Record<string, any>

  /**
   * 控制是否对 css value 进行 scalePx2dp 转换，pxtransform 配置 enable 才生效
   * @default true
   */
  scalable?: boolean

  /**
   * `pxtransform.enable`
   * @default true
   */
  pxtransform?: ConfigurablePlugin<PostcssPxtransformOptions>

  /**
   * `cssModules.enable`
   * @default false
   */
  cssModules?: ConfigurablePlugin<PostcssCssModulesOptions>

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
  sass?: ProcessorOptionsWithAdditionalData<SassOptions>

  /**
   * `less` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnless
   */
  less?: ProcessorOptionsWithAdditionalData<LessOptions>

  /**
   * `stylus` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnstylus
   */
  stylus?: ProcessorOptionsWithAdditionalData<StylusOptions>

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
