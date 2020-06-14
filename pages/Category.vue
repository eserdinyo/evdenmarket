<template>
  <div class="category-page">
    <search-bar :market="market.market" />
    <mobile-category />
    <div class="container relative">
      <div class="category-page-top">
        <market-nav :market="market.market" />
        <div>
          <div class="category-page-title">
            {{ category.name }}
          </div>
          <div class="category-page-right">
            <product
              v-for="(product, idx) in products"
              :key="idx"
              :product="product"
            />
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
  components: {
    MarketNav,
    SearchBar,
    Product,
    MobileCategory
  },
  async asyncData ({ $axios, error, params }) {
    try {
      const category = await $axios(`categories/${params.id}`)
      const market = await $axios(`markets/${params.marketId}`)

      return { category: category.data, market: market.data }
    } catch (err) {
      error({ statusCode: 404, message: 'Post not found' })
    }
  },
  data () {
    return {
      products: [
        {
          id: 2,
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
          name: 'Doritos Extreme Mısır Cips',
          price: 2.75,
          marketproduct_id: 3
        },
        {
          id: 4,
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
          name: 'Doritos Extreme Mısır Cips',
          price: 3.75,
          marketproduct_id: 4
        },
        {
          id: 77,
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
          name: 'Doritos Extreme Mısır Cips',
          price: 4.75,
          marketproduct_id: 5
        }
      ],
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
