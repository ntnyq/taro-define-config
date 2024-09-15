/**
 * 鸿蒙端专用配置
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#harmony
 */

import type { OutputOptions as RollupOutputOptions } from 'rollup'
import type Webpack from 'webpack'
import type { Configuration as WebpackConfiguration } from 'webpack'
import type { FilterOptions, SourceMapType } from '../common'
import type { CompilerTypes, CompilerViteTypes } from '../compiler'
import type {
  ChainableWebpackConfig,
  CSSLoaderOptions,
  LessLoaderOptions,
  MiniCSSExtractPluginOptions,
  PostCSSOptions,
  SassLoaderOptions,
  StylusLoaderOptions,
  URLLoaderOptions,
} from '../packages'

export interface PlatformHarmonyOhPackage {
  main?: string
  dependencies?: { [name: string]: string }
  devDependencies?: { [name: string]: string }
  [k: string]: any
}

export interface PlatformHarmonyCompile extends FilterOptions {
  filter?: (filename: string) => boolean
}

export interface PlatformHarmonyCompileModeSetting {
  componentReplace?: {
    [key: string]: {
      current_init: string
      dependency_define: string
    }
  }
}

export interface PlatformHarmonyRouter {
  customRoutes?: Record<string, any>
}

export interface PlatformHarmonyClean {
  /**
   * 编译前清空输出目录
   * @since Taro v3.6.9
   * @description
   * - 默认清空输出目录，可设置 clean: false 不清空
   * - 可设置 clean: { keep: ['project.config.json'] } 保留指定文件
   * - 注意 clean.keep 不支持函数
   */
  clean?:
    | boolean
    | {
        keep?: Array<string | RegExp> | string | RegExp
      }
}

export interface PlatformHarmony<T extends CompilerTypes = CompilerViteTypes> {
  /**
   * 项目地址
   */
  projectPath: string

  /**
   * @default `entry`
   */
  hapName?: string

  /**
   * @default `default`
   */
  name?: string

  /**
   * oh-package.json 配置
   */
  ohPackage?: PlatformHarmonyOhPackage

  /**
   * ohpm-cli
   *
   * @default `~/Library/Huawei/ohpm/bin/ohpm"`
   */
  ohpm?: string

  /**
   * 核心依赖前缀
   * @description 用于告诉编译内容如何解析核心依赖，传入时将直接使用依赖前缀，同时不会为工程导入核心依赖
   */
  chorePackagePrefix?: string

  /**
   * 公共文件
   */
  commonChunks?: string[] | ((commonChunks: string[]) => string[])

  /**
   * 编译相关配置
   */
  compile?: PlatformHarmonyCompile

  /**
   * 半编译模式下的选项
   */
  compileModeSetting?: PlatformHarmonyCompileModeSetting

  /**
   * 用于控制是否生成 js、css 对应的 sourceMap
   * @default `true` in when watch mode, otherwise `false`
   */
  enableSourceMap?: boolean

  /**
   * Webpack sourceMap
   * @default `cheap-module-source-map`
   */
  sourceMapType?: SourceMapType

  /**
   * 指定 React 框架相关的代码是否使用开发环境（未压缩）代码，默认使用生产环境（压缩后）代码
   */
  debugReact?: boolean

  /**
   * webpack 编译模式下，可用于修改、拓展 Webpack 的 output 选项，配置项参考[官方文档](https://webpack.js.org/configuration/output/)
   *
   * vite 编译模式下，用于修改、扩展 rollup 的 output，目前仅适配 chunkFileNames 和 assetFileNames 两个配置，修改其他配置请使用 vite 插件进行修改。配置想参考[官方文档](https://rollupjs.org/configuration-options/)
   */
  output?: T extends CompilerViteTypes
    ? Pick<RollupOutputOptions, 'chunkFileNames'> & PlatformHarmonyClean
    : WebpackConfiguration['output'] & PlatformHarmonyClean

  /**
   * 路由配置
   */
  router?: PlatformHarmonyRouter

  /**
   * 自定义 PostCSS 配置
   */
  postcss?: PostCSSOptions<'harmony'>

  /**
   * 自定义 Webpack 配置
   */
  webpackChain?: (chain: ChainableWebpackConfig, webpack: typeof Webpack) => void

  /**
   * `css-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/css-loader
   */
  cssLoaderOption?: CSSLoaderOptions

  /**
   * `sass-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/sass-loader
   */
  sassLoaderOption?: SassLoaderOptions

  /**
   * `less-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/less-loader
   */
  lessLoaderOption?: LessLoaderOptions

  /**
   * `stylus-loader` 的附加配置
   *
   * @see https://github.com/webpack-contrib/stylus-loader
   */
  stylusLoaderOption?: StylusLoaderOptions

  /**
   * `mini-css-extract-plugin` 的附加配置
   *
   * @see https://github.com/webpack-contrib/mini-css-extract-plugin
   */
  miniCssExtractPluginOption?: MiniCSSExtractPluginOptions

  /**
   * 针对 `png | jpg | jpeg | gif | bpm | svg` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  imageUrlLoaderOption?: URLLoaderOptions

  /**
   * 针对 `mp4 | webm | ogg | mp3 | wav | flac | aac` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  mediaUrlLoaderOption?: URLLoaderOptions

  /**
   * 针对 `woff | woff2 | eot | ttf | otf` 文件 `url-loader` 的配置
   *
   * @see https://github.com/webpack-contrib/url-loader
   */
  fontUrlLoaderOption?: URLLoaderOptions

  [key: string]: any
}
