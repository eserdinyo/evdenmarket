<template>
  <div class="market-nav" :class="{ activeNav: isNavOpen }">
    <nuxt-link v-for="(n, idx) in 9" :key="idx" to="/" class="market-nav-item">
      <div class="market-nav-icon">
        <icon-fish />
      </div>
      <nuxt-link to="/kategori/2" class="market-nav-link">
        Et, Balık, Tavuk
      </nuxt-link>
      <div class="market-nav-right-icon">
        <icon-right-arrow />
      </div>
      <div class="market-nav-submenu">
        <nuxt-link
          v-for="(m, index) in 4"
          :key="index"
          to="/"
          class="market-nav-submenu-link"
        >
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
  },
  data () {
    return {
      isNavOpen: false
    }
  },
  created () {
    this.$nuxt.$on('open-navbar', () => {
      this.isNavOpen = !this.isNavOpen
    })
  }
}
</script>

<style lang="scss">
.market-nav {
  position: absolute;
  top: 0;
  left: -400px;
  width: 70%;
  margin-right: 0 !important;
  z-index: 9;
  background-color: $grey-color;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
  box-shadow: $shadow;
  height: 496px;
  transition: all .5s;

  &-item {
    display: flex;
    align-items: center;
    color: #f9f9f9;
    padding: 1rem 1.5rem;
    font-size: 14px;
    position: relative;
    transition: all 0.2s;

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
    display: none;
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
    opacity: 0;

    &-link {
      margin: 1rem 0;
      transition: all 0.2s;

      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.activeNav {
  left: 0;
}

@include res(desktop) {
  .market-nav {
    width: 100%;
    margin-right: 2rem;
    position: static;

    &-right-icon {
      display: block;
    }

    &-submenu {
      opacity: 1;
    }
  }
}
</style>
