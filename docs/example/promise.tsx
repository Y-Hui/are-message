import React from 'react'
import { message } from 'are-message'
import '../../assets/index.less'

const PromiseDemo = () => {
  const showMessage = () => {
    message
      .open('First message.')
      .then(() =>
        message.open({
          content: (
            <p
              style={{
                margin: 0,
                textTransform: 'uppercase',
                fontWeight: 'bold',
                color: '#f00',
              }}
            >
              Second message.
            </p>
          ),
          duration: 2000,
        }),
      )
      .then(() => {
        message.open('Promise chain call completed :)', 2000)
      })
  }

  return (
    <>
      <button onClick={showMessage}>Promise call.</button>
    </>
  )
}

export default PromiseDemo
