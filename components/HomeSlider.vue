<template>
  <swiper ref="mySwiper" :options="swiperOptions">
    <swiper-slide>
      <img src="@/assets/images/slider/2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/images/slider/4.jpeg">
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination" />
  </swiper>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination-projects',
          dynamicBullets: false,
          clickable: true
        }
      }
    }
  },
  created () {}
}
</script>

<style lang="scss">
@import 'assets/style/main.scss';

</style>
