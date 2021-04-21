import Cookie from 'js-cookie'
import Axios from 'axios'
import Message from '@/utils/message'

// 创建 axios 实例
const Service = Axios.create({
  // timeout: 20000,
  withCredentials: true,
  maxContentLength: 2000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Access-Control-Allow-Origin': '*'
  }
})

Service.interceptors.request.use(
  requestObj => {

    // 获取存储在 cookie 中的值，如果存在则在每个 ajax 请求的头部加上
    const token = Cookie.get('token') || ''
    if (token) {
      requestObj.headers.Authorization = token
    }

    return requestObj
  },
  error => {
    return Promise.reject(new Error(error))
  }
)

Service.interceptors.response.use(
  response => {
    const res: any = response.data
    return checkState(res)
  },
  error => {
    if (error && error.response) {
      if (error.response.status === 502 || error.response.status === 504) {
        const { url = '' } = error.response.config
        if (/\/bw\/chartdata$/.test(url)) {
          error.message = `哇哦，查询超时了，请优化数据模型(${error.response.status})`
        }
        if (/\/bw\/databaseupdate$/.test(url)) {
          error.message = `数据源编辑请求已提交，但数据量过大导致网络超时，请稍后查看修改结果(${error.response.status})`
        }
      }
    }
    Message.error(error.message)
    return Promise.reject(error)
  }
)

// export
export default Service

function checkState (res: any) {
  return res
}