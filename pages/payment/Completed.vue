<template>
  <div class="container">
    <div class="Completed">
      <icon-confirm />
      <p class="title">SİPARİŞİNİZ ALINDI</p>

      <div class="result">
        <div>
          <p class="result-title">Sipariş Numarası</p>
          <p>71189313812</p>
        </div>
        <div>
          <p class="result-title">Toplam Tutar</p>
          <p>76,80 ₺</p>
        </div>
      </div>
      <nuxt-link class="link" to="/">Siparişlerim</nuxt-link>
    </div>
  </div>
</template>

<script>
import { iconConfirm } from '@/components/icons'

export default {
  layout: 'cart-layout',
  components: {
    iconConfirm
  },
  head () {
    return {
      title: 'Tamamlandı - Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Completed {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  .icon {
    height: 24rem;
    margin-top: 2rem;
  }

  .title {
    font-size: 16px;
    color: $primary-color;
    text-align: center;
    margin-top: 2rem;
    font-weight: 500;
  }

  .link {
    margin-top: 1rem;
    font-size: 14px;
    text-decoration: underline;
  }

  .result {
    width: 100%;
    padding: 2rem;
    border: $border;
    border-radius: $sm-radius;
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    font-size: 2rem;
    font-weight: 600;

    &-title {
      font-size: 14px;
      font-weight: 400;
    }
  }
}

@include res(desktop) {
  .Completed {
    margin-top: 6rem;
    .icon {
      height: 35rem;
    }

    .result {
      max-width: 50rem;
      padding: 2rem 3rem;
      margin-top: 3rem;
    }
  }
}
</style>
