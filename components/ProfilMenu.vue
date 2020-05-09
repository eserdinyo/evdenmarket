<template>
  <div class="Profil-card">
    <nuxt-link class="Profil-card--link" to="/siparislerim">
      Siparişlerim
    </nuxt-link>
    <nuxt-link class="Profil-card--link" to="/">
      Üyelik Bilgilerim
    </nuxt-link>
    <nuxt-link class="Profil-card--link" to="/">
      Kampanyalarım
    </nuxt-link>
    <nuxt-link class="Profil-card--link" to="/adreslerim">
      Adreslerim
    </nuxt-link>
    <nuxt-link class="Profil-card--link" to="/">Çeklerim</nuxt-link>
    <nuxt-link class="Profil-card--link" to="/">Puanlarım</nuxt-link>
    <a class="Profil-card--link" @click="$store.commit('user/logout')">Çıkış Yap</a>
  </div>
</template>

<style lang="scss">
.Profil-card {
  background: #fff;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 130%;
  box-shadow: $shadow;
  display: none;
  flex-direction: column;
  font-size: 14px;
  border-bottom-right-radius: $radius;
  border-bottom-left-radius: $radius;
  color: $font-color;
  width: 200px;
  z-index: 9999999;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0;
    z-index: 999999;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid $primary-color;
  }
  &--link {
    padding: 1.5rem 0;
    transition: all .2s;
    border-bottom: $border;
    color: #6c7a89;

    &:last-child {
      border-bottom-right-radius: $radius;
      border-bottom-left-radius: $radius;
      &:hover {
        background-color: $red-color;
        color: #fff;
      }
    }
    &:hover {
      background-color: #c5c9ce24;
    }
  }
}
</style>
