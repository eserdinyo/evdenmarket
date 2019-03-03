<template lang="pug">
  .Discount
    h1.Discount__title İndirimdeki Ürünler
    .container
      Product(v-for="product in discountProducts",
       :product="product",
       :key="product.id")
      
</template>


<script>
import Product from "./Product";
import { mapGetters } from "vuex";

export default {
  components: {
    Product
  },
  computed: {
    ...mapGetters(["discountProducts"])
  },
  methods: {},
  created() {
     this.$store.dispatch("getDiscountProduct");
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

.Discount {
  padding: 3rem 0;
  &__title {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }
}
</style>