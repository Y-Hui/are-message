import React from 'react'
import ReactDOM from 'react-dom'
import MessageContainer from '../container'
import { MessageRef } from '../types/message-ref'
import createContainer from './create-container'

let instance: MessageRef | null = null

/**
 * 获取实例
 */
export function getInstance() {
  return instance
}

/**
 * 创建实例
 */
export default function createInstance(callback?: (ref: MessageRef) => void) {
  const handleRef = (value: MessageRef) => {
    if (instance) {
      callback?.(instance)
      return
    }
    if (value) {
      instance = value
      callback?.(instance)
    }
  }
  ReactDOM.render(
    React.createElement(MessageContainer, { ref: handleRef }),
    createContainer(),
  )
}
