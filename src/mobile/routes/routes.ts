export const constainRoute = [
  {
    path: '/',
    meta: { hidden: true },
    component: () => import('@/mobile/layout/index.vue'),
    name: 'layout',
    redirect: '/home',
    children: [
      {
        path: '/home',
        meta: { title: '首页', icon: 'HomeFilled' },
        component: () => import('@/mobile/pages/home/index.vue'),
        name: 'home'
      },
      {
        path: '/about',
        meta: { title: '看板', icon: 'Histogram' },
        component: () => import('@/mobile/pages/about/index.vue'),
        name: 'about'
      }
    ]
  }
  // {
  //   path: '/404',
  //   meta: { hidden: true },
  //   component: () => import('@/pc/pages/404/index.vue'),
  //   name: '404'
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   meta: { hidden: true },
  //   redirect: '/404',
  //   name: 'any'
  // }
]
