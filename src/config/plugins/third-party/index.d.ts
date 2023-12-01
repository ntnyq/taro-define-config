import type { Awaitable } from '../../../utility-types'

export interface ThirdPartyPluginOptionsMap {}

export type ThirdPartyPluginName = keyof ThirdPartyPluginOptionsMap

export type ThirdPartyPluginTuple = {
  [K in ThirdPartyPluginName]:
    | [K, ThirdPartyPluginOptionsMap[K]?]
    | [K, () => Awaitable<ThirdPartyPluginOptionsMap[K]>]
}[ThirdPartyPluginName]
