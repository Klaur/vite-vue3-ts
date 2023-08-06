import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  isLogin: boolean
  token: string | null
  menuRoutes: RouteRecordRaw[]
  username: string
}
