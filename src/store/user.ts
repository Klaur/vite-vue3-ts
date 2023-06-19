import { getUserInfo, reqLogout } from './../api/user/index'
import { defineStore } from 'pinia'
import { login } from '@/api/user'
import type { loginForm } from '@/api/user/types'
import type { UserState } from './types'
import { constainRoute } from '@/routes/routes'
import { REMOVE_TOKEN } from '@/utils/token'
const userStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'),
      username: '',
      isLogin: false,
      menuRoutes: constainRoute
    }
  },
  actions: {
    async login(data: loginForm) {
      const res: any = await login(data)
      if (res.code === 200) {
        this.isLogin = true
        this.token = res.data
        localStorage.setItem('TOKEN', res.data)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.message))
      }
    },
    async getUserInfo() {
      const res: any = await getUserInfo().catch(() => {
        this.token = ''
        this.username = ''
        REMOVE_TOKEN()
      })
      if (res.code === 200) {
        this.username = res.data.username
        return 'ok'
      } else {
        this.token = ''
        this.username = ''
        REMOVE_TOKEN()
        return Promise.reject(new Error(res.data.message))
      }
    },
    async logout() {
      const result: any = await reqLogout()
      if (result.code == 200) {
        //目前没有mock接口:退出登录接口(通知服务器本地用户唯一标识失效)
        this.token = ''
        this.username = ''
        REMOVE_TOKEN()
        return 'ok'
      } else {
        return Promise.reject(new Error(result.message))
      }
    }
  }
})
export default userStore
