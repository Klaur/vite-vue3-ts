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
    children: [
      {
        path: 'home',
        meta: { title: '首页' },
        component: () => import('@/pages/home/index.vue'),
        name: 'home'
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
