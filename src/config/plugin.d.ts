import type {
  OfficialPluginName,
  OfficialPluginTuple,
  ThirdPartyPluginName,
  ThirdPartyPluginTuple,
} from './plugins'

/**
 * Taro 插件
 *
 * @see https://nervjs.github.io/taro-docs/docs/config-detail#plugins
 */
export type Plugin =
  | OfficialPluginName
  | OfficialPluginTuple
  | ThirdPartyPluginName
  | ThirdPartyPluginTuple
