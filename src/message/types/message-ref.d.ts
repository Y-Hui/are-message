import { MessageShape, MessageId } from './message-shape'

export interface MessageRef {
  add: (params: MessageShape) => void
  remove: (id: MessageId) => void
  clear: () => void
}
