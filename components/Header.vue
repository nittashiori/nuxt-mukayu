<template>
  <header class="header">
    <h1 class="header__logo">
      <nuxt-link
        to="/"
      >
        <logo />
      </nuxt-link>
    </h1>
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

<style lang="scss">
.header {
  display: flex;
  background: #ddd;
}
.nav-menu {
  display: flex;
}
</style>
