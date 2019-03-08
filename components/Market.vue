<template lang="pug">
    nuxt-link(:to="{ name: 'market-id', params: { id:2 }}")
      .Market
        .Market__top
          img.Market__resim(:src="market.market_image")
        .Market__bottom
          .Market__isim 
            p {{market.market_adi}}
            a.Market__choose(@click.prevent="setDefaultMarket" :class="{ isOpenMarketBox: isChoosed }")
              iconPlus(v-if="!isChoosed")
              iconSuccess(v-if="isChoosed")
          .Market__min-paket Min Paket:
            span {{market.market_min_sepet}} ₺
          .Market__adres 
            iconAdress
            span Şişli, Merkez Mahallesi
          .Market__mesai__ort
            .Market__ort 
              iconMoto
              .Market__ort--sure 
                span 40 DK
            .Market__mesai
              iconTime
              .Market__mesai--time 09:00 - 23:00
</template>

<script>
import iconTime from "@/assets/icons/time";
import iconMoto from "@/assets/icons/moto";
import iconAdress from "@/assets/icons/address";
import iconPlus from "@/assets/icons/plus";
import iconSuccess from "@/assets/icons/success";

export default {
  props: ["market"],
  data() {
    return {
      isChoosed: false
    };
  },
  components: {
    iconTime,
    iconMoto,
    iconAdress,
    iconPlus,
    iconSuccess
  },
  methods: {
    setDefaultMarket() {
      this.isChoosed = !this.isChoosed;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.Market {
  border-radius: 3px;
  box-shadow: 0 5px 10px rgba(#000, 0.1);
  position: relative;
  border: 1px solid #19191934;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 40% 60%;

  @include res(tab-land) {
    display: flex;
    flex-direction: column;
    width: 28rem;
    margin-top: 2rem;

    &__top {
      height: 20rem;
    }
  }

  &__resim {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__bottom {
    padding: 0.5rem 1rem;
    @include res(tab-land) {
      height: 15rem;
      padding-top: 1rem;
    }
  }

  &__mesai__ort {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
  }

  &__ort {
    display: flex;
    align-items: center;

    &--sure {
      font-size: 1.3rem;
      font-weight: 500;
      margin-left: 5px;
    }
  }

  &__isim {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
    text-align: center;
    margin-bottom: 1rem;
    color: $font-color;
    display: flex;
    justify-content: space-between;
  }
  &__adres {
    margin-bottom: 0.5rem;
    color: $font-color;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    span {
      margin-left: 0.5rem;
    }
  }
  &__mesai {
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    &--time {
      margin-left: 5px;
      font-size: 1.3rem;
    }
  }

  &__min-paket {
    margin-bottom: 0.5rem;
    font-size: 1.4rem;
    span {
      font-weight: 500;
      margin-left: 5px;
    }
  }

  &__choose {
    border: 1px solid $primary-color-2;
    padding: 0px 6px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.icon {
  &--time {
    fill: $primary-color-dark;
    width: 15px;
    height: 15px;
    display: none;
    @include res(tab) {
      display: unset;
    }
  }

  &--moto {
    fill: $primary-color-dark;
    width: 28px;
    height: 18px;
  }

  &--address {
    fill: $primary-color-dark;
    width: 15px;
    height: 15px;
  }

  &--plus {
    fill: $primary-color-2;
    width: 12px;
    height: 12px;
  }
  &--success {
    fill: #fff;
    width: 15px;
    height: 15px;
  }
}

.isOpenMarketBox {
  background-color: $primary-color-2;
}
</style>

