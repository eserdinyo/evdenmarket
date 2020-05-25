<template>
  <div class="sidebar">
    <div class="nav">
      <nuxt-link class="item" to="/siparislerim">
        <icon-past />
        <span>Siparislerim</span>
      </nuxt-link>
      <nuxt-link class="item" to="/adreslerim">
        <icon-location />
        <span>Adreslerim</span>
      </nuxt-link>
      <nuxt-link class="item" to="/ayarlarim">
        <icon-settings />
        <span>Ayarlar</span>
      </nuxt-link>
      <nuxt-link class="item" to="/puanlarim">
        <icon-gift />
        <span>Puanlarım</span>
      </nuxt-link>
      <nuxt-link class="item" to="/iletisim">
        <icon-phone />
        <span>İletişim</span>
      </nuxt-link>
      <div class="item" @click="logout">
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
.sidebar {
  position: sticky;
  top: 5rem;
  .nav {
    margin-top: 4rem;
    border: $border-2;
    margin-right: 6rem;
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
      cursor: pointer;

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

  .router-link-active {
    position: relative;
    &::after {
      content: '';
      background-color: $primary-color;
      height: 100%;
      width: 4px;
      position: absolute;
      left: 0;
      top: 0;
    }
  }
}
</style>
