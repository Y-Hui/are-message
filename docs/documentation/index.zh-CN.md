## Message 提示消息

### 基础用法

<code src="../example/basic.tsx" />

### 显示时长

提示消息默认显示时长为 `3000` 毫秒。你可以传入第二个参数来修改时长，若值为 `0` 则持续显示。

<code src="../example/duration.tsx" />

### 更新

指定 `id` 用于更新。

<code src="../example/update.tsx" />

### 关联上下文

通过 `useMessage` hooks 创建 `message`，与当前上下文关联。

<code src="../example/hook.tsx" />

### 链式调用

<code src="../example/promise.tsx" />

### 使用 `clearAll` 清空提示消息

<code src="../example/clear.tsx" />

### 关于 `clearAll`

此函数清空的是 `message 实例` 的提示消息。返回 `message` 函数。

```ts
import { message } from 'are-message'

message.clearAll()

// 使用返回值链式调用
message.clearAll().open('Callback')
```

链式调用：

```ts
import { message } from 'are-message'

message.clearAll().open('链式调用')
```

<br/>

如果使用 `useMessage` 那么你应该这样写：

```ts
import { useMessage } from 'are-message'

export default () => {
  const [msg, MessageHolder] = useMessage()
  return (
    <>
      <button onClick={() => msg.clear()}>Clear</button>
      {MessageHolder}
    </>
  )
}
```

`useMessage` Hook 和 `message` 除使用方法一致以外，内部数据并不互通。所以，由 `useMessage` Hook 创建的提示消息不能够被 `message` 函数关闭、清空，反之亦然。

### API

- `message.open(options)`

- `message.open(content, [duration], [props])`

- `message.clearAll(content, [duration], [props])`

- `message.destroy(content, [duration], [props])`

`open` 函数的返回值是一个关闭函数。

```ts
import { message } from 'are-message'

const MsgKey = 'DEMO'

const close = message.open({
  id: MsgKey,
  content: 'Info Message',
  duration: 0,
})

setTimeout(() => {
  // 调用 close 关闭它
  close()
}, 3000)

// 或者使用 `destroy` 关闭它
message.destroy(MsgKey)
```

<br/>
<br/>

**注意：一旦使用 `链式调用`，那么 `close` 函数便不受支持。**

```ts
import { message } from 'are-message'

// Error: 此时的 close 为 undefined
const close = message.open('Info Message', 0).then(() => {
  console.log('Callback')
})
```

`open` 函数的返回值是一个 `PromiseLike` 类型值，调用 `then` 函数时返回的是一个真正的 `Promise`，`Are` 以此种方式实现的链式调用，`then` 函数调用完毕后，返回值内已经不存在这样一个 `close` 函数了。所以 `链式调用` 和 `close` 函数只能取其一，二者不可兼得。

### Options

| 属性      | 描述                                        | 是否必填 | 类型                 | 默认值 |
| --------- | ------------------------------------------- | -------- | -------------------- | ------ |
| id        | `Message` 唯一标识                          |          | `number` \| `string` |        |
| className | 自定义类名                                  |          | `string`             |        |
| style     | 自定义行内样式                              |          | `CSSProperties`      |        |
| content   | 提示内容                                    | 是       | `ReactNode`          |        |
| duration  | 显示时长（毫秒）<br />若值为 `0` 则持续显示 |          | `number`             | `3000` |
| onClose   | `Message` 关闭时的回调                      |          | `() => void`         |        |
