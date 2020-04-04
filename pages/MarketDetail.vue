<template lang="pug">
   .wrapper
      v-wait(for="market")
        template(slot="waiting")
            Loader
        DesktopCategory
        .MarketDetay
          .Market
            Market(:market="market")
            SearchBar
          .MarketDetay__top
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
import ChangeMarket from "@/components/ChangeMarket";
import DesktopCategory from "@/components/DesktopCategory";
import Loader from "@/components/Loader";

import axios from "axios";

import { mapGetters } from "vuex";

export default {
  name: "MarketDetay",
  data() {
    return {
      title: "Marketler - Evdenmarket"
    };
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
    SearchBar,
    ChangeMarket,
    DesktopCategory,
    Loader
  },
  computed: {
    discountProducts() {
      return this.$store.getters.discountProducts;
    },
    ...mapGetters(["market"])
  },
  methods: {
    getMarket() {
      const market_id = this.$route.params.id;
      this.$wait.start("market");

      this.$store.dispatch("getMarket", market_id).then(res => {
        (this.title = this.market.market_adi + " - Evdenmarket"),
          this.$wait.end("market");
      });
    }
  },
  created() {
    this.getMarket();
    this.$store.dispatch("getDiscountProduct");
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.Market {
  margin-left: 5px;
  margin-right: 5px;

  @include res(tab-land) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.MarketDetay {
  @include res(tab-land) {
    display: grid;
    grid-template-columns: 30% 70%;
  }
  &__title {
    text-align: center;
    text-transform: uppercase;
    margin-top: 0rem;
    color: #1e272e;
    margin-top: 4rem;
  }
  margin-top: 2rem;

  &__top {
    margin-top: 3rem;
    @include res(tab-land) {
      max-width: 120rem;
      margin: 1.5rem auto;
      padding: 0 1rem;
      margin-bottom: 2rem;
    }
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
  margin: 3rem auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
  grid-row-gap: 2rem;
  padding: 0 1rem;

  @include res(tab) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 0 2rem;
  }
  @include res(tab-land) {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
    padding: 0 2rem;
  }
  @include res(big) {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
