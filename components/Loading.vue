<template>
  <div class="loading">
    <div class="loading__inner">
      <img src="images/mukayu_footer.gif" alt="無何有ロゴ" class="loading__logo">
      <p class="loading__text">
        Now Loading...
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background: $primary-color;
  color: $text-color;
  text-align: center;
  font-size: 30px;
  opacity: 1;
  animation: loading-start 2s ease-in-out forwards;

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 200px;
    height: 200px;
    border-radius: 100%;
    background: $white-color;
    position: relative;
    z-index: 0;
    &::before {
      display: block;
      content: '';
      width: 208px;
      height: 208px;
      border-radius: 100%;
      border-top: 4px solid darken($primary-color, 20%);;
      position: absolute;
      top: -4px;
      left: -4px;
      z-index: -1;
      animation: loading-spin 1s linear infinite;
    }
  }

  &__logo {
    display: block;
    width: 120px;
  }

  &__text {
    margin: 10px auto 0;
    text-align: center;
  }
}
@keyframes loading-start {
  0% {
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}
@keyframes loading-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
