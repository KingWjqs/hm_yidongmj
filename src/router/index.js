import Vue from 'vue'
import VueRouter from 'vue-router'
import Detail from '@/views/Detail'
import Layout from '@/views/Layout'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Article from '@/views/Article'
import Collect from '@/views/Collect'
import Like from '@/views/Like'
import User from '@/views/User'
import { gettoken } from '@/utils/storange'
import { Toast } from 'vant'

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/detail/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    redirect: '/article',
    children: [
      { path: '/article', component: Article },
      { path: 'collect', component: Collect },
      { path: 'like', component: Like },
      { path: 'user', component: User }
    ]
  },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes,
  mode: 'hash'
})

const WhiteList = ['/login', '/register']
router.beforeEach((to, from, next) => {
  const token = gettoken()
  if (token) return next()
  if (WhiteList.includes(to.path)) return next()
  Toast('请先登录')
  next('/login')
})

export default router
