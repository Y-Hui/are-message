import { Reducer } from 'react'
import { MessageId, MessageShape } from '../types/message-shape'

export function addAction(value: MessageShape) {
  return { type: 'add', payload: value } as const
}

export function removeAction(value: MessageId) {
  return { type: 'remove', id: value } as const
}

export function clearAction() {
  return { type: 'clear' } as const
}

type MessageActions =
  | ReturnType<typeof addAction>
  | ReturnType<typeof removeAction>
  | ReturnType<typeof clearAction>

const reducer: Reducer<MessageShape[], MessageActions> = (state, action) => {
  const filterById = (id?: MessageId) => {
    return state?.filter((item) => item.id !== id)
  }

  switch (action.type) {
    case 'add': {
      const result = filterById(action.payload.id)
      return [...result, action.payload]
    }
    case 'remove': {
      return filterById(action.id)
    }
    case 'clear': {
      return []
    }
    default: {
      return state
    }
  }
}

export default reducer
