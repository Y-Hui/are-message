import React, {
  useReducer,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react'
import Message from '../message'
import useGenId from '../hooks/use-id'
import { DURATION } from '../constant'
import { MessageRef } from '../types/message-ref'
import reducer, { addAction, removeAction, clearAction } from './reducer'

import './index.less'
import { isTruthy } from '../types/types'

function handlerTimeout(callback: (timerId: number) => void, duration: number) {
  return new Promise((resolve) => {
    const timer = window.setTimeout(() => {
      resolve(timer)
      clearTimeout(timer)
    }, duration)
    callback(timer)
  })
}

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
      const { id: rawId, duration: rawDuration } = params
      const duration = isTruthy<number>(rawDuration) ? rawDuration : DURATION
      const id = genId(rawId)
      const add = (timerId: null | number = null) => {
        dispatch(addAction({ ...params, duration, id, timerId }))
      }
      if (duration === 0) {
        add()
        return
      }
      handlerTimeout(add, duration).then(() => {
        removeMessage(id)
      })
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
      {message.map((item) => (
        <Message key={item.id}>{item.content}</Message>
      ))}
    </div>
  )
})

MessageContainer.displayName = 'MessageContainer'

export default MessageContainer
