<template>
  <modal
    height="auto"
    :width="width"
    name="address-modal"
    transition="pop-out"
    @before-open="beforeOpen"
  >
    <div class="SuggestMarket">
      <div class="title">ADRES EKLEYİN</div>
      <div class="form-item">
        <multiselect
          v-model="city"
          :options="cities"
          :multiple="false"
          :close-on-select="true"
          :hide-selected="true"
          :preserve-search="true"
          selected-label
          deselect-label
          select-label
          placeholder="Şehir Seçin"
          label="name"
        />
      </div>
      <div class="form-item">
        <multiselect
          v-model="district"
          :options="districts"
          :multiple="false"
          :close-on-select="true"
          :hide-selected="true"
          :preserve-search="true"
          selected-label
          :disabled="!districts.length > 0"
          deselect-label
          select-label
          placeholder="İlçe Seçin"
          label="name"
        />
      </div>
      <div class="form-item">
        <multiselect
          v-model="neighborhood"
          :options="neighborhoods"
          :multiple="false"
          :close-on-select="true"
          :hide-selected="true"
          :preserve-search="true"
          selected-label
          :disabled="!neighborhoods.length > 0"
          deselect-label
          select-label
          placeholder="Mahalle Seçin"
          label="name"
        />
      </div>
      <div class="form-item">
        <input
          v-model="address"
          class="form-input"
          placeholder="Cadde, Sokak, No"
        >
      </div>
      <div class="form-item">
        <input
          v-model="direction"
          class="form-input"
          placeholder="Adres Tarifi"
        >
      </div>
      <div class="form-item">
        <input v-model="title" class="form-input" placeholder="Adres Adı">
      </div>
      <div class="form-item">
        <the-mask
          v-model="phone"
          v-validate.disable="'required|min:9'"
          name="Telefon"
          type="tel"
          class="form-input"
          placeholder="Cep Telefonu"
          :mask="['0 (###) ### ## ##']"
        />
      </div>

      <div class="form-item">
        <input v-model="fullname" class="form-input" placeholder="Ad Soyad">
      </div>
      <button class="btn btn-green" @click="saveAddress">
        <span v-if="!isLoading">KAYDET</span>
        <loading :is-loading="isLoading" />
      </button>
    </div>
  </modal>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { TheMask } from 'vue-the-mask'

export default {
  components: {
    Multiselect,
    TheMask
  },
  data () {
    return {
      title: '',
      fullname: '',
      address: '',
      isLoading: false,
      width: 300,
      cities: [],
      districts: [],
      neighborhoods: [],
      neighborhood: '',
      city: '',
      district: '',
      direction: '',
      phone: ''
    }
  },
  watch: {
    city (val) {
      this.$axios(`cities/${val.id}`).then((res) => {
        this.districts = res.data
      })
      this.district = ''
    },
    district (val) {
      this.$axios(`districts/${val.id}`).then((res) => {
        this.neighborhoods = res.data
      })
      this.neighborhood = ''
    }
  },
  created () {
    if (process.browser) {
      this.width = Math.min(window.innerWidth - 30, 400)
    }
  },
  methods: {
    saveAddress () {
      this.isLoading = true
      this.$axios
        .$post('addresses', {
          title: this.title,
          fullname: this.fullname,
          phone: this.phone,
          neighborhood_id: this.neighborhood.id,
          address: this.address,
          direction: this.direction
        })
        .then((res) => {
          this.alert(
            'Başarılı',
            'Adresiniz başarı ile kaydedilmiştir.',
            'success'
          )
          this.$modal.hide('address-modal')
          this.isLoading = false
          this.$store.dispatch('content/fetchAddresses')
        })
    },
    beforeOpen () {
      this.$axios('cities').then((res) => {
        this.cities = res.data
      })
    }
  }
}
</script>

<style lang="scss">
.SuggestMarket {
  padding: 3rem 3rem;

  .title {
    margin-bottom: 2rem;
    font-size: 14px;
  }

  .form-item {
    margin-bottom: 2rem;
  }
}
</style>
