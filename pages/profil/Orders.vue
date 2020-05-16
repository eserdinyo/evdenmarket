<template>
  <div class="container">
    <div class="Orders-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Orders">
        <div class="Orders__title">SİPARİŞLERİM</div>
        <div class="Orders__body">
          <nuxt-link
            v-for="(order, idx) in orders"
            :key="idx"
            class="Orders__item"
            to="/"
          >
            <div class="Orders__item--header">
              <div class="Orders__item--left">
                <p class="status">SİPARİŞİN TESLİM EDİLDİ</p>
              </div>
              <div class="Orders__item--header-right">
                <p class="date">{{ order.day }}</p>
              </div>
            </div>
            <div class="info">
              <div>
                <p class="market"><span>Market:</span> Ulusoy Market</p>
                <p class="market">
                  <span>Sipariş Tutarı: </span> {{ order.total }} ₺
                </p>
                <p class="market"><span>Sipariş No: </span> 3781743</p>
              </div>
              <icon-right-arrow-2 />
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sidebar from '@/components/Sidebar'
import { iconRightArrow2 } from '@/components/icons'

export default {
  layout: 'cart-layout',
  components: {
    sidebar,
    iconRightArrow2
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
        }
      ],
      months: [
        'Ocak',
        'Şubat',
        'Mart',
        'Nisan',
        'Mayıs',
        'Haziran',
        'Temmuz',
        'Ağustos',
        'Eylül',
        'Ekim',
        'Kasım',
        'Aralık'
      ]
    }
  },

  computed: {
    day() {
      return (date) => date.substring(8, 10).replace('0', '')
    },
    month() {
      return (date) => parseInt(date.substring(5, 7).replace('0', ''))
    }
  },
  methods: {
    getMonth(number) {
      return this.months[number - 1]
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

.Orders {
  &__title {
    font-size: 14px;
    margin-top: 2rem;
    color: $font-color;
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

    &:hover {
      border-color: $primary-color;
    }

    &--header {
      display: flex;
      justify-content: space-between;
      font-size: 13px;

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

      &-status {
        font-size: 13px;
        color: $primary-color;
      }
    }
  }

  .date {
    font-size: 11px;
  }
  .status {
    color: $primary-color;
    font-weight: 500;
  }

  .market {
    font-size: 13px;
    margin-bottom: 5px;
  }
  .info {
    margin-top: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    span {
      color: $font-color-gray;
      font-weight: 400;
    }

    .icon {
      height: 20px;
    }
  }
}

@include res(desktop) {
  .Sidebar {
    display: block;
    margin-top: 2rem;
  }

  .Orders-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 3rem;
  }
}
</style>
