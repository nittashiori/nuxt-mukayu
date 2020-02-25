<template>
  <div>
    <Header />
    <section class="container">
      <PageTitle v-if="error.statusCode === 404">
        ページが見つかりませんでした
      </PageTitle>
      <PageTitle v-else>
        エラーが発生しました
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
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
