<template>
  <div class="sidebar">
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
    </div>
  </div>
</template>

<script>
import { iconSettings, iconLocation, iconPhone, iconPast, iconGift } from '@/components/icons'
export default {
  components: {
    iconSettings,
    iconLocation,
    iconPhone,
    iconPast,
    iconGift
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
    }
  }
}
</style>
