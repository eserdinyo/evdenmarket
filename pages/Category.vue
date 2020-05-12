<template>
  <div class="category-page">
    <search-bar />
    <mobile-category />
    <div class="container relative">
      <div class="category-page-top">
        <market-nav />
        <div>
          <div class="category-page-title">
            Süt, Kahvaltılık
          </div>
          <div class="category-page-right">
            <product v-for="(n, idx) in 20" :key="idx" :product="product" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketNav from '@/components/MarketNav'
import SearchBar from '@/components/SearchBar'
import Product from '@/components/Product'
import MobileCategory from '@/components/MobileCategory'

export default {
  name: 'MarketDetail',
  components: {
    MarketNav,
    SearchBar,
    Product,
    MobileCategory
  },
  data () {
    return {
      product: {
        image:
          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
        name: 'Doritos Extreme Mısır Cips',
        quantity: 2,
        price: 5.75,
        id: 2
      },
      title: 'Süt, Kahvaltılık - Onur Market'
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

<style lang="scss">
.category-page {
  margin-bottom: 4rem !important;
  .relative {
    position: relative;
  }
  &-top {
    display: grid;
    grid-template-columns: 100%;
  }
  &-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1rem;
    margin-top: 2rem;
  }
  &-title {
    font-size: 2rem;
    border-bottom: $border;
    padding-bottom: 1rem;
  }
}

@include res(desktop) {
  .category-page {
    margin-bottom: 14rem !important;
    &-top {
      grid-template-columns: 20% 80%;
    }
    &-right {
      padding: 2rem;
      grid-template-columns: repeat(4, 1fr);
    }
     &-title {
      margin: 2rem;
      margin-top: 3rem;
      font-size: 2.4rem;
      padding-left: 1rem;
    }
  }
}
</style>
