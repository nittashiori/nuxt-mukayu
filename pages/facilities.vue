<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <nav class="page-nav">
      <PageNavItem
        v-for="facilitie in facilities"
        :arg="facilitie"
        :key="facilitie.id"
      />
    </nav>
    <div class="content">
      <div class="page-kv">
        <img src="images/facilities/J7-0-01.jpg">
      </div>
      <p class="text">
        ・Wi-Fi が全館でご利用いただけます。
      </p>
    </div>
    <div class="cards">
      <Card
        v-for="facilitie in facilities"
        :arg="facilitie"
        :key="facilitie.id"
      />
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageNavItem from '~/components/PageNavItem.vue'
import Card from '~/components/Card.vue'
import Data from '~/store/data.json'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle,
    PageNavItem,
    Card
  },
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: '施設',
        description: '施設のディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/facilities',
        image: 'https://mukayu.com/img/ogp/facilities.jpg'
      }
    }
  },
  asyncData (context) {
    return {
      facilities: Data.facilities
    }
  }
}
</script>
