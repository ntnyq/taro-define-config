/**
 * `postcss-pxtransform` 配置
 *
 * @see https://github.com/NervJS/taro/tree/main/packages/postcss-pxtransform#配置-options
 */

import type { LiteralUnion } from '../../utility-types'
import type { DesignRatio, DesignWidth } from '../design'

export type PostcssPxtransformPlatform = LiteralUnion<
  'weapp' | 'h5' | 'rn' | 'quickapp' | 'harmony'
>

export type PostcssPxtransformTargetUnit = LiteralUnion<'rpx' | 'px' | 'rem' | 'vw'>

export interface PostcssPxtransformOptions {
  /**
   * target platform
   *
   * @default `weapp`
   */
  platform?: PostcssPxtransformPlatform

  /**
   * design width
   *
   * @default 750
   */
  designWidth?: DesignWidth

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
   * The decimal numbers to allow the REM units to grow to
   *
   * @default 5
   */
  unitPrecision?: number

  /**
   * @deprecated use `unitPrecision` instead
   */
  unit_precision?: number

  /**
   * The properties that can change from px to rem
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
   * The selectors to ignore and leave as px
   *
   * @default []
   */
  selectorBlackList?: (string | RegExp)[]

  /**
   * @deprecated use `selectorBlackList` instead
   */
  selector_black_list?: (string | RegExp)[]

  /**
   * replaces rules containing rems instead of adding fallbacks
   *
   * @default true
   */
  replace?: boolean

  /**
   * Allow px to be converted in media queries
   *
   * @default false
   */
  mediaQuery?: boolean

  /**
   * @deprecated use `mediaQuery` instead
   */
  media_query?: boolean

  /**
   * Set the minimum pixel value to replace
   *
   * @default 0
   */
  minPixelValue?: number

  /**
   * min root size
   *
   * @default 20
   */
  minRootSize?: number

  /**
   * base font size
   */
  baseFontSize?: number

  /**
   * if transform 1 px
   *
   * @default false
   */
  onePxTransform?: boolean

  /**
   * target unit
   *
   * @default `rpx`
   */
  targetUnit?: PostcssPxtransformTargetUnit

  [key: string]: any
}
