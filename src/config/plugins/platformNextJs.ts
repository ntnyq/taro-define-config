/**
 * Options for `@tarojs/plugin-platform-nextjs`
 *
 * @see https://github.com/NervJS/tarojs-plugin-ssr
 */

export interface PluginPlatformNextJsOptions {
  /**
   * 执行 taro build --type nextjs --watch 命令后，是否需要自动执行 next dev 命令
   * @default true
   */
  runNextjs?: boolean

  /**
   * 是否启动后自动打开浏览器
   * @default true
   */
  browser?: boolean

  /**
   * 插件编译阶段需要复制到 Next.js 中的附加文件
   */
  extraFiles?: string[]
}
