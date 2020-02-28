<template>
  <section class="container">
    <pageTitle>
      {{ meta.title }}
    </pageTitle>
    <nav class="page-nav">
      <page-nav-item
        v-for="facilitie in facilities"
        :arg="facilitie"
        :key="facilitie.id"
      />
    </nav>
    <div class="content">
      <page-kv>
        <source slot="image" srcset="images/facilities/J7-0-01.webp" type="image/webp">
        <img slot="image" data-src="images/facilities/J7-0-01.jpg" alt="無何有の旅館入り口">
      </page-kv>
      <p class="text">
        ・Wi-Fi が全館でご利用いただけます。
      </p>
    </div>
    <div class="cards animation-trigger1">
      <card
        v-for="facilitie in facilities"
        :arg="facilitie"
        :key="facilitie.id"
        class="animation-target1 animation-target"
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
  },
  mounted () {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '.animation-trigger1',
        triggerHook: 'onEnter',
        offset: 100,
        duration: 500,
        reverse: false
      })
      .setTween('.animation-target1', {
        css: {
          opacity: '1',
          transform: 'translateY(0)'
        }
      })
    this.$scrollmagic.addScene(scene1)
  }
}
</script>

<style lang="scss">
  .animation-target {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.4s $fadeCubic;
  }
</style>
