<template>
  <div class="Cart" :class="{ emptyCart: itemCount == 0 }">
    <div class="Cart__header">
      <p v-if="true" class="Cart__header--info">
        Sepetinizede ({{ itemCount }}) ürün bulunmaktadır.
      </p>
      <a
        v-if="true"
        class="btn_sepet"
        @click="toggleCart"
      >Sepete Git</a>
    </div>
    <div class="Cart__bottom" :class="{ emptyCartBottom: itemCount == 0 }">
      <div v-if="false" class="Cart__empty">
        <p>Sepetiniz Boş</p>
      </div>
      <div v-for="(product, idx) in shopcart" :key="idx" class="Cart__item">
        <img class="Cart__item--image" :src="product.image">
        <p class="Cart__item--name">{{ product.name }}</p>
        <div class="Cart__item--quantity">
          <button @click="changeQuantity(product, 'dec')">-</button>
          <div class="Cart__item--quantity-title">{{ product.quantity }}</div>
          <button @click="changeQuantity(product, 'inc')">+</button>
        </div>
        <p class="Cart__item--price">
          {{ (product.price * product.quantity).toFixed(2) }} TL
        </p>
        <a class="Cart__item--delete" @click="deleteProduct(product)">
          <iconDelete />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import iconDelete from '@/assets/icons/delete'

export default {
  computed: {
    ...mapGetters({
      shopcart: 'cart/shopcart',
      itemCount: 'cart/itemCount'
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

      if (this.isLoggedIn) {
        this.$store
          .dispatch('addToCart', {
            product,
            user: this.loggedUser
          })
          .then((res) => {
            this.$store
              .dispatch('getShopcart', this.loggedUser)
              .then((res) => {})
          })
      } else {
        this.$router.push('/login')
      }
    }
  },
  components: {
    iconDelete
  }
}
</script>

<style lang="scss" scoped>
.Cart {
  display: none;
}

@include res(desktop) {
  .Cart {
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

      &--image {
        width: 15%;
      }

      &--name {
        font-size: 1.1rem;
        margin-left: 1rem;
        margin-right: 2rem;
        width: 20rem;
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
        margin-right: 1rem;
        font-size: 1.3rem;
        text-align: right;
        font-weight: 700;
        width: 9rem;
      }
    }
  }
}

.btn__icon--delete {
  fill: #aaa;
  cursor: pointer;
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
.Cart__bottom::-webkit-scrollbar-track {
  border-radius: 10px;
}

.Cart__bottom::-webkit-scrollbar {
  width: 8px;
  background-color: #fff;
}

.Cart__bottom::-webkit-scrollbar-thumb {
  border-radius: 5px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: $primary-color;
}
</style>
