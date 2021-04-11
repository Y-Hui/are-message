import React from 'react'
import classNames from 'classnames'
import { MessageProps } from './prop-types'
import './index.less'

const Message: React.FC<MessageProps> = (props) => {
  const { className, children, ...otherProps } = props

  return (
    <div className="message-wrap">
      <div className={classNames('message', className)} {...otherProps}>
        {children}
      </div>
    </div>
  )
}

export default Message
