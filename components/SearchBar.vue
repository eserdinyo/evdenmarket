<template>
  <div class="searchbar">
    <div class="container">
      <div class="searchbar-wrapper">
        <div class="searchbar-title">
          <ham-menu
            color="#fff"
            :is-navbar-open="isNavbarOpen"
            @click.native="openNav"
          />
          <span>Tüm Kategoriler</span>
        </div>
        <form class="searchbar__search--form">
          <icon-search />
          <input
            v-model="searchWord"
            class="searchbar__search--form-input"
            type="text"
            name="firstname"
            placeholder="Markette ürün ara..."
            autocomplete="off"
            @keyup="searchProducts"
            @blur="closeResult"
          >
          <button class="searchbar__search--form-btn" type="submit">Ara</button>
        </form>
        <div class="searchbar-market-name">
          {{ market.name.toUpperCase() }}
        </div>
      </div>
      <div
        v-if="false"
        class="Searchbar__result"
        :class="{ activeResult: activeResult }"
      >
        <div
          v-for="product in 5"
          class="Searchbar__result--item"
        >
          <nuxt-link
            :to="{
              name: 'u-id',
              params: { id: slugUrl(product.name) },
              query: { p: product.id }
            }"
          >
            {{ product.name }}
          </nuxt-link>
        </div>
        <div class="Searchbar__result--bottom">
          <nuxt-link :to="{ name: 'arama', query: { q: searchWord } }">
            Tum Sonuclari Goruntule
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { setTimeout } from 'timers'
import { mapGetters } from 'vuex'
import { iconSearch } from './icons'
import HamMenu from './HamMenu'

export default {
  name: 'SearchBar',
  components: {
    iconSearch,
    HamMenu
  },
  props: {
    market: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      searchWord: '',
      activeResult: false,
      isNavbarOpen: false
    }
  },
  watch: {
    $route () {
      this.activeResult = false
      this.searchWord = ''
    }
  },
  beforeDestroy () {
    this.$nuxt.$off('open-navbar')
  },
  methods: {
    openNav () {
      this.$nuxt.$emit('open-navbar')
      this.isNavbarOpen = !this.isNavbarOpen
    },
    searchProducts () {
      if (this.searchWord.length >= 3) {
        this.activeResult = true
        this.$store.dispatch('getProductsForSeachbar', this.searchWord)
      } else {
        this.activeResult = false
      }
    },
    closeResult () {
      setTimeout(() => {
        this.activeResult = false
      }, 100)
    }
  }
}
</script>

<style lang="scss" scoped>
.searchbar {
  position: relative;
  background-color: $grey-color;
  padding: 1.2rem 0;

  &-market-name {
    color: #fff;
    font-weight: bold;
    margin: 0 auto;
    font-size: 20px;
  }

  &-wrapper {
    display: flex;
    align-items: center;
  }

  &-title {
    color: #fff;
    display: flex;
    align-items: center;
    margin-right: 3rem;

    span {
      margin-left: 2rem;
      display: none;
    }
  }
  &__search {
    &--form {
      display: flex;
      justify-content: center;
      align-items: center;

      .icon {
        fill: $primary-color;
        height: 20px;
        margin-right: -30px;
        z-index: 1;
        position: relative;
      }

      &-input {
        padding: 1.5rem 2rem;
        padding-left: 4rem;
        border-right: none;
        border-radius: 0;
        border-top-left-radius: $sm-radius;
        border-bottom-left-radius: $sm-radius;
        font-size: 1.4rem;
        outline: none;
        width: 100%;
        color: $font-color;
        transition: 0.2s;

        &::placeholder {
          color: $font-color-gray;
        }

        &:focus {
          border: 1px solid $primary-color;
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
        min-width: 8rem;
        align-self: stretch;
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

@include res(desktop) {
  .searchbar {
    &-title {
      margin-right: 5rem;
      min-width: 19rem;
      padding: 0 1.5rem;
      span {
        display: block !important;
      }
    }

    &__search {
      &--form {
        width: 50%;
      }
    }
  }
}
</style>
