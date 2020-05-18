<template>
  <div class="container">
    <div class="Address-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Address">
        <div class="Address__title">
          <span>ADRESLERİM</span>

          <div class="btn btn-green">
            Ekle
          </div>
        </div>
        <div class="Address__body">
          <div v-for="(order, idx) in orders" :key="idx" class="Address__item">
            <div class="Address__item--header">
              <p>Turgut Reis Mah. Huzur Cd. Feshane Sk. No:38 D:10</p>
              <p>Sultanbeyli/IST</p>
            </div>
          </div>
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
  data() {
    return {
      orders: [
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        },
        {
          day: '21-09-2019',
          total: 120
        }
      ]
    }
  },
  head() {
    return {
      title: 'Siparislerim | Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Sidebar {
  display: none;
}

.Address {
  &__title {
    font-size: 14px;
    margin-top: 2rem;
    color: $font-color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn-green {
      height: 24px;
      width: 100px;
    }
  }

  &__body {
    margin-top: 2rem;
  }

  &__item {
    padding: 1rem;
    border-radius: $sm-radius;
    border: $border-2;
    margin-bottom: 2rem;
    display: block;
    transition: all 0.1s;

    &--header {
      font-size: 13px;
      p {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      &-right {
        margin-left: auto;

        &-payment {
          color: $font-color-gray;
          font-size: 13px;
        }
      }
    }

    &--body {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

@include res(desktop) {
  .Sidebar {
    display: block;
    margin-top: 2rem;
  }

  .Address-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 3rem;
  }
}
</style>
