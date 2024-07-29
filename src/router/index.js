import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import UserlistView from '@/views/UserlistView.vue'
import UserspaceView from '@/views/UserspaceView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const routes = [
  {
    path: '/myspace/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myspace/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/myspace/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/myspace/userlist/',
    name: 'userlist',
    component: UserlistView
  },
  {
    path: '/myspace/userspace/:userID/',
    name: 'userspace',
    component: UserspaceView
  },
  {
    path: '/myspace/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/myspace/:catchAll(.*)',
    redirect: '/myspace/404/'
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
