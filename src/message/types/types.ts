/**
 * 从 interface 排除某些选项
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

/**
 * 将 interface 所有值转为可选
 */
export type Options<T> = { [P in keyof T]+?: T[P] }

/**
 * 将 interface 所有值转为必填
 */
export type Required<T> = { [P in keyof T]-?: T[P] }

/**
 * 获取对象中的值作为类型
 *
 * ```ts
 * type NewType = ValueOf<typeof {A: 0, B: 1}>
 * ```
 */
export type ValueOf<T> = T[keyof T]

/**
 * 过滤 undefined, null, '', NaN
 */
export function isTruthy<T>(value: unknown): value is T {
  let notEmptyStr = true
  let notNaN = true
  if (typeof value === 'string') {
    notEmptyStr = value.trim() !== ''
  }
  if (typeof value === 'number') {
    notNaN = !Number.isNaN(value)
  }
  return value !== undefined && value !== null && notEmptyStr && notNaN
}
