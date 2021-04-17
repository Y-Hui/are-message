import React from 'react'

export type Base = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type MessageProps = {
  /**
   * 设置类名
   */
  className?: string
  /**
   * 设置行内样式
   */
  style?: React.CSSProperties
  /**
   * 类名前缀
   */
  prefixCls?: string
  /**
   * 关闭时触发的回调函数
   */
  onClose?: () => void
}
