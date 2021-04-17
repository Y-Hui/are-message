## Message

### Basic

<code src="../example/basic.tsx" />

### Set display duration

By default, messages are displayed for 3000 milliseconds. You can change the duration by passing a second parameter, which is always displayed if the value is 0.

<code src="../example/duration.tsx" />

### Update

Specify id for updating.

<code src="../example/update.tsx" />

### Relevant context

Create a `message` with the `useMessage` hooks, associated with the current context.

<code src="../example/hook.tsx" />

### Chain call

<code src="../example/promise.tsx" />

### Use `clearAll` to clear all

<code src="../example/clear.tsx" />

### About `clearAll`

This function clears the prompt message for the `message instance`. Returns the `message` instance.

```ts
import { message } from 'are-message'

message.clearAll()

// chain call
message.clearAll().open('Callback')
```

Chain call:

```ts
import { message } from 'are-message'

message.clearAll().open('Chain call')
```

<br/>

If you use `useMessage` then you should write something like this.

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

`useMessage` Hook and `message` do not share internal data except for the same usage. Therefore, a message created by `useMessage` Hook cannot be closed and cleared by the `message` function, and vice versa.

### API

- `message.open(options)`

- `message.open(content, [duration], [props])`

- `message.clearAll(content, [duration], [props])`

- `message.destroy(content, [duration], [props])`

The return value of the `open` function is a close function.

```ts
import { message } from 'are-message'

const MsgKey = 'DEMO'

const close = message.open({
  id: MsgKey,
  content: 'Info Message',
  duration: 0,
})

setTimeout(() => {
  // Call close to close it
  close()
}, 3000)

// Or use `destroy` to close it
message.destroy(MsgKey)
```

<br/>
<br/>

**Note: Once the message function of `Chain Call` is used, the `close` function is not supported.**

```ts
import { message } from 'are-message'

// Error: Ths close is undefined
const close = message.open('Info Message', 0).then(() => {
  console.log('Callback')
})
```

Each alias function inherits a `PromiseLike` type for its return type, and calls to the `then` function return a true `Promise`, this is how `Are` implements chain calls. When the `then` function is called, there is no such `close` function left in the return value. So the `Chain call` and the `close` function can only be one or the other, not both.

### Options

| Props     | Description                                                             | Required | Type                 | Default |
| --------- | ----------------------------------------------------------------------- | -------- | -------------------- | ------- |
| id        | `Message` Unique ID.                                                    |          | `number` \| `string` |         |
| className | className                                                               |          | `string`             |         |
| style     | style                                                                   |          | `CSSProperties`      |         |
| content   | message content                                                         | YES      | `ReactNode`          |         |
| duration  | Display duration (ms)<br/> If the value is `0`, it is always displayed. |          | `number`             | `3000`  |
| onClose   | Specify a function that will be called when the message is closed.      |          | `() => void`         |         |
