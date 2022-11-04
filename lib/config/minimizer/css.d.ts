import type { LiteralUnion } from '../../utility-types'
import type { CSSNanoOptions } from '../npm'

export type CSSMinimizer = LiteralUnion<'csso' | 'esbuild' | 'parcelCss'>

export interface CSSO {
  /**
   * 是否开启 `CSS` 代码压缩
   */
  enable?: boolean

  /**
   * `csso` 的具体配置
   */
  config?: CSSNanoOptions
}
