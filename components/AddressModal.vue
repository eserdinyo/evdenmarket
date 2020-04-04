<template lang="pug">
    transition(name='page')
        .Address__modal(v-if='openmodal')
            .Address__modal-header
                p Yeni Adres Ekle
                a.Address__modal--close_btn(@click='closeModal')
                    iconClose.Address__modal--close_btn-icon
            .Address__modal-body
                p.Address__modal-body--title Teslimat Adresi
                form.Address__form(@submit.prevent="addAddress")
                  .Address__form--item
                      label.Address__form--item-label Adres İsim *
                      input.Address__form--item-input(
                      v-validate.disable="'required|email'",
                      name="E-Posta",
                      placeholder='Ev, Yurt, İş Yeri',
                      v-model="address.address_name")
                  .Address__form--item
                      label.Address__form--item-label İsim *
                      input.Address__form--item-input(
                      v-validate.disable="'required|email'",
                      name="E-Posta",
                      placeholder='İsim',
                      v-model="address.firstname")
                  .Address__form--item
                      label.Address__form--item-label Soyad *
                      input.Address__form--item-input(
                      v-validate.disable="'required|email'",
                      name="E-Posta",
                      placeholder='Soyad',
                      v-model="address.lastname")
                  .Address__form--item
                      label.Address__form--item-label Cep Telefonu *
                      cleave.Address__form--item-input(
                      :options="options",
                      required,
                      type="text"
                      placeholder='555 444 33 22',
                      v-model="address.phone")
                  .Address__form--item
                      label.Address__form--item-label İl *
                      select.Address__form--item-input(v-model="address.city",@change="getTowns")
                          option(disabled, selected, value='Şehir Seçin') Şehir Seçin
                          option(v-for="city in cities", 
                          :key="city.id", 
                          :value="city") {{city.CityName}}
                  .Address__form--item
                      label.Address__form--item-label İlçe *
                      select.Address__form--item-input(v-model="address.town",@change="getNeighborhood")
                          option(disabled, selected, value='Şehir Seçin') İlçe Seçin
                          option(v-for="town in towns", 
                          :key="town.id", 
                          :value="town") {{town.TownName}}
                  .Address__form--item
                      label.Address__form--item-label Mahalle *
                      select.Address__form--item-input(v-model="address.neigh")
                          option(disabled, selected, value='Şehir Seçin') Mahalle Seçin
                          option(v-for="dr in districts", 
                          :key="dr.id", 
                          :value="dr") {{dr.NeighborhoodName}}
                  .Address__form--item
                      label.Address__form--item-label Adres
                      textarea.Address__form--item-input(
                      rows='5',
                      max="10",
                      v-model="address.open_address")
                  
                  .Address__form--item
                      label.Address__form--item-label Adres Tarifi
                      textarea.Address__form--item-input(
                      v-validate.disable="'required|email'",
                      name="E-Posta",
                      rows='5',
                      max="10",
                      v-model="address.address_desc")
                  button.login-button(type='submit') Kaydet 
</template>

<script>
import iconClose from "@/assets/icons/close";
import { mapGetters } from "vuex";
import Swal from 'sweetalert2'

export default {
  data() {
    return {
      address: {
        address_name: "",
        firstname: "",
        lastname: "",
        phone: "",
        city: "",
        town: "",
        neigh: "",
        open_address: "",
        address_desc: ""
      },
      options: {
        phone: true,
        phoneRegionCode: "TR"
      }
    };
  },
  components: {
    iconClose
  },
  computed: {
    ...mapGetters(["openmodal", "loggedUser", "cities", "towns", "districts"])
  },
  methods: {
    addAddress() {
      this.$store
        .dispatch("addAddress", {
          address: this.address,
          user: this.loggedUser
        })
        .then(res => {
          this.$store.dispatch("getAddresses", this.loggedUser);

          Swal({
            title: "Adres Kaydedildi",
            icon: "success",
            button: "Tamam"
          });
          this.closeModal();
        });
    },
    closeModal() {
      this.$store.commit("openModal", false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    },
    getTowns() {
      this.$store.dispatch("getTowns", this.address.city.CityID);
    },
    getNeighborhood() {
      this.$store.dispatch("getNeighborhoods", this.address.town.TownID);
    }
  },
  created() {
    this.$store.dispatch("getCities");
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/main.scss";

.Address {
  &__modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 95%;
    overflow-y: auto;
    margin: 1rem;
    margin-top: 2rem;
    background-color: #fff;
    border-radius: 3px;
    z-index: 9999999;
    box-shadow: 0 4px 8px rgba(black, 0.5);
    @include res(tab-land) {
      width: 50rem;
      margin: 2rem auto;
      box-shadow: 0 8px 16px rgba(black, 0.5);
    }

    &--close_btn-icon {
      fill: $nav-color;
      height: 25px;
    }

    &-header {
      background-color: #eff1f3;
      display: flex;
      justify-content: space-between;
      padding: 2rem;
      p {
        font-size: 2rem;
        color: $font-color;
      }
    }

    &-body {
      padding: 2rem;

      &--title {
        font-size: 1.8rem;
        color: $font-color;
      }
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    margin-top: 2rem;
    ::placeholder {
      color: #bbb;
    }

    &--item {
      width: 100%;

      &-label {
        display: inline-block;
        margin-bottom: 1rem;
        margin-top: 1rem;
        color: $font-color;
        letter-spacing: 1px;
      }
      &-input {
        width: 100%;
        outline: none;
        margin-bottom: 1rem;
        padding: 1rem;
        border-radius: 5px;
        border: 1px solid #ddd;
        font-size: 1.5rem;
        font-weight: 500;
        background: none;
        color: $font-color;

        &:focus {
          border: 1px solid #bbb;
        }
      }
    }

    &--error {
      color: #e74c3c;
      font-size: 12px;
      font-weight: 500;
      margin-top: -8px;
    }
  }
}
</style>
