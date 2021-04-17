import React from 'react'
import { MessageApiShape } from '../types/api-shape'
import { MessageRef, MessageCloseFunc } from '../types/message-ref'
import { MessageOptions } from '../types/message-shape'

type Instance = MessageRef | null | undefined

export default function createApi(instance: () => Instance): MessageApiShape {
  const open = (value: MessageOptions) => {
    let promiseResolve: (value?: unknown) => void
    const promise = new Promise((resolve) => {
      promiseResolve = resolve
    })
    const result: MessageCloseFunc = instance()!.add({
      ...value,
      onClose() {
        promiseResolve()
        value.onClose?.()
      },
    }) as any
    result.then = (resolve, reject) => promise.then(resolve, reject)
    return result
  }

  const message: MessageApiShape = {
    open: (value, duration, options) => {
      if (
        React.isValidElement(value) ||
        typeof value === 'number' ||
        typeof value === 'string'
      ) {
        return open({
          ...options,
          content: value,
          duration,
        })
      }
      return open(value as MessageOptions)
    },
    clearAll: () => {
      instance()?.clear()
      return message
    },
    destroy: (id) => {
      instance()?.remove(id)
      return message
    },
  }
  return message
}
