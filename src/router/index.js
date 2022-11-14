import { createRouter, createWebHistory } from 'vue-router'
import authRouter from '@/modules/auth/router'
import cartRouter from '@/modules/cart/router'

const routes = [
  {
    path: '',
    ...cartRouter
  },
  {
    path: '',
    ...authRouter
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
