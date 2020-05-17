<template>
  <div class="market-detail">
    <search-bar />
    <div class="container relative">
      <div class="market-detail-top">
        <market-nav />
        <div class="market-detail-right">
          <market-slider />
          <products-group :products="products" />
          <products-group :products="products" :is-last-order="true" />
          <category-products
            v-for="(cat, idx) in categoryProducts"
            :key="idx"
            :category-data="cat"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MarketNav from '@/components/MarketNav'
import MarketSlider from '@/components/MarketSlider'
import SearchBar from '@/components/SearchBar'
import ProductsGroup from '@/components/ProductsGroup'
import CategoryProducts from '@/components/CategoryProducts'

export default {
  name: 'MarketDetail',
  components: {
    MarketNav,
    MarketSlider,
    SearchBar,
    ProductsGroup,
    CategoryProducts
  },
  data() {
    return {
      title: 'Marketler - Evdenmarket',
      market: {
        id: 10,
        min_amount: 75,
        name: 'Ulusoy Market',
        imageUrl:
          'http://karabukunfirmalari.com/data/company/162/hMdLRP-qBz.jpg'
      },
      categoryProducts: [
        {
          title: 'FİLM GECESİ',
          image: require('../assets/images/movie-bg.jpg'),
          products: [
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
              name: 'Doritos Extreme Mısır Cips',
              quantity: 2,
              price: 5.75,
              id: 2
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08019131/08019131-2d55b9.jpg',
              name: 'Pepsi Mango Aromalı Kola',
              quantity: 2,
              price: 2.75,
              id: 4
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08089800/08089800-e3ed39.jpg',
              name: 'Migros Kavrulmuş Fındık',
              quantity: 2,
              price: 14.75,
              id: 5
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07010763/eti-crax-cubuk-kraker-150-gr-feaa93.jpg',
              name: 'Eti Crax Çubuk Kraker 95 G',
              quantity: 2,
              price: 1.25,
              id: 5
            }
          ]
        },
        {
          title: 'PAZAR KAHVALTISI',
          image: require('../assets/images/category-breakfast.jpg'),
          products: [
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
              name: 'Doritos Extreme Mısır Cips',
              quantity: 2,
              price: 5.75,
              id: 2,
              marketproduct_id: 2
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08019131/08019131-2d55b9.jpg',
              name: 'Pepsi Mango Aromalı Kola',
              quantity: 2,
              price: 2.75,
              id: 4,
              marketproduct_id: 9
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/08089800/08089800-e3ed39.jpg',
              name: 'Migros Kavrulmuş Fındık',
              quantity: 2,
              price: 14.75,
              id: 5,
              marketproduct_id: 12
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07010763/eti-crax-cubuk-kraker-150-gr-feaa93.jpg',
              name: 'Eti Crax Çubuk Kraker 95 G',
              quantity: 2,
              price: 1.25,
              id: 5,
              marketproduct_id: 20
            }
          ]
        },
        {
          title: 'SAĞLIKLI YAŞAM',
          image: require('../assets/images/health.jpg'),
          products: [
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/11015053/11015053-4fc8a1.jpg',
              name: 'Pınar Süt Protein Kakaolu',
              quantity: 2,
              price: 3.5,
              id: 9,
              marketproduct_id: 2
            },
            {
              image:
                'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07040173/07040173-025e62.jpg',
              name: 'Züber Glutensiz Protein Barı',
              quantity: 2,
              price: 3.75,
              id: 19,
              marketproduct_id: 12
            }
          ]
        }
      ],
      products: [
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07150087/nutella-go-52-gr-5e1f3e.jpg',
          name: 'Nutella Go 52 G',
          quantity: 2,
          price: 5.75,
          id: 2,
          marketproduct_id: 20
        },
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05090023/05090023-f4ba19.jpg',
          name: 'Dankek Lokmalık Hindistan Cevizli 160 G',
          quantity: 3,
          price: 3.75,
          id: 3,
          marketproduct_id: 111
        },
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03118004/03118004-e54fa0.jpg',
          name: 'Doğuş Tiryaki Çay 1000 G',
          quantity: 1,
          price: 25.75,
          id: 5,
          marketproduct_id: 12
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

<style lang="scss">
.market-detail {
  margin-bottom: 4rem !important;
  .relative {
    position: relative;
  }
  &-top {
    display: grid;
    grid-template-columns: 100%;
  }
}

@include res(desktop) {
  .market-detail {
    margin-bottom: 14rem !important;
    &-top {
      grid-template-columns: 20% 80%;
    }
  }
}
</style>
