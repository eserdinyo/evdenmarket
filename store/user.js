export const state = () => ({
  data: '',
  loggedIn: false,
  token: ''
})

export const mutations = {
  init (state) {
    state.loggedIn = !!window.localStorage.getItem('user')
    state.data = JSON.parse(window.localStorage.getItem('user')) || ''
    state.token = window.localStorage.getItem('token') || ''
  },
  loggedIn (state, payload) {
    state.loggedIn = true
    state.data = payload.user
    state.token = payload.token
    window.localStorage.setItem('user', JSON.stringify(payload.user))
    window.localStorage.setItem('token', payload.token)
  },
  logout (state) {
    window.localStorage.removeItem('user')
    window.localStorage.removeItem('token')
    state.loggedIn = false
    state.data = ''
    state.token = ''
  }
}

export const actions = {
  login ({ commit }, payload) {
    const promise = this.$axios.$post('login', {
      phone: payload.phone,
      password: payload.password
    })

    promise.then((res) => {
      commit('loggedIn', res.data)
    })

    return promise
  },
  register ({ commit }, payload) {
    const promise = this.$axios.$post('register', {
      phone: payload.phone,
      password: payload.password,
      password_confirmation: payload.repassword,
      first_name: payload.first_name,
      last_name: payload.last_name
    })

    promise.then((res) => {
      commit('loggedIn', res.data)
    })

    return promise
  }
}
