/**
 * `autoprefixer` 配置
 *
 * @see https://github.com/postcss/autoprefixer#options
 * @compatibility 10.4.20
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
  flexbox?: 'no-2009' | boolean | string

  /**
   * should Autoprefixer add IE 10-11 prefixes for Grid Layout properties
   * @description
   *  - false (default): prevent Autoprefixer from outputting CSS Grid translations
   *  - "autoplace": enable Autoprefixer grid translations and include autoplacement support. You can also use /* autoprefixer grid: autoplace *\/ in your CSS
   *  - "no-autoplace": enable Autoprefixer grid translations but exclude autoplacement support. You can also use /* autoprefixer grid: no-autoplace *\/ in your CSS. (alias for the deprecated true value)
   *
   * @default false
   */
  grid?: 'autoplace' | 'no-autoplace' | false

  /**
   * custom usage statistics for > 10% in my stats browsers query
   */
  stats?: Record<string, any>

  /**
   * list of queries for target browsers
   * @description `browserslist` key in `package.json` or a `.browserslistrc` file is much more recommended. So it can be shared with Babel, ESLint and Styelint.
   *
   * @see https://github.com/browserslist/browserslist#queries
   * @default ['defaults']
   */
  overrideBrowserslist?: string[]

  /**
   * do not raise error on unknown browser version in Browserslist config
   *
   * @default false
   */
  ignoreUnknownVersions?: boolean
}
