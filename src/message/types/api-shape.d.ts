import { MessageCloseFunc } from './message-ref'
import { MessageId, MessageOptions } from './message-shape'

export interface MessageApiShape {
  /**
   * 显示一个 message
   */
  open: (options: MessageOptions) => MessageCloseFunc
  /**
   * 销毁一个 message
   */
  destroy: (id: MessageId) => void
  /**
   * 清除所有 message
   */
  clearAll: () => void
}
