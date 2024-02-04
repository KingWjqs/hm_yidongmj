import api from '@/utils/request'
export const register = (data) => {
  return api.post('/user/register', data)
}

export const login = (data) => {
  return api.post('/user/login', data)
}

export const usrInfoAPI = () => {
  return api.get('/user/currentUser')
}
