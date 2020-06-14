import Vue from 'vue'
import Swal from 'sweetalert2'
import slugify from 'slugify'

Vue.mixin({
  computed: {
    isLoggedIn () {
      return this.$store.state.user.loggedIn
    },
    user () {
      return this.$store.state.user.data
    },
    defaultMarket () {
      return this.$store.state.user.defaultMarket
    }
  },
  methods: {
    slugUrl (str) {
      return slugify(str, {
        lower: true
      })
    },
    alert (title, content, type) {
      Swal.fire({
        title,
        type,
        icon: type,
        text: content,
        showCancelButton: false,
        confirmButtonText: 'TAMAM'
      })
    },
    logout () {
      this.$store.commit('user/logout')
      this.$router.push('/')
    }
  }
})
