<template lang="pug">
    .container
      .Onay  
        iconSuccess.Onay__icon
        p.Onay__title SİPARİŞİN ALINDI.

</template>

<script>
import iconSuccess from "@/assets/icons/success";
import { mapGetters } from "vuex";
export default {
  head() {
    return {
      title: "Sipariş Onaylandi - Evdenmarket",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  components: {
    iconSuccess
  },
  computed: {
    ...mapGetters(["loggedUser"])
  },
  created() {
    this.$store
      .dispatch("deleteShopcartAfterOrder", {
        user: this.loggedUser
      })
      .then(res => {
        this.$store.dispatch("getShopcart", this.loggedUser);
      });
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  margin: 0 15px;
}

.Onay {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__icon {
    fill: $primary-color-dark;
    height: 100px;
  }
  &__title {
    font-size: 2rem;
    color: $primary-color-dark;
    text-align: center;
    text-transform: uppercase;
    margin-top: 1rem;
  }
}
</style>
