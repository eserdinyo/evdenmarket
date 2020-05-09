import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from './pages/Home'
import MarketInformation from './pages/MarketInformation'
import Markets from '@/pages/Markets'

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
        path: '/marketler/:id',
        name: 'Markets',
        component: Markets
      },
      {
        path: '/bilgilendirme',
        name: 'Market Bilgilendirme',
        component: MarketInformation
      }
    ]
  })
}
