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
        <div class="selectbox">
          <multiselect
            v-model="city"
            :options="cities"
            :multiple="false"
            :close-on-select="true"
            :hide-selected="true"
            :preserve-search="true"
            selected-label
            deselect-label
            select-label
            placeholder="Şehir Seçin"
            label="name"
          />
        </div>
        <div class="selectbox">
          <multiselect
            v-model="district"
            :options="districts"
            :multiple="false"
            :close-on-select="true"
            :hide-selected="true"
            :preserve-search="true"
            selected-label
            :disabled="!districts.length > 0"
            deselect-label
            select-label
            placeholder="İlçe Seçin"
            label="name"
          />
        </div>
        <div class="selectbox">
          <multiselect
            v-model="neighborhood"
            :options="neighborhoods"
            :multiple="false"
            :close-on-select="true"
            :hide-selected="true"
            :disabled="!neighborhoods.length > 0"
            :preserve-search="true"
            selected-label
            deselect-label
            select-label
            placeholder="Mahalle Seçin"
            label="name"
          />
        </div>

        <div class="ChangeMarket__MarketBul__footer">
          <button
            :disabled="!(neighborhood.id && neighborhood.id > 0)"
            class="btn btn-green"
            :to="`/marketler/${neighborhood.id}`"
            @click="openMarkets"
          >
            MARKET ARA
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import Multiselect from 'vue-multiselect'
import iconMarket from '@/assets/icons/market'
import iconArrowDown from '@/assets/icons/arrow_down'

export default {
  components: {
    iconMarket,
    iconArrowDown,
    Multiselect
  },
  mixins: [clickaway],
  data () {
    return {
      cities: [],
      districts: [],
      neighborhoods: [],
      city: '',
      district: '',
      neighborhood: '',
      isOpenMarketBox: false,
      cityID: '',
      townID: '',
      neighID: '',
      mid: 38752
    }
  },
  watch: {
    $route () {
      this.isOpenMarketBox = false
    },
    city (val) {
      this.$axios(`cities/${val.id}`).then((res) => {
        this.districts = res.data
        console.log(res)
      })
      this.district = ''
      this.neighborhood = ''
      this.neighborhoods = []
    },
    district (val) {
      this.$axios(`districts/${val.id}`).then((res) => {
        this.neighborhoods = res.data
      })
      this.neighborhood = ''
    }
  },
  mounted () {
    this.$axios('cities').then((res) => {
      this.cities = res.data
    })
  },
  methods: {
    openMarkets () {
      this.$router.push(`/marketler/${this.neighborhood.id}`)
    },
    closeChangeMarket () {
      this.isOpenMarketBox = false
    },
    toggleMarketBox () {
      console.log('l;lds')
      this.isOpenMarketBox = !this.isOpenMarketBox
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
  border: 1px solid $primary-color;
  color: $primary-color;
  border-radius: 5px;
  position: relative;

  .selectbox {
    margin-bottom: 1rem;
    padding: 0 2rem;
    width: 100%;
  }

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
    fill: $primary-color;
    margin-right: 1rem;
  }

  .btn__icon--arrow {
    fill: $primary-color;
    margin-left: 1rem;
  }

  &__MarketBul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 0rem;
    padding-bottom: 0rem;
    background-color: #fff;
    z-index: 999999;
    box-shadow: 0px 0px 127px -11px rgba(0, 0, 0, 0.22);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 1.1rem;
    width: 100%;
    border-radius: $radius;
    border-top-left-radius: 0;
    border-top-right-radius: 0;

    &__footer {
      width: 100%;
      margin-top: 1rem;
      border-top: $border;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 2rem;
    }
  }
}

.transformArrow {
  transform: rotate(180deg);
}

@include res(desktop) {
  .Header__search {
    width: 30rem;
    margin-top: 0;
  }
}
</style>
