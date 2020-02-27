<template>
  <section class="container">
    <page-title>
      {{ meta.title }}
    </page-title>
    <nav class="page-nav">
      <page-nav-item
        v-for="guestroom in guestrooms"
        :arg="guestroom"
        :key="guestroom.id"
      />
    </nav>
    <div class="content">
      <page-kv>
        <img slot="image" data-src="images/guestroom/J5-0-01.jpg">
      </page-kv>
      <p class="text">
        ◎べにや無何有は、和室8室、洋室2室、和洋室6室、特別室2室の計16室がございます。<br>
        ◎全ての客室からは、自然の山庭の眺めを楽しむことができます。<br>
        ◎全ての客室に露天風呂が付いております。<br>
        ◎客室内の露天風呂の他に男女大浴場、男女露天風呂、男女サウナをご利用いただけます。<br>
        ◎Wi-Fiが全館でご利用いただけます。
      </p>
    </div>
    <div class="cards">
      <card
        v-for="guestroom in guestrooms"
        :arg="guestroom"
        :key="guestroom.id"
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
        title: '客室',
        description: '客室のディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/guestroom',
        image: 'https://mukayu.com/img/ogp/guestroom.jpg'
      }
    }
  },
  asyncData (context) {
    return {
      guestrooms: Data.guestrooms
    }
  }
}
</script>
