import createApi from '../helper/create-api'
import createInstance, { getInstance } from '../helper/create-instance'

function message() {
  const instance = getInstance()
  if (instance) {
    return instance
  }
  createInstance()
  return getInstance()
}

export default createApi(message)
