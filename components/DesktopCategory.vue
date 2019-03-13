<template lang="pug">
    nav.Header__navigation(:class='{ activeNav: isActive }')
        .Header__navigation--wrapper
          nuxt-link.Header__navigation--link(@click.native='toggleNav',:to="{ name: 'listele-id', params: { id: 2 }}" :class='{ activeLink: isActive }') Sut, Kahvaltilik
          .Header__navigation--link(:class='{ activeLink: isActive }') Et, Balık
            ul.Menu
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Kirmizi Et
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Kumes Hayvanlari
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Balik, Deniz Urunleri
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Et Sarkuteri
        
            ul.Menu
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Yumurta
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Zeytin
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Bal
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Helva
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Recel
              li.Menu__item
                nuxt-link.Menu--link--link(to='/foo') Cikolata
          .Header__navigation--link(:class='{ activeLink: isActive }') Gıda, Sekerleme
          .Header__navigation--link(:class='{ activeLink: isActive }') İçecek
          .Header__navigation--link(:class='{ activeLink: isActive }') Deterjan, Temizlik
          .Header__navigation--link(:class='{ activeLink: isActive }') Kağıt, Kozmetik
          .Header__navigation--link(:class='{ activeLink: isActive }') Bebek, Oyuncak
          .Header__navigation--link(:class='{ activeLink: isActive }') Ev, Pet
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.Header__navigation {
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  color: #fff;
  background-color: $nav-color;
  display: none;
  flex-direction: column;
  width: 0%;
  transition: all 0.2s;
  padding-top: 10rem;
  font-size: 1.5rem;

  @include res(tab-land) {
    position: static;
    padding-top: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    background: $nav-color;
    width: 100%;
    height: 50px;

    &--wrapper {
      max-width: 80rem;
      display: flex;
      align-items: center;
    }
  }

  &--link {
    transform: translateY(-300px);
    opacity: 0;
    display: flex;
    text-align: center;
    padding: 0.3rem 0;
    user-select: none;
    position: relative;
    margin-bottom: 2rem;
    font-size: 2rem;
    cursor: pointer;
    font-weight: 600;
    @include res(tab-land) {
      margin-bottom: 0;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem 0;
    }

    &-icon {
      margin-right: 1rem;
    }
    @include res(tab-land) {
      opacity: 1;
      transform: translateY(0);
      padding: 0 15px;
      align-items: center;
      height: 100%;
      z-index: 99999;

      &:hover {
        background-color: #fff;
        color: $nav-color;
      }

      &:hover .Menu {
        display: unset;
      }

      &:not(:last-child) {
        border-right: 1px solid rgba(255, 255, 255, 0.555);
      }
    }
  }
}

.Menu {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: $nav-color;
  width: 200px;
  color: #fff;
  &__item {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 1rem 1rem;
    transition: background-color 0.2s;
    &:hover {
      background-color: #fff;
      color: $nav-color;
    }

    &:not(:last-child) {
      border-bottom: 1px solid rgba(#fff, 0.2);
    }
  }
}

.activeNav {
  width: 60%;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;

  @include res(tab-land) {
    width: auto;
  }
}

.activeLink {
  transform: translateY(0);
  opacity: 1;
}
</style>