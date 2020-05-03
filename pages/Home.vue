<template>
  <div>
    <home-slider />
    <home-tutorial />
    <home-markets />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeSlider from '@/components/HomeSlider'
import HomeTutorial from '@/components/HomeTutorial'
import HomeMarkets from '@/components/HomeMarkets'

export default {
  components: {
    HomeSlider,
    HomeTutorial,
    HomeMarkets
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
          content: 'Çevrendeki bütün marketleri görüp istediğin marketten online alışveriş yapabilirsin'
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
