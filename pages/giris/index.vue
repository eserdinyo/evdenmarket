<template lang="pug">
  .container
    .Login
      .Login__box
        p.Login__error(v-if="showError") E-posta adresiniz ya da şifreniz yanlış.
        h3.Login__title GİRİŞ
          .login__buttons
            //form.Login__form(@submit.prevent="login")
              input.Login__form--item( 
                placeholder='E-Posta Adresi',
                v-validate.disable="'required|email'",
                name="E-Posta",
                autofocus,
                v-model="email")

              span.Login__form--error(v-show="errors.has('E-Posta')") {{ errors.first('E-Posta') }}

              input.Login__form--item(type='password', 
              v-validate.disable="'required|min:10'",
              name="Şifre"
              placeholder='Şifre',
              v-model="password")

              span.Login__form--error(v-show="errors.has('Şifre')") {{ errors.first('Şifre') }}          

              
              button.login-button(type='submit') Giriş Yap
            button.social__btn.social__btn--google(@click='google')
              img(src="@/assets/images/google__icon.png")
              .social__btn--title Google

            button.social__btn.social__btn--face(@click='facebook')
              img(src="@/assets/images/facebook__icon.png")
              .social__btn--title Facebook


      img.Login__img(src='@/assets/images/banana.png', alt='')
      .Login__register
        nuxt-link(to="/kayit") Uye Ol
        nuxt-link(to="/forget") Sifremi Unuttum
</template>

<script>
export default {
  middleware: "guest",
  head() {
    return {
      title: "Giriş - Evdenmarket",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
  data() {
    return {
      email: "",
      password: "",
      showError: false
    };
  },
  methods: {
    /*  login() {
      this.$validator.validateAll().then(res => {
        if (res) {
          this.$auth
            .loginWith("local", {
              data: {
                email: this.email,
                password: this.password
              }
            })
            .catch(err => {
              if (err) {
                this.showError = true;
              }
            });
        }
      });
    } */

    /*  async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            password: this.password
          }
        });
        
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    } */

    async google() {
      await this.$auth.loginWith("google").catch(e => {
        console.log(e);
      });
    },
    facebook() {
      this.$auth.loginWith("facebook");
    }
  },
  created() {
    if (this.$route.name == "giris") {
      this.$store.commit("setLogin");
    }
  },
  beforeDestroy() {
    this.$store.commit("setLogin");
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/style/main.scss";
.container {
  margin-left: 15px;
  margin-right: 15px;
}
.login__buttons {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 3rem;
  padding-bottom: 2rem;
}

.social__btn {
  cursor: pointer;
  width: 20rem;
  margin-bottom: 2rem;
  transition: all 0.2s;
  position: relative;
  background-color: #fff;
  border: 1px solid #00000033;
  border-radius: 3px;
  padding: 1rem 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  font-weight: 500;

  &--google {
    background-color: #fff;
    color: #757575;
    padding-left: 1.8rem !important;
    &:hover {
      color: #6d6d6d;
      background-color: #eee;
      border-color: rgba(0, 0, 0, 0.2);
    }
  }

  &--face {
    background-color: #3b5998;
    color: #fff;
  }

  &--title {
    font-size: 1.5rem;
    margin-left: 1rem;
  }

  img {
    width: 2rem;
  }
}

.Login {
  min-width: 30rem;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  &__error {
    position: absolute;
    top: 3%;
    left: 3%;
    font-size: 12px;
    font-weight: 500;
    color: #dc3545;
  }
  &__img {
    position: absolute;
    top: 0%;
    right: -15%;
    z-index: -1;
    transform: rotate(-30deg);
  }

  box-shadow: $shadow;
  @include res(tab) {
    width: 50rem;
  }
  &__title {
    margin-bottom: 2rem;
    font-size: 2rem;
    font-weight: 400;
    color: $urun-title-color;
  }
  &__box {
    border-radius: 5px;
    padding: 4rem 2rem;
  }

  &__form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 1rem;
    ::placeholder {
      color: #ccc;
    }

    &--item {
      width: 80%;
      outline: none;
      margin-bottom: 1rem;
      padding: 1rem 0;
      border: none;
      border-bottom: 1px solid #ddd;
      font-size: 1.3rem;
      font-weight: 500;
      background: none;

      &:focus {
        border-bottom: 1px solid $primary-color;
      }
    }

    &--error {
      color: #e74c3c;
      font-size: 12px;
      font-weight: 500;
      margin-top: -8px;
    }
  }

  &__forget {
    font-size: 1.2rem;
    padding-top: 1rem;
    color: $urun-marka-color;
    text-transform: uppercase;
  }

  &__register {
    position: absolute;
    left: 2rem;
    bottom: 1rem;

    & a {
      font-size: 1.2rem;
      color: #2c3e51d0;
      padding-right: 1rem;
    }
  }
}
</style>

