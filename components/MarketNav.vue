<template>
  <div class="market-nav" :class="{ activeNav: isNavOpen }">
    <nuxt-link
      v-for="(category, idx) in categories"
      :key="category.id"
      to="/kategori/2"
      class="market-nav-item"
    >
      <div class="market-nav-icon">
        <img :src="catImg(idx + 1)" class="icon" alt="" srcset="">
      </div>
      <div class="market-nav-link">
        {{ category.name }}
      </div>
      <div class="market-nav-right-icon">
        <icon-right-arrow />
      </div>
      <div class="market-nav-submenu">
        <nuxt-link
          v-for="child in category.categories"
          :key="child.id"
          to="/"
          class="market-nav-submenu-link"
        >
          {{ child.name }}
        </nuxt-link>
      </div>
    </nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      isNavOpen: false
    }
  },
  computed: {
    ...mapState({
      categories: state => state.content.categories
    })
  },
  created () {
    this.$nuxt.$on('open-navbar', () => {
      this.isNavOpen = !this.isNavOpen
    })
  },
  methods: {
    catImg (id) {
      return require('../assets/category/cat-icon-' + id + '.svg')
    }
  }
}
</script>

<style lang="scss">
.market-nav {
  position: absolute;
  top: 0;
  left: -400px;
  width: 100%;
  margin-right: 0 !important;
  z-index: 9;
  background-color: $grey-color;
  border-bottom-left-radius: $radius;
  border-bottom-right-radius: $radius;
  box-shadow: $shadow;
  height: auto;
  transition: all 0.3s;

  .icon {
    fill: #fff;
  }

  &-item {
    display: flex;
    align-items: center;
    color: #f9f9f9;
    padding: 2rem;
    font-size: 16px;
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
      fill: #f9f9f9;
    }

    img {
      height: 30px;
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
    width: 210px;
    margin-right: 2rem;
    position: static;
    height: 426px;

    &-icon {
      img {
        height: 26px;
      }
    }

    &-item {
      padding: 1rem 1.5rem;
      font-size: 14px;
    }

    &-right-icon {
      display: block;
    }

    &-submenu {
      opacity: 1;
    }
  }
}
</style>
