import axios from 'axios'
import { ElMessage } from 'element-plus'
import useUserStore from '@/store/user'
const request = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  timeout: 50000
})
request.interceptors.request.use(config => {
  const userUtore = useUserStore()
  if (userUtore.token) {
    config.headers.token = userUtore.token
  }
  return config
})
request.interceptors.response.use(
  (response: any) => {
    const { customCatch, originRes } = response.config
    const res = response.data
    // 返回原始请求，处理全部由自己处理
    if (originRes) return response
    if (res.code === 200) {
      return res
    } else if (Object.prototype.toString.call(res) === '[object Blob]') {
      return response
    } else {
      // console.log(response.config, customCatch, 'customCatch')
      if (!customCatch) {
        ElMessage.error(res.message || 'Error')
      }
      // if ([401].includes(res.code)) {
      //   console.log('全局拦截，登录失效')
      //   store.commit('user/clearUserInfo')
      // }
      return Promise.reject(res) // 可以直接返回Promise,为了方便loading取消特地返回false
    }
  },
  error => {
    if (error && error.response) {
      if (error.response.data) {
        error.message = error.response.data.msg
      } else {
        switch (error.response.status) {
          case 400:
            error.message = '错误请求'
            break
          case 401:
            // 此处可以进行退出登录操作
            error.message = '未授权，请重新登录'
            break
          case 403:
            error.message = '拒绝访问'
            break
          case 404:
            error.message = '请求错误，未找到该资源'
            break
          case 405:
            error.message = '请求方法未允许'
            break
          case 408:
            error.message = '请求超时'
            break
          case 500:
            error.message = '服务器内部错误'
            break
          case 501:
            error.message = '尚未实施'
            break
          case 502:
            error.message = '错误网关'
            break
          case 503:
            error.message = '服务不可用'
            break
          case 504:
            error.message = '网关超时'
            break
          case 505:
            error.message = 'http版本不支持该请求'
            break
          default:
            error.message = navigator.onLine
              ? '网络异常，请稍后重试'
              : '网络中断，请注意您的网络连接'
        }
      }
    }
    if (!error.config.customCatch) {
      ElMessage.error(error.message || 'Error 网络异常，请稍后重试')
    }
    return Promise.reject(error)
  }
)
export default request
