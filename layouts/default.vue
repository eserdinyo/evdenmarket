<template>
  <div>
    <client-only>
      <app-header />
    </client-only>
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
