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

Vue.use(VueRouter)

const routes = [
  { path: '/login', component: Login },
  { path: '/detail/:id', component: Detail },
  {
    path: '/',
    component: Layout,
    children: [
      { path: 'article', component: Article },
      { path: 'collect', component: Collect },
      { path: 'like', component: Like },
      { path: 'user', component: User }
    ]
  },
  { path: '/register', component: Register }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
