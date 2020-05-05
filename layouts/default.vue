<template>
  <div>
    <app-header />
    <nuxt />
    <auth-modal />
    <app-footer />
  </div>
</template>
<script>
import AuthModal from '@/components/AuthModal'
import AppFooter from '@/components/Footer'
import AppHeader from '@/components/Header'

export default {
  components: {
    AppHeader,
    AuthModal,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/style/main.scss';
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  //This is defines what 1rem is
  font-size: 62.5%; //1 rem  = 10px; 10px/16px = 62.5%;
  @include res(tab-land) {
    font-size: 68%;
  }
}

body {
  box-sizing: border-box;
  font-family: sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.4;
}

/*
::selection {
  background-color: $color-primary;
  color: $color-white;
}
*/
</style>
