import type { LiteralUnion } from '../../utils'
import type { ConfigurablePlugin } from '../common'
import type { CSSNanoOptions } from '../packages'

export type CSSMinimizer = LiteralUnion<'csso' | 'esbuild' | 'lightningcss'>

export type CSSOMinimizer = ConfigurablePlugin<CSSNanoOptions>
