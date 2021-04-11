import React from 'react'
import { message } from 'are-message'

const PromiseDemo = () => {
  const showMessage = () => {
    message
      .open({
        content: 'First',
      })
      .then(() =>
        message.open({
          content: 'Second',
          duration: 2000,
        }),
      )
      .then(() => {
        message.open({
          content: 'Promise chain call completed :)',
          duration: 2000,
        })
      })
  }

  return (
    <>
      <button onClick={showMessage}>Promise call.</button>
    </>
  )
}

export default PromiseDemo
