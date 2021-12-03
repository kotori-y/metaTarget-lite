import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import HomeIndex from '@/views/Home/HomeIndex.vue'
import TaskIndex from '@/views/Tasks/TaskIndex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeIndex
  },
  {
    path: '/task',
    name: 'Task',
    component: TaskIndex
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
})

export default router
