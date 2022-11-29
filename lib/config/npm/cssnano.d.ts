/**
 * `cssnano` 配置
 *
 * @see https://github.com/cssnano/cssnano/blob/master/packages/cssnano/types/index.d.ts
 */

export interface CSSNanoOptions {
  /**
   * https://cssnano.co/docs/config-file/#choose-a-preset
   */
  preset?: any

  /**
   * @see https://cssnano.co/docs/config-file/#use-individual-plugins
   */
  plugins?: any[]

  /**
   * @see https://github.com/cssnano/cssnano/blob/4f269016ea7e6489a0f477cfe68057aea9717460/packages/cssnano/src/index.js#L94
   */
  configFile?: string
}
