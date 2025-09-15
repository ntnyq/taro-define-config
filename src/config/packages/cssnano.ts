/**
 * `cssnano` 配置
 *
 * @see https://github.com/cssnano/cssnano/blob/master/packages/cssnano/types/index.d.ts
 * @compatibility 7.1.1
 */

import type { AnyFn } from '../../utils'

export type CSSNanoConfig<T> = T | [T, Record<string, any>] | [T]

export interface CSSNanoOptions {
  /**
   * @see https://cssnano.github.io/cssnano/docs/config-file/#choose-a-preset
   */
  preset?: CSSNanoConfig<AnyFn> | CSSNanoConfig<string>

  /**
   * @see https://cssnano.github.io/cssnano/docs/config-file/#use-individual-plugins
   */
  plugins?:
    | (CSSNanoConfig<AnyFn> | CSSNanoConfig<string>)[]
    | CSSNanoConfig<AnyFn>
    | CSSNanoConfig<string>

  /**
   * @see https://github.com/cssnano/cssnano/blob/master/packages/cssnano/types/index.d.ts
   */
  configFile?: string
}
