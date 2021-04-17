import { getPrefixCls } from '../config'

export type TargetContainer = () => HTMLElement

let targetDOM: HTMLElement

/**
 * 创建渲染容器
 */
export default function createContainer(target?: TargetContainer) {
  if (targetDOM) {
    return targetDOM
  }
  const div = document.createElement('div')
  div.className = getPrefixCls()
  if (target) {
    targetDOM = target()
    targetDOM.appendChild(div)
  } else {
    targetDOM = div
    document.body.appendChild(targetDOM)
  }
  return targetDOM
}
