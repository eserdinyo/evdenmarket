<template lang="pug">
  .Discount__item
    nuxt-link(:to="{ name: 'u-id', params: { id:productUrl(product)}, query: { p: product.id }}")
      img.Discount__item--img(:src="product.image", alt='')
    .Discount__item--name {{product.name}}
    .Discount__item--price {{product.price.toFixed(2)}} TL
    a.btn(@click="addCart(product)") Sepete Ekle
</template>
<script>
import { mapGetters } from "vuex";
export default {
  props: ["product"],
  computed: {
    ...mapGetters(["isLoggedIn", "loggedUser"]),
    productUrl() {
      return product =>
        `${this.turkishtoEnglish(
          product.name.toLowerCase().replace(/\s+/g, "-")
        )}`;
    }
  },
  methods: {
    addCart(product, changeType) {
      product.changeType = "inc";
      if (this.isLoggedIn) {
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
    },
    turkishtoEnglish(str) {
      return str
        .replace(/\ğ+/g, "g")
        .replace(/\ü+/g, "u")
        .replace(/\ş+/g, "s")
        .replace(/\ı+/g, "i")
        .replace(/\ö+/g, "o")
        .replace(/\ç+/g, "c");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.Discount {
  padding: 3rem 0;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 3px;
    padding: 1rem;
    transition: 0.1s;
    cursor: pointer;
    border: 1px solid rgba(204, 204, 204, 0.2);

    &:hover {
      border: 1px solid rgba(204, 204, 204, 0.6);
    }

    &--img {
      width: auto;
      height: 8rem;
    }

    &--name {
      margin-top: 1rem;
      text-align: center;
      margin-bottom: auto;
      font-size: 1.4rem;
    }

    &--price {
      font-weight: 700;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
}
</style>

