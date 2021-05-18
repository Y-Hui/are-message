import React, { useMemo, useRef } from 'react'
import ReactDOM from 'react-dom'
import { MessageApiShape } from '../types/api-shape'
import { MessageRef } from '../types/message-ref'
import createContainer from '../helper/create-container'
import MessageContainer from '../container'
import createApi from '../helper/create-api'

type MessageHook = [MessageApiShape, React.ReactNode]

/**
 * 提供一个保存在当前上下文中的 message hook
 */
function useMessage(): MessageHook {
  const instance = useRef<MessageRef | null>(null)

  const container = useMemo(() => {
    return ReactDOM.createPortal(
      <MessageContainer ref={instance} />,
      createContainer(),
    )
  }, [])

  return [createApi(() => instance.current), container]
}

export { useMessage }
