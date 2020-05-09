<template>
  <div class="markets">
    <div class="container">
      <div class="markets-title">
        Turgut Reis Mahallesi
      </div>
      <div class="markets-wrapper">
        <market-item v-for="(n, idx) in 10" :key="idx" :market="market" />
      </div>
    </div>
  </div>
</template>

<script>
import MarketItem from '@/components/MarketItem'

export default {
  components: {
    MarketItem
  },
  props: {
    id: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      market: {
        id: 10,
        min_amount: 75,
        name: 'Ulusoylar Market',
        imageUrl:
          'http://karabukunfirmalari.com/data/company/162/hMdLRP-qBz.jpg'
      }
    }
  },
  watch: {
    $route () {
      this.getMarkets()
    }
  },
  head () {
    return {
      title: 'Marketler - Evdenmarket',
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
.markets {
  &-wrapper {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2rem;
    margin-bottom: 4rem;
  }
  &-title {
    padding: 1rem 0;
    font-size: 3.4rem;
    color: $grey-color;
    border-bottom: $border;
    margin: 4rem 0;
  }
}

@include res(desktop) {
  .markets {
    &-wrapper {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }
    &-title {
      font-size: 6rem;
    }
  }
}
</style>
