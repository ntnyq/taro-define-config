/**
 * Options for `@tarojs/plugin-indie`
 *
 * @see https://github.com/NervJS/taro-plugin-indie
 */

export interface PluginIndieOptions {
  /**
   * 插件支持自定义小程序样式处理规则
   * @see https://github.com/NervJS/taro-plugin-indie?tab=readme-ov-file#1-pathstyleimportwithcustomrule
   */
  pathStyleImportWithCustomRule?: (filename: string) => boolean
}
