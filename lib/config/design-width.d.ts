/**
 * @param input 样式文件绝对路径
 *
 * @returns 设计稿尺寸
 */
export type DesignWidthFn = (input: string) => number

export type DesignWidth = number | DesignWidthFn
