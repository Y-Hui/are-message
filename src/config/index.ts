import { Options } from '../types/types'

/**
 * 默认配置
 */
export const config = {
  // 默认时长
  duration: 3000,
  // 默认 className 前缀
  prefixCls: 'are-message',
}

export type ConfigShape = Options<typeof config>

/**
 * message 显示时长
 */
export function getDuration() {
  return config.duration
}

/**
 * 覆盖默认时长
 */
export function setDuration(value: number) {
  config.duration = value
}

/**
 * className 前缀
 */
export function getPrefixCls() {
  return config.prefixCls
}

/**
 * 覆盖默认 className 前缀
 */
export function setPrefixCls(value: string) {
  config.prefixCls = value
}
