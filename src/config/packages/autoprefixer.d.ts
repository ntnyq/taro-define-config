/**
 * `autoprefixer` 配置
 *
 * @see https://github.com/postcss/autoprefixer/blob/main/lib/autoprefixer.d.ts
 * @compatibility 10.4.20
 */

export interface AutoprefixerOptions {
  /**
   * environment for `Browserslist`
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
  flexbox?: 'no-2009' | boolean

  /**
   * should Autoprefixer add IE 10-11 prefixes for Grid Layout properties
   * @description
   *  - false (default): prevent Autoprefixer from outputting CSS Grid translations
   *  - "autoplace": enable Autoprefixer grid translations and include autoplacement support. You can also use /* autoprefixer grid: autoplace *\/ in your CSS
   *  - "no-autoplace": enable Autoprefixer grid translations but exclude autoplacement support. You can also use /* autoprefixer grid: no-autoplace *\/ in your CSS. (alias for the deprecated true value)
   *
   * @default false
   */
  grid?: 'autoplace' | 'no-autoplace' | boolean

  /**
   * custom usage statistics for > 10% in my stats browsers query
   */
  stats?: Record<string, any>

  /**
   * list of queries for target browsers
   *
   * @description Try to not use it. The best practice is to use `.browserslistrc` config or `browserslist` key in `package.json` to share target browsers with Babel, ESLint and Stylelint
   *
   * @see https://github.com/browserslist/browserslist#queries
   * @default ['defaults']
   */
  overrideBrowserslist?: string | string[]

  /**
   * do not raise error on unknown browser version in `Browserslist` config
   *
   * @default false
   */
  ignoreUnknownVersions?: boolean
}
