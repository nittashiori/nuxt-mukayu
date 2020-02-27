<template>
  <footer class="footer">
    <div class="footer-inner">
      <section class="section">
        <h2 class="footer-inner__title">
          LINKS
        </h2>
        <ul class="link-nav">
          <li class="link-nav__item">
            <a href="/"><img class="link-nav__image" src="images/relaischateaux_s.gif">Relais &amp; Chateaux</a>
          </li>
          <li class="link-nav__item">
            <a href="/">AMORPHE 竹山聖</a>
          </li>
          <li class="link-nav__item">
            <a href="/">原デザイン研究所 原研哉</a>
          </li>
          <li class="link-nav__item">
            <a href="/">オンラインショップ</a>
          </li>
          <li class="link-nav__item">
            <a href="/">Facebook</a>
          </li>
        </ul>
      </section>
    </div>
    <div class="footer-inner">
      <section class="section">
        <h2 class="footer-inner__title">
          インターネット予約
        </h2>
        <p class="text">
          インターネット上から、リアルタイムに予約可能です。各種プラン・オプション追加などご自由に選択可能です。
        </p>
        <div class="btn-wrap">
          <a class="btn" href="http://www.489pro.com/asp/489/menu.asp?id=17000013&lan=JPN">インターネット予約ページへ</a>
        </div>
      </section>
      <section class="section">
        <h2 class="footer-inner__title">
          AWARD
        </h2>
        <ul class="award-nav">
          <li class="award-nav__item">
            AUTHENTIC HOTELS&CRUSES WELCOME AWARD 2015
          </li>
          <li class="award-nav__item">
            BEST SMALL HOTEL SPA WORLDWIDE 2015
          </li>
          <li class="award-nav__item">
            RELAIS & CHATEUX Welcome Trophy 2013
          </li>
          <li class="award-nav__item">
            SPA JAPAN CRYSTAL AWARDS PROFESSIONAL 2012
          </li>
        </ul>
      </section>
    </div>
    <div class="footer-inner">
      <div class="footer-shop">
        <img class="footer-shop__logo-relais" src="images/relaischateaux_s.gif">
        <img
          class="footer-shop__logo"
          src="images/mukayu_footer.gif"
          alt="無何有ロゴ"
        >
        <p class="footer-shop__name">
          加賀山代温泉<br>べにや無何有 むかゆう
        </p>
      </div>
      <address class="footer-inner__address">
        〒922-0242<br>
        石川県加賀市山代温泉55-1-3<br>
        フリーダイヤル 0120-07-1340<br>
        TEL 0761-77-1340<br>
        FAX 0761-76-1340<br>
        E-mail beniya@mukayu.com<br>
        <nuxt-link
          to="/"
          class="text-link"
        >
          ※採用情報はこちら
        </nuxt-link>
      </address>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .footer {
    max-width: 960px;
    margin: 0 auto;
    padding: 50px 0;
    border-top: 1px solid $black-color;
    @include flex(wrap, space-between, flex-start);

    @include media(md, max) {
      flex-direction: column;
      margin: 0 20px;
      padding: 20px 0;
    }
  }
  .footer-inner {
    width: 30%;

    @include media(md, max) {
      width: 100%;
    }

    &:not(:first-child) {
      @include media(md, max) {
        margin: 30px 0 0;
      }
    }

    &__title {
      font-size: $fts-x-large;
      font-weight: normal;
      margin: 0 0 20px;

      @include media(md, max) {
        font-size: $fts-large;
        margin: 0 0 10px;
      }
    }

    &__address {
      text-align: right;

      @include media(md, max) {
        text-align: left;
      }
    }

    &__address {
      margin: 20px 0 0;
    }
  }
  .footer-shop {
    text-align: right;

    @include media(md, max) {
      text-align: left;
    }

    &__logo {
      width: 130px;
    }

    &__logo-relais {
      width: 50px;
    }

    &__name {
      margin: 5px 0 0;
    }
  }
  .section {
    &:not(:first-child){
      padding: 20px 0 0;
      margin: 40px 0 0;
      border-top: 1px solid $border-color;
    }
  }
  .link-nav {
    &__item {
      a {
        display: block;
        padding: 10px 0;
        color: $gray-color;
        border-bottom: 1px solid $border-color;
      }
    }
    &__image {
      display: inline-block;
      width: 30px;
    }
  }
  .award-nav {
    &__item {
      padding: 5px 0;
      font-size: $fts-small;
      color: $gray-color;
    }
    &__item:not(:first-child) {
      border-top: 1px solid $border-color;
    }
  }
</style>
