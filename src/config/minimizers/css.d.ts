import type { LiteralUnion } from '../../utility-types'
import type { CSSNanoOptions } from '../packages'
import type { ConfigurablePlugin } from '../common'

export type CSSMinimizer = LiteralUnion<'csso' | 'esbuild' | 'parcelCss'>

export type CSSOMinimizer = ConfigurablePlugin<CSSNanoOptions>
