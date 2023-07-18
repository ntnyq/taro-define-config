/**
 * `stylus` 配置
 *
 * @see https://stylus-lang.com/
 */

import type { AnyFn } from '../common'

export type StylusOptionsDefineItemValue = string | number | boolean

export type StylusOptionsDefineItem = [string, StylusOptionsDefineItemValue, boolean?]

/**
 * @deprecated
 */
export type StylusOptionsDefineObject = Record<string, StylusOptionsDefineItemValue>

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
  define?: StylusOptionsDefineItem[] | StylusOptionsDefineObject

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
}
