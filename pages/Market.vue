<template>
  <div class="wrapper">
    <desktop-category />
    <div class="MarketDetay">
      <div class="Market">
        <market-item :market="market" />
        <search-bar />
      </div>
      <div class="MarketDetay__top">
        <div class="Slider">
          <home-slider />
        </div>
        <h2 class="MarketDetay__title">Marketteki En Cok Satanlar</h2>
        <div class="container">
          <product
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import MarketItem from '@/components/MarketItem'
import HomeSlider from '@/components/HomeSlider'
import Product from '@/components/Product'
import SearchBar from '@/components/SearchBar'
import ChangeMarket from '@/components/ChangeMarket'
import DesktopCategory from '@/components/DesktopCategory'
import Loader from '@/components/Loader'

export default {
  name: 'MarketDetay',
  components: {
    MarketItem,
    HomeSlider,
    Product,
    SearchBar,
    ChangeMarket,
    DesktopCategory
  },
  data() {
    return {
      title: 'Marketler - Evdenmarket',
      market: {
        market_id: 10,
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
  head() {
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
.Market {
  margin-left: 5px;
  margin-right: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.MarketDetay {
  display: grid;
  grid-template-columns: 30% 70%;
  &__title {
    text-align: center;
    text-transform: uppercase;
    margin-top: 0rem;
    color: #1e272e;
    margin-top: 4rem;
  }
  margin-top: 2rem;

  &__top {
    margin-top: 3rem;
    max-width: 120rem;
    margin: 1.5rem auto;
    padding: 0 1rem;
    margin-bottom: 2rem;
  }
}

.SearchBar {
  margin-top: 4rem;
}
.Slider {
  margin-top: -1rem;
  width: 100%;
}
.container {
  max-width: 120rem;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 0 1rem;
}
</style>
