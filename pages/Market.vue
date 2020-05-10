<template>
  <div class="market-detail">
    <div class="container">
      <div class="market-detail-top">
        <market-nav />
        <market-slider />
      </div>
    </div>
  </div>
</template>

<script>
import MarketNav from '@/components/MarketNav'
import MarketSlider from '@/components/MarketSlider'

export default {
  name: 'MarketDetail',
  components: {
    MarketNav,
    MarketSlider
  },
  data () {
    return {
      title: 'Marketler - Evdenmarket',
      market: {
        id: 10,
        min_amount: 75,
        name: 'Ulusoy Market',
        imageUrl:
          'http://karabukunfirmalari.com/data/company/162/hMdLRP-qBz.jpg'
      },
      products: [
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07150087/nutella-go-52-gr-5e1f3e.jpg',
          name: 'Nutella Go 52 G',
          quantity: 2,
          price: 5.75,
          id: 2
        },
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05090023/05090023-f4ba19.jpg',
          name: 'Dankek Lokmalık Hindistan Cevizli 160 G',
          quantity: 3,
          price: 3.75,
          id: 3
        },
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03118004/03118004-e54fa0.jpg',
          name: 'Doğuş Tiryaki Çay 1000 G',
          quantity: 1,
          price: 25.75,
          id: 5
        }
      ]
    }
  },
  head () {
    return {
      title: this.title,
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

<style lang="scss" scoped>

.market-detail {
  margin-bottom: 8rem;
  &-top {
    display: flex;
  }
}
</style>
