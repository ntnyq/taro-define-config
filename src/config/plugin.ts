/**
 * Taro 插件
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#plugins
 */

import type { Awaitable, ExcludeEmptyObjects } from '../utils'
import type {
  PluginHtmlOptions,
  PluginHttpOptions,
  PluginIndieOptions,
  PluginInjectOptions,
  PluginMiniCIOptions,
  PluginMockOptions,
  PluginPlatformAlipayDdOptions,
  PluginPlatformKwaiOptions,
  PluginPlatformLarkOptions,
  PluginPlatformNextJsOptions,
  PluginPlatformXhsOptions,
} from './plugins'

export interface OfficialPluginOptionsMap {
  '@tarojs/plugin-html': PluginHtmlOptions
  '@tarojs/plugin-inject': PluginInjectOptions
  '@tarojs/plugin-http': PluginHttpOptions
  '@tarojs/plugin-mock': PluginMockOptions
  '@tarojs/plugin-indie': PluginIndieOptions
  '@tarojs/plugin-mini-ci': PluginMiniCIOptions

  /**
   * Platform plugins
   */
  '@tarojs/plugin-platform-xhs': PluginPlatformXhsOptions
  '@tarojs/plugin-platform-lark': PluginPlatformLarkOptions
  '@tarojs/plugin-platform-kwai': PluginPlatformKwaiOptions
  '@tarojs/plugin-platform-alipay-dd': PluginPlatformAlipayDdOptions

  // Official
  'tarojs-plugin-platform-nextjs': PluginPlatformNextJsOptions
}
export interface CustomPluginOptionsMap {}

export type PluginsOptionsMap = CustomPluginOptionsMap
  & OfficialPluginOptionsMap

export type PluginName = keyof PluginsOptionsMap

export type PluginTuple<T extends PluginName = PluginName> =
  | [T, () => Awaitable<ExcludeEmptyObjects<PluginsOptionsMap>[T]>]
  | [T, ExcludeEmptyObjects<PluginsOptionsMap>[T]]
  | [T]

export type Plugin = PluginName | PluginTuple
