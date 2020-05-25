<template>
  <div class="container">
    <div class="Points-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Points">
        <div class="Points__title">PUANLARIM</div>
        <div class="Points__body">
          <b>2540 puan</b>
          <p>Puanlarınızı alışveriş yaparken kullanabilirsiniz.</p>
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
    b {
      color: $primary-color;
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
