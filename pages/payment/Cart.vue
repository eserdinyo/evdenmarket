<template>
  <div class="Cart">
    <div class="container">
      <div v-if="true" class="Cart__top">
        <p class="Cart__top--title">
          Sepetiniz<span class="Cart__top--item_count">({{ count }} ürün)</span>
        </p>
      </div>
      <div v-if="count != 0" class="Cart__content">
        <div class="Cart__middle">
          <div v-for="(item, idx) in items" :key="idx" class="Cart__item">
            <div class="Cart__item--image-wrapper">
              <img
                class="Cart__item--image"
                :src="item.marketproduct.product.image"
              >
            </div>
            <div class="Cart__item--left">
              <nuxt-link
                class="Cart__item--name"
                :to="`/urun/${slugUrl(item.marketproduct.product.name)}`"
              >
                {{ item.marketproduct.product.name }}
              </nuxt-link>
              <p class="Cart__item--price">
                {{ (item.marketproduct.price * item.quantity).toFixed(2) }} ₺
              </p>
            </div>
            <product-counter :product="item" />
          </div>
        </div>
        <div v-if="count != 0" class="Cart__bottom">
          <div class="Cart__bottom--sepet">
            <p class="Cart__bottom--sepet-title">Toplam</p>
            <p class="Cart__bottom--sepet-price">{{ total }} ₺</p>
          </div>
          <nuxt-link class="btn btn-green" to="/siparis">
            Sepeti Onayla
          </nuxt-link>
        </div>
      </div>
      <div v-if="count == 0" class="Cart__empty">
        <p class="Cart__empty--title">Sepetinizte ürün bulunmamaktadır.</p>
        <nuxt-link class="btn btn-green" to="/">
          Alışvere Devam Et
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProductCounter from '@/components/ProductCounter'

export default {
  layout: 'cart-layout',
  components: {
    ProductCounter
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      count: 'cart/count',
      total: 'cart/total'
    })
  },
  methods: {
    deleteProduct (product) {
      this.$store
        .dispatch('deleteFromShopcart', { product, user: this.loggedUser })
        .then((res) => {
          this.$store.dispatch('getShopcart', this.loggedUser)
        })
    },
    changeQuantity (product, changeType) {
      product.id = product.productid
      product.changeType = changeType

      this.$store
        .dispatch('addToCart', {
          product,
          user: this.loggedUser
        })
        .then((res) => {
          this.$store.dispatch('getShopcart', this.loggedUser).then((res) => {})
        })
    }
  },
  head () {
    return {
      title: 'Sepetim | Evdenmarket',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.Cart {
  margin-top: 4rem;

  &__content {
    padding-top: 1rem;
  }

  &__top {
    &--title {
      font-size: 1.8rem;
      font-weight: 500;
      border-bottom: $border;
      padding-bottom: 1rem;
    }

    &--item_count {
      font-size: 1.2rem;
      margin-left: 1rem;
      font-weight: 400;
    }
  }

  &__bottom {
    box-shadow: 0 -4px 8px #00000029;
    border-top: $border;
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9;
    background-color: #fff;

    .btn-green {
      font-size: 1.4rem;
      width: 16rem;
      font-weight: bold;
    }

    &--sepet {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      color: $font-color;
      font-size: 2rem;
      display: flex;
      flex-direction: column;
      &-title {
        font-size: 14px;
        margin-bottom: 5px;
      }
      &-price {
        font-weight: 500;
        color: $primary-color;
        font-size: 2.2rem;
        font-weight: bold;
      }
    }

    &--btn {
      margin-top: 1rem;
      background: $primary-color;
      padding: 1rem 2rem;
      color: #fff;
      border-radius: 5px;
      text-align: center;
      font-size: 2rem;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        background-color: $primary-color-hover;
      }
      @include res(tab-land) {
        font-size: 1.4rem;
        padding: 0.5rem 1rem;
        margin-top: auto;
      }
    }
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    padding: 0 3rem;

    &--title {
      margin-top: 5rem;
      text-align: center;
      font-size: 1.4rem;
      margin-bottom: 2rem;
      color: $font-color;
    }
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 1rem;

    &:not(:last-child) {
      border-bottom: $border;
    }

    &--left {
      text-align: left;
      padding-left: 1rem;
    }

    &--image {
      height: 7rem;
      width: auto;
      &-wrapper {
        width: 7rem;
        height: 7rem;
        text-align: center;
      }
    }

    &--name {
      font-size: 1.2rem;
      margin-bottom: 1rem;
      display: inline-block;
    }
    &--quantity {
      font-size: 1.2rem;
      margin-left: auto;
      margin-right: 1rem;
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
      font-size: 1.4rem;
      color: $primary-color;
      font-weight: bold;
    }

    &--delete {
      margin-left: 2rem;
    }
  }
}

</style>
