import axios from 'axios'
import { Host } from '@/utils/Host'

const requests = axios.create({
  baseURL: Host,
  timeout: 5000,
})




requests.interceptors.request.use((config) => {
  return config
})
requests.interceptors.response.use((res) => {
  return res.data
},(error) => {
  return Promise.reject(new Error('faile'))
})

export default requests