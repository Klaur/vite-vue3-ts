import request from '@/utils/request'
import { loginForm, loginResponseData, userResponseData } from './types'
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info'
}
export const login = (data: loginForm) => {
  return request.post<any, loginResponseData>(API.LOGIN_URL, data)
}
export const getUserInfo = () => {
  return request.get<any, userResponseData>(API.USERINFO_URL)
}
