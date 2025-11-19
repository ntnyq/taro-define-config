/**
 * @file `esbuild-loader` 配置
 *
 * @see https://www.npmjs.com/package/esbuild-loader?activeTab=code
 * @compatibility 4.4.0
 */

import type { transform, TransformOptions } from './esbuild'

type Filter = string | RegExp

type Implementation = {
  transform: typeof transform
}

type Except<ObjectType, Properties> = {
  [Key in keyof ObjectType as Key extends Properties
    ? never
    : Key]: ObjectType[Key]
}

export type ESBuildLoaderOptions = Except<
  TransformOptions,
  'sourcefile' | 'sourcemap'
> & {
  /** Pass a custom esbuild implementation */
  implementation?: Implementation

  /**
   * Path to tsconfig.json file
   */
  tsconfig?: string
}

export type ESBuildPluginOptions = Except<
  TransformOptions,
  'sourcefile' | 'sourcemap'
> & {
  css?: boolean
  exclude?: Filter | Filter[]
  /** Pass a custom esbuild implementation */
  implementation?: Implementation
  include?: Filter | Filter[]
}

export declare class ESBuildPlugin {
  constructor(options?: ESBuildPluginOptions)

  apply(): void
}
