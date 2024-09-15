import type { ConfigurablePlugin } from '../common'
import type { AutoprefixerOptions } from './autoprefixer'
import type { PostcssCssModulesOptions } from './postcss-css-modules'
import type { PostcssHtmlTransformOptions } from './postcss-html-transform'
import type { PostcssPxtransformOptions } from './postcss-pxtransform'
import type { PostcssUrlOptions } from './postcss-url'

export interface BasePostCSSOptions {
  autoprefixer?: ConfigurablePlugin<AutoprefixerOptions>
  pxtransform?: ConfigurablePlugin<PostcssPxtransformOptions>
  cssModules?: ConfigurablePlugin<PostcssCssModulesOptions>
  htmltransform?: ConfigurablePlugin<PostcssHtmlTransformOptions>
  [key: string]: any
}

export type PostCSSOptions<T extends 'h5' | 'harmony' | 'mini'> = T extends 'h5'
  ? BasePostCSSOptions & { url?: ConfigurablePlugin<PostcssUrlOptions> }
  : BasePostCSSOptions
