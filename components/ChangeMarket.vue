<template lang="pug">
    .ChangeMarket
      .container
        iconMarket
        .ChangeMarket__title(@click="toggleMarketBox")
          p Nurmar Market
          iconArrowDown(:class="{ transformArrow: isOpenMarketBox }")
      .ChangeMarket__MarketBul(v-if="isOpenMarketBox")
        select(v-model="cityID", @change="getTowns")
          option(disabled, value='') Şehir Seçin
          option(v-for="city in cities", 
            :key="city.id", 
            :value="city.CityID") {{city.CityName}}

        select(v-model="townID", @change="getNeighborhood")
          option(disabled, selected, value='') İlçe Seçin
          option(v-for="town in towns", 
            :key="town.id", 
            :value="town.TownID") {{town.TownName}}

        select(v-model="neighID")
          option(disabled,selected, value='') Mahalle Seçin
          option(v-for="dr in districts", 
            :value="dr", 
            :key="dr.id") {{dr.NeighborhoodName}}
        nuxt-link.ChangeMarket__MarketBul--btn(:to="{ name: 'marketler',  query: { mid: 38752 }}") Market Bul
</template>

<script>
import iconMarket from "@/assets/icons/market";
import iconArrowDown from "@/assets/icons/arrow_down";

import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isOpenMarketBox: false,
      cityID: "",
      townID: "",
      neighID: ""
    };
  },
  components: {
    iconMarket,
    iconArrowDown
  },
  computed: {
    ...mapGetters(["cities", "towns", "districts"])
  },
  methods: {
    toggleMarketBox() {
      this.isOpenMarketBox = !this.isOpenMarketBox;
    },
    getTowns() {
      this.$store.dispatch("getTowns", this.cityID);
    },
    getNeighborhood() {
      this.$store.dispatch("getNeighborhoods", this.townID);
    }
  },
  mounted() {
    this.$store.dispatch("getCities");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.ChangeMarket {
  background-color: $primary-color-2;

  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }

  &__title {
    color: #fff;
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
    fill: #fff;
    margin-right: 1rem;
  }

  .btn__icon--arrow {
    fill: #fff;
    margin-left: 1rem;
  }

  &__MarketBul {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    background-color: #ddd;
    position: absolute;
    z-index: 999999;
    width: 100%;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.562);

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
  }
}

.transformArrow {
  transform: rotate(180deg);
}
</style>
