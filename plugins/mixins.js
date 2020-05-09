import Vue from 'vue'
import Swal from 'sweetalert2'

Vue.mixin({
  computed: {
    isLoggedIn () {
      return this.$store.state.user.loggedIn
    }
  },
  methods: {
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
