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
            label="label"
          />
        </div>
        <div class="selectbox">
          <multiselect
            v-model="city"
            :options="cities"
            :multiple="false"
            :close-on-select="true"
            :hide-selected="true"
            :preserve-search="true"
            selected-label
            disabled="true"
            deselect-label
            select-label
            placeholder="İlçe Seçin"
            label="label"
          />
        </div>
        <div class="selectbox">
          <multiselect
            v-model="city"
            :options="cities"
            :multiple="false"
            :close-on-select="true"
            :hide-selected="true"
            disabled="true"
            :preserve-search="true"
            selected-label
            deselect-label
            select-label
            placeholder="Mahalle Seçin"
            label="label"
          />
        </div>

        <div class="ChangeMarket__MarketBul__footer">
          <nuxt-link
            class="btn btn-green"
            :to="{ name: 'marketler', query: { mid } }"
          >
            MARKET ARA
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  data() {
    return {
      cities: [
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        },
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        },
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        },
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        }
      ],
      city: '',
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
