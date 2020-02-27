<template>
  <section class="container">
    <pageTitle>
      {{ meta.title }}
    </pageTitle>
    <div class="content">
      <div class="image-list">
        <img class="image-list__item" src="images/J2-01.jpg">
        <img class="image-list__item" src="images/J2-02_n.png">
      </div>
    </div>
    <div class="image-list">
      <img class="image-list__item" src="images/J2-03.jpg">
      <img class="image-list__item" src="images/J2-04.png">
    </div>
    <div class="btn-wrap">
      <nuxt-link class="btn--center" to="/">
        べにや無何有ホームページへ
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle
  },
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: 'コンセプト',
        description: 'コンセプトのディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/concept',
        image: 'https://mukayu.com/img/ogp/concept.jpg'
      }
    }
  }
}
</script>
