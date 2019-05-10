<template lang="pug">
  .Cart(:class="{emptyCart: itemCount == 0}")
    .Cart__header
      p.Cart__header--info(v-if="itemCount > 0") Sepetinizede ({{itemCount}}) ürün bulunmaktadır.
      a.btn_sepet(v-if="itemCount > 0", @click="toggleCart") Sepete Git
    .Cart__bottom(:class="{emptyCartBottom: itemCount == 0}")
      .Cart__empty(v-if="itemCount == 0")
        p Sepetiniz Boş
      .Cart__item(v-for="(product,index) in shopcart")
        img.Cart__item--image(:src="product.image")
        p.Cart__item--name {{product.name}}
        .Cart__item--quantity
          button(@click="changeQuantity(product, 'dec')") -
          .Cart__item--quantity-title {{product.quantity}} 
          button(@click="changeQuantity(product, 'inc')") +
        p.Cart__item--price {{(product.price * product.quantity).toFixed(2)}} TL
        a.Cart__item--delete(@click="deleteProduct(product)")
          iconDelete
</template>

<script>
import iconDelete from "@/assets/icons/delete";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "items",
      "itemCount",
      "shopcart",
      "loggedUser",
      "isLoggedIn"
    ])
  },
  methods: {
    deleteProduct(product) {
      this.$store
        .dispatch("deleteFromShopcart", { product, user: this.loggedUser })
        .then(res => {
          this.$store.dispatch("getShopcart", this.loggedUser);
        });
    },
    toggleCart() {
      this.$store.commit("toggleCart");
      this.$router.push({ name: "sepetim" });
    },
    changeQuantity(product, changeType) {
      product.id = product.productid;
      product.changeType = changeType;

      if (this.isLoggedIn) {
        this.$store
          .dispatch("addToCart", {
            product,
            user: this.loggedUser
          })
          .then(res => {
            this.$store
              .dispatch("getShopcart", this.loggedUser)
              .then(res => {});
          });
      } else {
        this.$router.push("/login");
      }
    }
  },
  components: {
    iconDelete
  }
};
</script>


<style lang="scss" scoped>
@import "assets/style/main.scss";

.Cart {
  display: none;
  @include res(tab-land) {
    user-select: none;
    display: unset;
    position: absolute;
    width: 42rem;
    background: #fff;
    color: #333;
    top: 150%;
    right: 2%;
    border-radius: 5px;
    border: 1px solid #e5e5e5;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
    padding-bottom: 2rem;
    padding-top: 2rem;
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
        content: "";
        width: 0;
        height: 0;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid $primary-color;
        position: absolute;
        right: 0%;
        top: 0%;
        transform: translate(-50%, -100%);
        z-index: -1;
      }

      &--info {
        font-size: 1.2rem;
      }
    }

    &__bottom {
      overflow-y: scroll;
      margin-top: 1rem;
      height: 20rem;
    }

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
    background: $primary-color-hover;
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
