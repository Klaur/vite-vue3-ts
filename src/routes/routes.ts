export const constainRoute = [
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue'),
    meta: { hidden: true },
    name: 'login'
  },
  {
    path: '/',
    meta: { hidden: true },
    component: () => import('@/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: 'home',
        meta: { title: '首页', icon: 'HomeFilled' },
        component: () => import('@/pages/home/index.vue'),
        name: 'home'
      },
      {
        path: 'dashboard',
        meta: { title: '看板', icon: 'Histogram' },
        component: () => import('@/pages/dashboard/index.vue'),
        name: 'dashboard'
      }
    ]
  },
  {
    path: '/404',
    meta: { hidden: true },
    component: () => import('@/pages/404/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    meta: { hidden: true },
    redirect: '/404',
    name: 'any'
  }
]
