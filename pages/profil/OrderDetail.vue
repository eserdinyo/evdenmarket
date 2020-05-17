<template>
  <div class="container">
    <div class="Order-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Order-detail">
        <div class="title">SİPARİŞ DETAYI</div>
        <div class="detail-wrapper">
          <div
            v-for="(pr, idx) in orderDetails"
            :key="idx"
            class="Order-detail__item"
          >
            <img class="Order-detail__item--image" :src="pr.image" />
            <div class="Order-detail__item--right">
              <div class="Order-detail__item--right--name">
                {{ pr.name }} <span>({{ pr.quantity }} adet)</span>
              </div>
              <div class="Order-detail__item--right--price">
                {{ pr.price }} ₺
              </div>
            </div>
          </div>
        </div>
        <div class="Order-detail__total">Toplam: 250 ₺</div>
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
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      orderDetails: [
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/03118004/03118004-e54fa0.jpg',
          name: 'Doğuş Tiryaki Çay 1000 G',
          quantity: 2,
          price: 25.75,
          id: 5,
          marketproduct_id: 12
        },
        {
          image:
            'https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/07150087/nutella-go-52-gr-5e1f3e.jpg',
          name: 'Nutella Go 52 G',
          quantity: 1,
          price: 15.75,
          id: 8,
          marketproduct_id: 12
        }
      ]
    }
  },
  head() {
    return {
      title: 'Siparis Detay | Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Order-detail {
  margin-top: 2rem;
  .title {
    font-size: 14px;
    margin: 2rem 0;
    color: $font-color;
  }

  .detail-wrapper {
    border: $border-2;
    border-radius: $sm-radius;
  }

  &__item {
    display: flex;
    align-items: center;
    padding: 1.5rem 2rem;

    &:not(:last-child) {
      border-bottom: $border-2;
    }

    &--right {
      &--price {
        margin-top: 1rem;
        font-weight: 500;
        font-size: 13px;
        color: $primary-color;
      }

      &--name {
        font-size: 14px;

        span {
          font-size: 12px;
        }
      }
    }

    &--image {
      height: 7rem;
      margin-right: 1.5rem;
    }
  }

  &__total {
    color: $primary-color;
    font-weight: 600;
    margin-top: 1.5rem;
    text-align: right;
  }
}

@include res(desktop) {
  .Order-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 3rem;
  }

  .Order-detail {
    margin-top: 3.5rem;
  }
}
</style>
