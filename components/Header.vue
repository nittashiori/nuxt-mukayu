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
      <nav class="header-nav">
        <ul class="nav-menu">
          <li class="nav-menu__list">
            <nuxt-link
              to="/"
              class="nav-menu__item"
            >
              ホーム
            </nuxt-link>
          </li>
          <li class="nav-menu__list">
            <nuxt-link
              to="/concept"
              class="nav-menu__item"
            >
              宿のご案内
            </nuxt-link>
          </li>
          <li class="nav-menu__list">
            <nuxt-link
              to="/gallery"
              class="nav-menu__item"
            >
              ピクチャームービー
            </nuxt-link>
          </li>
          <li class="nav-menu__list">
            <nuxt-link
              to="/reservation"
              class="nav-menu__item"
            >
              ご予約
            </nuxt-link>
          </li>
          <li class="nav-menu__list">
            <nuxt-link
              to="/access"
              class="nav-menu__item"
            >
              交通
            </nuxt-link>
          </li>
          <li class="nav-menu__list">
            <nuxt-link
              to="/ca_news"
              class="nav-menu__item"
            >
              お知らせ
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
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
  }

  &__logo {
    @include media(md, max) {
      width: 160px;
    }
  }
}
.header-wrap {
  @include flex(nowrap, flex-start, flex-end);
  flex-direction: column;

  @include media(md, max) {
    display: none;
  }
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
.nav-menu {
  display: flex;
  margin: 15px 0 0;

  &__list:not(:last-child) {
    padding: 0 14px;
  }

  &__list:last-child {
    padding: 0 0 0 14px;
  }

  a {
    display: block;
    color: $black-color;

    &:hover {
      opacity: 0.7;
    }
  }
}
</style>
