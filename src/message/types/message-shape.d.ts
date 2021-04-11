import React from 'react'
import { Omit } from './types'

export type MessageId = React.Key

/**
 * message props
 */
export type MessageOptions = {
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
   * 关闭时触发的回调函数
   */
  onClose?: () => void
}

/**
 * 单条 message 数据
 */
export type MessageShape = Omit<MessageOptions, 'id'> & {
  /**
   * 唯一标识符
   */
  id: MessageId
  /**
   * @private clear timeoutId
   * 内部使用，记录定时器 id
   */
  timerId?: number
}
