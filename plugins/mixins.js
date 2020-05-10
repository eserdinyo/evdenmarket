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
    }
  }
})
