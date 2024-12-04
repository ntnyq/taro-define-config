export interface DesignWidthInput {
  /**
   * 样式文件内容
   */
  css: string

  /**
   * 样式文件路径
   */
  file?: string

  hasBOM: boolean
}

/**
 * @param input - 样式文件绝对路径
 *
 * @returns 设计稿尺寸
 */
export type DesignWidth = number | ((input?: number | string | DesignWidthInput) => number)

/**
 * 设计稿尺寸换算规则
 */
export type DesignRatio = Record<number | string, number>
