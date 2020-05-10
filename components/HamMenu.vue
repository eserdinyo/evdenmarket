<template>
  <div
    :class="{ active_ham: isNavbarOpen }"
    class="ham-wrapper"
  >
    <div class="ham" :style="{ backgroundColor: color}" />
  </div>
</template>

<script>
export default {
  props: {
    isNavbarOpen: {
      type: Boolean,
      required: true,
      default: false
    },
    color: {
      type: String,
      required: true,
      default: '#fff'
    }
  }
}
</script>

<style lang="scss">
.ham-wrapper {
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.ham {
  width: 20px;
  height: 4px;
  background-color: $primary-color;
  border-radius: 2px;
  position: relative;
  transition: all 0.2s;
}

.ham:after,
.ham:before {
  content: '';
  height: 4px;
  width: 30px;
  border-radius: 2px;
  background-color: inherit;
  position: absolute;
  left: 0;
  transition: all 0.2s;
}

.ham:after {
  top: -10px;
}

.ham:before {
  top: 10px;
}

.active_ham {
  .ham {
    height: 0;
  }
}
.active_ham {
  .ham:after {
    transform: rotate(135deg);
    top: 0;
  }
}

.active_ham {
  .ham:before {
    transform: rotate(45deg);
    top: 0;
  }
}
</style>
