
export type Plugin<T = any> =
  | string
  | [string]
  | [string, T]
