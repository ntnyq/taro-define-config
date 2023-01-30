/**
 * `postcss-html-transform` 配置
 *
 * @see https://github.com/NervJS/taro/tree/next/packages/postcss-html-transform
 */

import type { LiteralUnion } from '../../utility-types'

export type PostcssHtmlTransformPlatform = LiteralUnion<'h5' | 'rn' | 'quickapp'>

export interface PostcssHtmlTransformOptions {
  /**
   * 目标构建平台，默认 `mini-program`
   *
   * @see https://github.com/NervJS/taro/blob/884c799553df1682ef0996c59c7fbd77f60755c9/packages/postcss-html-transform/src/index.ts#L12
   */
  platform?: PostcssHtmlTransformPlatform

  /**
   * 是否移除鼠标样式
   *
   * @see https://github.com/NervJS/taro/blob/884c799553df1682ef0996c59c7fbd77f60755c9/packages/postcss-html-transform/src/index.ts#L46
   */
  removeCursorStyle?: boolean

  [key: string]: any
}
