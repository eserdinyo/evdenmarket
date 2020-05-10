import _ from 'lodash'

export const state = () => ({
  totalPrice: 0,
  isCartOpen: false,
  shopcart: [{
    image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07150087/nutella-go-52-gr-5e1f3e.jpg',
    name: 'Nutella Go 52 G',
    quantity: 2,
    price: 5.75,
    productid: 2
  },
  {
    image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05090023/05090023-f4ba19.jpg',
    name: 'Dankek Lokmalık Hindistan Cevizli 160 G',
    quantity: 3,
    price: 3.75,
    productid: 3
  },
  {
    image: 'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03118004/03118004-e54fa0.jpg',
    name: 'Doğuş Tiryaki Çay 1000 G',
    quantity: 1,
    price: 25.75,
    productid: 5
  }]
})

export const getters = {
  itemCount: state =>
    state.shopcart
      .map(product => product.quantity)
      .reduce((sum, current) => sum + current, 0),
  shopcart: state => _.uniqBy(state.shopcart, 'productid'),
  isCartOpen: state => state.isCartOpen,
  totalPrice: state =>
    state.shopcart
      .map(item => item.price * item.quantity)
      .reduce((sum, current) => sum + current, 0)
}

export const mutations = {
  setShopcart (state, shopcart) {
    state.shopcart = shopcart
  }
}

export const actions = {
  add ({ commit }, payload) {

  },
  addToCart ({ commit }, payload) {
    const product = payload.product
    const userid = payload.user.sub || payload.user.id

    return new Promise((resolve, reject) => {
      http
        .post('/shopcart', {
          changeType: product.changeType, // increase or decrease product count on cart
          userid,
          productid: product.id,
          quantity: product.quantity,
          price: product.price,
          name: product.name,
          image: product.image
        })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(401)
        })
    })
  },
  deleteFromShopcart ({ commit }, payload) {
    const id = payload.product.id
    const userid = payload.user.sub || payload.user.id

    return new Promise((resolve, reject) => {
      http
        .delete('/shopcart', {
          data: { id, userid }
        })
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  },
  getShopcart ({ commit }, user) {
    const userid = user.sub || user.id

    return new Promise((resolve, reject) => {
      http
        .get('/shopcart', {
          params: {
            userid
          }
        })
        .then((res) => {
          commit('setShopcart', res.data)
          resolve(res)
        })
        .catch((err) => {
          reject(401)
        })
    })
  }
}
