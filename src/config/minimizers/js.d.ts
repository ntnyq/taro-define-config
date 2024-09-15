import type { LiteralUnion } from '../../utility-types'
import type { ConfigurablePlugin } from '../common'
import type { EsbuildPluginOptions, TerserMinifyOptions } from '../packages'

export type JSMinimizer = LiteralUnion<'terser' | 'esbuild'>

export type TerserMinimizer = ConfigurablePlugin<TerserMinifyOptions>

export interface EsbuildMinimizer {
  /**
   * 配置 `ESBuildMinifyPlugin`
   *
   * @see https://github.com/esbuild-kit/esbuild-loader#minification
   */
  minify?: ConfigurablePlugin<EsbuildPluginOptions>
}
