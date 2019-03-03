<template lang="pug">
  .container
    .box
        img(src='@/assets/images/404.png', alt='')
        p Aradığınız sayfayı bulamadık!
        nuxt-link(to='/') Anasayfa Don
</template>

<script>
export default {
  props: ["error"],
   head() {
    return {
      title: 'Evdenmarket',
      meta: [
        {
          hid: "description",
          name: "description",
          content: "My custom description"
        }
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
@import "assets/style/main.scss";

.box {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  @include res("tab-land") {
    width: 50%;
  }

  p {
    color: #2c3e51d0;
    margin-top: 1rem;
    font-weight: 500;
    font-size: 1.6rem;
  }

  img {
    width: 100%;

    @include res("tab-land") {
      width: 50%;
    }
  }

  a {
    border: 1px solid #2c3e51;
    text-transform: uppercase;
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 5px;
    color: #2c3e51;
    transition: all 0.2s;

    &:hover {
      box-shadow: 0 2px 4px #2c3e5175;
    }
  }
}
</style>
