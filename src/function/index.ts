import React from 'react'
import createInstance from '@/helper/create-instance'
import { MessageApiShape } from '@/types/api-shape'
import { MessageId, MessageOptions } from '@/types/message-shape'
import { MessageRef } from '@/types/message-ref'

export interface ThenableArgument {
  (val: any): void
}

const message: MessageApiShape = {
  open: (value, duration, options) => {
    let key: MessageId
    let msg: MessageRef

    // 生成关闭函数
    let promiseResolve: (value?: unknown) => void
    const promise = new Promise((resolve) => {
      promiseResolve = resolve
    })
    const result: any = () => msg?.remove(key)
    result.then = (resolve: ThenableArgument, reject: ThenableArgument) =>
      promise.then(resolve, reject)

    createInstance((instance) => {
      msg = instance
      let params: MessageOptions = {
        content: '',
      }
      if (
        React.isValidElement(value) ||
        typeof value === 'number' ||
        typeof value === 'string'
      ) {
        key = instance.createId(options?.id)
        params = {
          ...options,
          content: value,
          duration,
          id: key,
        }
      } else {
        params = value as MessageOptions
      }
      params.onClose = () => {
        promiseResolve()
        options?.onClose?.()
      }
      instance.add(params)
    })
    return result
  },
  destroy: (id: MessageId) => {
    createInstance((instance) => {
      instance.remove(id)
    })
    return message
  },
  clearAll: () => {
    createInstance((instance) => {
      instance.clear()
    })
    return message
  },
}

export default message
