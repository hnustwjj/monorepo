import axios from 'axios'

const apis = axios.create({
  baseURL: 'http://127.0.0.1:3000',
})
export function get() {
  return apis.get('/')
}
