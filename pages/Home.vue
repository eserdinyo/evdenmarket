<template>
  <div>
    <home-slider />
    <home-tutorial />
    <home-markets />
  </div>
</template>

<script>
import HomeSlider from '@/components/HomeSlider'
import HomeTutorial from '@/components/HomeTutorial'
import HomeMarkets from '@/components/HomeMarkets'

export default {
  components: {
    HomeSlider,
    HomeTutorial,
    HomeMarkets
  },
  created () {
    // if there is default market go to there
    if (process.browser) {
      if (this.defaultMarket.name) {
        this.$router.push(`/market/${this.slugUrl(this.defaultMarket.name)}/${this.defaultMarket.id}`)
      }
    }
  },
  head () {
    return {
      title: 'Evdenmarket - Market Sana Gelsin ',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Çevrendeki bütün marketleri görüp istediğin marketten online alışveriş yapabilirsin'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.swal-button {
  background-color: $primary-color;
}

.swal-button:not([disabled]):hover {
  background-color: $primary-color-hover;
}
</style>
