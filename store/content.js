export const state = () => ({
  addresses: []
})

export const mutations = {
  setAddresses (state, payload) {
    state.addresses = payload
  }
}

export const actions = {
  fetchAddresses ({ commit }, payload) {
    this.$axios('addresses').then((res) => {
      commit('setAddresses', res.data)
    })
  }
}
