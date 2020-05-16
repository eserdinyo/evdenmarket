<template>
  <div class="container">
    <div class="Completed">
      <iconSuccess class="Completed__icon" />
      <p class="Completed__title">SİPARİŞİN ALINDI.</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import iconSuccess from '@/assets/icons/success'

export default {
  components: {
    iconSuccess
  },
  created () {
    this.$store
      .dispatch('deleteShopcartAfterOrder', {
        user: this.user
      })
      .then((res) => {
        this.$store.dispatch('getShopcart', this.user)
      })
  },
  head () {
    return {
      title: 'Tamamlandı - Evdenmarket',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.Completed {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    fill: $primary-color-dark;
    height: 100px;
  }
  &__title {
    font-size: 2rem;
    color: $primary-color-dark;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;
  }
}
</style>
