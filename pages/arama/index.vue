<template lang="pug">
    .List
      ChangeMarket
      Category
      .container
        Product(v-for="product in searchedProducts",
       :product="product",
       :key="product.id")
</template>

<script>
import Category from "@/components/Category";
import Product from "@/components/Product";
import ChangeMarket from "@/components/ChangeMarket";


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
    Category,
    Product,
    ChangeMarket
  },
  computed: {
    ...mapGetters(["searchedProducts"])
  },
  created() {
    const searchWord = this.$route.query.q;
    this.title = `${searchWord} - Evdenmarket`
    this.$store.dispatch("getProductsWithSearch", searchWord);
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
