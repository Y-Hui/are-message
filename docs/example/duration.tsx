import React from 'react'
import { message } from 'are-message'
import '../../assets/index.less'

export default () => {
  const keepDisplay = () => {
    message.open('Keep display message.', 0)
  }

  const fiveSeconds = () => {
    message.open('Five seconds message.', 5000)
  }

  const manualShutdown = () => {
    const close = message.open('Message can be closed manually.', 0)
    setTimeout(close, 1000)
  }

  return (
    <>
      <button onClick={keepDisplay}>Keep display</button>
      <button onClick={fiveSeconds}>Five seconds</button>
      <button onClick={manualShutdown}>Manual shutdown</button>
    </>
  )
}
