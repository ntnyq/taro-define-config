/**
 * Options for `@tarojs/plugin-mock`
 *
 * @see https://github.com/NervJS/taro-plugin-mock
 */

import type { LiteralUnion } from '../../utility-types'

type HTTPMethod = LiteralUnion<
  'GET' | 'POST' | 'HEAD' | 'PUT' | 'DELETE' | 'CONNECT' | 'OPTIONS' | 'TRACE' | 'PATCH'
>

export interface PluginMockOptions {
  /**
   * 数据 Mock 服务地址
   * @default `127.0.0.1`
   */
  host?: string

  /**
   * 数据 Mock 服务端口
   * @default 9527
   */
  port?: number

  /**
   * 数据 Mock 接口，可以使用 `mock` 目录下文件
   * @see https://github.com/NervJS/taro-plugin-mock?tab=readme-ov-file#%E5%8F%82%E6%95%B0
   */
  mocks?: Record<`${HTTPMethod} ${string}`, Record<string, any>>
}
