/**
 * `cssnano` 配置
 *
 * @see https://github.com/cssnano/cssnano/blob/master/packages/cssnano/types/index.d.ts
 */

import type { AnyFn } from '../common'

export type CSSNanoConfig<T> = T | [T] | [T, Record<string, any>]

export interface CSSNanoOptions {
  /**
   * @see https://cssnano.co/docs/config-file/#choose-a-preset
   */
  preset?: CSSNanoConfig<string> | CSSNanoConfig<AnyFn>

  /**
   * @see https://cssnano.co/docs/config-file/#use-individual-plugins
   */
  plugins?:
    | CSSNanoConfig<string>
    | CSSNanoConfig<AnyFn>
    | (CSSNanoConfig<string> | CSSNanoConfig<AnyFn>)[]

  /**
   * @see https://github.com/cssnano/cssnano/blob/4f269016ea7e6489a0f477cfe68057aea9717460/packages/cssnano/src/index.js#L94
   */
  configFile?: string
}
