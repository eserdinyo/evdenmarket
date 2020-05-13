<template>
  <nuxt-link
    :to="`/urun/${slugUrl(product.name)}`"
    class="product"
    :class="{ product_category: isCategory }"
  >
    <img class="product-img" :src="product.image" alt="">
    <div>
      <div class="product-name">{{ product.name }}</div>
      <div class="product-price">{{ product.price.toFixed(2) }} TL</div>
      <button
        v-if="!cartProduct"
        class="btn btn-empty"
        :disabled="isLoading"
        @click.prevent="add"
      >
        <span v-if="!isLoading">SEPETE EKLE</span>
        <loading :is-loading="isLoading" />
      </button>
      <div v-else class="product-counter">
        <button v-if="cartProduct.quantity > 1" @click.prevent="updateQuantity('dec')">
          <icon-minus />
        </button>
        <button v-else class="remove" @click.prevent="remove">
          <icon-trash />
        </button>
        <span>{{ cartProduct.quantity }}</span>
        <button @click.prevent="updateQuantity('inc')">
          <icon-plus />
        </button>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
import { mapGetters } from 'vuex'
import { iconMinus, iconPlus, iconTrash } from '@/components/icons'

export default {
  components: {
    iconMinus,
    iconPlus,
    iconTrash
  },
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
  data () {
    return {
      isLoading: false
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items'
    }),
    cartProduct () {
      const product = this.items.find(item => item.marketproduct_id === this.product.marketproduct_id)
      return product
    }
  },
  methods: {
    add () {
      if (this.isLoggedIn) {
        this.isLoading = true

        this.$store
          .dispatch('cart/add', {
            marketproduct_id: this.product.marketproduct_id,
            quantity: 1
          })
          .then((res) => {
            this.alert(
              'SEPETE EKLENDİ',
              'Ürününüz sepetinize eklendi. Ödeme işlemi için sepetinize giderbilirsiniz',
              'success'
            )
            this.isLoading = false
          }).catch(() => {
            this.isLoading = false
            this.alert(
              'HATA',
              'Sepete eklerken bir hata ile oluştu.',
              'error'
            )
          })
      } else {
        this.$modal.show('auth-modal')
      }
    },
    updateQuantity (type) {
      this.$store.dispatch('cart/update', {
        type,
        id: this.cartProduct.id
      })
    },
    remove (type) {
      this.$store.dispatch('cart/delete', {
        id: this.cartProduct.id
      })
    }
  }
}
</script>

<style lang="scss">
.product {
  border: $border;
  margin-bottom: 1rem;
  border-radius: $radius;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
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
    height: 50px;
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
    width: 138px;
    height: 36px;
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
      margin-top: 0.5rem;
    }
    .icon {
      fill: $primary-color;
      height: auto;
      width: 25px;
    }
  }

  &-counter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid $primary-color;
    padding: 4px 2rem;
    border-radius: $radius * 2;
    transition: all .2s;
    margin-top: 2rem;

    .remove {
      .icon {
        fill: $red-color;
      }
    }

    span {
      background-color: $primary-color;
      color: #fff;
      padding: 2px 1.5rem;
      border-radius: $sm-radius
    }

    button {
      display:flex;
      justify-content:center;
      align-items:center;
      cursor: pointer;
      outline: 0;
      background-color: transparent;
    }

    .btn-green {
      height: auto;
      background-color: transparent;
    }
    input {
      background-color: $primary-color;
      color: #fff;
      font-size: 1.4rem;
    }
    .icon {
      height: 18px;
      fill: $primary-color;
    }
  }
}

@include res(desktop) {
  .product {
    padding: 2rem;

    &_category {
      padding: 1rem 2rem;
    }

    &-name {
      height: 25px;
    }
  }
}
</style>
