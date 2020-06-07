<template>
  <div class="CartBox" :class="{ emptyCart: count == 0 }">
    <div class="CartBox__header">
      <p v-if="count > 0" class="CartBox__header--info">
        Sepetinizede ({{ count }}) ürün bulunmaktadır.
      </p>
      <nuxt-link v-if="count > 0" to="/sepetim" class="btn_sepet">
        Sepete Git
      </nuxt-link>
    </div>
    <div class="CartBox__bottom" :class="{ emptyCartBottom: count == 0 }">
      <div v-if="count == 0" class="CartBox__empty">
        <p>Sepetiniz Boş</p>
      </div>
      <div v-for="(item, idx) in items" :key="idx" class="CartBox__item">
        <img
          class="CartBox__item--image"
          :src="item.marketproduct.product.image"
        />
        <div class="CartBox__item--left">
          <p class="CartBox__item--name">{{ item.marketproduct.product.name }}</p>
          <p class="CartBox__item--price">
            {{ item.marketproduct.price }} ₺
          </p>
        </div>
        <product-counter :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCounter from '@/components/ProductCounter'

export default {
  components: {
    ProductCounter
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      count: 'cart/count'
    })
  },
  methods: {
    deleteProduct(product) {
      this.$store
        .dispatch('deleteFromShopcart', { product, user: this.user })
        .then((res) => {
          this.$store.dispatch('getShopcart', this.user)
        })
    },
    changeQuantity(product, changeType) {
      product.id = product.productid
      product.changeType = changeType

      if (this.isLoggedIn) {
        this.$store
          .dispatch('addToCart', {
            product,
            user: this.user
          })
          .then((res) => {
            this.$store.dispatch('getShopcart', this.user).then((res) => {})
          })
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="scss">
.CartBox {
  display: none;
}

@include res(desktop) {
  .CartBox {
    user-select: none;
    display: none;
    position: absolute;
    width: 42rem;
    background: #fff;
    color: $font-color;
    top: 100%;
    right: 0;
    border-radius: $radius;
    border: $border;
    box-shadow: $shadow;
    padding-top: 2rem;
    margin-top: 2rem;
    margin-right: -1rem;
    z-index: 99999999;

    &__empty {
      font-size: 1.4rem;
      text-align: center;
    }

    &__header {
      display: flex;
      justify-content: space-between;
      padding: 0 2rem;

      &::before {
        content: '';
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid $primary-color;
        position: absolute;
        right: 40px;
        top: 0%;
        transform: translate(-50%, -100%);
        z-index: -1;
      }

      &--info {
        font-size: 1.2rem;
        color: #6c7a89;
      }
    }

    &__bottom {
      overflow-y: scroll;
      margin-top: 1rem;
      height: 18rem;
    }

    &__item {
      display: flex;
      align-items: center;
      padding: 1.5rem 1rem;
      margin-left: 10px;

      &:not(:last-child) {
        border-bottom: $border;
      }

      &--left {
        padding-left: 1rem;
      }

      &--image {
        width: 15%;
      }

      &--name {
        font-size: 1.1rem;
        width: 20rem;
        margin-bottom: 5px;
      }
      &--quantity {
        font-size: 1.3rem;
        margin-left: auto;
        margin-right: 2rem;
        display: flex;
        align-items: center;
        border: 1px solid $primary-color;
        border-radius: 3px;
        background-color: $primary-color;

        &-title {
          text-align: center;
          background-color: #fff;
          padding: 0.3rem 0.8rem;
        }

        button {
          padding: 0.3rem 0.5rem;
          background: none;
          color: #fff;
          cursor: pointer;
          outline: none;
        }
      }
      &--price {
        font-size: 1.3rem;
        font-weight: 700;
        color: $primary-color;
      }
    }
  }
}

.btn_sepet {
  color: $primary-color;
  padding: 0.5rem 1rem;
  border-radius: 3px;
  font-size: 1.2rem;
  transition: all 0.2s;
  border: 1px solid $primary-color;
  cursor: pointer;

  &:hover {
    color: #fff;
    background: $primary-color;
  }
}

.emptyCart {
  width: 30rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}
.emptyCartBottom {
  height: 3rem;
}

//SCROLLBAR
.CartBox__bottom::-webkit-scrollbar-track {
  border-radius: 10px;
}

.CartBox__bottom::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}

.CartBox__bottom::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $primary-color;
}
</style>
