<template>
  <section class="container">
    <pageTitle>
      {{ meta.title }}
    </pageTitle>
    <div class="image-list animation-trigger1">
      <picture>
        <source class="image-list__item animation-target1 animation-target" srcset="images/J2-01.webp" type="image/webp">
        <img class="image-list__item animation-target1 animation-target" src="images/J2-01.jpg">
      </picture>
      <picture>
        <source class="image-list__item" srcset="images/J2-02_n.webp" type="image/webp">
        <img class="image-list__item" src="images/J2-02_n.png">
      </picture>
    </div>
    <div class="image-list animation-trigger2">
      <picture>
        <source class="image-list__item animation-target2 animation-target" srcset="images/J2-03.webp" type="image/webp">
        <img class="image-list__item animation-target2 animation-target" src="images/J2-03.jpg">
      </picture>
      <picture>
        <source class="image-list__item" srcset="images/J2-04.webp" type="image/webp">
        <img class="image-list__item" src="images/J2-04.png">
      </picture>
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
  },
  mounted () {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '.animation-trigger1',
        triggerHook: 'onEnter',
        offset: 200,
        reverse: false
      })
      .setTween('.animation-target1', {
        css: {
          opacity: '1',
          transform: 'translateY(0)'
        }
      })
    this.$scrollmagic.addScene(scene1)

    const scene2 = this.$scrollmagic
      .scene({
        triggerElement: '.animation-trigger2',
        triggerHook: 'onEnter',
        offset: 200,
        reverse: false
      })
      .setTween('.animation-target2', {
        css: {
          opacity: '1',
          transform: 'translateY(0)'
        }
      })
    this.$scrollmagic.addScene(scene2)
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
