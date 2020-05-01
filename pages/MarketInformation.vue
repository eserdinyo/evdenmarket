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
    <div class="container">
      <div class="section">
        <div class="section-bottom">
          <div class="section-left">
            <div class="icon">
              <icon-market-info-shopping />
            </div>
          </div>
          <div class="list-wrapper">
            <div class="title">Neden Evdenmarket</div>

            <div class="list">
              <div class="item">
                <div class="item-icon">
                  <icon-truck />
                </div>
                <div class="desc">
                  <div class="desc-title">
                    Sürekli Gelişim
                  </div>
                  <div class="desc-detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa, ipsa. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Culpa, ipsa.
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-icon">
                  <icon-truck />
                </div>
                <div class="desc">
                  <div class="desc-title">
                    Sürekli Gelişim
                  </div>
                  <div class="desc-detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa, ipsa. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Culpa, ipsa.
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-icon">
                  <icon-truck />
                </div>
                <div class="desc">
                  <div class="desc-title">
                    Sürekli Gelişim
                  </div>
                  <div class="desc-detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa, ipsa. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Culpa, ipsa.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="section-bottom">
          <div class="list-wrapper">
            <div class="title">Neden Evdenmarket</div>

            <div class="list">
              <div class="item">
                <div class="item-icon">
                  <icon-truck />
                </div>
                <div class="desc">
                  <div class="desc-title">
                    Sürekli Gelişim
                  </div>
                  <div class="desc-detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa, ipsa. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Culpa, ipsa.
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-icon">
                  <icon-truck />
                </div>
                <div class="desc">
                  <div class="desc-title">
                    Sürekli Gelişim
                  </div>
                  <div class="desc-detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa, ipsa. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Culpa, ipsa.
                  </div>
                </div>
              </div>
              <div class="item">
                <div class="item-icon">
                  <icon-truck />
                </div>
                <div class="desc">
                  <div class="desc-title">
                    Sürekli Gelişim
                  </div>
                  <div class="desc-detail">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Culpa, ipsa. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit. Culpa, ipsa.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-left section-right">
            <div class="icon">
              <icon-market-info-modern />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { iconMarketInfoShopping, iconTruck, iconMarketInfoModern } from '../components/icons'

export default {
  layout: 'information',
  components: {
    iconMarketInfoShopping,
    iconMarketInfoModern,
    iconTruck
  }
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
        font-size: 2.8rem;
        font-weight: bold;
        font-family: 'Righteous', cursive;
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

  .section {
    margin: 14rem 0;
    .title {
      font-size: 3rem;
      margin-bottom: 4rem;
      color: $grey-color;
    }

    &-left {
      .icon {
        .icon {
          width: 40rem;
          height: 40rem;
        }
      }
    }

    &-right {
      .icon {
        text-align: right;
      }
    }

    &-bottom {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .list {
      &-wrapper {
        margin-top: 1rem;
        padding: 0 3rem;
      }
      .item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 2rem;
        .desc {
          &-title {
            margin-bottom: 10px;
            color: $grey-color;
          }
          &-detail {
            color: lighten($font-color, 50%);
            font-size: 14px;
          }
        }
        &-icon {
          margin-right: 2rem;
          .icon {
            height: 40px;
            fill: $primary-color;
          }
        }
      }
    }
  }
}
</style>
