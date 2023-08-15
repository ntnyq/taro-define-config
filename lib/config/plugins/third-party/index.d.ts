export interface ThirdPartyPluginOptionsMap {}

export type ThirdPartyPluginName = keyof ThirdPartyPluginOptionsMap

export type ThirdPartyPluginTuple = {
  [K in ThirdPartyPluginName]: [K, ThirdPartyPluginOptionsMap[K]?]
}[ThirdPartyPluginName]
