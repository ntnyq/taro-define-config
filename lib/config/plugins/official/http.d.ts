/**
 * Options for `@tarojs/plugin-http`
 *
 * @see https://github.com/NervJS/taro/tree/next/packages/taro-plugin-http
 */

export interface PluginHttpOptions {
  /**
   * 注入相关代码，支持 document.cookie 、 通过后端返回 Set-Cookie 响应头来设置 cookie
   *
   * @default false
   */
  enableCookie?: boolean

  /**
   * 禁用掉 Blob 全局对象
   *
   * @default true
   */
  disabledBlob?: boolean

  /**
   * 禁用掉 FormData 全局对象
   *
   * @default true
   */
  disabledFormData?: boolean
}
