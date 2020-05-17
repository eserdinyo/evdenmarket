<template>
  <div class="Order-detail">
    <div class="container">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Order-detail">
        <div class="Order-detail__title">Siparis Detayı</div>
        <div v-for="(pr, idx) in orderDetails" :key="idx" class="Order-detail__item">
          <img class="Order-detail__item--image" :src="pr.image">
          <div class="Order-detail__item--right">
            <div class="Order-detail__item--right--name">
              {{ pr.name }} ({{ pr.quantity }} adet)
            </div>
            <div class="Order-detail__item--right--price">
              {{ pr.price }} ₺
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
  data () {
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
  created () {
    console.log(this.id)
  },
  head () {
    return {
      title: 'Siparis Detay | Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Order-detail {
  margin-top: 2rem;
  &__title {
    font-size: 2.4rem;
    color: $font-color;
    margin-bottom: 2rem;
  }

  &__item {
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(221, 221, 221, 0.5);
    padding-top: 1rem;
    padding-bottom: 0.5rem;

    &--right {
      &--price {
        margin-top: 1rem;
        font-weight: 600;
        color: $primary-color-2;
      }

      &--name {
        font-size: 1.4rem;
      }
    }

    &--image {
      width: 20%;
      margin-right: 1rem;
    }
  }

  &__total {
    color: $primary-color-2;
    font-weight: 600;
    margin-top: 1rem;
    text-align: right;
  }
}
</style>
