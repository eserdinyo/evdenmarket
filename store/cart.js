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
  total: state =>
    state.data
      .map(item => item.marketproduct.price * item.quantity) // will be change
      .reduce((sum, current) => sum + current, 0).toFixed(2)
}

export const mutations = {
  set (state, payload) {
    state.data = payload
  }
}

export const actions = {
  add ({ dispatch }, payload) {
    const promise = this.$axios.$post('cart', {
      marketproduct_id: payload.marketproduct_id,
      quantity: payload.quantity
    })

    promise.then((res) => {
      dispatch('fetch')
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
  update ({ dispatch }, payload) {
    const promise = this.$axios.$put(`cart/${payload.id}`, {
      type: payload.type
    })
    promise.then((res) => {
      dispatch('fetch')
    })

    return promise
  },
  delete ({ dispatch }, payload) {
    const promise = this.$axios.$delete(`cart/${payload.id}`)

    promise.then((res) => {
      dispatch('fetch')
    })

    return promise
  }
}
