import { defineStore } from 'pinia'
import { login } from '@/api/user'
import type { loginForm } from '@/api/user/types'
import type { UserState } from './types'
import { constainRoute } from '@/routes/routes'
let userStore = defineStore('user', {
  state: (): UserState => {
    return {
      token: localStorage.getItem('TOKEN'),
      isLogin: false,
      menuRoutes: constainRoute
    }
  },
  actions: {
    async login(data: loginForm) {
      let res: any = await login(data)
      if (res.code === 200) {
        this.isLogin = true
        this.token = res.data.token
        localStorage.setItem('TOKEN', res.data.token)
        return 'ok'
      } else {
        return Promise.reject(new Error(res.data.message))
      }
    }
  }
})
export default userStore
