<template>
  <div class="container">
    <div class="Points-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Points">
        <div class="Points__title">İLETİŞİM</div>
        <div class="Points__body">
          <p>Saray Mah. Dr. Adnan Büyükdeniz Caddesi No:4 AKKOM Ofis Park - Cessas Plaza 2. Blok Kat:10</p>
          <p>İSTEGELSİN Üsküdar / İstanbul</p>
          <br>
          <p><span>Telefon:</span> <a href="tel:02163982638">0 (216) 398 26 38</a></p>
          <p><span>E-Posta:</span> <a href="mailto:iletisim@evdenmarket.com">iletisim@evdenmarket.com</a> </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'

export default {
  layout: 'cart-layout',
  components: {
    sidebar
  },
  data () {
    return {
    }
  },
  created () {
  },
  head () {
    return {
      title: 'Puanlarım | Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Sidebar {
  display: none;
}

.Points {
  &__title {
    font-size: 14px;
    margin-top: 2rem;
    color: $font-color;
  }

  &__body {
    margin-top: 2rem;
    p {
      font-size: 14px;

      span {
        font-weight: bold;
      }
    }
  }
}

@include res(desktop) {
  .Sidebar {
    display: block;
    margin-top: 2rem;
  }

  .Points-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 3rem;
  }
}
</style>
