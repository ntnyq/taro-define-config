/**
 * Taro 预设
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#presets
 */
export type Preset<T = any> =
  | string
  | [string]
  | [string, T]
