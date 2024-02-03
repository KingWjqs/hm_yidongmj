import axios from 'axios'
import { Toast } from 'vant'
const api = axios.create({
  baseURL: 'http://interview-api-t.itheima.net/h5/',
  timeout: 5000
})

api.interceptors.response.use(res => {
  return res
}, err => {
  Toast.fail({
    message: err.response.data.message,
    forbidClick: true
  })
  return Promise.reject(err)
})

export default api
