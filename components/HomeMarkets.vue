<template>
  <div class="LastMarkets">
    <div class="title">
      YENİ MARKETLER
    </div>
    <div class="container">
      <div class="LastMarkets_wrapper">
        <swiper ref="mySwiper" class="swiper-wrapper" :options="swiperOptions">
          <swiper-slide v-for="(market, idx) in markets" :key="idx">
            <market-item :market="market" />
          </swiper-slide>
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next" />
        </swiper>
      </div>
    </div>
  </div>
</template>

<script>
import MarketItem from './MarketItem'
export default {
  components: {
    MarketItem
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
      markets: [
        {
          id: 10,
          min_amount: 75,
          name: 'Ulusoy Market',
          imageUrl:
            'http://karabukunfirmalari.com/data/company/162/hMdLRP-qBz.jpg'
        },
        {
          id: 12,
          min_amount: 75,
          name: 'Onur Market',
          imageUrl: 'http://kurumsal.onurmarket.com/media/magaza/bagcilar-1.jpg'
        },
        {
          id: 14,
          min_amount: 75,
          name: 'İndirim Market',
          imageUrl:
            'https://www.akdeniztoros.com.tr/satisnoktalari/wp-content/uploads/Ayanc%C4%B1k-%C4%B0ndirim-Market.jpg'
        },
        {
          id: 22,
          min_amount: 75,
          name: 'Migros Market',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Migros_t%C3%BCrk.jpg/1200px-Migros_t%C3%BCrk.jpg'
        }
      ]
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
