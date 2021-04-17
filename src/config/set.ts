import { ConfigShape, setDuration, setPrefixCls } from './index'
import { isTruthy } from '../types/types'

/**
 * message 全局配置
 */
export function messageConfig(config: ConfigShape) {
  if (isTruthy<number>(config.duration)) {
    setDuration(config.duration)
  }
  if (isTruthy<string>(config.prefixCls)) {
    setPrefixCls(config.prefixCls)
  }
}
