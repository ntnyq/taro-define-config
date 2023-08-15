import type { PluginHtmlOptions } from './html'
import type { PluginInjectOptions } from './inject'
import type { PluginHttpOptions } from './http'

export interface OfficialPluginOptionsMap {
  '@tarojs/plugin-html': PluginHtmlOptions
  '@tarojs/plugin-inject': PluginInjectOptions
  '@tarojs/plugin-http': PluginHttpOptions
}

export type OfficialPluginName = keyof OfficialPluginOptionsMap

export type OfficialPluginTuple = {
  [K in OfficialPluginName]: [K, OfficialPluginOptionsMap[K]?]
}[OfficialPluginName]
