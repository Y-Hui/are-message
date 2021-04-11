import React, {
  useReducer,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react'
import useGenId from '../hooks/use-id'
import timeout from '../helper/timeout'
import { DURATION } from '../constant'
import { MessageCloseFunc, MessageRef } from '../types/message-ref'
import reducer, { addAction, removeAction, clearAction } from './reducer'
import Message from '../message'

import './index.less'
import { isTruthy } from '../types/types'

const MessageContainer = forwardRef<MessageRef>((props, ref) => {
  const [message, dispatch] = useReducer(reducer, [])

  const genId = useGenId()

  const clearMessage = useCallback(() => {
    dispatch(clearAction())
  }, [])

  const removeMessage: MessageRef['remove'] = useCallback((id) => {
    dispatch(removeAction(id))
  }, [])

  const addMessage: MessageRef['add'] = useCallback(
    (params) => {
      const { id: rawId, duration: rawDuration, onClose: close } = params
      const duration = isTruthy<number>(rawDuration) ? rawDuration : DURATION
      const id = genId(rawId)

      const result: MessageCloseFunc = () => removeMessage(id)

      const add = (timerId?: number) => {
        return new Promise((resolve) => {
          const item = addAction({
            ...params,
            duration,
            id,
            timerId,
            onClose: () => {
              window.clearTimeout(timerId)
              close?.()
              resolve(undefined)
            },
          })
          dispatch(item)
        })
      }

      if (duration === 0) {
        const res = add()
        result.then = (r, e) => res.then(r, e)
      } else {
        const timerId = timeout(() => removeMessage(id), duration)
        const res = add(timerId)
        result.then = (r, e) => res.then(r, e)
      }

      return result
    },
    [genId, removeMessage],
  )

  useImperativeHandle(ref, () => ({
    add: addMessage,
    remove: removeMessage,
    clear: clearMessage,
  }))

  return (
    <div className="message-container">
      {message.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, content, timerId, ...otherProps } = item

        return (
          <Message key={id} {...otherProps}>
            {content}
          </Message>
        )
      })}
    </div>
  )
})

MessageContainer.displayName = 'MessageContainer'

export default MessageContainer
