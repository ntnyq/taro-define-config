/**
 * `sass` 配置
 *
 * @see https://sass-lang.com/documentation/js-api/interfaces/Options
 */

export interface SassOptions {
  /**
   * 需要全局注入的 `scss` 文件的绝对路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sassresource
   */
  resource?: string | string[]

  /**
   * 项目根目录的绝对地址(若为小程序云开发模板，则应该是 `client` 目录)
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sassprojectdirectory
   */
  projectDirectory?: string

  /**
   * 全局 `scss` 变量，优先级高于 `resource`
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#sassdata
   */
  data?: string

  /**
   * @see https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/sass/index.d.ts
   */
  [key: string]: any
}
