/**
 * Options for `@tarojs/plugin-vue-devtools`
 *
 * @see https://github.com/NervJS/taro/tree/main/packages/taro-plugin-vue-devtools
 */

export interface PluginVueDevtoolsOptions {
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
   * @default `8098`
   */
  port?: string
}
