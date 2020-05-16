import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from '@/pages/Home'
import MarketInformation from '@/pages/MarketInformation'
import Markets from '@/pages/Markets'
import Market from '@/pages/Market'
import Category from '@/pages/Category'

// cart
import Cart from '@/pages/payment/Cart'
import Payment from '@/pages/payment/Payment'
import Completed from '@/pages/payment/Completed'

// profil
import Orders from '@/pages/profil/Orders'

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
        path: '/kategori/:id',
        name: 'Kategori',
        component: Category
      },
      {
        path: '/sepetim',
        name: 'Sepet',
        component: Cart
      },
      {
        path: '/odeme',
        name: 'Ödeme',
        component: Payment
      },
      {
        path: '/onay',
        name: 'Tamamlandı',
        component: Completed
      },
      {
        path: '/siparislerim',
        name: 'Siparişlerim',
        component: Orders
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
