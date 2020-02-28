<template>
  <section class="container">
    <page-title>
      {{ meta.title }}
    </page-title>
    <nav class="page-nav">
      <page-nav-item
        v-for="food in foods"
        :arg="food"
        :key="food.id"
      />
    </nav>
    <div class="content">
      <page-kv>
        <source slot="image" srcset="images/food/J6-0-01d.webp" type="image/webp">
        <img slot="image" data-src="images/food/J6-0-01d.jpg" alt="蟹料理">
      </page-kv>
    </div>
    <div class="cards">
      <card
        v-for="food in foods"
        :arg="food"
        :key="food.id"
      />
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageKv from '~/components/PageKv.vue'
import PageNavItem from '~/components/PageNavItem.vue'
import Card from '~/components/Card.vue'
import Data from '~/store/data.json'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle,
    PageKv,
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
      },
      kv: 'images/food/J6-0-01d.jpg'
    }
  },
  asyncData (context) {
    return {
      foods: Data.foods
    }
  }
}
</script>
