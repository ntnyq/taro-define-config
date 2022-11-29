import type { LiteralUnion } from '../utility-types'

/**
 * `Webpack devtool` 类型
 *
 * @see https://webpack.js.org/configuration/devtool/#devtool
 */
export type SourceMapType = LiteralUnion<
  | 'eval'
  | 'eval-cheap-source-map'
  | 'eval-cheap-module-source-map'
  | 'eval-source-map'
  | 'cheap-source-map'
  | 'cheap-module-source-map'
  | 'source-map'
  | 'inline-cheap-source-map'
  | 'inline-cheap-module-source-map'
  | 'inline-source-map'
  | 'eval-nosources-cheap-source-map'
  | 'eval-nosources-cheap-module-source-map'
  | 'eval-nosources-source-map'
  | 'inline-nosources-cheap-source-map'
  | 'inline-nosources-cheap-module-source-map'
  | 'inline-nosources-source-map'
  | 'nosources-cheap-source-map'
  | 'nosources-cheap-module-source-map'
  | 'nosources-source-map'
  | 'hidden-nosources-cheap-source-map'
  | 'hidden-nosources-cheap-module-source-map'
  | 'hidden-nosources-source-map'
  | 'hidden-cheap-source-map'
  | 'hidden-cheap-module-source-map'
  | 'hidden-source-map'
>

export interface ConfigurablePlugin<T extends Record<string, any>> {
  enable?: boolean
  config?: T
}
