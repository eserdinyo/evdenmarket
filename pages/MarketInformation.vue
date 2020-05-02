<template>
  <div class="MarketInformation">
    <div class="hero">
      <div class="container hero-wrapper">
        <div class="header">
          <nuxt-link class="logo" to="/">evdenmarket</nuxt-link>
          <div class="nav">
            <a href="">Nedir</a>
            <a href="">Avantajlar</a>
            <a href="">Fiyatlar</a>
            <a href="">İletişim</a>
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
            <div class="icon" data-aos="slide-right">
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
            <div class="icon" data-aos="slide-left">
              <icon-market-info-modern />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="form-header">
        <icon-call-center />
        <p>Aklınıza bir şey mi takıldı?</p>
        <span>
          Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.</span
        >
      </div>
      <div class="form">
        <div class="body">
          <div class="form-item ml-2">
            <div class="form-label">İsim Soyisim</div>
            <input class="form-input" placeholder="Adınızı Soyadınızı Girin" />
          </div>
          <div class="form-item">
            <div class="form-label">Telefon Numarası</div>
            <input
              class="form-input"
              type="number"
              placeholder="Telefon Numaranızı Girin"
            />
          </div>
          <div class="form-item">
            <div class="form-label">İl Seçin</div>
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
              label="label"
            />
          </div>
          <div class="form-item">
            <div class="form-label">İlçe Seçin</div>
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
              label="label"
            />
          </div>

          <div class="form-item">
            <div class="form-label">Market İsmi</div>
            <input class="form-input" placeholder="Market İsmini Girin" />
          </div>

          <div class="form-item">
            <div class="form-label">Mesajınız</div>
            <textarea
              id=""
              class="form-input"
              placeholder="Mesajınızı Girin"
              name=""
              cols="30"
              rows="4"
            />
          </div>

          <div class="form-item">
            <button class="btn btn-green">GÖNDER</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  iconMarketInfoShopping,
  iconTruck,
  iconMarketInfoModern,
  iconCallCenter
} from '../components/icons'

export default {
  layout: 'information',
  components: {
    iconMarketInfoShopping,
    iconMarketInfoModern,
    iconTruck,
    iconCallCenter,
    Multiselect
  },
  data() {
    return {
      cities: [
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        },
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        },
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        },
        {
          id: 1,
          label: 'İstanbul',
          name: 'İstanbul'
        },
        {
          id: 2,
          label: 'İzmir',
          name: 'İzmir'
        },
        {
          id: 3,
          label: 'Ankara',
          name: 'Ankara'
        }
      ],
      city: ''
    }
  },
  mounted() {
    if (process.browser) {
      AOS.init({
        duration: 800,
        easing: 'ease-out',
        delay: 100
      })
    }
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

  .form {
    max-width: 730px;
    padding: 7rem;
    margin: 0 auto;
    box-shadow: $shadow;
    margin-top: -6rem;
    z-index: 9;
    position: relative;
    background-color: #fff;

    &-header {
      height: 34rem;
      color: #fff;
      text-align: center;
      padding: 4rem 0;
      font-size: 3.6rem;
      span {
        font-size: 24px;
      }
      background: linear-gradient(rgba(0, 0, 0, 0.694), rgba(0, 0, 0, 0.653)),
        url('../assets/images/market-info-hero-bg.jpeg');
      .icon {
        height: 10rem;
        fill: #fff;
      }
    }

    &-item {
      margin: 2rem 0;
      .btn {
        width: 14rem;
      }
    }

    &-label {
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
}
</style>
