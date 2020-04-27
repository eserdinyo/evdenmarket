<template>
  <div class="container">
    <div class="tutorial">
      <div class="tutorial_item">
        <div class="tutorial_icon">
          <i class="fa fa-map-marker" aria-hidden="true" />
        </div>
        <div class="tutorial_title">
          Adresini Seç
        </div>
        <div class="tutorial_desc">
          Üst menüden bulunduğun lokasyonu seç
        </div>
      </div>
      <div class="tutorial_item">
        <div class="tutorial_icon">
          <i class="fa fa-shopping-basket" aria-hidden="true" />
        </div>
        <div class="tutorial_title">
          Marketini Seç
        </div>
        <div class="tutorial_desc">
          Alışveri yapmak istediğin süpermarketini seç
        </div>
      </div>
      <div class="tutorial_item">
        <div class="tutorial_icon">
          <i class="fa fa-laptop" aria-hidden="true" />
        </div>
        <div class="tutorial_title">
          Alışverişini Yap
        </div>
        <div class="tutorial_desc">
          Seçtiğin markette alışverişini yap
        </div>
      </div>
      <div class="tutorial_item">
        <div class="tutorial_icon">
          <i class="fa fa-truck" aria-hidden="true" />
        </div>
        <div class="tutorial_title">
          Kapına Gelsin
        </div>
        <div class="tutorial_desc">
          Yaptığın online market alışverişi ücretsiz kapına gelsin
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.tutorial {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 4rem 0;
  grid-gap: 2rem;

  &_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem 1.3rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  &_icon {
    color: $primary-color;
    font-size: 3rem;
  }

  &_title {
    font-weight: bold;
    margin: 5px 0;
  }
  &_desc {
    font-size: 14px;
  }
}

@include res(desktop) {
  .tutorial {
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10rem;
    margin-top: 10rem;

    &_icon {
      font-size: 3.4rem;
    }
  }
}
</style>
