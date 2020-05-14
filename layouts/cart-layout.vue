<template>
  <div>
    <client-only>
      <app-header />
    </client-only>
    <nuxt />
    <auth-modal />
  </div>
</template>
<script>
import AuthModal from '@/components/AuthModal'
import AppHeader from '@/components/Header'

export default {
  components: {
    AppHeader,
    AuthModal
  }
}
</script>
