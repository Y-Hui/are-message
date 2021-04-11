import React from 'react'
import ReactDOM from 'react-dom'
import MessageContainer from '../container'
import createContainer from '../helper/create-container'
import { MessageRef } from '../types/message-ref'
import { MessageId, MessageOptions, MessageShape } from '../types/message-shape'

let instance: MessageRef

function newInstance(callback: (ref: MessageRef) => void) {
  let called = false
  const handleRef = (value: MessageRef) => {
    if (called) {
      return
    }
    if (value) {
      called = true
      callback(value)
    }
  }
  ReactDOM.render(
    React.createElement(MessageContainer, { ref: handleRef }),
    createContainer(),
  )
}

function showMessage(options: MessageShape) {
  return instance?.add(options)
}

function message(options: MessageOptions) {
  if (instance) {
    showMessage(options)
    return
  }
  newInstance((value) => {
    instance = value
    showMessage(options)
  })
}

const api = {
  open: message,
  destroy: (id: MessageId) => {
    instance?.remove(id)
  },
  clearAll: () => {
    instance?.clear()
  },
}

export default api
