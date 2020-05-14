<template>
  <div class="product-counter">
    <button v-if="product.quantity > 1" @click.prevent="updateQuantity('dec')">
      <icon-minus />
    </button>
    <button v-else class="remove" @click.prevent="remove">
      <icon-trash />
    </button>
    <span>{{ product.quantity }}</span>
    <button @click.prevent="updateQuantity('inc')">
      <icon-plus />
    </button>
  </div>
</template>

<script>
import { iconMinus, iconPlus, iconTrash } from '@/components/icons'

export default {
  name: 'ProductCounter',
  components: {
    iconMinus,
    iconPlus,
    iconTrash
  },
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    updateQuantity(type) {
      this.$store.dispatch('cart/update', {
        type,
        id: this.product.id
      })
    },
    remove(type) {
      this.$store.dispatch('cart/delete', {
        id: this.product.id
      })
    }
  }
}
</script>

<style lang="scss">
.product-counter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid $primary-color;
  padding: 4px 2rem;
  border-radius: $radius * 2;
  transition: all 0.2s;
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
    border-radius: $sm-radius;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
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

.CartBox, .Cart {
  .product-counter {
    padding: 2px 1rem;
    margin-top: 0rem;
    margin-left: auto;

    span {
      padding: 2px 8px;
      border-radius: $sm-radius;
      margin: 0 5px;
      font-size: 12px;
    }

    .icon {
      height: 12px;
    }
  }
}
</style>
