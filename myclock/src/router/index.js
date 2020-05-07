import Vue from 'vue'
import VueRouter from 'vue-router'

const Clock = () => import('../views/clock/Clock')
const Set = () => import('../views/set/Set')
Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/clock'
  },
  {
    path: '/clock',
    component: Clock
  },
  {
    path: '/set',
    component: Set
  }
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
