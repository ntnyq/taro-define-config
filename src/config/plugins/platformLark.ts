/**
 * Options for `@tarojs/plugin-platform-lark`
 *
 * @see https://github.com/NervJS/taro-plugin-platform-lark
 */

export interface PluginPlatformLarkOptions {
  /**
   * Lark 小程序是否支持 PC 端的组件属性
   * @default false
   */
  pc?: boolean

  /**
   * Lark 小程序编译时的入口文件
   * @see https://github.com/NervJS/taro-plugin-platform-lark?tab=readme-ov-file#%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9
   * @default undefined
   */
  entry?: string
}
