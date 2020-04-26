<template>
  <div class="Header__search">
    <div class="ChangeMarket">
      <div class="container">
        <iconMarket />
        <div class="ChangeMarket__title" @click="toggleMarketBox">
          <p>Market Ara</p>
          <iconArrowDown :class="{ transformArrow: isOpenMarketBox }" />
        </div>
      </div>
      <div
        v-if="isOpenMarketBox"
        v-on-clickaway="closeChangeMarket"
        class="ChangeMarket__MarketBul"
      >
        <select v-model="cityID" @change="getTowns">
          <option>Şehir Seçin</option>
          <option>
            İstanbul
          </option>
        </select>
        <select>
          <option>
            İlçe Seçin
          </option>
          <option>
            Sultanbeyli
          </option>
        </select>
        <select>
          <option>
            Mahalle Seçin
          </option>
          <option>
            Turgutreis
          </option>
        </select>
        <nuxt-link
          class="ChangeMarket__MarketBul--btn"
          :to="{ name: 'marketler', query: { mid } }"
        >
          Market Bul
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import iconMarket from '@/assets/icons/market'
import iconArrowDown from '@/assets/icons/arrow_down'

export default {
  components: {
    iconMarket,
    iconArrowDown
  },
  mixins: [clickaway],
  data() {
    return {
      isOpenMarketBox: false,
      cityID: '',
      townID: '',
      neighID: '',
      mid: 38752
      //     neighID.NeighborhoodID
    }
  },
  watch: {
    $route() {
      this.isOpenMarketBox = false
    }
  },
  methods: {
    closeChangeMarket() {
      this.isOpenMarketBox = false
    },
    toggleMarketBox() {
      this.isOpenMarketBox = !this.isOpenMarketBox
    },
    getTowns() {
      this.$store.dispatch('getTowns', this.cityID)
    },
    getNeighborhood() {
      this.$store.dispatch('getNeighborhoods', this.townID)
    }
  }
}
</script>

<style lang="scss" scoped>
.Header__search {
  margin-top: 2rem;
  width: 100%;
  @include res(tab) {
    margin-right: auto;
    margin-top: 0;
    width: auto;
  }
}

.ChangeMarket {
  border: 1px solid $primary-color-2;
  color: $primary-color-2;
  border-radius: 5px;
  position: relative;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.3rem 0.5rem;
  }

  &__title {
    font-size: 18px;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.6);
    padding: 1px 20px;
    border-radius: 5px;
    display: flex;
    cursor: pointer;
    user-select: none;
  }

  .icon--market {
    width: 20px;
    fill: $primary-color-2;
    margin-right: 1rem;
  }

  .btn__icon--arrow {
    fill: $primary-color-2;
    margin-left: 1rem;
  }

  &__MarketBul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem;
    background-color: #ddd;
    z-index: 999999;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.562);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.1rem;
    width: 100%;

    & > * {
      margin-bottom: 1rem;
      width: 20rem;
      padding: 0.8rem 1rem;
      font-size: 1.4rem;
      font-family: inherit;
      color: #333;
      outline: none;
      cursor: pointer;
      border-radius: 3px;
      border: 1px solid rgba(51, 51, 51, 0.4);
      background: #fff;
    }

    &--btn {
      background-color: $primary-color-2;
      color: #fff;
      padding: 0.8rem 2rem;
      border: none;
      text-align: center;
      user-select: none;
    }

    &:after {
      content: '';
      position: absolute;
      top: -4%;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #ddd;
    }
  }
}

.transformArrow {
  transform: rotate(180deg);
}
</style>
