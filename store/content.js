export const state = () => ({
  addresses: [],
  categories: []
})

export const mutations = {
  setAddresses (state, payload) {
    state.addresses = payload
  },
  setCategories (state, payload) {
    state.categories = payload
  }
}

export const actions = {
  fetchAddresses ({ commit }, payload) {
    this.$axios('addresses').then((res) => {
      commit('setAddresses', res.data)
    })
  },
  fetchCategories ({ commit }, payload) {
    this.$axios('categories').then((res) => {
      commit('setCategories', res.data)
    })
  }
}
