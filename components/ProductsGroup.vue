<template>
  <div class="products-group">
    <h1 v-if="isLastOrder" class="products-group-title">SON SİRAŞLERİM</h1>
    <h1 v-else class="products-group-title">İNDİRİMDEKİ ÜRÜNLER</h1>
    <swiper ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
      <swiper-slide v-for="(product, idx) in products" :key="idx">
        <product :product="product" />
      </swiper-slide>
      <div slot="button-prev" class="swiper-button-prev" />
      <div slot="button-next" class="swiper-button-next" />
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
    isLastOrder: {
      type: Boolean,
      default: false
    },
    products: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      swiperOptions: {
        speed: 1000,
        grabCursor: true,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: this.$device.isMobile ? 2 : 4,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
.products-group {
  &-title {
    margin: 2rem 0;
    font-size: 1.8rem;
    color: $primary-color;
  }
}
</style>
