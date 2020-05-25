<template>
  <div class="container">
    <div class="Settings-wrapper">
      <div class="Sidebar">
        <sidebar />
      </div>
      <div class="Settings">
        <div class="Settings__title">HESAP AYARLARIM</div>
        <div class="Settings__body">
          <div class="form-group">
            <div class="form-item">
              <div class="form-label">ADINIZ</div>
              <input
                v-model="first_name"
                class="form-input"
                placeholder="Adınızı Girin"
              >
            </div>
            <div class="form-item">
              <div class="form-label">SOYADINIZ</div>
              <input
                v-model="last_name"
                class="form-input"
                placeholder="Soyadınızı Girin"
              >
            </div>
          </div>
          <div class="form-group">
            <div class="form-item">
              <div class="form-label">TELEFON</div>
              <the-mask
                v-model="phone"
                type="tel"
                class="form-input"
                placeholder="Cep Telefonu"
                :mask="['0 (###) ### ## ##']"
              />
            </div>
            <div class="form-item">
              <div class="form-label">E-POSTA</div>
              <input
                v-model="email"
                class="form-input"
                placeholder="Eposta Girin"
              >
            </div>
          </div>
          <div class="btn">BİLGİLERİMİ KAYDET</div>
        </div>
        <div class="Settings__title">ŞİFRE AYARLARIM</div>
        <div class="Settings__body">
          <div class="form-group form-group-password">
            <div class="form-item">
              <div class="form-label">ŞİFRENİZ</div>
              <input
                v-model="password"
                class="form-input"
                placeholder="Şifrenizi Girin"
              >
            </div>
            <div class="form-item">
              <div class="form-label">YENİ ŞİFRENİZ</div>
              <input
                v-model="new_password"
                class="form-input"
                placeholder="Yeni Şifre Girin"
              >
            </div>
            <div class="form-item">
              <div class="form-label">TEKRAR YENİ ŞİFRE</div>
              <input
                v-model="re_password"
                class="form-input"
                placeholder="Tekrar şifre Girin"
              >
            </div>
          </div>
          <div class="btn">ŞİFREMİ KAYDET</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import sidebar from '@/components/Sidebar'

export default {
  layout: 'cart-layout',
  components: {
    sidebar,
    TheMask
  },
  data () {
    return {
      userData: '',
      first_name: '',
      last_name: '',
      phone: '',
      email: '',
      password: '',
      new_password: '',
      re_password: ''
    }
  },
  created () {
    this.userData = { ...this.user }
    this.first_name = this.userData.first_name
    this.last_name = this.userData.last_name
    this.phone = this.userData.phone
    this.email = this.userData.email
  },
  head () {
    return {
      title: 'Ayarlarım | Evdenmarket'
    }
  }
}
</script>

<style lang="scss">
.Sidebar {
  display: none;
}

.Settings {
  &__title {
    font-size: 14px;
    margin-top: 2rem;
    color: $font-color;
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

    &:hover {
      border-color: $primary-color;
    }

    &--header {
      display: flex;
      justify-content: space-between;
      font-size: 13px;

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

      &-status {
        font-size: 13px;
        color: $primary-color;
      }
    }
  }

  .btn {
    margin-bottom: 4rem;
  }
  .form {
    &-item {
      margin-bottom: 1.5rem;
    }
    &-label {
      font-size: 12px;
      margin-bottom: 5px;
    }
    &-input {
      padding: 1.5rem;
    }
  }
}

@include res(desktop) {
  .Sidebar {
    display: block;
    margin-top: 2rem;
  }

  .Settings-wrapper {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 3rem;

    .form {
      &-group {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 2rem;
      }
    }

    .form-group-password {
      grid-template-columns: 1fr 1fr 1fr;
    }

    .btn {
      width: 24rem;
      margin-left: auto;
      margin-top: 2rem;
    }
  }
}
</style>
