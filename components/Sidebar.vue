<template>
  <div class="sidebar">
    <div class="title">HESABIM</div>
    <ul class="nav">
      <li class="nav__item">
        <nuxt-link class="nav__item--link" to="/siparislerim">
          Siparislerim
        </nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link class="nav__item--link" to="/adreslerim">
          Adreslerim
        </nuxt-link>
      </li>
      <li class="nav__item">
        <a class="nav__item--link">Uyelik Bilgilerim</a>
      </li>
      <li class="nav__item"><a class="nav__item--link">Kampanyalarim</a></li>
      <li class="nav__item"><a class="nav__item--link">Hediye Ceklerim</a></li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.sidebar {
  .nav {
    list-style: none;
    margin-bottom: 0;
    margin-top: 11px;
    padding-left: 0;

    &__item {
      margin-top: 11px;

      &--link {
        color: #484848;
        font-size: 13px;
        line-height: 18px;
        text-decoration: none;
        display: block;
        cursor: pointer;
        transition: all .2s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .title {
    font-size: 14px;
    color: $font-color;
  }
}
</style>
