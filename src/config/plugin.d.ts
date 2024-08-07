/**
 * Taro 插件
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#plugins
 */

import type { Awaitable } from '../utility-types'
import type { PluginHtmlOptions, PluginHttpOptions, PluginInjectOptions } from './plugins'

export interface OfficialPluginOptionsMap {
  '@tarojs/plugin-html': PluginHtmlOptions
  '@tarojs/plugin-inject': PluginInjectOptions
  '@tarojs/plugin-http': PluginHttpOptions
}

export type OfficialPluginName = keyof OfficialPluginOptionsMap

export type OfficialPluginTuple<K extends OfficialPluginName = OfficialPluginName> =
  | [K, OfficialPluginOptionsMap[K]?]
  | [K, () => Awaitable<OfficialPluginOptionsMap[K]>]

export interface CustomPluginOptionsMap {}

export type CustomPluginName = keyof CustomPluginOptionsMap

export type CustomPluginTuple<K extends CustomPluginName = CustomPluginName> =
  | [K, CustomPluginOptionsMap[K]?]
  | [K, () => Awaitable<CustomPluginOptionsMap[K]>]

export type Plugin = OfficialPluginName | OfficialPluginTuple | CustomPluginName | CustomPluginTuple
