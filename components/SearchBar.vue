<template lang="pug">
  .Searchbar
    form.Searchbar__search--form
      input.Searchbar__search--form-input(type='text', 
        @keyup='searchProducts',
        v-model='searchWord',
        name='firstname',
        @blur="closeResult",
        placeholder="Aradığını ürünü yazınız...", 
        autocomplete="off")
      button.Searchbar__search--form-btn(type='submit') Ara
    .Searchbar__result(:class='{activeResult:activeResult}', v-if='searchbarProducts')
      .Searchbar__result--item(v-for='product in searchbarProducts')
        nuxt-link(:to="{ name: 'u-id', params: { id:productUrl(product)}, query: { p: product.id }}")  {{ product.name }}
      .Searchbar__result--bottom
        nuxt-link(:to="{ name: 'arama', query: { q: searchWord }}") Tum Sonuclari Goruntule


      
</template>

<script>
import { mapGetters } from "vuex";
import { setTimeout } from "timers";

export default {
  name: "SearchBar",
  data() {
    return {
      searchWord: "",
      activeResult: false
    };
  },
  computed: {
    ...mapGetters(["searchbarProducts"]),
    productUrl() {
      return product =>
        `${this.turkishtoEnglish(
          product.name.toLowerCase().replace(/\s+/g, "-")
        )}`;
    }
  },
  methods: {
    searchProducts() {
      if (this.searchWord.length >= 3) {
        this.activeResult = true;
        this.$store.dispatch("getProductsForSeachbar", this.searchWord);
      } else {
        this.activeResult = false;
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
    },
    closeResult() {
      setTimeout(() => {
        this.activeResult = false;
      }, 100);
    }
  },
  watch: {
    $route() {
      this.activeResult = false;
      this.searchWord = "";
    }
  }
};
</script>


<style lang="scss" scoped>
@import "assets/style/main.scss";

.Searchbar {
  position: relative;
  &__search {
    margin-top: 1rem;

    @include res(tab) {
      margin-left: 1rem;
      margin-right: auto;
    }

    &--form {
      display: flex;
      justify-content: center;

      &-input {
        padding: 0.5rem 2rem;
        border: 1px solid #ddd;
        border-right: none;
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        font-size: 1.4rem;
        outline: none;
        width: 25rem;
        color: $font-color;
        transition: 0.2s;

        &::placeholder {
          color: $font-color-gray;
        }

        &:focus {
          border: 1px solid $primary-color;
        }

        @include res(tab) {
          width: 30rem;
          padding: 0.8rem 2rem;
          font-size: 1.2rem;
        }
        @include res(tab-land) {
          width: 38rem;
        }
      }

      &-btn {
        background: $primary-color;
        color: #fff;
        padding: 0 1rem;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        border-left: none;
        cursor: pointer;
      }
    }
  }

  &__result {
    position: absolute;
    top: 110%;
    width: 100%;
    z-index: 99999999;
    background-color: #fff;
    border-radius: 5px;
    padding: 1rem 0;
    box-shadow: $shadow;
    color: $font-color;
    display: none;

    &--item {
      font-size: 1.3rem;
      cursor: pointer;

      a {
        display: inline-block;
        width: 100%;
        height: 100%;
        padding: 1rem;
      }

      @include res(tab) {
        font-size: 1.2rem;
      }

      &:hover {
        background-color: rgba($primary-color, 0.2);
      }
    }

    &--bottom {
      border-top: 1px solid rgba(204, 204, 204, 0.589);
      font-size: 1.2rem;
      text-align: center;
      padding-top: 1rem;
    }
  }

  .activeResult {
    display: unset;
  }
}

.Searchbar__search--form
  .Searchbar__search--form-input:focus
  .Searchbar__result {
  background-color: red;
}
</style>
