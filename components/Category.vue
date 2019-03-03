<template lang="pug">
      .Category
        .Category__title Sut, Kahvaltilik
        ul.Category__list
          li.Category__list--item
            nuxt-link.Category__list--link(:to="{name: 'listele-id', params:{id:1}}") Sut
          li.Category__list--item
            nuxt-link.Category__list--link(:to="{name: 'listele-id', params:{id:2}}") Peynir
          li.Category__list--item
            nuxt-link.Category__list--link(:to="{name: 'listele-id', params:{id:3}}") Yogurt
          li.Category__list--item
            nuxt-link.Category__list--link(:to="{name: 'listele-id', params:{id:4}}") Zeytin
          li.Category__list--item
            a.Category__list--link Yumurta
          li.Category__list--item
            a.Category__list--link Yogurt
          li.Category__list--item
            a.Category__list--link Zeytin
          li.Category__list--item
            a.Category__list--link Yumurta
            
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.Category {
  margin: 2rem 15px;

  @include res(tab-land) {
    display: none;
  }

  &__title {
    margin-bottom: 1rem;
    font-weight: 600;
    color: $font-color;
    font-size: 1.8rem;
  }
  &__list {
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;

    &::-webkit-scrollbar {
      display: none;
    }

    &--item {
      border: 1px solid #ddd;
      border-radius: 3px;
      box-shadow: 0 4px 8px #eee;
      width: auto;
      margin-right: 1rem;

      .nuxt-link-active {
        border-bottom: 1px solid $primary-color-2;
      }
    }

    &--link {
      height: 100%;
      width: 100%;
      color: $font-color;
      display: block;
      padding: 1rem 2rem;
    }
  }
}
</style>
