import type { RouteRecordRaw } from 'vue-router'
export interface UserState {
  isLogin: Boolean
  token: String | null
  menuRoutes: RouteRecordRaw[]
}
