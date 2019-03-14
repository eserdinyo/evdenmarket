<template lang="pug">
    .List
      v-wait(for="urunler")
        template(slot="waiting")
          Loader
        .container
          Product(v-for="product in searchedProducts",
          :product="product",
          :key="product.id")
</template>

<script>
import Product from "@/components/Product";
import Loader from "@/components/Loader";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "Evdenmarket"
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
    Product,
    Loader
  },
  computed: {
    ...mapGetters(["searchedProducts"])
  },
  methods: {
    async getProducts() {
      const searchWord = this.$route.query.q;
      this.title = `${searchWord} - Evdenmarket`;

      this.$wait.start("urunler");
      await this.$store.dispatch("getProductsWithSearch", searchWord);
      this.$wait.end("urunler");
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.container {
  max-width: 120rem;
  margin: 1rem auto;
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
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1rem;
    padding: 0 2rem;
  }
}
</style>
