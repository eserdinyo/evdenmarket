<template lang='pug'>
    .container
        .Sepet__title Sepet
        .Sepet
          .Sepet__item(v-for='product in shopcart')
            img.Sepet__item--image(:src='product.image')
            .Sepet__item--name {{product.name}} ({{product.quantity}})
            .Sepet__item--price {{(product.price * product.quantity).toFixed(2)}} TL
          .Sepet__bottom
            .Sepet__bottom--total 
              p.Sepet__bottom--total-title Toplam
              p.Sepet__bottom--total-price {{totalPrice.toFixed(2)}} TL
        .Address
          .Address__top
            p.Address__title Teslimat Adresi
            a.btn.Address__top--btn(@click='openModal')
              span.Address__top--plus +
              p Adres Ekle
          p.Address__warning(v-if='addressWarning') Bir adres seçin
          .Address__item(v-for='address in addresses',@click="makeAddresActive(address.id)" :class="{activeAddress:address.id == selectedAddressId}")
            .Address__item--top
                .Address__name {{address.address_name}}
                p.Address__detay {{address.neighName | lowerCase}} {{address.open_address | lowerCase}} 
                  br
                  | {{address.townName}}/{{address.cityName}}
          .Address__empty(v-if='addresses.length==0')
            p.Address__empty--title Kayıtlı bir adresiniz yok.
           
        .Delivery
          p.Delivery__title Servis Saati
          p.Delivery__warning(v-if='serviceWarning') Servis saati seçin
          .Delivery__times
            .Delivery__times--time(@click="makeTimeActive(1,'12:00 - 13:00')" :class="{activeTime:1 == selectedTime}") 12:00 - 13:00
            .Delivery__times--time(@click="makeTimeActive(2,'13:00 - 14:00')" :class="{activeTime:2 == selectedTime}") 13:00 - 14:00
            .Delivery__times--time(@click="makeTimeActive(3,'14:00 - 15:00')" :class="{activeTime:3 == selectedTime}") 14:00 - 15:00
            .Delivery__times--time(@click="makeTimeActive(4,'15:00 - 16:00')" :class="{activeTime:4 == selectedTime}") 15:00 - 16:00
            .Delivery__times--time(@click="makeTimeActive(5,'16:00 - 17:00')" :class="{activeTime:5 == selectedTime}") 16:00 - 17:00
            .Delivery__times--time(@click="makeTimeActive(6,'17:00 - 18:00')" :class="{activeTime:6 == selectedTime}") 17:00 - 18:00
        
        .Order__note
          .Order__note--title Sipariş Notu
          textarea.Order__note--note(rows='4',v-model='order.note')
        
        
        .Payment
          p.Payment__title Ödeme Şekli
          p.Payment__warning(v-if='paymentWarning') Ödeme yöntemi seçin
          .Payment__types
            .Payment__top 
              p ONLINE ÖDEME
              .Payment__types--item.Payment__types--item-1(:class="{activePayment:1 == selectedPayment}")
                .Payment__types--item-title 
                  | Online Ödeme
                  span.Payment__types--item-soon (Yakinda)
            .Payment__bottom 
              p KAPIDA ÖDEME
              .Payment__types--item(@click="selectPaymentType(2)" :class="{activePayment:2 == selectedPayment}")
                .Payment__types--item-title Nakit
                iconWallet.Payment__types--item-icon
                
              .Payment__types--item(@click="selectPaymentType(3)" :class="{activePayment:3 == selectedPayment}")
                .Payment__types--item-title Kredi/Banka Kartı 
                iconCreditCard.Payment__types--item-icon
        .Order
          a.Order__btn.btn(@click='makeOrder') Siparişi Onayla
        addressModal
        
                  

</template>

<script>
import { mapGetters } from "vuex";
import iconWallet from "@/assets/icons/wallet";
import iconCreditCard from "@/assets/icons/credit-card";
import addressModal from "@/components/AddressModal";

export default {
  head() {
    return {
      title: "Sipariş Onay - Evdenmarket",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },

  filters: {
    lowerCase: val => {
      if (!val) return "";
      return val.toLowerCase();
    }
  },
  data() {
    return {
      selectedAddressId: "",
      selectedTime: "",
      selectedPayment: "",
      paymentWarning: false,
      serviceWarning: false,
      addressWarning: false,
      order: {
        total: "",
        service: "",
        payment: "",
        note: "",
        address: ""
      }
    };
  },
  components: {
    iconWallet,
    iconCreditCard,
    addressModal
  },
  computed: {
    ...mapGetters(["totalPrice", "shopcart", "loggedUser", "addresses"])
  },
  methods: {
    makeAddresActive(id) {
      this.selectedAddressId = id;
      this.order.address = id;
      this.addressWarning = false;
      console.log(id);
      
    },
    makeTimeActive(id, hour) {
      this.selectedTime = id;
      this.order.service = hour;
      this.serviceWarning = false;
    },
    selectPaymentType(id) {
      this.selectedPayment = id;
      this.order.payment = 1;
      this.paymentWarning = false;
    },
    openModal() {
      this.$store.commit("openModal", true);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    },

    makeOrder() {
      this.order.total = this.totalPrice;
      if (!this.order.address) this.addressWarning = true;
      if (!this.order.payment) this.paymentWarning = true;
      if (!this.order.service) this.serviceWarning = true;
      if (this.order.address && this.order.payment && this.order.service) {
        this.$store
          .dispatch("addOrder", {
            order: this.order,
            user: this.loggedUser
          })
          .then(res => {
            this.shopcart.forEach(product => {
              this.$store.dispatch("addOrderDetail", {
                orderid: res.data.id,
                product,
                user: this.loggedUser
              });
            });
            this.$router.push("/onay");
          });
      }
    }
  },
  created() {
    this.$store.dispatch("getAddresses", this.loggedUser);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  margin: 0 15px;
  @include res(tab-land) {
    max-width: 96rem;
    margin: 0 auto;
  }
}

.Sepet {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin-top: 1rem;
  &__title {
    font-size: 2.4rem;
    margin-top: 2rem;
    color: $font-color;
  }
  &__item {
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(204, 204, 204, 0.3);
    &--name {
      margin-right: 0;
      @include res(tab-land) {
        font-size: 1.4rem;
        margin-right: auto;
      }
    }

    &--image {
      width: 5%;
      margin-right: 1rem;
      display: none;
      @include res(tab-land) {
        display: unset;
      }
    }
  }

  &__bottom {
    margin-top: 2rem;
    &--total {
      display: flex;
      justify-content: flex-end;
      font-weight: 700;
      font-size: 2rem;
      color: $primary-color-dark;
      &-title {
        margin-right: 1rem;
      }
    }
  }
}

.Address {
  margin-top: 3rem;
  &__top {
    display: flex;

    &--plus {
      font-size: 2rem;
      margin-right: 1rem;
      font-weight: 500;
    }
    &--btn {
      padding: 0rem 1rem;
      display: flex;
      align-items: center;
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
    font-size: 2.4rem;
    color: $font-color;
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

    @include res(tab-land) {
      font-size: 1.2rem;
    }
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
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
    margin-bottom: 2rem;
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
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 1rem 2rem;
    cursor: pointer;

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
    font-size: 1.4rem;
    color: #98a0a9;
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
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: $font-color;
  }

  &__times {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;

    &--time {
      text-align: center;
      padding: 0.5rem 0.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      color: $font-color;
      cursor: pointer;
    }
  }

  &__warning {
    color: $red-color;
    margin-bottom: 0.5rem;
  }
}

.Payment {
  &__title {
    font-size: 2.4rem;
    margin-bottom: 1rem;
    color: $font-color;
    margin-top: 2rem;
  }

  &__top {
    p {
      margin-bottom: 0.5rem;
      color: $font-color;
    }
  }
  &__bottom {
    margin-top: 2rem;

    p {
      margin-bottom: 0.5rem;
      color: $font-color;
    }
  }

  &__types {
    &--item {
      padding: 1rem 2rem;
      border: 1px solid #ccc;
      border-radius: 5px;
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
    }
  }

  &__warning {
    color: $red-color;
    margin-bottom: 0.5rem;
  }
}

.Order {
  margin-top: 3rem;
  margin-bottom: 2rem;
  display: flex;
  @include res(tab-land) {
  }

  &__btn {
    padding: 1rem 1rem;
    text-align: center;
    width: 100%;
    font-size: 2rem;
    background-color: $primary-color-hover;
    @include res(tab-land) {
      width: auto;
      margin-left: auto;
      font-size: 1.6rem;
      padding: 0.5rem 1.5rem;
    }
  }

  &__note {
    &--title {
      font-size: 2.4rem;
      margin-bottom: 1rem;
      color: $font-color;
    }

    &--note {
      border: 1px solid #ccc;
      width: 100%;
      outline: none;
      border-radius: 5px;
      padding: 1rem;
      color: $font-color;

      &:focus {
        border: 1px solid #bbb;
      }
    }
  }
}

.activeAddress,
.activeTime,
.activePayment {
  border-color: $primary-color-2;
}
</style>