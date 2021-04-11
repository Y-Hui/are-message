import React, { useCallback, useRef } from 'react'
import { isTruthy } from '../types/types'

function genId(value?: React.Key) {
  if (isTruthy<React.Key>(value)) {
    return value
  }
  return null
}

export default function useGenId() {
  const index = useRef(0)

  const gen = useCallback((value?: React.Key) => {
    index.current += 1
    const id = genId(value) || index.current
    return id
  }, [])

  return gen
}
