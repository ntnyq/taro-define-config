import type { TaroConfig } from './config'
import type { CompilerTypes, CompilerWebpackTypes } from './config/compiler'
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

export type TaroConfigFn<T extends CompilerTypes = CompilerWebpackTypes> = (
  merge: WebpackMerge,
  env: TaroConfigEnv,
) => Awaitable<TaroConfig<T>>

export type TaroConfigExport<T extends CompilerTypes = CompilerWebpackTypes> =
  | Awaitable<TaroConfig<T>>
  | TaroConfigFn<T>

/**
 * Define a Taro config
 *
 * @param config Taro config
 * @returns Taro config
 */
export function defineConfig<T extends CompilerTypes = CompilerWebpackTypes>(
  config: TaroConfigExport<T>,
): TaroConfigExport<T> {
  return config
}

export type * from './config'
