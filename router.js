import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// pages
import Home from './pages/Home'


export function createRouter() {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: Home
      }
    ]
  })
}