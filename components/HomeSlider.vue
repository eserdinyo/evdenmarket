<template>
  <swiper ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
    <swiper-slide>
      <img class="swiper_img" src="@/assets/images/slider/1.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper_img" src="@/assets/images/slider/2.jpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper_img" src="@/assets/images/slider/3.jpg">
    </swiper-slide>
    <div slot="pagination" class="swiper-pagination swiper-pagination-home" />
  </swiper>
</template>

<script>

export default {
  data () {
    return {
      swiperOptions: {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination-home',
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
.swiper-container {
  margin-top: 2rem;
  height: 24rem;
}

.swiper-wrapper {
  z-index: 0 !important;
}
.swiper_img {
  width: 100%;
  height: 24rem;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 34px !important;
  border-radius: $sm-radius !important;
  height: 4px !important;
}

.swiper-button-prev,
.swiper-button-next {
  background-color: #fff;
  height: 40px !important;
  width: 40px !important;
  border-radius: 100% !important;

  &::after {
    color: $primary-color;
    font-size: 14px !important;
    font-weight: bold !important;
  }
}

.swiper-pagination-bullet-active {
  background-color: $primary-color !important;
}

@include res(desktop) {
  .swiper-container {
    height: 40rem;
  }

  .swiper_img {
    width: 100%;
    height: 40rem;
    object-fit: cover;
  }
}
</style>
