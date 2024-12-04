/**
 * Promise or not
 */
export type Awaitable<T> = PromiseLike<T> | T

/**
 * Array or not
 */
export type Arrayable<T> = T | T[]

/**
 * Any function
 */
export type AnyFn<T = unknown> = (...args: T[]) => T

/**
 * A literal type that supports custom further strings but preserves autocompletion in IDEs.
 *
 * @see https://github.com/microsoft/TypeScript/issues/29729#issuecomment-471566609
 */
export type LiteralUnion<Union extends Base, Base = string> =
  | Union
  | (Base & { zz_IGNORE_ME?: never })

/**
 * Non empty object `{}`
 */
export type NonEmptyObject<T> = T extends Record<string, never> ? never : T

/**
 * Exclude empty object properties from a type
 */
export type ExcludeEmptyObjects<T> = {
  [K in keyof T]: NonEmptyObject<T[K]>
}
