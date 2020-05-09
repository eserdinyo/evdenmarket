<template>
  <modal
    height="auto"
    :width="width"
    name="auth-modal"
    transition="pop-out"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <div
      class="auth-modal"
      :style="isRegister ? 'height: 510px;' : 'height: 430px;'"
    >
      <img :src="loginBg" class="auth-modal-img" alt="">
      <form class="auth-modal-form" @submit.prevent="loginOrRegister">
        <div v-if="isRegister" class="form-title">
          KAYIT OL
        </div>
        <div v-if="isLogin" class="form-title">
          GİRİŞ YAP
        </div>
        <div v-if="isRegister" class="form-group">
          <div class="form-item mr-2">
            <div class="form-label">ADINIZ</div>
            <input v-model="first_name" name="first_name" v-validate.disable="'required|min:9'" class="form-input" placeholder="Adınızı Girin">
            <span v-show="errors.has('Telefon')" class="input-error">{{ errors.first('Telefon') }}</span>
          </div>
          <div class="form-item ml-2">
            <div class="form-label">SOYADINIZ</div>
            <input v-model="last_name" class="form-input" placeholder="Soyadınızı Girin">
          </div>
        </div>
        <div class="form-group">
          <div class="form-item">
            <div class="form-label">
              TELEFON NUMARANIZ
            </div>
            <the-mask
              v-model="phone"
              v-validate.disable="'required|min:9'"
              name="Telefon"
              type="tel"
              class="form-input"
              placeholder="Cep Telefonu"
              :mask="['0 (###) ### ## ##']"
            />
            <span v-show="errors.has('Telefon')" class="input-error">{{ errors.first('Telefon') }}</span>
          </div>
        </div>
        <div class="form-group">
          <div class="form-item">
            <div class="form-label">
              ŞİFRENİZ
            </div>
            <input
              v-model="password"
              v-validate.disable="'required|min:6|max:20'"
              class="form-input"
              name="Şifre"
              type="password"
              placeholder="Şifrenizi Girin"
            >
            <span v-show="errors.has('Şifre')" class="input-error">{{ errors.first('Şifre') }}</span>
          </div>
          <div v-if="isRegister" class="form-item ml-3">
            <div class="form-label">
              ŞİFRENİZ TEKRAR
            </div>
            <input
              v-model="repassword"
              class="form-input"
              type="password"
              placeholder="Şifrenizi Tekrar Girin"
            >
          </div>
        </div>
        <div v-if="isRegister" class="form-group mt-5">
          <button type="submit" class="btn btn-green">
            <span v-if="!isLoading">KAYIT OL</span>
            <loading :is-loading="isLoading" />
          </button>
        </div>
        <div v-if="isLogin" class="form-group mt-5">
          <button type="submit" class="btn btn-green" :disabled="isLoading">
            <span v-if="!isLoading">GİRİŞ YAP</span>
            <loading :is-loading="isLoading" />
          </button>
        </div>

        <div class="form-group">
          <div class="form-forget">
            <a class="form-forget-link" href="">ŞİFREMİ UNUTTUM</a>
            <a
              v-if="isRegister"
              class="form-forget-link"
              @click="openLogin"
            >GİRİŞ YAP</a>
            <a
              v-if="isLogin"
              class="form-forget-link"
              @click="openRegister"
            >KAYIT OL</a>
          </div>
        </div>
      </form>
    </div>
  </modal>
</template>

<script>
import { TheMask } from 'vue-the-mask'

export default {
  components: {
    TheMask
  },
  data () {
    return {
      first_name: null,
      last_name: null,
      phone: null,
      password: null,
      repassword: null,
      isRegister: false,
      isLogin: true,
      width: 700,
      loginBg: require('../assets/images/login/1.jpg'),
      isLoading: false
    }
  },
  created () {
    if (process.browser) {
      this.width = Math.min(window.innerWidth - 30, 700)
    }
  },
  methods: {
    beforeOpen () {
      const randomNumber = Math.floor(Math.random() * 9) + 1
      this.loginBg = require(`../assets/images/login/${randomNumber}.jpg`)
    },
    beforeClose () {
      this.clear()
    },
    openRegister () {
      this.isRegister = true
      this.isLogin = false
    },
    openLogin () {
      this.isLogin = true
      this.isRegister = false
    },
    loginOrRegister () {
      this.isLogin ? this.login() : this.register()
    },
    login () {
      this.$validator.validateAll().then((res) => {
        if (res) {
          this.isLoading = true
          this.$store
            .dispatch('user/login', {
              phone: this.phone,
              password: this.password
            })
            .then((res) => {
              this.isLoading = false
              this.$modal.hide('auth-modal')
            })
            .catch(() => {
              this.isLoading = false
              this.alert('Hatalı Giriş', 'Girdiğiniz telefon numarası veya şifre hatalı!', 'error')
            })
        }
      })
    },
    register () {
      this.$store
        .dispatch('user/register', {
          phone: this.phone,
          password: this.password,
          repassword: this.repassword,
          first_name: this.first_name,
          last_name: this.last_name
        })
        .then((res) => {
          this.isLoading = false
          this.$modal.hide('auth-modal')
        })
        .catch(() => {
          this.alert('Hatalı Giriş', 'Daha önce kayıtlı biligler ile giriş yapmaya çalışıyorsunuz!', 'error')
        })
    },
    clear () {
      this.phone = ''
      this.password = ''
      this.repassword = ''
      this.first_name = ''
      this.last_name = ''
      this.openLogin()
    }
  }
}
</script>

<style lang="scss">
.auth-modal {
  display: flex;
  &-img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    display: none;
    width: 50%;
    overflow: hidden;
    position: relative;
  }
  &-form {
    width: 100%;
    padding: 2rem;
  }

  .form {
    text-align: center;
    &-title {
      font-size: 14px;
      border-bottom: $border;
      padding: 1rem 0;
      margin-bottom: 4rem;
      color: $font-color;
    }
    &-group {
      margin: 1rem 0;
      display: flex;
      width: 100%;
    }

    &-item {
      width: 100%;
      position: relative;
    }

    &-label {
      color: $font-color-gray;
      font-size: 11px;
      margin-bottom: 5px;

      span {
        font-size: 9px;
      }
    }

    &-input {
      margin-bottom: 1.5rem;
    }
    &-forget {
      display: flex;
      justify-content: space-between;
      border-top: $border;
      margin-top: 3rem;
      padding: 2rem 0;
      width: 100%;
      &-link {
        font-size: 10px;
        color: $font-color-gray;
        text-align: center;
        border-bottom: 1px solid $primary-color;
        cursor: pointer;
        user-select: none;
      }
    }
  }

  .input-error {
    color: $red-color;
    font-size: 12px;
    position: absolute;
    left: 0;
    bottom: -5px;
  }
}

@include res(desktop) {
  .auth-modal {
    &-img {
      display: block !important;
    }
    &-form {
      width: 50%;
    }
  }
}

.v--modal-box {
  border-radius: 8px !important;
}

.v--modal-overlay {
  background: #00000080 !important;
}

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all 0.5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: 0.5;
  transform: translateY(24px);
}
</style>
