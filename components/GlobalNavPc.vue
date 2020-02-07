<template>
  <nav class="global-nav-pc">
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
          コンセプト
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
</template>

<style lang="scss" scoped>
  .nav-menu {
    display: flex;
    margin: 15px 0 0;

    @include media(md, max) {
      display: none;
    }

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
