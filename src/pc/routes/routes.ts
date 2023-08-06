export const constainRoute = [
  {
    path: '/login',
    component: () => import('@/pc/pages/login/index.vue'),
    meta: { hidden: true },
    name: 'login'
  },
  {
    path: '/',
    meta: { hidden: true },
    component: () => import('@/pc/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: { title: '首页', icon: 'HomeFilled' },
        component: () => import('@/pc/pages/home/index.vue'),
        name: 'home'
      },
      {
        path: '/dashboard',
        meta: { title: '看板', icon: 'Histogram' },
        component: () => import('@/pc/pages/dashboard/index.vue'),
        name: 'dashboard'
      }
    ]
  },
  {
    path: '/screen',
    meta: { title: '数据大屏2', icon: 'HomeFilled' },
    component: () => import('@/pc/pages/screen/index.vue'),
    name: 'screen'
  },
  {
    path: '/404',
    meta: { hidden: true },
    component: () => import('@/pc/pages/404/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    meta: { hidden: true },
    redirect: '/404',
    name: 'any'
  }
]
