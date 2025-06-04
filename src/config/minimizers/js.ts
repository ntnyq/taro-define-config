import type { LiteralUnion } from '../../utils'
import type { ConfigurablePlugin } from '../common'
import type { EsbuildPluginOptions, TerserMinifyOptions } from '../packages'

export type JSMinimizer = LiteralUnion<'esbuild' | 'terser'>

export type TerserMinimizer = ConfigurablePlugin<TerserMinifyOptions>

export interface EsbuildMinimizer {
  /**
   * 配置 `ESBuildMinifyPlugin`
   *
   * @see https://github.com/esbuild-kit/esbuild-loader#minification
   */
  minify?: ConfigurablePlugin<EsbuildPluginOptions>
}
