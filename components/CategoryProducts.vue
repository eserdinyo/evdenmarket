<template>
  <div class="category-products">
    <div class="category-products-left">
      <div class="category-products-title">
        {{ categoryData.title }}
      </div>
      <img :src="categoryData.image" alt="">
    </div>
    <swiper ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
      <swiper-slide v-for="(n, idx) in 3" :key="idx">
        <div class="category-products-right">
          <product
            v-for="(product, idx) in categoryData.products"
            :key="idx"
            :product="product"
            :is-category="true"
          />
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination swiper-pagination-category" />
    </swiper>
  </div>
</template>

<script>
import Product from './Product'
export default {
  components: {
    Product
  },
  props: {
    categoryData: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination-category',
          dynamicBullets: false,
          clickable: true
        }
      },
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
    }
  }
}
</script>

<style lang="scss">
.category-products {
  margin-bottom: 6rem !important;
  &-title {
    font-size: 2rem;
    font-weight: 500;
    color: #fff;
    position: absolute;
    left: 30px;
    bottom: 25px;
    font-weight: 600;
  }

  height: 48rem;
  margin: 2rem 0;
  box-shadow: $shadow;
  border: $border;
  border-radius: $radius;
  background: #fff;
  transition: all 0.2s;
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;

  &-left {
    position: relative;
    width: 100%;
    &:before {
      content:'';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 80px;
      background:rgba(0, 0, 0, 0.591);
    }
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  &-right {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
