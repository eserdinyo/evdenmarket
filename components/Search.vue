<template lang="pug">
  section.Search
    .container
      .Search__box
        select(v-model="cityID", @change="getTowns")
          option(disabled, value='Şehir Seçin') Şehir Seçin
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
        nuxt-link.Search__btn(:to="{ name: 'marketler',  query: { mid: 38752 }}") Ara
    img.Search__img(src='@/assets/images/hero.jpg', alt='')
    
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      cityID: "",
      townID: "",
      neighID: ""
    };
  },
  computed: {
    ...mapGetters(["cities", "towns", "districts"])
  },
  methods: {
    getTowns() {
      this.$store.dispatch("getTowns", this.cityID);
    },
    getNeighborhood() {
      this.$store.dispatch("getNeighborhoods", this.townID);
    }
  },
  created() {
    this.$store.dispatch("getCities");
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.Search {
  position: relative;
  height: 50vh;
  overflow: hidden;

  @include res(tab) {
    height: 40vh;
  }

  @include res(tab-land) {
    height: 55vh;
  }

  @include res(big) {
    height: 55vh;
  }

  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.7)
  );

  &__title {
    color: #ddd;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    user-select: none;
    margin-top: 2rem;
    @include res(tab) {
      font-size: 3rem;
      margin-top: 5rem;
    }
    @include res(tab-land) {
      font-size: 2rem;
      margin-top: 4rem;
    }
    @include res(big) {
      font-size: 3rem;
    }
  }

  &__box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @include res(tab) {
      top: 50%;
    }
    @include res(tab-land) {
      top: 60%;
    }

    @include res(big) {
      top: 60%;
    }

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
      border: none;
      background: #fff;

      @include res(tab-land) {
        width: 30rem;
        margin-bottom: 2rem;
      }
      @include res(big) {
        width: 40rem;
      }
    }
  }

  &__btn {
    background-color: $primary-color;
    color: #fff;
    padding: 0.8rem 2rem;
    width: 8rem;
    text-align: center;
  }

  &__img {
    width: 100%;
    position: absolute;
    top: 0%;
    height: 100vh;
    z-index: -1;
    object-fit: cover;
  }
}
</style>

