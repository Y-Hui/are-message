import { MessageOptions, MessageId } from './message-shape'

export interface MessageCloseFunc extends PromiseLike<unknown> {
  (): () => void
}

export interface MessageRef {
  add: (params: MessageOptions) => () => void
  remove: (id: MessageId) => void
  clear: () => void
}
