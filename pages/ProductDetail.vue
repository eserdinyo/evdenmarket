<template>
  <div class="Urun">
    <v-wait for="detay">
      <template slot="waiting">
        <Loader />
      </template>
      <div class="container">
        <div class="Urun__detay">
          <div class="Urun__detay--img-box">
            <img
              class="Urun__detay--img"
              :src="product.image"
              :alt="product.name"
            />
          </div>
          <div class="Urun__detay--right d-flex">
            <div>
              <h1 class="Urun__detay--name">{{ product.name }}</h1>
              <div class="Urun__detay--price">
                240 ₺
              </div>
              <div class="Urun__detay--barkod">Barkod: 4654185441132</div>
            </div>
            <div class="Urun__detay--bottom">
              <button
                v-if="true"
                class="btn btn-empty"
                :disabled="isLoading"
                @click.prevent="add"
              >
                <span v-if="!isLoading">SEPETE EKLE</span>
                <loading :is-loading="isLoading" />
              </button>
              <product-counter v-else :product="product" />
            </div>
          </div>
        </div>
      </div>
    </v-wait>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Swal from 'sweetalert2'
import Loader from '@/components/Loader'

export default {
  layout: 'cart-layout',
  components: {
    Loader
  },
  data() {
    return {
      product: '',
      quantity: 1,
      title: 'Evdenmarket - Market Sana Gelsin',
      product: {
        image:
          'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/05089453/05089453-3af53a.png',
        name: 'Doritos Extreme Mısır Cips',
        quantity: 2,
        price: 5.75,
        id: 2
      }
    }
  },
  methods: {
    makeGood(price) {
      return parseFloat(price).toFixed(2)
    },
    decQuantity() {
      if (this.quantity > 1) {
        this.quantity--
      }
    },
    addCart(product) {
      product.changeType = 'new'
      if (this.isLoggedIn) {
        product.quantity = this.quantity
        this.$store
          .dispatch('addToCart', {
            product,
            user: this.loggedUser
          })
          .then((res) => {
            this.$store.dispatch('getShopcart', this.loggedUser).then((res) => {
              Swal({
                title: 'Sepete Eklendi',
                icon: 'success',
                button: 'Tamam'
              })
            })
          })
      } else {
        this.$router.push('/giris')
      }
    }
  },
  head() {
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

<style lang="scss" scoped>
@import 'assets/style/main.scss';

.container {
  max-width: 96rem;
  margin: 0 auto;
  padding: 0 2rem;
}

.Urun {
  margin-top: 1rem;

  @include res(tab) {
    margin-top: 10rem;
  }

  &__detay {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;

    @include res(tab) {
      flex-direction: row;
      align-items: flex-start;
      justify-content: center;
      margin-top: 5rem;
    }
    &--bottom {
      display: flex;
      align-items: center;
      margin-top: 1rem;
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

    &--img {
      border: 1px solid rgba($font-color, 0.1);
      margin-bottom: 2rem;
      width: 100%;
      margin-top: 2rem;
      box-shadow: 0 3px 6px #e5e5e570;

      @include res(tab) {
        &-box {
          width: 50%;

          @include res(tab-land) {
            width: 35%;
          }
        }

        max-width: 100%;
        border: 1px solid rgba($font-color, 0.1);
        border-radius: 5px;
        padding: 1rem 2rem;
        margin: 0rem 3rem 0rem 0rem;
      }
    }

    &--desc {
      margin-top: 2rem;
      @include res(tab-land) {
        margin-top: 10rem;
      }
      &-title {
        background-color: $primary-color;
        color: #fff;
        text-align: center;
        padding: 0.5rem;
        font-weight: 400;
        border-radius: 3px;
        margin-bottom: 1rem;
        @include res(tab-land) {
          background-color: #fff;
          color: $price-color;
          text-align: left;
          padding-bottom: 2rem;
          position: relative;
          border-bottom: 1px solid #d9d9d9;
          border-radius: 0;
        }
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
      @include res(tab-land) {
        font-size: 1.4rem;
      }
    }

    &--right {
      margin-right: auto;
      @include res(tab) {
        margin-left: 3rem;
      }
    }

    &--name {
      font-weight: 700;
      color: $grey-color;
      font-size: 1.8rem;
    }

    &--price {
      margin: 1rem auto 0 0;
      font-weight: 700;
      color: $primary-color;
      font-size: 2.4rem;
    }

    &--barkod {
      color: #3f4a58;
      font-size: 1.4rem;
    }
  }
}
</style>
