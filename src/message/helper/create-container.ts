export type TargetContainer = () => HTMLElement

/**
 * 创建渲染容器
 */
export default function createContainer(target?: TargetContainer) {
  const div = document.createElement('div')
  if (target) {
    const root = target()
    root.appendChild(div)
  } else {
    document.body.appendChild(div)
  }
  return div
}
