<template>
  <div class="mobile-category">
    <nuxt-link class="mobile-category-item" to="/">
      Süt
    </nuxt-link>
    <nuxt-link class="mobile-category-item active" to="/">
      Peynir
    </nuxt-link>
    <nuxt-link class="mobile-category-item" to="/">
      Yoğurt
    </nuxt-link>
    <nuxt-link class="mobile-category-item" to="/">
      Tereyağ
    </nuxt-link>
    <nuxt-link class="mobile-category-item" to="/">
      Yumurta
    </nuxt-link>
    <nuxt-link class="mobile-category-item" to="/">
      Zeytin
    </nuxt-link>
    <nuxt-link class="mobile-category-item" to="/">
      Reçel
    </nuxt-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.mobile-category {
  display: flex;
  padding: 2rem 1rem;
  overflow-x: scroll;
  &-item {
    margin-left: 1rem;
    padding: 1.8rem 2rem;
    border: $border;
    border-width: 2px;
    border-radius: $sm-radius;
    text-align: center;
  }

  .active {
    border-bottom-color: $primary-color;
  }
}

@include res(desktop) {
  .mobile-category {
    display: none;
  }
}
</style>
