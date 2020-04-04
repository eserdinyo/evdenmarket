<template>
  <modal height="450" width="700" name="auth-modal" transition="pop-out">
    <div class="auth-modal">
      <div class="auth-modal-img">
        <img
          src="../assets/images/login-bg.jpg"
          class="auth-modal-img"
          alt=""
        >
      </div>
      <div class="auth-modal-form">
        <input type="text" placeholder="phone">
        <input type="password" placeholder="Şifre">
        <button type="submit">Giriş Yap</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {}
</script>

<style lang="scss">
.auth-modal {
  display: flex;
  height: 100%;
  &-img {
    width: 50%;
    overflow: hidden;
    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
  &-form {
    width: 50%;
    padding: 2rem;
  }
}

.v--modal-box {
  border-radius: 8px !important;
}

.v--modal-overlay {
  background: #00000080 !important;
}

.pop-out-enter-active,
.pop-out-leave-active {
  transition: all .5s;
}
.pop-out-enter,
.pop-out-leave-active {
  opacity: .5;
  transform: translateY(24px);
}
</style>
