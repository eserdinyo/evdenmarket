<template>
  <nuxt-link :to="`/market/${slugUrl(market.name)}/${market.id}`">
    <div class="Market">
      <div class="Market__top">
        <img class="Market__resim" :src="market.imageUrl">
      </div>
      <div class="Market__bottom">
        <div class="Market__isim">{{ market.name }}</div>
        <div class="Market__min-paket">
          <iconMoney /><span>Min Sipariş Tutarı: ₺{{ market.min_amount }}</span>
        </div>
        <div class="Market__adres">
          <iconAdress /><span>Şişli, Merkez Mahallesi</span>
        </div>
        <div class="Market__mesai__ort">
          <div class="Market__mesai">
            <iconTime />
            <div class="Market__mesai--time">09:00 - 23:00</div>
          </div>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import iconTime from '@/assets/icons/time'
import iconAdress from '@/assets/icons/address'
import iconMoney from '@/assets/icons/money'

export default {
  components: {
    iconTime,
    iconAdress,
    iconMoney
  },
  props: {
    market: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.Market {
  position: relative;
  border: $border;
  margin-bottom: 3rem;
  border-radius: $radius;
  overflow: hidden;
  transition: all 0.2s;
  box-shadow: 0 4px 8px rgba(238, 238, 238, 0.776);

  &:hover {
    border-color: $primary-color;
  }
  &__resim {
    width: 100%;
    height: 25rem;
    object-fit: cover;
    clip-path: polygon(0 0, 100% 0, 100% 90%, 0% 100%);
  }
  &__bottom {
    padding: 1.5rem;
  }
  &__mesai__ort {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &__ort {
    display: flex;
    align-items: center;
    &--sure {
      font-size: 1.4rem;
      font-weight: 500;
      margin-left: 5px;
    }
  }
  &__isim {
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 500;
    margin: 1rem 0;
    margin-bottom: 2rem;
    color: $font-color;
    font-weight: 600;
  }
  &__adres {
    margin-bottom: 1rem;
    color: $font-color;
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    span {
      margin-left: 0.5rem;
    }
  }
  &__mesai {
    font-size: 1.4rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    &--time {
      margin-left: 10px;
      font-size: 1.4rem;
    }
  }
  &__min-paket {
    margin-bottom: 1rem;
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
    fill: $primary-color;
    width: 12px;
    height: 12px;
    margin-top: -1px;
  }
  &--moto {
    fill: $primary-color;
    width: 28px;
    height: 18px;
  }
  &--address {
    fill: $primary-color;
    width: 15px;
    height: 15px;
  }

  &--money {
    fill: $primary-color-dark;
    width: 20px;
    height: 15px;
  }
}

@include res(desktop) {
  .Market {
    flex-direction: column;
  }
}
</style>
