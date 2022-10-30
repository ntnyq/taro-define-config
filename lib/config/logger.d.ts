
export interface Logger {
  /**
   * 是否简化输出日志
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#quiet
   */
  quiet?: boolean

  /**
   * 是否输出 `Webpack Stats` 信息
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#stats
   */
  stats?: boolean
}
