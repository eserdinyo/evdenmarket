<template>
  <nuxt-link
    :to="`/urun/${slugUrl(product.name)}`"
    class="product"
    :class="{ product_category: isCategory }"
  >
    <img class="product-img" :src="product.image" alt="" />
    <div>
      <div class="product-name">{{ product.name }}</div>
      <div class="product-price">{{ product.price.toFixed(2) }} TL</div>
      <button class="btn btn-empty" @click.prevent="add">
        <p>SEPETE EKLE</p>
      </button>
    </div>
  </nuxt-link>
</template>

<script>

export default {
  props: {
    product: {
      required: true,
      type: Object
    },
    isCategory: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    add () {
      if (this.isLoggedIn) {
        this.$store
          .dispatch('cart/add', {
            marketproduct_id: this.product.id,
            quantity: 2
          })
          .then((res) => {
            this.alert('SEPETE EKLENDİ', 'Ürününüz sepetinize eklendi. Ödeme işlemi için sepetinize giderbilirsiniz', 'success')
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
    text-align: center;
  }

  .btn-empty {
    margin: 0 auto;
    margin-top: 2rem;
  }

  &_category {
    padding: 1rem;
    box-shadow: none;
    margin: 1rem;
    text-align: center;

    .btn-empty {
      font-size: 12px;
      margin-top: 1rem;
    }
    .product-price {
      margin-top: .5rem;
    }
    .icon {
      fill: $primary-color;
      height: auto;
      width: 25px;
    }
  }
}
</style>
