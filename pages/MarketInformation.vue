<template>
  <div class="MarketInformation">
    <div class="hero">
      <div class="container hero-wrapper">
        <div class="header">
          <nuxt-link class="logo" to="/">evdenmarket</nuxt-link>
          <div class="nav">
            <a href="">Nedir</a>
            <a href="">Avantajlar</a>
            <a href="">İletişim</a>
            <a href="">Fiyatlar</a>
          </div>
        </div>
        <div class="slogan">
          <h1>Şimdi Sanal Market Vakti</h1>
          <h2>
            Online Satışa Geçerek Binlerce Müşteri Kazanabilir <br />
            Cironuzu Artılabilirsiniz.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'information'
}
</script>

<style lang="scss">
.MarketInformation {
  .hero {
    background: linear-gradient(rgba(0, 0, 0, 0.714), rgba(0, 0, 0, 0.454)),
      url('../assets/images/market-info-hero-bg.jpeg');
    background-size: cover;
    height: 100vh;
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0% 100%);

    &-wrapper {
      position: relative;
      height: 100%;
    }
    .header {
      display: flex;
      justify-content: space-between;
      color: #fff;
      padding: 3rem 0;

      .logo {
        color: #fff;
        font-size: 2.4rem;
        font-weight: bold;
      }

      .nav {
        a {
          margin: 0 1rem;
          padding-bottom: 3px;
          transition: all 0.2s;

          &:hover {
            border-bottom: 1px solid #fff;
          }
        }
      }
    }
    .slogan {
      color: #fff;
      font-size: 3rem;
      position: absolute;
      top: 50%;
      left: 0;

      h2 {
        font-size: 2rem;
        margin-top: 1rem;
      }
    }
  }
}
</style>
