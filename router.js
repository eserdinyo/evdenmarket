import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from './pages/Home'
import MarketInformation from './pages/MarketInformation.vue'

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
        path: '/bilgilendirme',
        name: 'Market Bilgilendirme',
        component: MarketInformation
      }
    ]
  })
}
