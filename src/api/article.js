import api from '@/utils/request'

export const articleitem = (obj) => {
  return api.get('interview/query', {
    params: {
      ...obj,
      pageSize: 10
    }
  })
}

export const articleitemdetail = (id) => {
  return api.get('interview/show/', { params: { id } })
}

export const articleitemadd = (obj) => {
  return api.post('interview/opt', obj)
}

export const likearticleitem = (obj) => {
  return api.get('interview/opt/list', { params: { ...obj } })
}
