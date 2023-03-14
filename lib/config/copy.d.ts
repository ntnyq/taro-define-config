export type CopyIgnore = string

export interface CopyPattern {
  from: string
  to: string
  ignore?: CopyIgnore | CopyIgnore[]
}

export interface CopyOptions {
  ignore?: CopyIgnore | CopyIgnore[]
}

export interface Copy {
  patterns?: CopyPattern[]
  options?: CopyOptions
}
