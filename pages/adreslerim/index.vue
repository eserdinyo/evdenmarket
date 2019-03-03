<template lang='pug'>
    .container
        .Sidebar
          p HESABIM
          sidebar
        .Address
          .Address__top
              p.Address__title Adreslerim
              a.btn.Address__btn(@click='openModal')
                span.Address__plus +
                | Address Ekle
          .Address__bottom
            .Address__item(v-for='address in addresses')
              .Address__item--top
                .Address__name {{address.address_name}}
                p.Address__detay {{address.neighborhood}} {{address.street}} {{address.apt_name_no}} 
                  br
                  | {{address.district}}/{{address.city}}
              .Address__item--bottom
                a.Address__delete_btn 
                  iconEdit.Address__delete_btn-icon
                  p Düzenle
                a.Address__delete_btn
                  iconDelete.Address__delete_btn-icon--del
                  p Sil
        addressModal
          

</template>

<script>
import iconDelete from "@/assets/icons/delete";
import iconEdit from "@/assets/icons/edit";
import addressModal from "@/components/AddressModal";
import sidebar from "@/components/Sidebar";

import { mapGetters } from "vuex";

export default {
  head() {
    return {
      title: "Adreslerim | Evdenmarket",
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
    ...mapGetters(["loggedUser", "addresses"])
  },
  methods: {
    openModal() {
      this.$store.commit('openModal', true);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  },
  components: {
    iconDelete,
    iconEdit,
    addressModal,
    sidebar
  },
  created() {
    this.$store.dispatch("getAddresses", this.loggedUser);
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

.Address {
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
      fill: $font-color-gray;
      margin-bottom: 3px;
      height: 13px;

      &--del {
        fill: $font-color-gray;
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
  }

  &__plus {
    font-size: 2rem;
    margin-right: 1rem;
    font-weight: 700;
  }

  &__title {
    font-size: 2.4rem;
    color: $font-color;
  }

  &__bottom {
    margin-top: 2rem;
  }

  &__item {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 1rem 2rem;

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
}


</style>