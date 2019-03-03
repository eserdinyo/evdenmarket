<template lang="pug">
    .sidebar
        ul.nav
          li.nav__item
            nuxt-link.nav__item--link(to='/siparislerim') Siparislerim
          li.nav__item
            nuxt-link.nav__item--link(to='/adreslerim') Adreslerim
          li.nav__item
            a.nav__item--link Uyelik Bilgilerim
          li.nav__item
            a.nav__item--link Kampanyalarim
          li.nav__item
            a.nav__item--link Hediye Ceklerim
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  list-style: none;
  margin-bottom: 0;
  margin-top: 11px;
  padding-left: 0;

  &__item {
    margin-top: 11px;

    &--link {
      color: #484848;
      font-size: 13px;
      line-height: 18px;
      text-decoration: none;
      display: block;
      cursor: pointer;
    }
  }
}
</style>


