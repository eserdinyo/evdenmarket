<template>
  <div>
    <client-only>
      <app-header />
    </client-only>
    <nuxt />
  </div>
</template>
<script>
import AppHeader from '@/components/Header'

export default {
  components: {
    AppHeader
  }
}
</script>
