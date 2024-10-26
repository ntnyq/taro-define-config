/**
 * `postcss-pxtransform` 配置
 *
 * @see https://github.com/NervJS/taro/tree/main/packages/postcss-pxtransform#配置-options
 */

import type { LiteralUnion } from '../../utility-types'
import type { DesignRatio, DesignWidth } from '../design'

export interface PostcssPxtransformOptions {
  /**
   * 目标平台
   *
   * @default `weapp`
   */
  platform?: LiteralUnion<'weapp' | 'h5' | 'rn' | 'quickapp' | 'harmony'>

  /**
   * 设计稿尺寸
   *
   * @default 750
   */
  designWidth?: DesignWidth

  /**
   * 设计稿尺寸换算规则
   */
  deviceRatio?: DesignRatio

  /**
   * @default 16
   */
  rootValue?: number

  /**
   * @deprecated use `rootValue` instead
   */
  root_value?: number

  /**
   * `rem` 单位允许的小数位
   *
   * @default 5
   */
  unitPrecision?: number

  /**
   * @deprecated use `unitPrecision` instead
   */
  unit_precision?: number

  /**
   * 允许转换的属性列表
   *
   * @default ['*']
   */
  propList?: string[]

  /**
   * @deprecated use `propList` instead
   */
  prop_white_list?: string[]

  /**
   * @deprecated use `propList` instead
   */
  propWhiteList?: string[]

  /**
   * 黑名单里的选择器将会被忽略
   *
   * @default []
   */
  selectorBlackList?: (string | RegExp)[]

  /**
   * @deprecated use `selectorBlackList` instead
   */
  selector_black_list?: (string | RegExp)[]

  /**
   * 直接替换而不是追加一条进行覆盖
   *
   * @default true
   */
  replace?: boolean

  /**
   * 允许媒体查询里的 px 单位转换
   *
   * @default false
   */
  mediaQuery?: boolean

  /**
   * @deprecated use `mediaQuery` instead
   */
  media_query?: boolean

  /**
   * 设置一个可被转换的最小 px 值
   *
   * @default 0
   */
  minPixelValue?: number

  /**
   * H5 字体尺寸大小基准值，开发者可以自行调整单位换算的基准值
   *
   * @description supported h5 only
   * @default 20
   */
  baseFontSize?: number

  /**
   * H5 根节点 font-size 的最小值
   *
   * @description supported h5 only
   * @default 20
   */
  minRootSize?: number

  /**
   * H5 根节点 font-size 的最大值
   *
   * @description supported h5 only
   * @default 40
   */
  maxRootSize?: number

  /**
   * 设置 1px 是否需要被转换
   *
   * @default false
   */
  onePxTransform?: boolean

  /**
   * 转换后的单位，当前仅支持小程序 (默认 `rpx`) 和 Web 端 (默认 `rem`)
   * @description Web 端使用 rem 单位时会注入脚本用于设置 body 上的 font-size 属性，其他单位无该操作
   */
  targetUnit?: LiteralUnion<'rpx' | 'rem' | 'vw'>

  /**
   * 启用的能力 Scope
   *
   * @default ['platform', 'size']
   */
  methods?: string[]

  /**
   * filter 回调函数，可 exclude 不处理的文件
   */
  exclude?: (fileName: string) => boolean

  [key: string]: any
}
