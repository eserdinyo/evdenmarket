<template lang="pug">
  header.Header
    .container
      button.btn.btn__close(type='button', @click='toggleNav')
        iconMenu(v-if='isOpen')
        iconClose(v-if='isClose')
      nuxt-link.Header__link(to='/')
        //img.Header__logo(src='@/assets/images/logov2.png', alt='')
        p evdenmarket
      .Header__login
        .Header__login--mobil(@click="goPath")
          iconUser
        .Header__login--box(v-if="!isLoggedIn")
          nuxt-link.Header__login--desktop.Header__login--desktop-login(:to='{name:"giris"}', :class="{active: activeLogin}")  Giriş
          nuxt-link.Header__login--desktop.Header__login--desktop-register(:to='{name:"kayit"}', :class="{active: activeRegister}") Kayıt&nbsp;Ol
        a.Header__login--desktop.Header__login--desktop-profil(v-if="isLoggedIn", @click="toggleProfil")
          iconUser.Header__login--desktop.Header__login--desktop-profil--profil--icon
          .Header__login--desktop.Header__login--desktop-profil--name {{ getName }}
          iconArrowDown.Header__login--desktop.Header__login--desktop-profil--icon(v-if="!isProfilOpen")
          iconArrowUp.Header__login--desktop.Header__login--desktop-profil--icon(v-if="isProfilOpen")

          .Profil-card(v-if="isProfilOpen", v-on-clickaway="closeProfil")
            nuxt-link.Profil-card--link(to='/siparislerim') Siparişlerim
            nuxt-link.Profil-card--link(to='/') Üyelik Bilgilerim
            nuxt-link.Profil-card--link(to='/') Kampanyalarım
            nuxt-link.Profil-card--link(to='/adreslerim') Adreslerim
            nuxt-link.Profil-card--link(to='/') Çeklerim
            nuxt-link.Profil-card--link(to='/') Puanlarım
            a.Profil-card--link(@click="logout") Çıkış Yap

        
      .Header__cart(v-if="isLoggedIn")
        .iconMobil(@click="goCart")
          iconCart
        .iconCart(@click="toggleCart")
          iconCart
          iconArrowUp(v-if="isCartOpen")
          iconArrowDown(v-if="!isCartOpen")
        .Header__amount(@click="goCart") {{ itemCount }}
        .Header__price(v-if='isLoggedIn && itemCount > 0')
          p {{totalPrice.toFixed(2)}} ₺
        AppCart(v-if="isCartOpen", v-on-clickaway="closeCart")
      
      .Header__search
        ChangeMarket  
</template>

<script>
import iconMenu from "@/assets/icons/menu";
import iconClose from "@/assets/icons/close";
import iconCart from "@/assets/icons/cart";
import iconUser from "@/assets/icons/user";
import iconArrowUp from "@/assets/icons/arrow_up";
import iconArrowDown from "@/assets/icons/arrow_down";

import AppCart from "./Cart";
import SearchBar from "./SearchBar";
import ChangeMarket from "./ChangeMarket";

import { mapGetters } from "vuex";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "Header",
  mixins: [clickaway],
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
  data() {
    return {
      isOpen: true,
      isClose: false,
      isProfilOpen: false
    };
  },
  computed: {
    ...mapGetters([
      "itemCount",
      "totalPrice",
      "isCartOpen",
      "isLoggedIn",
      "loggedUser",
      "activeLogin",
      "activeRegister"
    ]),
    getName() {
      if (this.loggedUser.given_name || this.loggedUser.name) {
        if (this.loggedUser.given_name) {
          return this.loggedUser.given_name;
        } else {
          return this.loggedUser.name.split(" ")[0];
        }
      }
    }
    /*   getUsername() {
      if (this.loggedIn) {
        let email = JSON.parse(localStorage.getItem("user")).email;
        return email.substr(0, email.indexOf("@"));
      }
    } */
  },
  methods: {
    closeCart() {
      this.$store.commit("toggleCart", false);
    },
    closeProfil() {
      this.isProfilOpen = false;
    },
    goPath() {
      this.isLoggedIn
        ? this.$router.push({ name: 'hesabim' })
        : this.$router.push({ name: 'giris' });
    },
    toggleNav() {
      this.isOpen = !this.isOpen;
      this.isClose = !this.isClose;
      this.isActive = !this.isActive;
    },
    toggleCart() {
      this.$store.commit("toggleCart", true);
    },
    toggleProfil() {
      this.isProfilOpen = !this.isProfilOpen;
    },
    goCart() {
      this.$router.push({ name: "sepetim" });
    },
    logout() {
      this.$auth.logout().then(res => {
        this.$router.push("/");
      });
    }
  },
  created() {
    if (this.$route.hash) {
      location.reload();
    }
    if (this.isLoggedIn) {
      console.log("logged true")
      
      this.$store.dispatch("getShopcart", this.loggedUser);
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";
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
  background: $header-color;
  width: 100%;
  height: 14rem;
  @include res(tab) {
        height: 10rem;

    }

  &__search {
    margin-top: 3rem;
    width: 100%;
    @include res(tab) {
      margin-right: auto;
      margin-top: 0;
      width: auto;
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

  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  &__link {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-family: "Open Sans", sans-serif;
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
  background: none;
  position: relative;
  z-index: 11;
  cursor: pointer;
  outline: none;

  @include res(tab-land) {
    display: none;
  }

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
    content: "";
    height: 2px;
    width: 12px;
    background: $primary-color;
    position: absolute;
    bottom: -20%;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

