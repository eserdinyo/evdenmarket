<template>
  <modal
    height="auto"
    :width="width"
    name="suggest-market-modal"
    transition="pop-out"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <div class="SuggestMarket">
      <div class="title">MARKET ÖNER</div>
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
        <input v-model="market_name" class="form-input" placeholder="Market Adı Girin">
      </div>
      <button class="btn btn-green">GÖNDER</button>
    </div>
  </modal>
</template>

<script>
import Multiselect from 'vue-multiselect'

export default {
  components: {
    Multiselect
  },
  data () {
    return {
      width: 300,
      cities: [],
      districts: [],
      city: '',
      district: '',
      market_name: ''
    }
  },
  watch: {
    city (val) {
      this.$axios(`cities/${val.id}`).then((res) => {
        this.districts = res.data
      })
      this.district = ''
    }
  },
  created () {
    if (process.browser) {
      this.width = Math.min(window.innerWidth - 30, 400)
    }
  },
  methods: {
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
