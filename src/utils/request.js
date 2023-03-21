/**
 * axios的二次封装
 */
import axios from 'axios'
import config from '../config'
import router from '../router'

const TOKEN_INVALID = 'Token验证失败，请重新登录'
const NETWORK_ERROR = '网络请求异常，请稍后重试'

// 创建axios实例对象，添加全局对象
const service = axios.create({
  baseURL: config.baseApi,
  timeout: 8000,
})

// 请求拦截
service.interceptors.request.use((config) => {
  // TO-DO
  // const headers = config.headers
  // const { token = '' } = storage.getItem('userInfo') || {}
  // if (!headers.Authorization) headers.Authorization = 'Bearer ' + token

  // 当切换路由需要取消请求时，用cancel()来取消请求
  // config.cancelToken = new axios.CancelToken((cancel) => {
  //   // 统一将请求的cancel方法添加在全局状态容器中
  //   store.addCancelToken(cancel)
  // })

  return config
})

// 响应拦截
service.interceptors.response.use((res) => {
  const { code, data, msg } = res.data
  if (code === 200) {
    // 请求成功
    return data
  }
  if (code === 50001) {
    // token失效
    // ElMessage.error(TOKEN_INVALID)
    // 跳转到登录页面
    setTimeout(() => {
      router.push('/login')
    }, 1500)
    return Promise.reject(TOKEN_INVALID)
  }
  // ElMessage.error(msg || NETWORK_ERROR)
  return Promise.reject(msg || NETWORK_ERROR)
})

/**
 * 请求核心函数
 * @param {*} options 请求配置
 * @returns
 */
function request(options) {
  options.method = options.method || 'get'
  if (options.method.toLowerCase() === 'get') {
    options.params = options.datas
  }

  let isMock = config.mock
  if (typeof options.mock !== 'undefined') {
    isMock = options.mock
  }
  // 生产环境
  if (config.env === 'production') {
    service.defaults.baseURL = config.baseApi
  } else {
    service.defaults.baseURL = isMock ? config.mockApi : config.baseApi
  }
  return service(options)
}

;['get', 'post', 'put', 'delete', 'patch'].forEach((item) => {
  request[item] = (url, data, options) => {
    return request({
      url,
      data,
      method: item,
      ...options,
    })
  }
})

export default request
