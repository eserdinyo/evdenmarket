<template>
  <div class="markets">
    <div class="container">
      <div class="markets-title">
        Turgut Reis Mahallesi
      </div>
      <div class="markets-wrapper">
        <Market v-for="(n, idx) in 10" :key="idx" :market="market" />
      </div>
    </div>
  </div>
</template>

<script>
import Market from '@/components/Market'

export default {
  components: {
    Market
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
        market_id: 10,
        min_amount: 75,
        name: 'Migros Market',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Migros_t%C3%BCrk.jpg/1200px-Migros_t%C3%BCrk.jpg'
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
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 4rem;
    margin-bottom: 4rem;
  }
  &-title {
    padding: 1rem 0;
    font-size: 6rem;
    color: $grey-color;
    border-bottom: $border;
    margin: 4rem 0;
  }
}
</style>
