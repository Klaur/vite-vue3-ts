import request from '@/pc/utils/request'
import { loginForm, loginResponseData, userResponseData } from './types'
enum API {
  LOGIN_URL = '/admin/acl/index/login',
  USERINFO_URL = '/admin/acl/index/info',
  LOGOUT_URL = '/admin/acl/index/logout'
}
export const login = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
export const getUserInfo = () => {
  return request.get<any, userResponseData>(API.USERINFO_URL)
}
export const reqLogout = () => request.post<any, any>(API.LOGOUT_URL)
