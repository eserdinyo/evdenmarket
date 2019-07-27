<template>
  <div>
    <no-ssr>
      <Slider class="Slider" />
    </no-ssr>
    <Discount />
  </div>
</template>

<script>
import Discount from "@/components/Discount";
import Slider from "@/components/Slider";
import Category from "@/components/Category";
import ChangeMarket from "@/components/ChangeMarket";
import { mapGetters } from "vuex";

export default {
  components: {
    Discount,
    Slider,
    Category,
    ChangeMarket
  },
  head() {
    return {
      title: "Evdenmarket - Market Sana Gelsin ",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["isLoggedIn", "loggedUser"])
  },
  created() {

    /*  if (this.$route.query.register) {
      this.$store.dispatch("register", {
        user: this.$auth.user,
        provider: this.$auth.strategy.name
      });
      this.$router.push("/");
    } */
  }
};
</script>

<style lang="scss">
@import "@/assets/style/main.scss";

.Slider {
  margin-top: 1rem;
}

.swal-button {
  background-color: $primary-color;
}

.swal-button:not([disabled]):hover {
  background-color: $primary-color-hover;
}
</style>




