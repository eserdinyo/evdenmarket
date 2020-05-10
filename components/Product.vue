<template>
  <nuxt-link :to="`/urun/${slugUrl(product.name)}`" class="product">
    <img class="product-img" :src="product.image" alt="">
    <div class="product-name">{{ product.name }}</div>
    <div class="product-price">{{ product.price.toFixed(2) }} TL</div>
    <button
      class="btn btn-empty"
      @click.prevent="add"
    >
      <p>SEPETE EKLE</p>
    </button>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      required: true,
      type: Object
    }
  },
  methods: {
    add () {
      if (this.isLoggedIn) {
        this.$store
          .dispatch('cart/add', {
            product: this.product,
            user: this.user
          })
          .then((res) => {
            // sepete eklendi
          })
      } else {
        this.$modal.show('auth-modal')
      }
    }
  }
}
</script>

<style lang="scss">
.product {
  border: $border;
  margin-bottom: 3rem;
  border-radius: $radius;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  transition: 0.1s;
  cursor: pointer;
  transition: all 0.2s;
  box-shadow: 0 4px 8px rgba(238, 238, 238, 0.776);

  &:hover {
    border-color: $primary-color;
  }

  &-img {
    width: auto;
    height: 8rem;
  }
  &-name {
    margin-top: 1rem;
    text-align: center;
    margin-bottom: auto;
    font-size: 1.4rem;
    height: 25px;
  }

  &-price {
    font-weight: 700;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .btn-empty {
    margin-top: 2rem;
  }
}
</style>
