import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import profile from '../views/profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
   
    component: () => import(/* webpackChunkName: "about" */ '../views/signup.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
