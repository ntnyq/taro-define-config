/**
 * Options for `@tarojs/plugin-inject`
 *
 * @see https://github.com/NervJS/taro/tree/next/packages/taro-plugin-inject
 */

type VoidComponents = Set<string>
type NestElements = Map<string, number>

export interface PluginInjectOptions {
  /**
   * 新增同步 API
   */
  syncApis?: string[]

  /**
   * 新增异步 API
   */
  asyncApis?: string[]

  /**
   * 修改、新增组件的属性
   */
  components?: Record<string, Record<string, any>>

  /**
   * 新增组件时的名称映射
   */
  componentsMap?: Record<string, string>

  /**
   * 设置第三方自定义组件的属性的默认值
   */
  thirdPartyComponents?: Record<string, Record<string, any>>

  /**
   * 设置组件是否可以渲染子元素
   */
  voidComponents?: string[] | ((list: VoidComponents) => VoidComponents)

  /**
   * 设置组件模版的循环次数
   */
  nestElements?: Record<string, number> | ((elem: NestElements) => NestElements)
}
