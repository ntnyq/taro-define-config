import type { TaroConfig } from './config'

/**
 * Define Taro config
 *
 * @param config Taro config
 * @returns Taro config
 */
export function defineConfig<Config extends TaroConfig> (config: Config): TaroConfig

export * from './config'
