import React from 'react'
import { message } from 'are-message'
import '../../assets/index.less'

const BasicDemo = () => {
  const showMessage = () => {
    message.open('Hello Are Vision.')
  }

  return <button onClick={showMessage}>Show Message</button>
}

export default BasicDemo
