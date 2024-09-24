import type { LiteralUnion } from '../../utility-types'
import type { ConfigurablePlugin } from '../common'
import type { CSSNanoOptions } from '../packages'

export type CSSMinimizer = LiteralUnion<'csso' | 'esbuild' | 'lightningcss'>

export type CSSOMinimizer = ConfigurablePlugin<CSSNanoOptions>
