<template>
  <div class="LastMarkets">
    <div class="title">
      YENİ MARKETLER
    </div>
    <div class="container">
      <div class="LastMarkets_wrapper">
        <swiper ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
          <swiper-slide v-for="(n, idx) in 4" :key="idx">
            <market :market="market" />
          </swiper-slide>
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import Market from './Market'
export default {
  components: {
    Market
  },
  data () {
    return {
      swiperOptions: {
        loop: true,
        speed: 1000,
        spaceBetween: 20,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: this.$device.isMobile ? 1 : 4,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
          clickable: true
        }
      },
      market: {
        market_id: 10,
        min_amount: 75,
        name: 'Migros Market',
        imageUrl:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Migros_t%C3%BCrk.jpg/1200px-Migros_t%C3%BCrk.jpg'
      }
    }
  }
}
</script>

<style lang="scss">
.LastMarkets {
  margin-bottom: 15rem;
  .title {
    height: 16rem;
    font-size: 3rem;
    color: #fff;
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
    border-bottom: $border;
    background-size: cover;
    background-position: center;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url('../assets/images/home-banner-bg.png');
  }

   .swiper-button-prev,
    .swiper-button-next {
      background-color: #fff;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      height: 40px !important;
      width: 40px !important;
      border-radius: 100% !important;

      &::after {
        color: $primary-color;
        font-size: 16px !important;
      }
    }
}

@include res(desktop) {
  .LastMarkets {
    .swiper-button-prev {
      left: 20px;
    }
    .swiper-button-next {
      right: 20px;
    }
    .title {
      height: 24rem;
      font-size: 4rem;
      margin-bottom: 5rem;
      margin-top: 8rem;
    }
  }
}
</style>
