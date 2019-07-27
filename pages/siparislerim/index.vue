<template lang='pug'>
    .container
        .Sidebar
          p HESABIM
          sidebar
        .Orders
          .Orders__title Siparislerim
          .Orders__body
            .Orders__item(v-for='order in orders')
              .Orders__item--header
                .Orders__item--left
                  p.Orders__item--header-date {{day(order.createdAt)}} {{getMonth(month(order.createdAt))}}
                  p.Orders__item--header-market Ulusoy Market
                .Orders__item--header-right
                  p.Orders__item--header-right-price {{order.order_total.toFixed(2)}} TL
                  p.Orders__item--header-right-payment Kapida Odeme
                .Orders__item--header-detay
                  nuxt-link(:to="{ name: 'siparislerim-detay-id', params: { id:order.id}}")
                    arrowIcon.Orders__item--header-detay--icon
                  
              .Orders__item--body
                iconCheck.Orders__item--body-icon
                p.Orders__item--body-status Isleme Alindi
         
</template>

<script>
import sidebar from "@/components/Sidebar";
import arrowIcon from "@/assets/icons/arrow_down";
import iconCheck from "@/assets/icons/success";
import { mapGetters } from "vuex";

export default {
  middleware: "auth",
  head() {
    return {
      title: "Siparislerim | Evdenmarket",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  data() {
    return {
      months: [
        "Ocak",
        "Şubat",
        "Mart",
        "Nisan",
        "Mayıs",
        "Haziran",
        "Temmuz",
        "Ağustos",
        "Eylül",
        "Ekim",
        "Kasım",
        "Aralık"
      ]
    };
  },

  computed: {
    ...mapGetters(["orders", "loggedUser"]),
    day() {
      return date => date.substring(8, 10).replace("0", "");
    },
    month() {
      return date => parseInt(date.substring(5, 7).replace("0", ""));
    }
  },
  methods: {
    getMonth(number) {
      return this.months[number - 1];
    }
  },
  components: {
    sidebar,
    arrowIcon,
    iconCheck
  },
  created() {
    this.$store.dispatch("getOrders", { user: this.loggedUser });
  }
};
</script>

<style lang='scss' scoped>
@import "@/assets/style/main.scss";

.container {
  margin-left: 15px;
  margin-right: 15px;

  @include res(tab-land) {
    display: grid;
    grid-template-columns: 25% 75%;
    max-width: 96rem;
    margin: 0 auto;
  }
}

.Sidebar {
  display: none;
  @include res(tab-land) {
    display: unset;
    margin-top: 4rem;

    p {
      color: $font-color;
      margin-bottom: 2rem;
      font-size: 1.4rem;
    }
  }
}

.Orders {
  &__title {
    font-size: 2.4rem;
    margin-top: 2rem;
    color: $font-color;
  }

  &__body {
    margin-top: 2rem;
  }

  &__item {
    padding: 1rem;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin-bottom: 2rem;
    color: $font-color;

    &--header {
      display: flex;
      justify-content: space-between;

      &-date {
        color: $font-color-gray;
        font-size: 14px;
      }

      &-market {
        font-weight: 600;
        font-size: 1rem;
        text-transform: uppercase;
        color: $font-color-gray;
        margin-top: 0.5rem;
      }

      &-detay {
        margin-left: 1rem;

        &--icon {
          fill: rgba($font-color, 0.7);
          transform: rotate(270deg);
          background: #eee;
          margin-top: 1rem;
          border-radius: 50%;
        }
      }

      &-right {
        margin-left: auto;

        &-price {
          color: $primary-color-2;
          text-align: right;
          font-weight: 700;
        }

        &-payment {
          color: $font-color-gray;
          font-size: 13px;
          @include res(tab-land) {
            margin-top: 1rem;
          }
        }
      }
    }

    &--body {
      display: flex;
      margin-top: 1rem;

      &-status {
        font-weight: 600;
        font-size: 13px;
      }

      &-icon {
        background: $primary-color-2;
        height: 15px;
        fill: #fff;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
    }
  }
}
</style>