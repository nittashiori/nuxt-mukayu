<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="grid">
      <div class="content main">
        <ArticleContent
          :title="post.fields.title"
          :date="post.fields.date"
          :content="post.fields.content"
          class="article-group"
        />
        <div class="btn-wrap">
          <nuxt-link to="/ca_news" class="btn btn--center">
            お知らせ一覧に戻る
          </nuxt-link>
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
import ArticleContent from '~/components/ArticleContent.vue'
import Meta from '~/assets/js/meta.js'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    PageTitle,
    ArticleContent
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
  },
  asyncData ({ env, params }) {
    return client.getEntries(env.CTF_BLOG_POST_TYPE_ID)
      .then((entries) => {
        return {
          post: entries.items[0]
        }
      })
    .catch(console.error) // eslint-disable-line
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

    &__time {
      margin: 5px 0 0;
      font-family: 'PT Serif Caption', Georgia, Times, "Times New Roman", serif;

      @include media(md, max) {
        width: calc(100% - 50px);
      }
    }

    &__content {
      margin: 20px 0 0;
      transition: height 0.5s $ease;

      @include media(md, max) {
        overflow: hidden;
      }
    }

    .pulldown-enter-active,
    .pulldown-leave-active {
      will-change: height, opacity;
      transition: height 0.5s $ease, opacity 0.4s $ease;
      overflow: hidden;
    }

    .pulldown-enter,
    .pulldown-leave-to {
      height: 0 !important;
      opacity: 0;
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
