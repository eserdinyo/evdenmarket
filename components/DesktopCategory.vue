<template>
  <nav class="Header__navigation">
    <div class="Header__navigation--wrapper">
      <nuxt-link
        class="Header__navigation--link"
        :to="{ name: 'listele-id', params: { id: 2 } }"
        :class="{ activeLink: isActive }"
        @click.native="toggleNav"
      >
        Sut, Kahvaltilik
      </nuxt-link>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        Et, Balık
        <ul class="Menu">
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Kirmizi Et</nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">
              Kumes Hayvanlari
            </nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">
              Balik, Deniz Urunleri
            </nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">
              Et Sarkuteri
            </nuxt-link>
          </li>
        </ul>
        <ul class="Menu">
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Yumurta</nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Zeytin</nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Bal</nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Helva</nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Recel</nuxt-link>
          </li>
          <li class="Menu__item">
            <nuxt-link class="Menu--link--link" to="/foo">Cikolata</nuxt-link>
          </li>
        </ul>
      </div>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        Gıda, Sekerleme
      </div>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        İçecek
      </div>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        Deterjan, Temizlik
      </div>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        Kağıt, Kozmetik
      </div>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        Bebek, Oyuncak
      </div>
      <div class="Header__navigation--link" :class="{ activeLink: isActive }">
        Ev, Pet
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false
    }
  },
  methods: {
    toggleNav() {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/style/main.scss';

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

    &-icon {
      margin-right: 1rem;
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
}

.activeLink {
  transform: translateY(0);
  opacity: 1;
}

@include res(desktop) {
  .Header__navigation {
    position: relative;
    padding-top: 0;

    display: flex;
    flex-direction: row;
    justify-content: center;
    background: $nav-color;
    width: 100%;
    height: 50px;

    &--wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: $nav-color;
      position: absolute;
      top: 0;
      left: 0;
      width: 20rem;
    }

    &--link {
      margin-bottom: 0;
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem 0;
      opacity: 1;
      transform: translateY(0);
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
</style>
