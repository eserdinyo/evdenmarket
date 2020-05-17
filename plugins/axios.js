export default function ({ $axios, store }) {
  $axios.interceptors.request.use((request) => {
    if (store.state.user.loggedIn) {
      request.headers.authorization = `Bearer ${store.state.user.token}`
    }
    return request
  })

  $axios.interceptors.response.use(response => response, (err) => {
    if (err.response.status === 401) {
      /*  store.commit('user/logout')
      window.location.replace('/') */
    }
    return Promise.reject(err)
  })
}
