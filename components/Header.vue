<template>
  <header class="header">
    <h1 class="header__logo">
      <nuxt-link
        to="/"
      >
        <logo />
      </nuxt-link>
    </h1>
    <div class="header-wrap">
      <div class="language">
        Language：
        <p class="language__item language__item--active">
          <a href="/">日本語</a>
        </p>
        <p class="language__item">
          <a href="/">EN</a>
        </p>
      </div>
      <GlobalNavPc />
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'
import GlobalNavPc from '~/components/GlobalNavPc.vue'

export default {
  components: {
    Logo,
    GlobalNavPc
  }
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 960px;
  margin: 0 auto 30px;
  padding: 20px 0 10px;
  @include flex(wrap, space-between, center);
  border-bottom: 1px solid $black-color;

  @include media(md, max) {
    max-width: auto;
    width: auto;
    margin: 0 20px 30px;
    @include flex(wrap, flex-start, center);
  }

  &__logo {
    @include media(md, max) {
      width: 140px;
    }
  }
}
.header-wrap {
  @include flex(nowrap, flex-start, flex-end);
  flex-direction: column;
}
.language {
  @include flex(wrap, flex-end, center);
  font-size: $fts-small;
  color: $gray-color;

  &__item {
    a {
      font-size: $fts-small;
      color: $gray-color;
    }
  }

  &__item:not(:nth-of-type(1)){
    &::before {
      display: inline-block;
      content: '/';
      padding: 5px;
    }
  }

  &__item--active {
    font-weight: bold;
  }
}
</style>
