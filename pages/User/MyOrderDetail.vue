<template lang="pug">
    .container
        .Sidebar
          p HESABIM
          sidebar
        .Detay
          .Detay__title Siparis Detayi
          .Detay__item(v-for="pr in orderDetails")
            img.Detay__item--image(:src='pr.image')
            .Detay__item--right
              .Detay__item--right--name {{pr.name}} ({{pr.quantity}})
              .Detay__item--right--price {{(pr.quantity * pr.price).toFixed(2)}} TL
          .Detay__total Toplam: {{getTotal}} TL
</template>

<script>
import sidebar from "@/components/Sidebar";

import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: "Siparis Detay | Evdenmarket",
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
      order: ""
    };
  },
  computed: {
    ...mapGetters(["loggedUser", "orderDetails", "orders"]),
    getTotal() {
      if (this.order) {
        return this.order.order_total.toFixed(2);
      }
    }
  },
  methods: {
    getOrder(orderid) {
      return this.orders.find(product => product.id == orderid);
    }
  },
  components: {
    sidebar
  },
  created() {
    const orderid = this.$route.params.id;

    this.$store.dispatch("getOrders", { user: this.loggedUser }).then(res => {
      this.order = this.getOrder(orderid);
    });

    this.$store.dispatch("getOrderDetails", { orderid, user: this.loggedUser });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  margin: 0 15px;

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

.Detay {
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
      @include res(tab-land) {
        width: 10%;
        margin-right: 2rem;
      }
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


