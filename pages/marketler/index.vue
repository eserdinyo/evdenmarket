<template lang="pug">
  .Marketler
    //.Slider
      Slider
    .container
      Market(v-for="market in markets", 
            :key="market.id", 
            :market='market')
   

</template>

<script>
import Slider from "@/components/Slider";
import Market from "@/components/Market";
import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: "Marketler - Evdenmarket",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["markets"])
  },
  components: {
    Slider,
    Market
  },
  created() {
    const mahalleID = this.$route.query.mid;

    this.$store.dispatch("getMarkets", mahalleID);
  }
};
</script>


<style lang="scss" scoped>
@import "assets/style/main.scss";

.container {
  margin-left: 15px;
  margin-right: 15px;
  margin-top: 3rem;
  @include res(tab-land) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-column-gap: 2rem;
    width: 96rem;
    margin-top: 5rem;
    margin-left: auto;
    margin-right: auto;
  }
}

.Marketler {
  @include res(tab-land) {
    margin-top: 0rem;
  }
}

.Slider {
  @include res(tab-land) {
    margin-top: 5rem;
    width: 120rem;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>

