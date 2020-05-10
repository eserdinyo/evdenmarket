<template>
  <div class="market-slider">
    <swiper ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
      <swiper-slide v-for="n in 4">
        <div class="market-slider-img-wrapper">
          <img
            class="market-slider-img"
            src="https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/banner/main_page_slider/10444/12478-web_slider-0f714e.jpg"
          >
        </div>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination swiper-pagination-market" />
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        speed: 2000,
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination-market',
          dynamicBullets: false,
          clickable: true
        }
      }
    }
  }
}
</script>

<style lang="scss">
.market-slider {
  height: 30rem;
  width: 100%;
  border-radius: $radius;
  margin: 1rem 0;
  margin-bottom: 6rem;

  .swiper-slide {
    border-radius: $radius;
    overflow: hidden;
  }

  &-img {
    &-wrapper {
      border-radius: $radius;
    }
    object-fit: cover;
    height: 30rem;
  }
}
</style>
