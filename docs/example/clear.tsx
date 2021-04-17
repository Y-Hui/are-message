import React from 'react'
import { message } from 'are-message'
import '../../assets/index.less'

export default () => {
  const clear = () => {
    message.clearAll()
  }

  return <button onClick={clear}>Clear all</button>
}
