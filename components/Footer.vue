<template>
  <div class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-left">
          <div class="social">
            <i class="fa fa-facebook" />
            <i class="fa fa-twitter" />
            <i class="fa fa-instagram" />
            <i class="fa fa-youtube" />
          </div>
          <div class="apps">
            <icon-appstore />
            <icon-googleplay />
          </div>
        </div>
        <div class="footer-menu">
          <div class="footer-menu-item">
            <div class="footer-menu-title">
              İŞLEM REHBERİ
            </div>
            <div class="footer-menu-list">
              <a href="">Ödeme</a>
              <a href="">Sipariş İşlemleri</a>
              <a href="">Üyelik İşlemleri</a>
              <a href="">Kullanım Sözleşmesi</a>
              <a href="">Güncel Soru ve Cevaplar</a>
            </div>
          </div>
          <div class="footer-menu-item">
            <div class="footer-menu-title">
              SİPARİŞ
            </div>
            <div class="footer-menu-list">
              <a href="">Gizlilik</a>
              <a href="">KVKK</a>
              <a href="">İletişim</a>
              <a href="">Kullanım Sözleşmesi</a>
            </div>
          </div>
          <div class="footer-menu-item">
            <div class="footer-menu-title">
              DESTEK
            </div>
            <div class="footer-menu-list">
              <a href="">Gizlilik</a>
              <a href="">KVKK</a>
              <a href="">İletişim</a>
              <a href="">Kullanım Sözleşmesi</a>
            </div>
          </div>
          <div class="footer-menu-item">
            <div class="footer-menu-title">
              BİZE KATILIN
            </div>
            <div class="footer-menu-list">
              <a
                href="javascript:;"
                @click="$modal.show('suggest-market-modal')"
              >Market Öner</a>
              <a href="">KVKK</a>
              <a href="">İletişim</a>
              <a href="">Kullanım Sözleşmesi</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>evdenmarket</span> &#169; 2020 Tüm Hakları Saklıdır
    </div>
  </div>
</template>

<script>
import { iconGoogleplay, iconAppstore } from '@/components/icons'
export default {
  components: {
    iconGoogleplay,
    iconAppstore
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: $grey-color;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &-top {
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
    padding-bottom: 3rem;

    .social {
      display: flex;
      .fa {
        font-size: 2.8rem;
        margin: 0 1rem;
        color: #fff;
      }
    }
  }

  &-left {
    margin: 0 auto;
    .apps {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      .icon {
        &:first-child {
          margin-bottom: 1rem;
        }
      }
    }
  }

  &-menu {
    display: none;
    margin-left: auto;

    &-title {
      font-weight: 600;
      margin-bottom: 2rem;
      font-size: 14px;
      color: #fff;
    }

    &-item {
      margin: 0 2rem;
      padding: 0 2rem;
    }

    &-list {
      a {
        font-size: 14px;
        margin-bottom: 1rem;
        color: #fff;
        display: block;
        transition: all 0.2s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  &-bottom {
    padding: 2rem 0;
    text-align: center;
    background-color: $primary-color;
    color: #fff;

    span {
      font-size: 2rem;
      margin-right: 5px;
      font-family: 'Righteous', cursive;
    }
  }
}

@include res(desktop) {
  .footer {
    &-left {
      margin-right: 10rem;
    }
    &-menu {
      display: flex;
    }
  }
}
</style>
