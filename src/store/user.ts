import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state() {
    return {
      name: 'leo',
      isLogin: false
    }
  },
  actions: {
    login() {
      this.isLogin = true
    }
  }
})
