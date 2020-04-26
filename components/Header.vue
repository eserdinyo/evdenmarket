<template>
  <div class="Header">
    <div class="container">
      <div
        :class="{ active_ham: isNavbarOpen }"
        class="ham-wrapper"
        @click="toggleNav"
      >
        <div class="ham" />
      </div>
      <nuxt-link class="Header__link" to="/">
        <!--img.Header__logo(src='@/assets/images/logov2.png', alt='')-->
        <p>evdenmarket</p>
      </nuxt-link>
      <div class="Header__login">
        <div class="mobil-login-btn" @click="goPath">
          <i class="icon fa fa-sign-in" />
        </div>
        <button class="btn btn-green desktop-login" @click="openAuthModal">
          <span>Giriş</span>
          <i class="ml-3 fa fa-sign-in" />
        </button>
        <a
          v-if="isLoggedIn"
          class="Header__login--desktop Header__login--desktop-profil"
          @click="toggleProfil"
        >
          <iconUser
            class="Header__login--desktop Header__login--desktop-profil--profil--icon"
          />
          <div
            class="Header__login--desktop Header__login--desktop-profil--name"
          >
            {{ getName }}
          </div>
          <iconArrowDown
            v-if="!isProfilOpen"
            class="Header__login--desktop Header__login--desktop-profil--icon"
          />
          <iconArrowUp
            v-if="isProfilOpen"
            class="Header__login--desktop Header__login--desktop-profil--icon"
          />
          <div
            v-if="isProfilOpen"
            v-on-clickaway="closeProfil"
            class="Profil-card"
          >
            <nuxt-link class="Profil-card--link" to="/siparislerim"
              >Siparişlerim</nuxt-link
            >
            <nuxt-link class="Profil-card--link" to="/"
              >Üyelik Bilgilerim</nuxt-link
            >
            <nuxt-link class="Profil-card--link" to="/"
              >Kampanyalarım</nuxt-link
            >
            <nuxt-link class="Profil-card--link" to="/adreslerim"
              >Adreslerim</nuxt-link
            >
            <nuxt-link class="Profil-card--link" to="/">Çeklerim</nuxt-link>
            <nuxt-link class="Profil-card--link" to="/">Puanlarım</nuxt-link>
            <a class="Profil-card--link" @click="logout">Çıkış Yap</a>
          </div>
        </a>
      </div>
      <div v-if="isLoggedIn" class="Header__cart">
        <div class="iconMobil" @click="goCart">
          <iconCart />
        </div>
        <div class="iconCart" @click="toggleCart">
          <iconCart />
          <iconArrowUp v-if="isCartOpen" />
          <iconArrowDown v-if="!isCartOpen" />
        </div>
        <div class="Header__amount" @click="goCart">{{ itemCount }}</div>
        <div
          v-if="isLoggedIn &amp;&amp; itemCount &gt; 0"
          class="Header__price"
        >
          <p>{{ totalPrice.toFixed(2) }} ₺</p>
        </div>
        <AppCart v-if="isCartOpen" v-on-clickaway="closeCart" />
      </div>
      <ChangeMarket />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import AppCart from './Cart'
import SearchBar from './SearchBar'
import ChangeMarket from './ChangeMarket'
import iconMenu from '@/assets/icons/menu'
import iconClose from '@/assets/icons/close'
import iconCart from '@/assets/icons/cart'
import iconUser from '@/assets/icons/user'
import iconArrowUp from '@/assets/icons/arrow_up'
import iconArrowDown from '@/assets/icons/arrow_down'

export default {
  name: 'Header',
  components: {
    iconMenu,
    iconClose,
    iconCart,
    iconUser,
    iconArrowUp,
    iconArrowDown,
    AppCart,
    SearchBar,
    ChangeMarket
  },
  mixins: [clickaway],
  data() {
    return {
      isOpen: true,
      isClose: false,
      isProfilOpen: false,
      isNavbarOpen: false
    }
  },
  computed: {
    ...mapGetters([
      'itemCount',
      'totalPrice',
      'isCartOpen',
      'isLoggedIn',
      'loggedUser',
      'activeLogin',
      'activeRegister'
    ]),
    getName() {
      if (this.loggedUser.given_name || this.loggedUser.name) {
        if (this.loggedUser.given_name) {
          return this.loggedUser.given_name
        } else {
          return this.loggedUser.name.split(' ')[0]
        }
      }
    }
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch('getShopcart', this.loggedUser)
    }
  },
  methods: {
    toggleNav() {
      console.log('dsds')
      this.isNavbarOpen = !this.isNavbarOpen
    },
    openAuthModal() {
      this.$modal.show('auth-modal')
    },
    closeCart() {
      this.$store.commit('toggleCart', false)
    },
    closeProfil() {
      this.isProfilOpen = false
    },
    goPath() {
      this.isLoggedIn
        ? this.$router.push({ name: 'hesabim' })
        : this.$router.push({ name: 'giris' })
    },
    toggleCart() {
      this.$store.commit('toggleCart', true)
    },
    toggleProfil() {
      this.isProfilOpen = !this.isProfilOpen
    },
    goCart() {
      this.$router.push({ name: 'sepetim' })
    },
    logout() {
      this.$auth.logout().then((res) => {
        this.$router.push('/')
      })
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';
.container {
  max-width: 120rem;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;
}

.Header {
  width: 100%;
  height: 14rem;
  border-bottom: $border;

  .desktop-login {
    display: none;
  }

  .mobil-login-btn {
    .icon {
      color: $primary-color;
      font-size: 3rem;
      margin-right: 10px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #2980b9;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .ham-wrapper {
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .ham {
    width: 20px;
    height: 4px;
    background-color: $primary-color;
    border-radius: 2px;
    position: relative;
    transition: all 0.2s;
  }

  .ham:after,
  .ham:before {
    content: '';
    height: 4px;
    width: 30px;
    border-radius: 2px;
    background-color: $primary-color;
    position: absolute;
    left: 0;
    transition: all 0.2s;
  }

  .ham:after {
    top: -10px;
  }

  .ham:before {
    top: 10px;
  }

  .active_ham {
    .ham {
      background: transparent;
    }
  }
  .active_ham {
    .ham:after {
      transform: rotate(135deg);
      top: 0;
    }
  }

  .active_ham {
    .ham:before {
      transform: rotate(45deg);
      top: 0;
    }
  }
  &__price {
    color: #333;
    position: absolute;
    z-index: 0;
    padding: 0.3rem 1.2rem;
    background-color: #333;
    border-radius: 3px;
    color: #fff;
    top: 6%;
    right: -50%;
    width: max-content;
    font-weight: 700;
    font-size: 1.4rem;
    user-select: none;
    margin-top: 2.5rem;

    @include res(tab-land) {
      margin-top: 0;
      border-radius: 5rem;
      font-size: 1.4rem;
      font-weight: 500;
      top: 50%;
      transform: translateY(-50%);
      right: 82%;
    }
  }
  &__cart {
    position: relative;
    margin-left: 0.5rem;
    z-index: 1;
    cursor: pointer;
    @include res(tab) {
      order: 3;
    }

    @include res(tab-land) {
      background-color: #333;
      border-radius: 5rem;
      padding: 0.3rem 2rem 0.4rem 2rem;
      margin-left: 15rem;
      &--item_count {
        border-radius: 50%;
        display: block;
        background-color: $primary-color;
        height: 2rem;
        width: 2rem;
        display: flex;
        justify-content: center;
        z-index: 2;
        align-items: center;
        color: #fff;
        font-size: 1.2rem;
        position: absolute;
        top: -1rem;
        right: -1rem;
      }
    }
  }
  &__amount {
    position: absolute;
    right: -1rem;
    top: -1rem;
    background: $primary-color;
    height: 2.2rem;
    width: 2.2rem;
    color: #fff;
    border-radius: 5rem;
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
  }

  &__link {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: 'Open Sans', sans-serif;
    font-size: 2.4rem;
    color: $primary-color;

    @include res(tab) {
      margin-right: auto;
      margin-left: 0;
    }
    @include res(tab-land) {
      margin-left: 0;
      text-align: left;
    }
  }

  &__logo {
    user-select: none;
    width: 100%;
    @include res(tab) {
      width: 30%;
    }
  }

  &__login {
    margin-left: 2rem;
    margin-right: 1rem;
    user-select: none;
    width: 1.5rem;
    padding: 1rem;
    padding-top: 1.5rem;

    &--box {
      @include res(tab-land) {
        color: $primary-color;
        display: flex;
      }
    }

    @include res(tab) {
      order: 3;
    }

    @include res(tab-land) {
      width: 12rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 2rem;
    }

    &--desktop {
      display: none;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
      &-profil {
        border-radius: 3px;
        border: 1px solid $primary-color;
        padding: 0.5rem 1rem;
        color: $primary-color;
        position: relative;

        &--profil--icon {
          fill: $primary-color !important;
          height: 15px !important;
        }

        &--icon {
          fill: $primary-color !important;
        }

        &--name {
          margin-left: 10px;
        }
      }
      &-login {
        padding: 0 1rem;
        transition: all 0.2s;
        position: relative;
        &:hover {
          color: $primary-color-dark;
        }
      }
      &-register {
        padding: 0 1rem;
        transition: all 0.2s;
        position: relative;

        &:hover {
          color: $primary-color-dark;
        }
      }
      @include res(tab-land) {
        display: flex;
        align-items: center;
      }
    }

    &--mobil {
      @include res(tab-land) {
        display: none;
      }
    }
  }
}

.iconMobil {
  @include res(tab-land) {
    display: none;
  }
}

.iconCart {
  display: none;
  padding: 1px;
  @include res(tab-land) {
    display: unset;
    display: flex;
    align-items: center;
  }
}

.btn {
  position: relative;
  z-index: 11;
  cursor: pointer;
  outline: none;

  &__icon {
    height: 2.3rem;
    width: 2.3rem;
    &--menu {
      fill: #000;
    }

    &--close {
      fill: #fff;
    }
    &--cart {
      fill: #333;
      @include res(tab-land) {
        fill: #fff;
        width: 15px;
        height: 15px;
      }
    }
    &--user {
      fill: #333;
    }
    &--arrow {
      fill: #fff;
      margin-left: 1rem;
      display: none;
      @include res(tab-land) {
        display: unset;
      }
    }
  }
}

.active {
  color: $primary-color-dark;
  &::after {
    content: '';
    height: 2px;
    width: 12px;
    background: $primary-color;
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
  }
}

@include res(desktop) {
  .container {
    justify-content: space-between;
    padding: 0;
  }
  .desktop-login {
    display: flex !important;
    min-width: 8rem;
  }
  .ham-wrapper, .mobil-login-btn {
    display: none !important;
  }
  .Header__login {
    padding: 0;
    margin: 0;
    order: 1;
    width: auto;
  }
  .Header__link {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }
}
</style>
