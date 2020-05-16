<template>
  <div class="container">
    <div class="Payment-wrapper">
      <div class="Payment-wrapper-top">
        <div class="Address">
          <div class="Address__top">
            <div class="title-wrapper">
              <p class="title">TESLİMAT ADRESİ</p>
              <p v-if="addressWarning" class="warning">
                Bir adres seçin !
              </p>
            </div>
            <a
              v-if="false"
              class="btn Address__top--btn"
              @click="openModal"
            ><span class="Address__top--plus">+</span>
              <p>Adres Ekle</p>
            </a>
          </div>
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
          <div class="title-wrapper">
            <p class="title">TESLİMAT ZAMANI</p>
            <p v-if="serviceWarning" class="warning">
              Servis saati seçin
            </p>
          </div>
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
          <div class="title">SİPARİŞ NOTU</div>
          <textarea v-model="order.note" class="Order__note--note" rows="4" />
        </div>
        <div class="Payment">
          <div class="title-wrapper">
            <p class="title">ÖDEME ŞEKLİ</p>
            <p v-if="paymentWarning" class="warning">
              Ödeme yöntemi seçin
            </p>
          </div>
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
      </div>
      <div class="Order">
        <div class="Order--total">
          <p class="Order--total-title">Toplam</p>
          <p class="Order--total-price">{{ total }} ₺</p>
        </div>
        <button class="btn btn-green" :disabled="isLoading" @click="validate">
          <span v-if="!isLoading">Ödeme Yap</span>
          <loading :is-loading="isLoading" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { iconCash, iconPos } from '@/components/icons'

export default {
  layout: 'cart-layout',
  components: {
    iconCash,
    iconPos
  },
  data () {
    return {
      isLoading: false,
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
        address: '',
        items: []
      }
    }
  },
  computed: {
    ...mapGetters({
      items: 'cart/items',
      total: 'cart/total'
    })
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
      console.log('open address modal')
    },

    makeOrder () {
      this.order.total = this.total
      this.order.items = this.items

      this.isLoading = true
      this.$store.dispatch('cart/order', { order: this.order }).then((res) => {
        setTimeout(() => {
          this.$store.dispatch('cart/fetch')
          this.$router.push('/onay')
        }, 1000)
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('cart/fetch')
          this.$router.push('/onay')
        }, 1000)
      })
    },
    validate () {
      let isValid = true

      if (!this.order.address) {
        this.addressWarning = true
        isValid = false
      }
      if (!this.order.payment) {
        this.paymentWarning = true
        isValid = false
      }
      if (!this.order.service) {
        this.serviceWarning = true
        isValid = false
      }

      if (isValid) {
        this.makeOrder()
      }
    }
  },
  head () {
    return {
      title: 'Ödeme - Evdenmarket',
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
}

.Delivery {
  margin: 3rem 0;

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
}

.Payment {
  margin-bottom: 12rem;

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

      .icon {
        height: 24px;
        fill: $font-color;
      }
    }
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

    &-price {
      font-weight: 500;
      color: $primary-color;
      font-size: 2.2rem;
      font-weight: bold;
    }
  }

  &__note {
    margin-bottom: 3rem;

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

.Payment-wrapper {
  .warning {
    color: $red-color;
    font-size: 12px;
    margin-left: 1rem;
  }

  .title {
    font-size: 14px;
    margin-bottom: 1.5rem;

    &-wrapper {
      display: flex;
      align-items: baseline;
    }
  }
}

@include res(desktop) {
  .Order {
    position: static;
    box-shadow: none;
    z-index: 0;
    flex-direction: column;
    border: $border-2;
    border-radius: $sm-radius;
    height: 15rem;
    margin-top: 7rem;

    &--total {
      flex-direction: row;
      align-items: center;
      width: 100%;

      &-title {
        font-size: 16px;
        margin-bottom: 0;
        font-weight: 500;
      }
    }

    .btn-green {
      font-size: 16px;
      width: 28rem;
      font-weight: bold;
    }
  }

  .Payment-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 3rem;

    &-top {
      width: 60%;
    }
  }
}

.activeAddress,
.activeTime,
.activePayment {
  border-color: $primary-color;
}
</style>
