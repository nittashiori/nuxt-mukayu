<template>
  <footer class="footer">
    <section class="section">
      <h2 class="footer-title">
        LINKS
      </h2>
      <ul class="link-nav">
        <li class="link-nav__item">
          <a href="/">Relais &amp; Chateaux</a>
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
    <section class="section">
      <h2 class="footer-title">
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
      <h2 class="footer-title">
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
    <div class="section">
      <div class="footer__name">
        <logo />
        <p>加賀山代温泉<br>べにや無何有 むかゆう</p>
      </div>
      <address>
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

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
