import React from 'react'
import { useMessage } from 'are-message'
import '../../assets/index.less'

const Context = React.createContext('default')
const { Provider, Consumer } = Context

const HookDemo = () => {
  const [msg, MessageHolder] = useMessage()
  const showHookMessage = () => {
    msg.open(<Consumer>{(value) => value}</Consumer>)
  }

  return (
    <Provider value="This's the message from the hook.">
      <button onClick={showHookMessage}>Hook Message</button>
      {MessageHolder}
    </Provider>
  )
}

export default HookDemo
