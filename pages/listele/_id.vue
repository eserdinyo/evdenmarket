<template lang="pug">
    .List
      Category
      .container
        Product(v-for="product in products",
       :product="product",
       :key="product.id")

      
</template>

<script>
import Category from "@/components/Category";
import Product from "@/components/Product";

import { mapGetters } from "vuex";
export default {
  components: {
    Category,
    Product
  },
  computed: {
    ...mapGetters(["products"])
  },
  created() {
    const cid = this.$route.params.id;
    this.$store.dispatch("getProductsWithCategory", cid);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.container {
  max-width: 120rem;
  margin: 0 auto;
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
