<template lang="pug">
   .MarketDetay
      .MarketDetay__top
        .Market
          Market
        .Slider
          Slider

      h2.MarketDetay__title Marketteki En Cok Satanlar 
      .container
        Product(v-for="product in discountProducts",
        :product="product",
        :key="product.id")

</template>

<script>
import Market from "@/components/Market";
import Slider from "@/components/Slider";
import Product from "@/components/Product";
import SearchBar from "@/components/SearchBar";

export default {
  name: "MarketDetay",
  data() {
      return {
        title: "Ulusoy Market | Evdenmarket"
      }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  components: {
    Market,
    Slider,
    Product,
    SearchBar
  },
  computed: {
    discountProducts() {
      return this.$store.getters.discountProducts;
    }
  },
  created() {
    this.$store.dispatch("getDiscountProduct");
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.MarketDetay {
  &__title {
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;
    color: #1e272e;
  }
  margin-top: 2rem;
  @include res(tab-land) {
    margin-top: 0;
  }

  &__top {
    @include res(tab-land) {
      max-width: 120rem;
      margin: 0 auto;
      padding: 0 1rem;
      display: flex;
      align-items: center;
      margin-bottom: 2rem;
    }
  }
}

.Market {
  @include res(tab-land) {
    margin: 0 auto;
  }
}

.SearchBar {
  margin-top: 4rem;
}
.Slider {
  margin-top: -1rem;
  width: 100%;
}
.container {
  max-width: 120rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 0 1rem;
  margin-top: 3rem;

  @include res(tab) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 0 2rem;
  }
  @include res(tab-land) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    padding: 0 2rem;
  }
}
</style>
