/**
 * Options for `@tarojs/plugin-react-devtools`
 *
 * @see https://github.com/NervJS/taro/tree/main/packages/taro-plugin-react-devtools
 */

export interface PluginReactDevtoolsOptions {
  /**
   * 是否启用
   *
   * @default false
   */
  enabled?: boolean
  /**
   * 主机名
   *
   * @default `localhost`
   */
  hostname?: string
  /**
   * 端口号
   *
   * @default `8097`
   */
  port?: string
}
