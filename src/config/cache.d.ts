export interface CacheBuildDependencies {
  config?: string[]
}

export interface Cache {
  /**
   * 是否开启持久化缓存
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#cacheenable
   */
  enable?: boolean

  /**
   * 缓存子目录的名称
   *
   * @see https://nervjs.github.io/taro-docs/docs/config-detail#cachename
   * @default `process.env.NODE_ENV-process.env.TARO_ENV`
   */
  name?: string

  /**
   * 当依赖的文件或该文件的依赖改变时，使缓存失效
   *
   * @see https://webpack.js.org/configuration/cache/#cachebuilddependencies
   */
  buildDependencies?: CacheBuildDependencies
}
