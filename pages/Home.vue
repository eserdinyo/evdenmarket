<template>
  <div>
    <home-slider />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeSlider from '@/components/HomeSlider'

export default {
  components: {
    HomeSlider
  },
  computed: {
    ...mapGetters(['isLoggedIn', 'loggedUser'])
  },
  mounted () {
    /*  if (this.$route.query.register) {
      this.$store.dispatch("register", {
        user: this.$auth.user,
        provider: this.$auth.strategy.name
      });
      this.$router.push("/");
    } */
  },
  head () {
    return {
      title: 'Evdenmarket - Market Sana Gelsin ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/style/main.scss";

.Slider {
  margin-top: 1rem;
}

.swal-button {
  background-color: $primary-color;
}

.swal-button:not([disabled]):hover {
  background-color: $primary-color-hover;
}
</style>
