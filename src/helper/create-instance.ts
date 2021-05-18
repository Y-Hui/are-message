import React from 'react'
import ReactDOM from 'react-dom'
import MessageContainer from '../container'
import { MessageRef } from '../types/message-ref'
import createContainer from './create-container'

let instance: MessageRef | null = null

/**
 * 渲染 Message 容器
 */
function render(callback?: (ref: MessageRef) => void) {
  let called = false
  const handleRef = (value: MessageRef) => {
    if (called) {
      return
    }
    called = true
    callback?.(value)
  }
  ReactDOM.render(
    React.createElement(MessageContainer, { ref: handleRef }),
    createContainer(),
  )
}

/**
 * 获取实例
 */
export default function createInstance(callback?: (ref: MessageRef) => void) {
  if (instance !== null && instance !== undefined) {
    callback?.(instance)
    return
  }
  render((msgInstance) => {
    instance = msgInstance
    callback?.(msgInstance)
  })
}
