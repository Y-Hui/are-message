import React, { useEffect } from 'react'
import classNames from 'classnames'
import { MessageProps } from './prop-types'
import './index.less'

const Message: React.FC<MessageProps> = (props) => {
  const { className, children, onClose, ...otherProps } = props

  useEffect(() => {
    return () => {
      onClose?.()
    }
  }, [onClose])

  return (
    <div className="message-wrap">
      <div className={classNames('message', className)} {...otherProps}>
        {children}
      </div>
    </div>
  )
}

export default Message
