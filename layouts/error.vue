<template>
  <div>
    <global-header />
    <section class="container">
      <page-title v-if="error.statusCode === 404">
        ページが見つかりませんでした
      </page-title>
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
    <global-footer />
    <global-nav-sp />
  </div>
</template>

<script>
import GlobalHeader from '~/components/GlobalHeader'
import GlobalFooter from '~/components/GlobalFooter'
import PageTitle from '~/components/PageTitle.vue'
import GlobalNavSp from '~/components/GlobalNavSp'

export default {
  components: {
    GlobalHeader,
    GlobalFooter,
    PageTitle,
    GlobalNavSp
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}
</script>
