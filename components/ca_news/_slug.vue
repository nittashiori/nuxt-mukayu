<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="grid">
      <div class="content main">
        <ArticleNews
          :title="post.fields.title"
          :content="post.fields.content"
          :date="post.fields.date"
          :slug="post.fields.slug"
          :key="post.fields.slug"
          class="article-group"
        />
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
import ArticleNews from '~/components/ArticleNews.vue'
import Meta from '~/assets/js/meta.js'
import { createClient } from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    PageTitle,
    ArticleNews
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
  asyncData ({ env }) {
    return client.getEntries(env.CTF_BLOG_POST_TYPE_ID)
      .then((entries) => {
        return {
          posts: entries.items
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

  .article-group {
    padding: 40px 0;

    &:not(:first-child) {
      border-top: 1px solid $black-color;
    }

    @include media(md, max) {
      padding: 25px 0 ;
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
