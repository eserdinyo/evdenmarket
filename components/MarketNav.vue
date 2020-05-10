<template>
  <div class="market-nav">
    <nuxt-link v-for="(n, idx) in 9" :key="idx" to="/" class="market-nav-item">
      <div class="market-nav-icon">
        <icon-fish />
      </div>
      <div to="/" class="market-nav-link">
        Et, Balık, Tavuk
      </div>
      <div class="market-nav-right-icon">
        <icon-right-arrow />
      </div>
      <div class="market-nav-submenu">
        <nuxt-link v-for="(m, index) in 4" :key="index" to="/" class="market-nav-submenu-link">
          Kırmızı Et
        </nuxt-link>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { iconFish, iconRightArrow } from '@/components/icons'
export default {
  components: {
    iconFish,
    iconRightArrow
  }
}
</script>

<style lang="scss">
.market-nav {
  background-color: $grey-color;
  min-width: 210px;
  height: 496px;
  margin-right: 2rem;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
  box-shadow: $shadow;

  &-item {
    display: flex;
    align-items: center;
    color: #f9f9f9;
    padding: 1rem 1.5rem;
    font-size: 14px;
    position: relative;
    transition: all .2s;

    &:last-child {
      border-bottom-left-radius: $radius;
      border-bottom-right-radius: $radius;
    }

    &:hover {
      background-color: lighten($grey-color, 5%);
      .market-nav-submenu {
        display: flex;
      }
    }
  }

  &-right-icon {
    margin-left: auto;
    .icon {
      fill: #f9f9f9;
      height: 10px;
    }
  }

  &-icon {
    margin-right: 1.2rem;
    .icon {
      height: 30px;
      fill: #f9f9f9;
    }
  }

  &-submenu {
    position: absolute;
    left: 210px;
    top: 0;
    background-color: lighten($grey-color, 5%);
    min-width: 200px;
    display: none;
    flex-direction: column;
    padding: 2rem;
    border-top-right-radius: $radius;
    border-bottom-right-radius: $radius;
    z-index: 9;

    &-link {
      margin: 1rem 0;
      transition: all .2s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
