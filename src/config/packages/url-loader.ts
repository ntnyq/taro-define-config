/**
 * `url-loader` 配置
 *
 * @see https://github.com/webpack-contrib/url-loader#options
 * @compatibility 4.1.1
 * @deprecated
 */

export interface URLLoaderOptions {
  /**
   * Specify the name of the chunk
   */
  name?: string | ((moduleId: string) => string)

  /**
   * Specifying the maximum size of a file in bytes
   *
   * @see https://github.com/webpack-contrib/url-loader#limit
   * @default true
   */
  limit?: boolean | number | string

  /**
   * Sets the MIME type for the file to be transformed
   *
   * @see https://github.com/webpack-contrib/url-loader#mimetype
   */
  mimetype?: boolean | string

  /**
   * Specify the encoding which the file will be inlined with
   *
   * @see https://github.com/webpack-contrib/url-loader#encoding
   * @default `base64`
   */
  encoding?: boolean | string

  /**
   * You can create you own custom implementation for encoding data.
   *
   * @see https://github.com/webpack-contrib/url-loader#generator
   */
  generator?: (
    mimetype: string,
    encoding: string,
    content: string,
    resourcePath: string,
  ) => string

  /**
   * Specifies an alternative loader to use when a target file's size exceeds the limit
   *
   * @see https://github.com/webpack-contrib/url-loader#fallback
   * @default `file-loader`
   */
  fallback?: string

  /**
   * Use ES modules syntax
   *
   * @see https://github.com/webpack-contrib/url-loader#esmodule
   * @default true
   */
  esModule?: boolean

  [key: string]: any
}
