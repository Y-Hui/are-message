## Message

Demo:

```tsx
import React from 'react'
import { message } from 'are-message'

const MessageDemo = () => {
  const showMessage = () => {
    message.open({ content: 'message content.' })
  }

  return (
    <>
      <button onClick={showMessage}>Show message.</button>
    </>
  )
}

export default MessageDemo
```
