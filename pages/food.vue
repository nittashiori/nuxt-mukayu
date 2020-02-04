<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <nav class="page-nav">
      <PageNavItem
        v-for="food in foods"
        :arg="food"
        :key="food.title"
      />
    </nav>
    <div class="content">
      <div class="page-kv">
        <img src="images/food/J6-0-01d.jpg">
      </div>
    </div>
    <div class="cards">
      <Card
        v-for="food in foods"
        :arg="food"
        :key="food.title"
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
        title: '料理',
        description: '料理のディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/food',
        image: 'https://mukayu.com/img/ogp/food.jpg'
      }
    }
  },
  asyncData (context) {
    return {
      foods: Data.foods
    }
  }
}
</script>
