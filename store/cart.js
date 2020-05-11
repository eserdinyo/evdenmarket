import _ from 'lodash'

export const state = () => ({
  data: []
})

export const getters = {
  count: state =>
    state.data
      .map(product => product.quantity)
      .reduce((sum, current) => sum + current, 0),
  items: state => _.uniqBy(state.data, 'id'),
  amount: state =>
    state.data
      .map(item => 20 * item.quantity) // will be change
      .reduce((sum, current) => sum + current, 0)
}

export const mutations = {
  set (state, payload) {
    state.data = payload
  }
}

export const actions = {
  add ({ commit, }, payload) {
    const promise = this.$axios.$post('cart', {
      marketproduct_id: payload.marketproduct_id,
      quantity: payload.quantity
    })

    promise.then((res) => {
      // commit('loggedIn', res.data)
    })

    return promise
  },
  fetch ({ commit }, payload) {
    const promise = this.$axios('cart')

    promise.then((res) => {
      commit('set', res.data)
    })

    return promise
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
