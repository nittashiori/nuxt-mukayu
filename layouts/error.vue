<template>
  <div>
    <Header />
    <section class="container">
      <PageTitle>
        {{ title }}
      </PageTitle>
      <p class="text">
        申し訳ありません。<br>
        お探しのページは削除された可能性があります。
      </p>
      <div class="btn-wrap">
        <nuxt-link to="/" class="btn btn--center">
          ホームに戻る
        </nuxt-link>
      </div>
    </section>
    <Footer />
    <GlobalNavSp />
  </div>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
export default {
  components: {
    PageTitle
  },
  data () {
    return {
      title: 'ページが見つかりませんでした'
    }
  }
}
</script>
