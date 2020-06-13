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
            placeholder="Markette ürün ara..."
            autocomplete="off"
            @keyup="handleSearch"
            @blur="closeResult"
          >
          <button class="searchbar__search--form-btn" type="submit">Ara</button>

          <div
            v-if="activeResult"
            class="searchbar__result"
            :class="{ activeResult: activeResult }"
          >
            <div v-if="!isLoading">
              <div
                v-for="(product, idx) in products"
                :key="idx"
                class="searchbar__result--item"
              >
                <nuxt-link :to="`/urun/${slugUrl(product.name)}/${product.id}`">
                  {{ product.name }}
                </nuxt-link>
              </div>
              <div class="searchbar__result--bottom">
                <nuxt-link to="/">
                  Tüm Sonuçları Görüntüle
                </nuxt-link>
              </div>
            </div>
            <green-loader :is-loading="isLoading" />
          </div>
        </form>
        <div class="searchbar-market-name">
          {{ market.name.toUpperCase() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      isNavbarOpen: false,
      queryTimer: null,
      products: [],
      isLoading: true
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
    handleSearch () {
      if (this.searchWord.length >= 3) {
        clearTimeout(this.queryTimer)
        this.isLoading = true
        this.queryTimer = setTimeout(() => {
          this.search(this.searchWord)
        }, 300)
      }
    },
    search (word) {
      this.$axios(`search?q=${word}&market_id=${this.market.id}`).then(
        (res) => {
          this.products = res.data
          this.isLoading = false
        }
      )
      this.activeResult = true
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
    display: none;
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
      position: relative;

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
    top: 103%;
    left: -10px;
    width: 101.5%;
    z-index: 99999999;
    background-color: #fff;
    border-radius: $sm-radius;
    padding: 1rem 0;
    box-shadow: $shadow;
    color: $font-color;
    display: none;

    &--item {
      font-size: 1.3rem;
      cursor: pointer;
      transition: all 0.1s;
      padding: 0 1rem;

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
        background-color: rgba($primary-color, 0.1);
      }
    }

    &--bottom {
      border-top: $border;
      font-size: 12px;
      text-align: center;
      padding: 0.5rem;
      padding-top: 1.5rem;

      a:hover {
        text-decoration: underline;
      }
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
    &-market-name {
      display: block;
    }
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
