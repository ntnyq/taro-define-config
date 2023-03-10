/**
 * Taro 插件
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#plugins
 */
export type Plugin<T = any> =
  | string
  | [string]
  | [string, T]
