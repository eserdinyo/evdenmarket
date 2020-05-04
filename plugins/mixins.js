import Vue from 'vue'

Vue.mixin({
  computed: {
    isLoggedIn () {
      return this.$store.state.user.loggedIn
    }
  }
})
