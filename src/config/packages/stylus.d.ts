/**
 * `stylus` 配置
 *
 * @see https://stylus-lang.com/
 * @compatibility 0.64.0
 */

import type { AnyFn } from '../../utility-types'

export type StylusOptionsDefineItem = [string, boolean | number | string, boolean?]

export interface StylusOptions {
  /**
   * Specify Stylus plugins to use
   */
  use?: (string | AnyFn)[]

  /**
   * Add path(s) to the import lookup paths
   */
  include?: string[]

  /**
   * Import the specified Stylus files/paths
   */
  import?: string[]

  /**
   * Define Stylus variables or functions
   * @default {}
   */
  define?: Record<string, boolean | number | string> | StylusOptionsDefineItem[]

  /**
   * Include regular CSS on \@import
   * @default false
   */
  includeCSS?: boolean

  /**
   * Emits comments in the generated CSS indicating the corresponding Stylus line
   * @default false
   */
  lineNumbers?: boolean

  /**
   * Move \@import and \@charset to the top
   * @default false
   */
  hoistAtrules?: boolean

  [key: string]: any
}
