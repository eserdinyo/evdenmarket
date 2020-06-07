import Vue from 'vue'
import Router from 'vue-router'

// pages
import Home from '@/pages/Home'
import MarketInformation from '@/pages/MarketInformation'
import Markets from '@/pages/Markets'
import Market from '@/pages/Market'
import Category from '@/pages/Category'
import ProductDetail from '@/pages/ProductDetail'

// cart
import Cart from '@/pages/payment/Cart'
import Payment from '@/pages/payment/Payment'
import Completed from '@/pages/payment/Completed'

// profil
import Orders from '@/pages/profil/Orders'
import OrderDetail from '@/pages/profil/OrderDetail'
import Account from '@/pages/profil/Account'
import Settings from '@/pages/profil/Settings'
import Address from '@/pages/profil/Address'
import Points from '@/pages/profil/Points'
import Contact from '@/pages/profil/Contact'

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
        component: Markets,
        props: true
      },
      {
        path: '/market/:name/:id',
        name: 'Market',
        component: Market
      },
      {
        path: '/urun/:name/:id',
        name: 'Product Detail',
        component: ProductDetail
      },
      {
        path: '/kategori/:name/:id/market/:marketId/:marketName',
        name: 'Kategori',
        props: true,
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
        path: '/siparis/:id',
        name: 'Sipariş Detayı',
        component: OrderDetail,
        props: true
      },
      {
        path: '/hesabim',
        name: 'Hesabım',
        component: Account
      },
      {
        path: '/ayarlarim',
        name: 'Ayarlar',
        component: Settings
      },
      {
        path: '/adreslerim',
        name: 'Adreslerim',
        component: Address
      },
      {
        path: '/puanlarim',
        name: 'Puanlarım',
        component: Points
      },
      {
        path: '/iletisim',
        name: 'İletişim',
        component: Contact
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
