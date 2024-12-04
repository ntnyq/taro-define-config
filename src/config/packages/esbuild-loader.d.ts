/**
 * @file `esbuild-loader` 配置
 *
 * @see https://www.npmjs.com/package/esbuild-loader?activeTab=code
 * @compatibility 4.2.2
 */

import type { transform, TransformOptions } from './esbuild'

type Filter = string | RegExp

type Implementation = {
  transform: typeof transform
}

type Except<ObjectType, Properties> = {
  [Key in keyof ObjectType as Key extends Properties ? never : Key]: ObjectType[Key]
}

type LoaderOptions = Except<TransformOptions, 'sourcefile' | 'sourcemap'> & {
  /** Pass a custom esbuild implementation */
  implementation?: Implementation

  /**
   * Path to tsconfig.json file
   */
  tsconfig?: string
}

type EsbuildPluginOptions = Except<TransformOptions, 'sourcefile' | 'sourcemap'> & {
  css?: boolean
  exclude?: Filter | Filter[]
  include?: Filter | Filter[]

  /** Pass a custom esbuild implementation */
  implementation?: Implementation
}

declare class EsbuildPlugin {
  constructor(options?: EsbuildPluginOptions)

  apply(): void
}

export { EsbuildPlugin, type EsbuildPluginOptions, type LoaderOptions }
