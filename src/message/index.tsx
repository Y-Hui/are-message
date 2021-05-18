import React, {
  useEffect,
  useRef,
  useImperativeHandle,
  forwardRef,
  useCallback,
} from 'react'
import classNames from 'classnames'
import { MessageProps, Base } from './prop-types'
import { isTruthy } from '../types/types'

type Ref = HTMLDivElement | null

const Message = forwardRef<Ref, MessageProps & Base>((props, ref) => {
  const { prefixCls, className, children, onClose, ...otherProps } = props
  const node = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    return () => {
      onClose?.()
    }
  }, [onClose])

  useImperativeHandle<Ref, Ref>(ref, () => node.current, [])

  const createClassName = useCallback(
    (value: string) => {
      if (isTruthy<string>(prefixCls)) {
        return `${prefixCls}-${value}`
      }
      return value
    },
    [prefixCls],
  )

  const messageNode = (
    <div className={createClassName('item-wrap')} ref={node}>
      <div
        className={classNames(createClassName('item'), className)}
        {...otherProps}
      >
        {children}
      </div>
    </div>
  )

  return messageNode
})

Message.displayName = 'Message'

export default Message
