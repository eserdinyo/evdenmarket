import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from './pages/Home'
import MarketInformation from './pages/MarketInformation'
import Markets from '@/pages/Markets'
import Market from '@/pages/Market'

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
        path: '/market/:name/:id',
        name: 'Market',
        component: Market
      },
      {
        path: '/bilgilendirme',
        name: 'Market Bilgilendirme',
        component: MarketInformation
      }
    ],
    scrollBehavior (to, from, savedPosition) {
      return savedPosition || { x: 0, y: 0 }
    }
  })
}
