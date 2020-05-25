<template>
  <div class="container">
    <div class="Address-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Address">
        <div class="Address__title">
          <span>ADRESLERİM</span>
          <div class="btn btn-green" @click="$modal.show('address-modal')">
            <icon-plus />
            <span>EKLE</span>
          </div>
        </div>
        <div class="Address__body">
          <div v-for="(adr, idx) in addresses" :key="idx" class="Address__item">
            <div class="Address__item--header">
              <b class="mb-2 d-block">{{ adr.title }}</b>
              <p>{{ adr.address }}</p>
              <p>{{ adr.location }}</p>
              <p>{{ adr.direction }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import sidebar from '@/components/Sidebar'
import { iconPlus } from '@/components/icons'

export default {
  layout: 'cart-layout',
  components: {
    sidebar,
    iconPlus
  },
  data () {
    return {}
  },
  computed: {
    ...mapState({
      addresses: state => state.content.addresses
    })
  },
  created () {
    this.$store.dispatch('content/fetchAddresses')
  },
  head () {
    return {
      title: 'Siparislerim | Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Sidebar {
  display: none;
}

.Address {
  &__title {
    font-size: 14px;
    margin-top: 2rem;
    color: $font-color;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .btn-green {
      width: 80px;
      padding: 0;
      height: 30px;
      font-weight: 600;

      .icon {
        height: 12px;
        fill: #fff;
        margin-right: 5px;
      }
    }
  }

  &__body {
    margin-top: 2rem;
  }

  &__item {
    padding: 1rem;
    border-radius: $sm-radius;
    border: $border-2;
    margin-bottom: 2rem;
    display: block;
    transition: all 0.1s;

    &--header {
      font-size: 13px;
      p {
        &:not(:last-child) {
          margin-bottom: 5px;
        }
      }

      &-right {
        margin-left: auto;

        &-payment {
          color: $font-color-gray;
          font-size: 13px;
        }
      }
    }

    &--body {
      margin-top: 1rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}

@include res(desktop) {
  .Sidebar {
    display: block;
    margin-top: 2rem;
  }

  .Address-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 3rem;
  }
}
</style>
