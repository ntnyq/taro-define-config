export type CopyIgnore = string | string[]

export interface CopyPattern {
  from: string
  to: string
  ignore?: CopyIgnore
  transform?: (...args: any[]) => any
  watch?: boolean
}

export interface CopyOptions {
  ignore?: CopyIgnore
}

export interface Copy {
  patterns?: CopyPattern[]
  options?: CopyOptions
}
