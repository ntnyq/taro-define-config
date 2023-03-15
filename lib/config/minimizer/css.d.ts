import type { LiteralUnion } from '../../utility-types'
import type { CSSNanoOptions } from '../npm'
import type { ConfigurablePlugin } from '../common'

export type CSSMinimizer = LiteralUnion<'csso' | 'esbuild' | 'parcelCss'>

export type CSSOMinimizer = ConfigurablePlugin<CSSNanoOptions>
