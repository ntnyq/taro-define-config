/**
 * `postcss-html-transform` 配置
 *
 * @see https://github.com/NervJS/taro/tree/main/packages/postcss-html-transform
 * @compatibility 4.0.16
 */

import type { LiteralUnion } from '../../utils'

export type PostcssHtmlTransformPlatform = LiteralUnion<
  'h5' | 'mini-program' | 'quickapp' | 'rn'
>

export interface PostcssHtmlTransformOptions {
  /**
   * 目标构建平台
   *
   * @see https://github.com/NervJS/taro/blob/884c799553df1682ef0996c59c7fbd77f60755c9/packages/postcss-html-transform/src/index.ts#L12
   * @default `mini-program`
   */
  platform?: PostcssHtmlTransformPlatform

  /**
   * 是否移除鼠标样式, `h5` 平台默认为 `true`
   *
   * @see https://github.com/NervJS/taro/blob/884c799553df1682ef0996c59c7fbd77f60755c9/packages/postcss-html-transform/src/index.ts#L46
   */
  removeCursorStyle?: boolean

  [key: string]: any
}
