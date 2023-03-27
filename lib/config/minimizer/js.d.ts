import type { EsbuildPluginOptions } from 'esbuild-loader'
import type { MinifyOptions } from 'terser'
import type { LiteralUnion } from '../../utility-types'
import type { ConfigurablePlugin } from '../common'

export type JSMinimizer = LiteralUnion<'terser' | 'esbuild'>

export type TerserMinifyOptions = MinifyOptions

export type TerserMinimizer = ConfigurablePlugin<TerserMinifyOptions>

export type EsbuildMinifyOptions = EsbuildPluginOptions

export interface EsbuildMinimizer {
  /**
   * 配置 `ESBuildMinifyPlugin`
   */
  minify?: ConfigurablePlugin<EsbuildMinifyOptions>
}
