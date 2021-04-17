function timeout(callback: () => void, duration: number) {
  const timer = window.setTimeout(() => {
    callback()
    clearTimeout(timer)
  }, duration)

  return timer
}

export default timeout
