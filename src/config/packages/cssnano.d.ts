/**
 * `cssnano` 配置
 *
 * @see https://github.com/cssnano/cssnano/blob/master/packages/cssnano/types/index.d.ts
 * @compatibility 7.0.6
 */

import type { AnyFn } from '../../utility-types'

export type CSSNanoConfig<T> = T | [T] | [T, Record<string, any>]

export interface CSSNanoOptions {
  /**
   * @see https://cssnano.github.io/cssnano/docs/config-file/#choose-a-preset
   */
  preset?: CSSNanoConfig<string> | CSSNanoConfig<AnyFn>

  /**
   * @see https://cssnano.github.io/cssnano/docs/config-file/#use-individual-plugins
   */
  plugins?:
    | CSSNanoConfig<string>
    | CSSNanoConfig<AnyFn>
    | (CSSNanoConfig<string> | CSSNanoConfig<AnyFn>)[]

  /**
   * @see https://github.com/cssnano/cssnano/blob/master/packages/cssnano/types/index.d.ts
   */
  configFile?: string
}
