import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'
import ReactDOM from 'react-dom'
import classNames from 'classnames'
import { MessageProps, Base } from './prop-types'
import './index.less'

type Ref = HTMLDivElement | null

const Message = forwardRef<Ref, MessageProps & Base>((props, ref) => {
  const { className, children, holder, onClose, ...otherProps } = props
  const node = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    return () => {
      onClose?.()
    }
  }, [onClose])

  useImperativeHandle<Ref, Ref>(ref, () => node.current)

  const messageNode = (
    <div className="message-wrap" ref={node}>
      <div className={classNames('message', className)} {...otherProps}>
        {children}
      </div>
    </div>
  )

  if (holder) {
    return ReactDOM.createPortal(messageNode, holder())
  }

  return (
    <div className="message-wrap" ref={node}>
      <div className={classNames('message', className)} {...otherProps}>
        {children}
      </div>
    </div>
  )
})

Message.displayName = 'Message'

export default Message
