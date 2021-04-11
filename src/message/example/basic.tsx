import React from 'react'
import { message } from 'are-message'

const BasicDemo = () => {
  const showMessage = () => {
    message.open({
      content: 'Hello Are Vision.',
      onClose() {
        // eslint-disable-next-line no-console
        console.log('closed')
      },
    })
  }

  return (
    <>
      <button onClick={showMessage}>Show Message</button>
    </>
  )
}

export default BasicDemo
