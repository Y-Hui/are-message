import { MessageCloseFunc } from './message-ref'
import { MessageId, MessageOptions } from './message-shape'
import { Omit } from './types'

type Content = MessageOptions['content'] | string
type ContentOrOptions = Content | MessageOptions

export interface MessageApiShape {
  /**
   * 显示一个 message
   */
  open: (
    params: ContentOrOptions,
    duration?: MessageOptions['duration'],
    options?: Omit<MessageOptions, 'content' | 'duration'>,
  ) => MessageCloseFunc
  /**
   * 销毁一个 message
   */
  destroy: (id: MessageId) => MessageApiShape
  /**
   * 清除所有 message
   */
  clearAll: () => MessageApiShape
}
