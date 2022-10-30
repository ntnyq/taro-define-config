import type { LiteralUnion } from '../../utility-types'

export type CSSMinimizer = LiteralUnion<'csso' | 'esbuild' | 'parcelCss'>

// TODO: https://cssnano.co/docs/config-file/
export type CSSOConfig = Record<string, any>

export interface CSSO {
  /**
   * 是否开启 `CSS` 代码压缩
   */
  enable?: boolean

  /**
   * `csso` 的具体配置
   */
  config?: CSSOConfig
}
