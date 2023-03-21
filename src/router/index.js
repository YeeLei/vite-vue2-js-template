import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
  },
  {
    path: '/',
    redirect: 'home',
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/about',
    component: () => import('@/views/about/index.vue'),
  },
  { path: '*', redirect: '/404', hidden: true },
]

const router = new VueRouter({
  mode: import.meta.env.ROUTER_HISTORY,
  base: import.meta.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
})

export default router
