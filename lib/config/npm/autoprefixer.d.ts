/**
 * `autoprefixer` 配置
 *
 * @see https://github.com/postcss/autoprefixer#options
 */

export interface AutoprefixerOptions {
  /**
   * environment for Browserslist
   */
  env?: string

  /**
   * should Autoprefixer use Visual Cascade, if CSS is uncompressed
   *
   * @default true
   */
  cascade?: boolean

  /**
   * should Autoprefixer add prefixes
   *
   * @default true
   */
  add?: boolean

  /**
   * should Autoprefixer [remove outdated] prefixes
   *
   * @default true
   */
  remove?: boolean

  /**
   * should Autoprefixer add prefixes for `@supports` parameters
   *
   * @default true
   */
  supports?: boolean

  /**
   * should Autoprefixer add prefixes for flexbox properties
   *
   * @default true
   */
  flexbox?: boolean | 'no-2009' | string

  /**
   * should Autoprefixer add IE 10-11 prefixes for Grid Layout properties
   *
   * @default false
   */
  grid?: false | 'autoplace' | 'no-autoplace'

  /**
   * custom usage statistics for > 10% in my stats browsers query
   */
  stats?: Record<string, any>

  /**
   * list of queries for target browsers, `browserslist` is much more recommended
   */
  overrideBrowserslist?: string[]

  /**
   * do not raise error on unknown browser version in Browserslist config
   *
   * @default false
   */
  ignoreUnknownVersions?: boolean
}
