import React from 'react'
import { Omit } from './types'

export type MessageId = React.Key

/**
 * 单条 message 数据
 */
export type MessageShape = {
  /**
   * 唯一标识符
   */
  id?: MessageId
  /**
   * 提示消息内容
   */
  content: React.ReactNode
  /**
   * 显示时长
   */
  duration?: number
  /**
   * @private clear timeoutId
   * 内部使用，记录定时器 id
   */
  timerId?: number | null
}

/**
 * message options
 */
export type MessageOptions = Omit<MessageShape, 'timerId'>
