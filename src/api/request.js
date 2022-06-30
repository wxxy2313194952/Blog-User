import axios from 'axios'
import { getToken } from '@/utils/token'

const requests = axios.create({
  baseURL: "http://127.0.0.1:3080",
  // baseURL: "http://47.97.40.176:3080",
  timeout: 5000,
})




requests.interceptors.request.use((config) => {
  config.headers.Authorization = getToken()
  return config
})
requests.interceptors.response.use((res) => {
  return res.data
},(error) => {
  return Promise.reject(new Error('faile'))
})

export default requests