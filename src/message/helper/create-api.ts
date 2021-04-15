import { MessageApiShape } from '../types/api-shape'
import { MessageRef, MessageCloseFunc } from '../types/message-ref'

type Instance = MessageRef | null | undefined

export default function createApi(instance: () => Instance): MessageApiShape {
  return {
    open: (value) => {
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
    },
    clearAll: () => {
      instance()?.clear()
    },
    destroy: (id) => {
      instance()?.remove(id)
    },
  }
}
