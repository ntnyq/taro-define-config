import type { TaroConfig } from './config'
import type { Awaitable } from './utility-types'

export interface TaroConfigEnv {
  /**
   * 构建模式
   */
  mode: string

  /**
   * 构建命令
   */
  command: string
}

export type WebpackMerge = (...configs: Array<object | null | undefined>) => object

export type TaroConfigFn = (merge: WebpackMerge, env: TaroConfigEnv) => Awaitable<TaroConfig>

export type TaroConfigExport = Awaitable<TaroConfig> | TaroConfigFn

/**
 * Define a Taro config
 *
 * @param config Taro config
 * @returns Taro config
 */
export function defineConfig(config: TaroConfigExport): TaroConfigExport {
  return config
}

export type * from './config'
