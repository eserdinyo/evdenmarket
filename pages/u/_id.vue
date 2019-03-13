<template lang="pug">
  .Urun
    .container
      .Urun__detay
        .Urun__detay--img-box
          img.Urun__detay--img(src='https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/10019072/altinkilic-ezine-3-dilim-klasik-peynir-450-g-3926e2.jpg', alt='')
        .Urun__detay--right
          h1.Urun__detay--name {{product.name}}
          .Urun__detay--price {{makeGood(product.price)}} ₺
          .Urun__detay--bottom
            .Urun__detay--quantity
                button(@click="decQuantity") -
                input.Urun__detay--quantity-title(
                    v-model="quantity", 
                    maxlength="3",
                    type="text", 
                    pattern="\d*",
                    value="quantity")
                button(@click="quantity++") +
            a.btn.btn__detay(@click="addCart(product)") Sepete Ekle
</template>

<script>
import _ from "lodash";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      product: "",
      quantity: 1
    };
  },
  head() {
    return {
      title: this.product.name + " | Evden Market",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "loggedUser"])
  },
  methods: {
    makeGood(price) {
      return parseFloat(price).toFixed(2);
    },
    decQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      }
    },
    getProduct() {
      let id = parseInt(this.$route.query.p);
      this.$store.dispatch("getProductWithId", id).then(res => {
        this.product = res;
      });
    },
    addCart(product) {
      product.changeType = "new";
      if (this.isLoggedIn) {
        product.quantity = this.quantity;
        this.$store
          .dispatch("addToCart", {
            product,
            user: this.loggedUser
          })
          .then(res => {
            this.$store.dispatch("getShopcart", this.loggedUser).then(res => {
              this.$swal({
                title: "Sepete Eklendi",
                icon: "success",
                button: "Tamam"
              });
            });
          });
      } else {
        this.$router.push("/login");
      }
    }
  },
  created() {
    this.getProduct();
    console.log(this.product);
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

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
      color: #3f4a58;
      font-size: 1.8rem;
    }

    &--price {
      margin: 1rem auto 0 0;
      font-weight: 700;
      color: $price-color;
      font-size: 2.4rem;
    }
  }
}
</style>

