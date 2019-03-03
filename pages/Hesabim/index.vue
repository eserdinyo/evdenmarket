<template lang="pug">
  .container
    .Account
      .Account__title Hesabım
      .Account__links
        .Account__links--link
          nuxt-link(to="/") Kampanyalarım
          .Account__links--link--arrow
        .Account__links--link
          nuxt-link(to="/") Üyelik Bilgilerim
          .Account__links--link--arrow
        .Account__links--link
          nuxt-link(to="/adreslerim") Adreslerim
          .Account__links--link--arrow
        .Account__links--link
          nuxt-link(to="/") İletişim Tercihleri
          .Account__links--link--arrow
        .Account__links--link
          nuxt-link(to="/") İndirim Çeklerim
          .Account__links--link--arrow
      .Account__title Siparişlerim
        .Account__links
          .Account__links--link
            nuxt-link(to="/siparislerim") Siparişlerim
            .Account__links--link--arrow
          .Account__links--link
            nuxt-link(to="/") Favori Siparişlerim
            .Account__links--link--arrow
      .Account__logout(@click="logout")
        iconLogout.Account__logout--icon
        | Çıkış Yap
      
</template>

<script>
import iconLogout from "@/assets/icons/logout";

export default {
  middleware: "auth",
  name: "Hesabim",
  components: {
    iconLogout
  },
  methods: {
    logout() {
      this.$auth.logout().then(res => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.container {
  margin-top: 0rem;
  padding: 0 15px;

  @include res("tab-land") {
    width: 96rem;
    margin: 0 auto;
  }
}

.Account {
  &__title {
    font-size: 2rem;
    font-weight: 500;
    margin-top: 2rem;
  }
  &__links {
    margin-top: 1rem;
    &--link {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: $primary-color;
      color: #fff;
      padding: 0rem 2rem;
      border-radius: 0.5rem;
      font-size: 1.5rem;
      a {
        padding: 1rem 2rem;
        width: 100%;
      }
      &:not(:last-child) {
        margin-bottom: 1.5rem;
      }
      &--arrow {
        width: 0;
        height: 0;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid #fff;
      }
    }
  }

  &__logout {
    margin-top: 3rem;
    display: flex;
    background: $red-color;
    padding: 2rem 2rem;
    border-radius: 10px;
    color: #fff;

    &--icon {
      margin-right: 2rem;
      fill: #fff;
    }
  }
}
</style>
