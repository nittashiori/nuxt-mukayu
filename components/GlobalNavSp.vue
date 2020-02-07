<template>
  <nav class="header-nav-sp">
    <div class="menu-btn">
      <button class="menu-btn__trigger">
        <span class="line line-first" />
        <span class="line line-second" />
        <span class="line line-thrid" />
      </button>
    </div>
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
</template>

<style lang="scss" scoped>
  .header-nav-sp {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: none;

    @include media(md, max) {
      display: block;
    }

    &::before {
      display: block;
      content: '';
      width: 100%;
      height: 100vh;
      background: $black-color;
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      transition: all 0.3s $ease;
    }
  }
  .header-nav-sp.is-open {
    &::before {
      opacity: 0.7;
    }
  }
  .menu-btn {
    @include flex(nowrap, center, center);
    width: 60px;
    height: 80px;
    position: absolute;
    top: 0;
    right: 10px;
    z-index: 100;
    cursor: pointer;

    &__trigger {
      width: 30px;
      height: 20px;
      @include flex(wrap, space-between, flex-start);
      flex-direction: column;
    }

    .line {
      width: 100%;
      height: 1px;
      background: $black-color;
      transition: all 0.3s $ease;
    }
  }
  .menu-btn.is-open {
    .line {
      background: $white-color;
    }

    .line-first {
      transform: translateY(10px) rotate(45deg);
    }

    .line-second {
      opacity: 0;
    }

    .line-thrid {
      transform: translateY(-10px) rotate(-45deg);
    }
  }
  .nav-menu {
    width: 100%;
    height: 100vh;
    background: $black-color;
    padding: 60px 40px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    transform: translateX(100%);
    transition: all 0.3s $ease;

    &__item {
      display: block;
      color: $white-color;
      padding: 10px 0;
    }
  }

  .nav-menu.is-open {
    transform: translateX(40%);
  }
</style>
