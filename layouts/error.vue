<template>
  <div class="container">
    <div class="box">
      <img src="@/assets/images/404.png" alt="" />
      <p>ÜZGÜNÜZ SAYFA BULUNAMADI</p>
      <nuxt-link class="btn btn-green" to="/">ANASAYFAYA</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['error'],
  head () {
    return {
      title: 'Evdenmarket',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 8rem auto;
  padding: 0 2rem;

  p {
    color: $grey-color;
    margin: 2rem 0;
    font-weight: 500;
    font-size: 1.6rem;
  }

  img {
    width: 60%;
  }
}

@include res(desktop) {
  .box {
    margin: 12rem auto;
    width: 70rem;

    .btn {
      max-width: 18rem;
    }
  }
}
</style>
