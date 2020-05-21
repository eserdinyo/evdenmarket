<template>
  <div>
    <div class="Header-banner">
      <div class="container">
        <p>
          Şimdi online alışveriş vakti. Siz de sanal marketinizi açmak için
          <nuxt-link to="/bilgilendirme">tıklayın.</nuxt-link>
        </p>
      </div>
    </div>
    <div class="Header">
      <div class="container">
        <div class="profile-icon" @click="goAccount">
          <icon-user />
        </div>
        <nuxt-link class="Header__link" to="/">
          <p>evdenmarket</p>
        </nuxt-link>
        <div class="Header__login">
          <div v-if="false" class="mobil-login-btn" @click="openAuthModal">
            <i class="icon fa fa-sign-in" />
          </div>
          <button
            v-if="!isLoggedIn"
            class="desktop-login"
            @click="openAuthModal"
          >
            <span>GİRİŞ YAP</span>
          </button>
          <button
            v-else
            class="desktop-profil"
            @mouseenter="isProfilOpen = true"
            @mouseleave="isProfilOpen = false"
          >
            <icon-user />
            <span>{{ user.first_name }} {{ user.last_name }}</span>
            <profil-menu class="profil-card-active" />
          </button>
          <div class="Header__cart">
            <div v-if="$device.isMobile" class="iconMobil" @click="goCart">
              <icon-shop-cart />
            </div>
            <div
              v-if="$device.isMobile && isLoggedIn"
              class="Header__amount"
              @click="goCart"
            >
              {{ count }}
            </div>
            <nuxt-link
              v-if="isLoggedIn"
              class="btn btn-green btn-desktop-cart"
              to="/sepetim"
              tag="button"
            >
              <span>SEPETİM</span>
              <icon-shop-cart />
              <div class="Header__amount" @click="goCart">{{ count }}</div>
            </nuxt-link>
            <app-cart class="cart-box-active" />
          </div>
        </div>
        <change-market />
        <auth-modal />
        <suggest-market-modal />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mixin as clickaway } from 'vue-clickaway'
import { iconShopCart, iconUser } from '../components/icons'
import AppCart from './CartBox'
import ChangeMarket from './ChangeMarket'
import ProfilMenu from './ProfilMenu'
import 'swiper/css/swiper.min.css'
import AuthModal from '@/components/modals/AuthModal'
import SuggestMarketModal from '@/components/modals/SuggestMarketModal'

export default {
  name: 'Header',
  components: {
    AppCart,
    ChangeMarket,
    iconShopCart,
    ProfilMenu,
    iconUser,
    AuthModal,
    SuggestMarketModal
  },
  mixins: [clickaway],
  data () {
    return {
      isOpen: true,
      isClose: false,
      isProfilOpen: false,
      isNavbarOpen: false
    }
  },
  computed: {
    ...mapGetters({
      count: 'cart/count'
    })
  },
  created () {
    this.init()
  },
  methods: {
    openAuthModal () {
      this.$modal.show('auth-modal')
    },
    goAccount () {
      if (this.isLoggedIn) {
        this.$router.push('/hesabim')
      } else {
        this.$modal.show('auth-modal')
      }
    },
    goCart () {
      if (this.isLoggedIn) {
        this.$router.push('/sepetim')
      } else {
        this.$modal.show('auth-modal')
      }
    },
    init () {
      if (this.isLoggedIn) {
        this.$store.dispatch('cart/fetch')
      }
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
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
  height: 13rem;
  border-bottom: $border;
  padding-top: 1rem;

  &-banner {
    background-color: $primary-color;
    height: 60px;
    color: #fff;
    font-weight: 500;
    font-size: 14px;

    a {
      text-decoration: underline;
    }
  }

  .desktop-login,
  .desktop-profil,
  .btn-desktop-cart {
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

  .profile-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 5px;
    padding-top: 3px;
    .icon {
      fill: $font-color;
      height: 23px;
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
  }
  &__cart {
    position: relative;
    z-index: 1;
    cursor: pointer;
    padding-top: 5px;
    padding-right: 5px;

    .icon {
      fill: $font-color;
      height: auto;
      width: 25px;
    }
  }
  &__amount {
    position: absolute;
    right: -4px;
    top: -4px;
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
    padding-top: 2px;
  }

  &__link {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.8rem;
    color: $primary-color;
    font-family: 'Righteous', cursive;
    user-select: none;
  }

  &__logo {
    user-select: none;
    width: 100%;
  }

  &__login {
    user-select: none;

    &--desktop {
      display: none;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
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
    }
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
  }
  .btn-desktop-cart {
    display: flex !important;
    align-items: center;
    height: 40px;

    &:hover {
      background-color: $primary-color;
    }

    span {
      font-weight: 600;
      margin-right: 10px;
      padding-bottom: 2px;
    }
    .icon {
      fill: #fff;
      height: 20px;
    }

    .Header__amount {
      background-color: #fff;
      top: 0;
      right: 0;
      color: $grey-color;
      font-weight: 600;
      height: 2rem;
      width: 2rem;
      top: 2px;
      right: 10px;
    }
  }
  .desktop-login,
  .desktop-profil {
    display: block !important;
    min-width: 8rem;
    color: $primary-color;
    cursor: pointer;
    outline: 0;
    font-weight: 600;
    font-size: 14px;
    transition: all 0.2s;
    margin-right: 1rem;
    padding-top: 3px;
    background: transparerent;
    position: relative;

    &::after {
      display: block;
      content: '';
      border-bottom: solid 2px $primary-color;
      transform: scaleX(0);
      transition: transform 0.2s ease-in-out;
      transform-origin: 0% 50%;
      margin-top: 3px;
    }

    &:hover:after {
      transform: scaleX(1);
    }
  }

  .desktop-profil {
    position: relative;
    padding-top: 0;
    display: flex !important;
    align-items: center;
    border: $border-2;
    border-radius: $sm-radius;
    padding: 0 1.5rem;

    &::after {
      display: none;
    }

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -15px;
      height: 25px;
      width: 100%;
    }

    &:hover {
      .profil-card-active {
        display: flex;
      }
    }

    .icon {
      height: 14px;
      fill: $primary-color;
      margin-right: 1rem;
    }
  }
  .ham-wrapper,
  .mobil-login-btn,
  .profile-icon {
    display: none !important;
  }
  .Header {
    height: 10rem;

    &-banner {
      font-size: 16px;
    }
    &__login {
      padding: 0;
      margin: 0;
      order: 1;
      width: auto;
      display: flex;
    }

    &__link {
      text-align: left;
      margin-left: 0;
      margin-right: 0;
    }

    &__cart {
      position: relative;
      padding: 0;
      margin-left: 5px;

      &::after {
        content: '';
        height: 20px;
        width: 100%;
        position: absolute;
        bottom: -20px;
        right: 0;
      }

      &:hover {
        .cart-box-active {
          display: block;
        }
      }
    }
  }
}
</style>
