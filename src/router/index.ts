import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeIndex from '@/views/Home/HomeIndex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeIndex
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
