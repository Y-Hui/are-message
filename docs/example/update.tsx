import React from 'react'
import { message } from 'are-message'
import '../../assets/index.less'

const key = 'LOADING_MESSAGE_KEY'

export default () => {
  const loading = () => {
    message.open({
      id: key,
      content: 'Loading...',
      duration: 0,
    })

    // update
    setTimeout(() => {
      message.open({
        id: key,
        content: 'Loaded!',
        duration: 300,
      })
    }, 2000)
  }
  return <button onClick={loading}>Update</button>
}
