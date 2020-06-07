<template>
  <div class="Urun">
    <div class="container">
      <div class="Urun__detay">
        <div class="Urun__detay--img-box">
          <img
            class="Urun__detay--img"
            :src="product.image"
            :alt="product.name"
          >
        </div>
        <div class="Urun__detay--right">
          <div>
            <h1 class="Urun__detay--name">{{ product.name }}</h1>
          </div>
          <div class="Urun__detay--bottom">
            <div class="Urun__detay--price">{{ product.price }} TL</div>
            <div>
              <button
                v-if="!cartProduct"
                class="btn btn-green"
                :disabled="isLoading"
                @click="add"
              >
                <span v-if="!isLoading">SEPETE EKLE</span>
                <loading :is-loading="isLoading" />
              </button>
              <product-counter v-else :product="cartProduct" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'cart-layout',
  async asyncData ({ $axios, params }) {
    try {
      const product = await $axios(`/market-products/${params.id}`)
      return { product: product.data }
    } catch (err) {
      return { markets: [] }
    }
  },
  data () {
    return {
      quantity: 1,
      isLoading: false,
      title: 'Evdenmarket - Market Sana Gelsin'
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items'
    }),
    cartProduct () {
      const product = this.items.find(
        item => item.marketproduct_id === this.product.id
      )
      
      return product
    }
  },
  methods: {
    add () {
      if (this.isLoggedIn) {
        this.isLoading = true
        this.$store
          .dispatch('cart/add', {
            marketproduct_id: this.product.id,
            quantity: 1
          })
          .then((res) => {
            this.isLoading = false
          })
          .catch((err) => {
            this.isLoading = false
            this.alert('Hata', err.response.data.message, 'error')
          })
      } else {
        this.$modal.show('auth-modal')
      }
    }
  },
  head () {
    return {
      title: this.title,
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

<style lang="scss">
.Urun {
  margin-top: 1rem;

  &__detay {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10rem;

    .product-counter {
      margin-top: 0;
      border-radius: 4px;
      padding: 10px 2.4rem;
      width: auto;

      span {
        margin: 0 1rem;
      }
    }

    &--bottom {
      box-shadow: 0 -4px 8px #00000029;
      border-top: $border;
      padding: 0 2rem;
      height: 80px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 9;
      background-color: #fff;
    }

    &--quantity {
      font-size: 1.5rem;
      display: flex;
      align-items: center;
      border: 1px solid $primary-color;
      border-radius: 3px;
      background-color: $primary-color;
      margin-right: 1rem;

      &-title {
        text-align: center;
        padding: 1.1rem 0rem;
        color: #191919;
        width: 3rem;
        outline: none;
        border: none;
      }

      button {
        padding: 1.1rem 0.5rem;
        background: none;
        color: #fff;
        cursor: pointer;
        outline: none;
        font-weight: 700;
      }
    }

    &--img-box {
      border: $border-2;
      border-radius: $sm-radius;
      margin-bottom: 2rem;
      margin-top: 2rem;
      padding: 10px;
      width: 100%;
      text-align: center;
    }

    &--img {
      height: 240px;
    }

    &--desc {
      margin-top: 2rem;
      &-title {
        background-color: $primary-color;
        color: #fff;
        text-align: center;
        padding: 0.5rem;
        font-weight: 400;
        border-radius: 3px;
        margin-bottom: 1rem;
      }

      &-bottom {
        margin-top: 1rem;
        color: $urun-marka-color;
        font-size: 1.3rem;
      }
    }

    &--marka {
      color: $urun-marka-color;
      font-weight: 700;
      margin-top: 1rem;
      margin-right: auto;
    }

    &--right {
      margin-right: auto;
    }

    &--name {
      font-weight: 500;
      color: $grey-color;
      font-size: 16px;
    }

    &--price {
      font-weight: 700;
      color: $primary-color;
      font-size: 2.4rem;
    }
  }
}

@include res(desktop) {
  .Urun {
    &__detay {
      display: grid;
      grid-template-columns: 40% 60%;
      margin-top: 7rem;
      &--img-box {
        width: 360px;
        height: 320px;
        img {
          height: 100%;
        }
      }

      &--right {
        margin-bottom: auto;
      }

      &--price {
        margin-bottom: 2rem;
        font-size: 30px;
      }

      .btn {
        width: 280px;
      }

      &--name {
        margin-top: 3rem;
        margin-bottom: 5rem;
        font-size: 3rem;
      }
      &--bottom {
        position: static;
        box-shadow: none;
        border-top: none;
        flex-direction: column;
        align-items: flex-start;
        padding: 0;
      }
    }
  }
}
</style>
