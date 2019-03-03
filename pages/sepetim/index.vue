<template lang="pug">
  .Sepet
    .container
      .Sepet__top(v-if="itemCount !=0")
        p.Sepet__top--title Sepetiniz
          span.Sepet__top--item_count ({{itemCount}} ürün)
      .Sepet__content(v-if="itemCount !=0")  
        .Sepet__middle
          .Cart__item(v-for="(product,index) in shopcart")
            img.Cart__item--image(:src="product.image")
            p.Cart__item--name
              nuxt-link(:to="{ name: 'u-id', params: { id:productUrl(product)}, query: { p: product.productid }}") {{product.name}}
            .Cart__item--quantity
              button(@click="changeQuantity(product, 'dec')")  -
              .Cart__item--quantity-title {{product.quantity}} 
              button(@click="changeQuantity(product, 'inc')") +
            p.Cart__item--price {{(product.price * product.quantity).toFixed(2)}} ₺
            a.Cart__item--delete(@click="deleteProduct(product)")
              iconDelete
        .Sepet__bottom(v-if="itemCount !=0")
          .Sepet__bottom--toplam
            .Sepet__bottom--toplam--title Toplam Tutar
            .Sepet__bottom--toplam--price {{totalPrice.toFixed(2)}} ₺
          .Sepet__bottom--hizmet
            .Sepet__bottom--hizmet--title Hizmet Bedeli
            .Sepet__bottom--hizmet--price
              p.Sepet__bottom--hizmet--price-top 3.50 ₺
              p.Sepet__bottom--hizmet--price-bottom 0.00 ₺
          .Sepet__bottom--sepet
            p.Sepet__bottom--sepet-title Sepet Toplamı
            p.Sepet__bottom--sepet-price {{totalPrice.toFixed(2)}} ₺
          nuxt-link.Sepet__bottom--btn(to='/siparis') Sepeti Onayla
      transition(name="slide" mode="out-in")
        .Sepet__empty(v-if="itemCount == 0")
          p.Sepet__empty--title Sepetinizte ürün bulunmamaktadır.
          router-link.Sepet__bottom--btn(to="/") Alışvere Devam Et
          


</template>

<script>
import iconDelete from "@/assets/icons/delete";

import { mapGetters } from "vuex";

export default {
  middleware: "auth",
  head() {
    return {
      title: "Sepetim | Evdenmarket",
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
    ...mapGetters([
      "itemCount",
      "totalPrice",
      "shopcart",
      "loggedUser",
      "isLoggedIn"
    ]),
    productUrl() {
      return product =>
        `${this.turkishtoEnglish(
          product.name.toLowerCase().replace(/\s+/g, "-")
        )}`;
    }
  },
  methods: {
    deleteProduct(product) {
      this.$store
        .dispatch("deleteFromShopcart", { product, user: this.loggedUser })
        .then(res => {
          this.$store.dispatch("getShopcart", this.loggedUser);
        });
    },
    changeQuantity(product, changeType) {
      product.id = product.productid;
      product.changeType = changeType;

      this.$store
        .dispatch("addToCart", {
          product,
          user: this.loggedUser
        })
        .then(res => {
          this.$store.dispatch("getShopcart", this.loggedUser).then(res => {});
        });
    },
    turkishtoEnglish(str) {
      return str
        .replace(/\ğ+/g, "g")
        .replace(/\ü+/g, "u")
        .replace(/\ş+/g, "s")
        .replace(/\ı+/g, "i")
        .replace(/\ö+/g, "o")
        .replace(/\ç+/g, "c");
    },
   
  },
  components: {
    iconDelete
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  margin-left: 15px;
  margin-right: 15px;
  @include res(tab-land) {
    max-width: 96rem;
    margin: 0 auto;
  }
}

.Cart {
  &__item {
    display: flex;
    align-items: center;
    padding-bottom: 1rem;
    padding-top: 1rem;
    padding-left: 0.5rem;
    padding-right: 1rem;

    &:not(:last-child) {
      border-bottom: 1px solid #f0f0f0;
    }

    &--image {
      width: 20%;
      @include res(tab-land) {
        width: 10%;
      }
    }

    &--name {
      font-size: 1.2rem;
      margin-left: 1rem;
      margin-right: 1rem;
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
      margin-left: 1rem;
      font-size: 1.4rem;
      text-align: center;
      color: $font-color;
      width: 6rem;
      font-weight: 500;
    }

    &--delete {
      margin-left: 2rem;
    }
  }
}

.Sepet {
  margin-top: 4rem;

  @include res(tab-land) {
    margin-top: 10rem;
  }

  &__top {
    &--title {
      font-size: 1.8rem;
      font-weight: 500;
    }

    &--item_count {
      font-size: 1.2rem;
      margin-left: 1rem;
      font-weight: 400;
    }
  }

  &__middle {
    @include res(tab-land) {
      width: 60%;
      margin-top: 2rem;
    }
  }

  &__bottom {
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
    padding: 2rem 2rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 5rem;
    margin-bottom: 3rem;
    @include res(tab-land) {
      width: 30rem;
      margin: 0;
      margin-left: 2rem;
      height: 22rem;
    }
    &--toplam,
    &--hizmet,
    &--sepet {
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      color: $font-color;
    }
    &--hizmet {
      margin-bottom: 2rem;
      font-size: 1.3rem;
      color: $font-color;

      &--price {
        &-top {
          text-decoration: line-through;
        }

        &-bottom {
          text-align: right;
          text-decoration: none !important;
          font-size: 1.1rem;
        }
      }
    }
    &--sepet {
      border-top: 1px solid rgba($font-color, 0.2);
      padding-top: 1rem;
      font-size: 2rem;
      &-price {
        font-weight: 500;
        color: $primary-color-hover;
        font-size: 2.2rem;
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

  &__content {
    @include res(tab-land) {
      display: flex;
      justify-content: space-between;
    }
  }

  &__empty {
    display: flex;
    flex-direction: column;
    align-items: center;

    &--title {
      margin-top: 5rem;
      text-align: center;
      font-size: 2rem;
      margin-bottom: 2rem;
      color: $font-color;
    }
  }
}

.btn__icon--delete {
  fill: #aaa;
  cursor: pointer;
}
</style>
