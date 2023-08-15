/**
 * Options for `@tarojs/plugin-html`
 *
 * @see https://github.com/NervJS/taro/tree/next/packages/taro-plugin-html
 */

export interface PluginHtmlOptions {
  pxtransformBlackList?: (string | RegExp)[]

  enableSizeAPIs?: boolean

  modifyElements?: (inline: string[], block: string[]) => void
}
