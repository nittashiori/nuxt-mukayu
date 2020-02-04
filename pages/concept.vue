<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="content">
      <div class="concept-block">
        <img class="image-visual" src="images/J2-01.jpg">
        <img class="image-text" src="images/J2-02_n.png">
      </div>
    </div>
    <div class="concept-block">
      <img class="image-visual" src="images/J2-03.jpg">
      <img class="image-text" src="images/J2-04.png">
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
