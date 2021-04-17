import { useCallback, useRef } from 'react'
import { MessageId } from '../types/message-shape'
import { isTruthy } from '../types/types'

function genId(value?: MessageId) {
  if (isTruthy<MessageId>(value)) {
    return value
  }
  return null
}

export default function useGenId() {
  const index = useRef(0)

  const gen = useCallback((value?: MessageId) => {
    index.current += 1
    const id = genId(value) || index.current
    return id
  }, [])

  return gen
}
