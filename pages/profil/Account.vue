<template>
  <div class="Account">
    <div class="nav">
      <nuxt-link class="item" to="/siparislerim">
        <icon-past />
        <span>Siparislerim</span>
      </nuxt-link>
      <nuxt-link class="item" to="/siparislerim">
        <icon-location />
        <span>Adreslerim</span>
      </nuxt-link>
      <nuxt-link class="item" to="/siparislerim">
        <icon-settings />
        <span>Kişisel Bilgilerim</span>
      </nuxt-link>
      <nuxt-link class="item" to="/siparislerim">
        <icon-gift />
        <span>Puanlarım</span>
      </nuxt-link>
      <nuxt-link class="item" to="/siparislerim">
        <icon-phone />
        <span>İletişim</span>
      </nuxt-link>
      <div class="item" to="/siparislerim" @click="logout">
        <icon-logout />
        <span>Çıkış</span>
      </div>
    </div>
  </div>
</template>

<script>
import {
  iconSettings,
  iconLocation,
  iconPhone,
  iconPast,
  iconGift,
  iconLogout
} from '@/components/icons'
export default {
  components: {
    iconSettings,
    iconLocation,
    iconPhone,
    iconPast,
    iconGift,
    iconLogout
  }
}
</script>

<style lang="scss">
.Account {
  margin: 0 2rem;
  margin-bottom: 5rem;
  .nav {
    margin-top: 4rem;
    border: $border-2;
    overflow: hidden;
    border-radius: $sm-radius;

    .item {
      padding: 1rem;
      display: block;
      padding: 2rem;
      font-weight: 500;
      color: $font-color-gray;
      display: flex;
      align-items: center;
      font-size: 14px;
      transition: all 0.1s;

      &:hover {
        background-color: #ebebeb64;
      }

      &:not(:last-child) {
        border-bottom: $border-2;
      }

      .icon {
        height: 20px;
        fill: $font-color-gray;
        margin-right: 1.2rem;
      }

      &:last-child {
        background-color: $red-color;
        color: #fff;

        .icon {
          height: 20px;
          fill: #fff;
          margin-right: 1.2rem;
        }
      }
    }
  }
}
</style>
