<template lang="pug">
    nuxt-link(:to="{ name: 'marketler-m-id', params: { id:2 }}")
      .Market
        .Market__top
          img.Market__resim(:src="market.market_image")
        .Market__bottom
          .Market__isim {{market.market_adi}}
          .Market__min-paket 
            iconMoney
            span Min Paket: {{market.market_min_sepet}} ₺
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
import iconMoney from "@/assets/icons/money";
export default {
  props: ["market"],
  components: {
    iconTime,
    iconMoto,
    iconAdress,
    iconMoney
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
  display: flex;
  &__top {
    width: 40%;
    height: 13rem;
  }
  @include res(tab-land) {
    display: flex;
    flex-direction: column;
    width: 28rem;
    margin-top: 2rem;
    &__top {
      height: 20rem;
      width: 100%;
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
    margin-bottom: 1rem;
    color: $font-color;

    @include res(tab-land) {
      text-align: center;
    }
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
    display: flex;
    align-items: center;
    span {
      font-weight: 500;
      margin-left: 5px;
    }
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

  &--money {
    fill: $primary-color-dark;
    width: 15px;
    height: 15px;
  }
}
</style>