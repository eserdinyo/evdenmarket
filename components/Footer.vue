<template>
  <div class="footer">
    <div class="container">
      <div class="footer-top">
        <div class="footer-left">
          <div class="social">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
            <i class="fa fa-youtube"></i>
          </div>
          <div class="apps">
            <img src="../assets/images/app-store.png" alt="" />
            <img src="../assets/images/google-play.png" alt="" />
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
              <a href="">Gizlilik</a>
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
export default {}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &-top {
    display: flex;
    justify-content: space-between;
    padding-top: 4rem;
    padding-bottom: 3rem;

    .social {
      margin-right: 10rem;
      display: flex;

      .fa {
        font-size: 2.8rem;
        margin: 0 1rem;
        color: $grey-color;
      }
    }
  }

  &-left {
    .apps {
      display: flex;
      flex-direction: column;
      margin-top: 2rem;
      img {
        width: 17rem;
        height: 5rem;
        margin: 1rem 0;
      }
    }
  }

  &-menu {
    display: flex;
    margin-left: auto;

    &-title {
      font-weight: 600;
      margin-bottom: 2rem;
      font-size: 14px;
      color: $grey-color;
    }

    &-item {
      margin: 0 2rem;
      padding: 0 2rem;
    }

    &-list {
      a {
        font-size: 14px;
        margin-bottom: 1rem;
        color: $grey-color;
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
    background-color: $grey-color;
    color: #fff;

    span {
      font-size: 2rem;
      margin-right: 5px;
      font-family: 'Righteous', cursive;
    }
  }
}
</style>
