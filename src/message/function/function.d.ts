import { TargetContainer } from '../helper/create-container'
import { MessageRef } from '../types/message-ref'

export interface NewInstanceParams {
  target?: TargetContainer
  callback: (ref: MessageRef) => void
}
