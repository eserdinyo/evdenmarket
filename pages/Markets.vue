<template>
  <div class="markets">
    <div class="container">
      <div v-if="markets.length > 0">
        <div class="markets-title">
          {{ neighborhood.name }}
        </div>
        <div class="markets-wrapper">
          <market-item
            v-for="(market, idx) in markets"
            :key="idx"
            :market="market"
          />
        </div>
      </div>
      <div v-else>
        <div class="no-market">
          <div class="desc">
            <p>Mahallenizde market bulamadık.</p>
            <p>Ama inanın bunun için çok çalışıyoruz.</p>
            <p>
              Bu süreci hızlandırmak için market önererebilisiniz.
            </p>
            <button
              class="btn btn-green"
              @click="$modal.show('suggest-market-modal')"
            >
              Market Öner
            </button>
          </div>
          <div class="gif" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketItem from '@/components/MarketItem'

export default {
  layout: 'cart-layout',
  components: {
    MarketItem
  },
  async asyncData ({ $axios, params }) {
    try {
      const { data } = await $axios(`/neighborhoods/${params.id}`)
      return { markets: data.markets, neighborhood: data.neighborhood }
    } catch (err) {
      return { markets: [] }
    }
  },
  watch: {
    $route () {
      // this.getMarkets()
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

  .no-market {
    margin: 12rem 0;
    text-align: center;

    .desc {
      line-height: 24px;
    }

    .btn-green {
      margin: 0 auto;
      margin-top: 2rem;
      width: 20rem;
      z-index: 9;
      position: relative;
    }

    .gif {
      display: none;
      width: 400px;
      height: 389px;
      position: fixed;
      bottom: 0px;
      right: 0px;
      background: url('../assets/images/404.gif');
    }
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

    .no-market {
      .gif {
        display: block;
      }
    }
  }
}
</style>
