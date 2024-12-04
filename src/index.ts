import type { TaroConfig } from './config'
import type { CompilerTypes, CompilerWebpackTypes } from './config/compiler'

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

export type TaroConfigFnObject<T extends CompilerTypes = CompilerWebpackTypes> = (
  merge: WebpackMerge,
  env: TaroConfigEnv,
) => TaroConfig<T>
export type TaroConfigFnPromise<T extends CompilerTypes = CompilerWebpackTypes> = (
  merge: WebpackMerge,
  env: TaroConfigEnv,
) => Promise<TaroConfig<T>>
export type TaroConfigFn<T extends CompilerTypes = CompilerWebpackTypes> = (
  merge: WebpackMerge,
  env: TaroConfigEnv,
) => TaroConfig<T> | Promise<TaroConfig<T>>
export type TaroConfigExport<T extends CompilerTypes = CompilerWebpackTypes> =
  | TaroConfig<T>
  | Promise<TaroConfig<T>>
  | TaroConfigFnObject<T>
  | TaroConfigFnPromise<T>
  | TaroConfigFn<T>

/**
 * Define a Taro config
 *
 * @param config - Taro config
 * @returns Taro config
 */
export function defineConfig<T extends CompilerTypes = CompilerWebpackTypes>(
  config: TaroConfig<T>,
): TaroConfig<T>
export function defineConfig<T extends CompilerTypes = CompilerWebpackTypes>(
  config: Promise<TaroConfig<T>>,
): Promise<TaroConfig<T>>
export function defineConfig<T extends CompilerTypes = CompilerWebpackTypes>(
  config: TaroConfigFnObject<T>,
): TaroConfigFnObject<T>
export function defineConfig<T extends CompilerTypes = CompilerWebpackTypes>(
  config: TaroConfigExport<T>,
): TaroConfigExport<T>
export function defineConfig<T extends CompilerTypes = CompilerWebpackTypes>(
  config: TaroConfigExport<T>,
): TaroConfigExport<T> {
  return config
}

export type * from './config'
