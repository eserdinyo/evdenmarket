<template lang="pug">
  .flickity
    flickity(ref='flickity', :options='flickityOptions')
      .carousel-cell
        img(src="@/assets/images/slider/2.jpg")
      .carousel-cell
        img(src="@/assets/images/slider/2.jpg")
      .carousel-cell
        img(src="@/assets/images/market.jpg")
</template>



<script>
export default {
  data() {
    return {
      flickityOptions: {
        autoPlay: true
      }
    };
  },
  created() {}
};
</script>

<style lang="scss">
@import "assets/style/main.scss";

.flickity {
  margin-left: 15px;
  margin-right: 15px;
}

.carousel-cell {
  width: 98%;
  height: 200px;
  border-radius: 5px;
  overflow: hidden;
  margin-right: 1rem;
  margin-left: 1rem;
  display: flex;
  justify-content: center;
  @include res(tab-land) {
    width: 98%;
    height: 360px;
    margin-right: 1rem;
    margin-left: 1rem;
  }
}

/* white circles */
.flickity-page-dots .dot {
  width: 12px;
  height: 12px;
  opacity: 1;
  background: rgba($primary-color, 0.3);
}
/* fill-in selected dot */
.flickity-page-dots .dot.is-selected {
  background: $primary-color;
}
.flickity-prev-next-button {
  display: none;
  @include res(tab-land) {
    display: none;
    margin-left: 10px;
    margin-right: 10px;
    background: #f5f5f5;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.384);
  }
}
</style>

