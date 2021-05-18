import React, {
  useReducer,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react'
import FlipMove from 'react-flip-move'
import useGenId from '../hooks/use-id'
import timeout from '../helper/timeout'
import { getDuration, getPrefixCls } from '../config'
import { MessageRef } from '../types/message-ref'
import reducer, { addAction, removeAction, clearAction } from './reducer'
import Message from '../message'

import { isTruthy } from '../types/types'
import { MessageId } from '../types/message-shape'

const enterAnimation = {
  from: { transform: 'translate3d(0, -30px, 0)', opacity: '0' },
  to: { transform: 'translate3d(0, 0, 0)', opacity: '1' },
}

const leaveAnimation = {
  from: { transform: 'translate3d(0, 0, 0)', opacity: '1' },
  to: { transform: 'translate3d(0, -30px, 0)', opacity: '0' },
}

const MessageContainer = forwardRef<MessageRef>((props, ref) => {
  const [message, dispatch] = useReducer(reducer, [])

  const genId = useGenId()

  const beforeUpdate = useCallback(
    (id: MessageId) => {
      const index = message.findIndex((item) => item.id === id)
      if (index > -1) {
        /** 更新 Message 时，清理原来的定时器 */
        const { timerId } = message[index]
        clearTimeout(timerId)
      }
    },
    [message],
  )

  const clearMessage = useCallback(() => {
    message.forEach((item) => {
      clearTimeout(item.timerId)
    })
    dispatch(clearAction())
  }, [message])

  const removeMessage: MessageRef['remove'] = useCallback((id) => {
    dispatch(removeAction(id))
  }, [])

  const addMessage: MessageRef['add'] = useCallback(
    (params) => {
      const { id: rawId, duration: rawDuration, onClose: close } = params
      const duration = isTruthy<number>(rawDuration)
        ? rawDuration
        : getDuration()
      const id = genId(rawId)

      beforeUpdate(id)
      const timerId =
        duration === 0 ? undefined : timeout(() => removeMessage(id), duration)
      dispatch(
        addAction({
          ...params,
          duration,
          id,
          timerId,
          onClose: () => {
            window.clearTimeout(timerId)
            close?.()
          },
        }),
      )
    },
    [genId, removeMessage, beforeUpdate],
  )

  useImperativeHandle(
    ref,
    () => ({
      add: addMessage,
      remove: removeMessage,
      clear: clearMessage,
      createId: genId,
    }),
    [addMessage, removeMessage, clearMessage, genId],
  )

  return (
    <FlipMove
      enterAnimation={enterAnimation}
      leaveAnimation={leaveAnimation}
      duration={200}
      staggerDelayBy={20}
      typeName={null}
    >
      {message.map((item) => {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, content, timerId, duration, ...otherProps } = item
        return (
          <Message key={id} prefixCls={getPrefixCls()} {...otherProps}>
            {content}
          </Message>
        )
      })}
    </FlipMove>
  )
})

MessageContainer.displayName = 'MessageContainer'

export default MessageContainer
