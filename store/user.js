export const state = () => ({
  data: '',
  loggedIn: false
})

export const mutations = {
  loggedIn (state, payload) {
    state.loggedIn = true
    state.data = payload
    window.localStorage.setItem('user', JSON.stringify(payload))
    window.localStorage.setItem('token', payload.token)
  },
  logout (state) {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
    state.loggedIn = false
    state.data = ''
  }
}

export const actions = {
  login ({ commit }, payload) {
    const promise = this.$axios.post('login', {
      phone: payload.phone,
      password: payload.password
    })

    promise.then((res) => {
      commit('loggedIn', res.user)
    })

    return promise
  },
  register ({ commit }, payload) {
    const promise = this.$axios.post('register', {
      phone: payload.phone,
      password: payload.password,
      repassword: payload.repassword,
      first_name: payload.first_name,
      last_name: payload.last_name
    })

    promise.then((res) => {
      commit('loggedIn', res.data.user)
    })

    return promise
  }
}
