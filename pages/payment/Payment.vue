<template>
  <div class="container">
    <div class="Address">
      <div class="Address__top">
        <p class="Address__title">TESLİMAT ADRESİ</p>
        <a
          v-if="false"
          class="btn Address__top--btn"
          @click="openModal"
        ><span class="Address__top--plus">+</span>
          <p>Adres Ekle</p>
        </a>
      </div>
      <p v-if="addressWarning" class="Address__warning">Bir adres seçin</p>
      <div
        class="Address__item--top"
        :class="{ activeAddress: 1 == selectedAddress }"
        @click="makeAddresActive(1)"
      >
        <div>
          <p class="Address__name">Okul</p>
          <p class="Address__detay">
            Turgut Reis Mh. Feshane Sk. No:38 D:10 K:5 <br>
            Sultanbeyli/İstanbul
          </p>
        </div>
      </div>
      <div
        class="Address__item--top"
        :class="{ activeAddress: 2 == selectedAddress }"
        @click="makeAddresActive(2)"
      >
        <div>
          <p class="Address__name">Ev</p>
          <p class="Address__detay">
            Turgut Reis Mh. Feshane Sk. No:38 D:10 K:5 <br>
            Sultanbeyli/İstanbul
          </p>
        </div>
      </div>
      <div v-if="false" class="Address__empty">
        <p class="Address__empty--title">Kayıtlı bir adresiniz yok.</p>
      </div>
    </div>
    <div class="Delivery">
      <p class="Delivery__title">TESLİMAT ZAMANI</p>
      <p v-if="serviceWarning" class="Delivery__warning">Servis saati seçin</p>
      <div class="Delivery__times">
        <div
          class="Delivery__times--time"
          :class="{ activeTime: 1 == selectedTime }"
          @click="makeTimeActive(1, '12:00 - 13:00')"
        >
          12:00 - 13:00
        </div>
        <div
          class="Delivery__times--time"
          :class="{ activeTime: 2 == selectedTime }"
          @click="makeTimeActive(2, '13:00 - 14:00')"
        >
          13:00 - 14:00
        </div>
        <div
          class="Delivery__times--time"
          :class="{ activeTime: 3 == selectedTime }"
          @click="makeTimeActive(3, '14:00 - 15:00')"
        >
          14:00 - 15:00
        </div>
        <div
          class="Delivery__times--time"
          :class="{ activeTime: 4 == selectedTime }"
          @click="makeTimeActive(4, '15:00 - 16:00')"
        >
          15:00 - 16:00
        </div>
        <div
          class="Delivery__times--time"
          :class="{ activeTime: 5 == selectedTime }"
          @click="makeTimeActive(5, '16:00 - 17:00')"
        >
          16:00 - 17:00
        </div>
        <div
          class="Delivery__times--time"
          :class="{ activeTime: 6 == selectedTime }"
          @click="makeTimeActive(6, '17:00 - 18:00')"
        >
          17:00 - 18:00
        </div>
      </div>
    </div>
    <div class="Order__note">
      <div class="Order__note--title">SİPARİŞ NOTU</div>
      <textarea v-model="order.note" class="Order__note--note" rows="4" />
    </div>
    <div class="Payment">
      <p class="Payment__title">ÖDEME ŞEKLİ</p>
      <p v-if="paymentWarning" class="Payment__warning">Ödeme yöntemi seçin</p>
      <div class="Payment__types">
        <div class="Payment__bottom">
          <div
            class="Payment__types--item"
            :class="{ activePayment: 2 == selectedPayment }"
            @click="selectPaymentType(2)"
          >
            <div class="Payment__types--item-title">Nakit</div>
            <icon-cash />
          </div>
          <div
            class="Payment__types--item"
            :class="{ activePayment: 3 == selectedPayment }"
            @click="selectPaymentType(3)"
          >
            <div class="Payment__types--item-title">Kredi/Banka Kartı</div>
            <icon-pos />
          </div>
        </div>
      </div>
    </div>
    <div class="Order">
      <div class="Order--total">
        <p class="Order--total-title">Toplam</p>
        <p class="Order--total-price">{{ total }} ₺</p>
      </div>
      <button class="btn btn-green" @click="makeOrder">
        <p>Ödeme Yap</p>
      </button>
    </div>
    <addressModal />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import addressModal from '@/components/AddressModal'
import { iconCash, iconPos } from '@/components/icons'

export default {
  layout: 'cart-layout',
  filters: {
    lowerCase: (val) => {
      if (!val) {
        return ''
      }
      return val.toLowerCase()
    }
  },
  components: {
    addressModal,
    iconCash,
    iconPos
  },
  data () {
    return {
      addresses: [],
      isBtnDisabled: false,
      selectedAddress: '',
      selectedTime: '',
      selectedPayment: '',
      paymentWarning: false,
      serviceWarning: false,
      addressWarning: false,
      order: {
        total: '',
        service: '',
        payment: '',
        note: '',
        address: ''
      }
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      count: 'cart/count',
      total: 'cart/total'
    })
  },
  created () {
    this.$store.dispatch('getAddresses', this.loggedUser)
  },
  methods: {
    makeAddresActive (id) {
      this.selectedAddress = id
      this.order.address = id
      this.addressWarning = false
    },
    makeTimeActive (id, hour) {
      this.selectedTime = id
      this.order.service = hour
      this.serviceWarning = false
    },
    selectPaymentType (id) {
      this.selectedPayment = id
      this.order.payment = 1
      this.paymentWarning = false
    },
    openModal () {
      this.$store.commit('openModal', true)
      document.getElementsByTagName('body')[0].style.overflow = 'hidden'
    },

    makeOrder () {
      this.order.total = this.totalPrice
      if (!this.order.address) {
        this.addressWarning = true
      }
      if (!this.order.payment) {
        this.paymentWarning = true
      }
      if (!this.order.service) {
        this.serviceWarning = true
      }
      if (this.order.address && this.order.payment && this.order.service) {
        this.$wait.start('btn')
        this.isBtnDisabled = true
        this.$store
          .dispatch('addOrder', {
            order: this.order,
            user: this.loggedUser
          })
          .then((res) => {
            this.shopcart.forEach((product) => {
              this.$store.dispatch('addOrderDetail', {
                orderid: res.data.id,
                product,
                user: this.loggedUser
              })
            })
            this.isBtnDisabled = false
            this.$router.push('/onay')
          })
      }
    }
  },
  head () {
    return {
      title: 'Sipariş Onay - Evdenmarket',
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
.Address {
  margin-top: 3rem;
  &__top {
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 1.5rem;

    &--plus {
      font-size: 2rem;
      margin-right: 1rem;
      font-weight: 500;
    }
    &--btn {
      padding: 0rem 1rem;
      display: flex;
      align-items: center;
      background-color: $primary-color;
      color: #fff;
    }
  }

  &__empty {
    &--title {
      margin-bottom: 1rem;
      color: $font-color;
      margin-top: 1rem;
    }
  }
  &__title {
    font-size: 13px;
  }

  &__btn {
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__delete_btn {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    font-size: 1.4rem;

    cursor: pointer;
    &-icon {
      fill: $urun-marka-color;
      margin-bottom: 3px;
      height: 13px;

      &--del {
        fill: $urun-marka-color;
        margin-bottom: 3px;
        height: 12px;
        margin-right: 0.5rem;
      }
    }
  }

  &__plus {
    font-size: 2rem;
    margin-right: 1rem;
    font-weight: 700;
  }

  &__bottom {
    margin-top: 2rem;
  }

  &__item {
    &--top {
      display: flex;
      border: $border-2;
      border-radius: $sm-radius;
      padding: 1rem 2rem;
      cursor: pointer;
      margin-bottom: 1rem;

      .icon {
        height: 18px;
        margin-right: 2rem;
        margin-top: 2px;
      }
    }

    &--bottom {
      display: flex;
      margin-top: 2rem;
    }

    &:not(:last-child) {
      margin-bottom: 2rem;
    }
  }

  &__name {
    margin-bottom: 1rem;
    font-weight: 500;
    color: $font-color;
  }

  &__detay {
    font-size: 1.3rem;
  }

  &__warning {
    color: $red-color;
    margin-bottom: 0.5rem;
  }
}

.Delivery {
  margin-top: 3rem;
  margin-bottom: 3rem;

  &__title {
    font-size: 14px;
    margin-bottom: 1.5rem;
  }

  &__times {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    &--time {
      text-align: center;
      padding: 0.5rem 0.5rem;
      border-radius: $sm-radius;
      border: $border-2;
      cursor: pointer;
      font-size: 13px;
    }
  }

  &__warning {
    color: $red-color;
    margin-bottom: 0.5rem;
  }
}

.Payment {
  margin-bottom: 12rem;
  &__title {
    font-size: 14px;
    margin-bottom: 1.5rem;
    margin-top: 2rem;
  }

  &__top {
    p {
      margin-bottom: 0.5rem;
      color: $font-color;
    }
  }
  &__bottom {
    p {
      margin-bottom: 0.5rem;
      color: $font-color;
    }
  }

  &__types {
    &--item {
      padding: 1rem 2rem;
      border: $border-2;
      border-radius: $sm-radius;
      margin-bottom: 1rem;
      color: $font-color;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      user-select: none;

      &-1 {
        cursor: not-allowed;
      }
      &-soon {
        font-size: 1.2rem;
        margin-left: 0.5rem;
      }
      &-icon {
        width: 25px;
        fill: $font-color;
      }

      .icon {
        height: 24px;
        fill: $font-color;
      }
    }
  }

  &__warning {
    color: $red-color;
    margin-bottom: 0.5rem;
  }
}

.Order {
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -4px 8px #00000029;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 1.5rem 2rem;
  background-color: #fff;

  .btn-green {
    font-size: 1.4rem;
    width: 16rem;
    font-weight: bold;
  }

  &--total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: $font-color;
    font-size: 2rem;
    display: flex;
    flex-direction: column;
    &-title {
      font-size: 14px;
      margin-bottom: 5px;
    }
    &-price {
      font-weight: 500;
      color: $primary-color;
      font-size: 2.2rem;
      font-weight: bold;
    }
  }

  &__note {
    &--title {
      font-size: 14px;
      margin-bottom: 1.5rem;
    }

    &--note {
      border: $border-2;
      width: 100%;
      outline: none;
      border-radius: $sm-radius;
      padding: 1rem;

      &:focus {
        border-color: $primary-color;
      }
    }
  }
}

.activeAddress,
.activeTime,
.activePayment {
  border-color: $primary-color;
}
</style>
