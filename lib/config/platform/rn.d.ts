/**
 * ReactNative端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#rn
 */
export interface PlatformRN {
  /**
   * 设置 `RN bundle` 中注册应用的名称
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnappname
   */
  appName?: string

  /**
   * `entry` 利用模块查找规则 `{name}.{platform}.{ext}` 自动区分平台
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnentry
   */
  entry?: string

  /**
   * 设置 `Metro` 打包生成 `bundle` 的输出路径
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnoutput
   */
  output?: Record<string, string>

  /**
   * `postcss` 相关配置，其他样式语言预处理后经过此配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnpostcss
   */
  postcss?: Record<string, any>

  /**
   * `sass` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnsass
   */
  sass?: Record<string, any>

  /**
   * `less` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnless
   */
  less?: Record<string, any>

  /**
   * `stylus` 相关配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnstylus
   */
  stylus?: Record<string, any>

  /**
   * `resolve` 处理依赖文件配置
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnresolve
   */
  resolve?: Record<string, any>

  /**
   * 支持多 `className` 转换，以 `classname` 或 `style` 结尾的，提取前缀，然后根据前缀，再生成对应的 `xxxStyle`
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnenablemultipleclassname
   */
  enableMultipleClassName?: boolean

  /**
   * 当标签 `style` 属性值是数组时转换成对象
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnenablemergestyle
   */
  enableMergeStyle?: boolean

  /**
   * 将 `svg` 文件转换为组件引入
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#rnenablesvgtransform
   */
  enableSvgTransform?: boolean

  [key: string]: any
}
