<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="grid">
      <div class="content main">
        <div class="article">
          <section class="article__header">
            <h3 class="article__title">
              <a href="/">方林円庭の会 ありがたし花2019</a>
            </h3>
            <time class="article__time">2019年 2月 24日</time>
            <div class="article__button">
              <font-awesome-icon icon="angle-down" />
            </div>
          </section>
          <div class="article__content">
            <div class="article__image">
              <img src="images/ca_news/DSC_0044.jpg">
            </div>
            <div class="article__image">
              <img src="images/ca_news/2018-05-13-12.57.01.jpg">
            </div>
            <p class="article__text">
              方林円庭の会 「ありがたし花」2019<br>
              日時・場所<br>
              2019年5月12日 日曜日<br>
              草木に仕える花士（はなのふ）として、大自然や神仏に花を献ずる活動をしている花士・珠寳（しゅほう）氏とともに自然の中で草木花と親しむ豊かな時間を楽しみます。<br>
            </p>
          </div>
        </div>

        <div class="article">
          <section class="article__header">
            <h3 class="article__title">
              <a href="/">方林円庭の会 ありがたし花2019</a>
            </h3>
            <time class="article__time">2019年 2月 24日</time>
            <div class="article__button">
              <font-awesome-icon icon="angle-down" />
            </div>
          </section>
          <div class="article__content">
            <div class="article__image">
              <img src="images/ca_news/DSC_0044.jpg">
            </div>
            <div class="article__image">
              <img src="images/ca_news/2018-05-13-12.57.01.jpg">
            </div>
            <p class="article__text">
              方林円庭の会 「ありがたし花」2019<br>
              日時・場所<br>
              2019年5月12日 日曜日<br>
              草木に仕える花士（はなのふ）として、大自然や神仏に花を献ずる活動をしている花士・珠寳（しゅほう）氏とともに自然の中で草木花と親しむ豊かな時間を楽しみます。<br>
            </p>
          </div>
        </div>
      </div>
      <nav class="sub-nav">
        <section class="sub-nav-block">
          <h3 class="sub-nav-block__title">
            最新のお知らせ
          </h3>
          <ul class="sub-nav-list">
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">方林円庭の会 ありがたし花2019</a>
            </li>
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">特別室 白緑 2018年8月初旬誕生</a>
            </li>
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">方林円庭の会 「ありがたし花」 2018</a>
            </li>
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">プレ山代大田楽 at べにや無何有</a>
            </li>
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">世界遺産白川郷観光</a>
            </li>
          </ul>
        </section>
        <section class="sub-nav-block">
          <h3 class="sub-nav-block__title">
            採用情報
          </h3>
          <ul class="sub-nav-list">
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">べにや無何有で働いてみませんか？</a>
            </li>
          </ul>
        </section>
        <section class="sub-nav-block">
          <h3 class="sub-nav-block__title">
            アーカイブ
          </h3>
          <ul class="sub-nav-list">
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">2019年2月</a>
            </li>
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">2018年4月</a>
            </li>
            <li class="sub-nav-list__item">
              <a class="text-link" href="/">2017年12月</a>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle
  },
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: 'お知らせ',
        description: 'お知らせのディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/ca_news',
        image: 'https://mukayu.com/img/ogp/ca_news.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .main {
    width: calc(100% - 260px);

    @include media(md, max) {
      width: 100%;
    }
  }

  .article {
    padding: 0 0 40px;

    @include media(md, max) {
      padding: 0 0 25px;
    }

    &:not(:first-child) {
      padding: 40px 0;
      border-top: 1px solid $black-color;

      @include media(md, max) {
        padding: 25px 0;
      }
    }

    &__header {
      position: relative;
    }

    &__title {
      font-size: $fts-xx-large;

      @include media(md, max) {
        width: calc(100% - 50px);
        font-size: $fts-x-large;
      }
    }

    &__button {
      display: none;

      @include media(md, max) {
        @include flex(wrap, center, center);
        width: 40px;
        height: 40px;
        background: $gray-color;
        position: absolute;
        top: 0;
        right: 0;
      }

      svg {
        color: $white-color;
        font-size: $fts-x-large;
      }
    }

    &__time {
      margin: 5px 0 0;
      font-family: 'PT Serif Caption', Georgia, Times, "Times New Roman", serif;

      @include media(md, max) {
        width: calc(100% - 50px);
      }
    }

    &__content {
      margin: 20px 0 0;
    }

    &__image {
      margin: 10px 0;
    }

    &__text {
      margin: 20px 0;
    }
  }

  .sub-nav {
    width: 220px;
    margin: 0 0 0 40px;

    @include media(md, max) {
      width: 100%;
      margin: 0;
    }
  }

  .sub-nav-block {
    padding: 20px 0;
    border-top: 1px solid $black-color;

    &:last-child {
      border-bottom: 1px solid $black-color;

      @include media(md, max) {
        border-bottom: none;
      }
    }

    &__title {
      font-size: $fts-medium;
    }
  }

  .sub-nav-list {
    &__item {
      padding: 10px 0 ;

      &:not(:first-child) {
        border-top: 1px solid $border-color;
      }

      a {
        display: block;
        color: $text-color;
        font-size: $fts-regular;
      }
    }
  }
</style>
