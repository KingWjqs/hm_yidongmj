import axios from 'axios'
import { Toast } from 'vant'
import { deltoken, gettoken } from './storange'
import router from '@/router'
const api = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

api.interceptors.request.use(config => {
  const token = gettoken()
  if (token) config.headers.Authorization = 'Bearer ' + token
  return config
}, err => {
  return Promise.reject(err)
})

api.interceptors.response.use(res => {
  return res.data
}, err => {
  if (err.response.status === 401) {
    Toast.fail('登录已过期，请重新登录')
    deltoken()
    router.push('/login')
  } else {
    Toast.fail({
      message: err.response.data.message,
      forbidClick: true
    })
  }
  return Promise.reject(err)
})

export default api
