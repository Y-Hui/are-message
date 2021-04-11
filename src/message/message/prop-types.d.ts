import React from 'react'

export type Base = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type MessageProps = {
  /**
   * 关闭时触发的回调函数
   */
  onClose?: () => void
} & Base
