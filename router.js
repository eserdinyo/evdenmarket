import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from './pages/Home'
import Login from './pages/giris/index.vue'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      },
      {
        path: '/giris',
        component: Login
      }
    ]
  })
}
