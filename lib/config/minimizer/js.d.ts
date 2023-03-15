import type { LiteralUnion } from '../../utility-types'
import type { ConfigurablePlugin } from '../common'

export type JSMinimizer = LiteralUnion<'terser' | 'esbuild'>

// TODO: https://github.com/terser/terser#minify-options
export type TerserMinifyOptions = Record<string, any>

export type TerserMinimizer = ConfigurablePlugin<TerserMinifyOptions>

// TODO: https://github.com/privatenumber/esbuild-loader#minifyplugin
export type EsbuildMinifyOptions = Record<string, any>

export interface EsbuildMinimizer {
  /**
   * 配置 `ESBuildMinifyPlugin`
   */
  minify?: ConfigurablePlugin<EsbuildMinifyOptions>
}
