<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="grid">
      <Transportation>
        <template slot="title">
          【飛行機】<br>
          小松空港より
        </template>
        <template slot="text">
          タクシーで30 分。<br>
          <br>
          ○割引料金でのタクシーを手配いたします。<br>
          （要事前予約）<br>
          <br>
          ◎小松空港発着都市<br>
          札幌・仙台・成田・東京・福岡・那覇・ソウル・上海・台北
        </template>
        <template slot="button">
          <a class="btn" href="http://www.komatsuairport.jp/komatsusypher/www/flight/index.jsp" target="_blank">小松空港フライト情報</a>
        </template>
      </Transportation>
      <Transportation>
        <template slot="title">
          【電車】<br>
          加賀温泉駅より
        </template>
        <template slot="text">
          タクシーで10分。<br>
          <br>
          無料シャトルバス有り<br>
          ○お迎え 14：20～18：00までの時間限定<br>
          到着時間に合わせてお迎えいたします。<br>
          （要事前予約）<br>
          ○お送り時間 8：45，9：15，9：45，10：15，10：45．11：15<br>
          <br>
          ◎JR 加賀温泉駅まで<br>
          京都駅より特急で1時間50分<br>
          大阪駅より特急で2時間20分<br>
          東京より特急で3時間00分<br>
          名古屋駅より特急で2時間30分
        </template>
        <template slot="button">
          <a class="btn" href="http://www.hyperdia.com/" target="_blank">ハイパーダイヤ</a>
        </template>
      </Transportation>
      <Transportation>
        <template slot="title">
          【自動車】<br>
          北陸自動車道
        </template>
        <template slot="text">
          加賀IC・片山津IC より20 分。<br>
          <br>
          ◎山代温泉まで<br>
          大阪より3時間30分(名神+北陸道)<br>
          東京より6時間(東名+名神+北陸道)<br>
          名古屋より2時間40分(名神+北陸道)
        </template>
        <template slot="button">
          <a class="btn" href="https://www.c-nexco.co.jp/" target="_blank">NEXCO中日本</a>
        </template>
      </Transportation>
    </div>
    <div class="section">
      <h3 class="sub-title">
        地図【山代温泉近郊拡大図】
      </h3>
      <p class="text">
        14:20から18:00までの間は、加賀温泉駅まで随時シャトルバスでお迎えに上がります。
      </p>
      <div class="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3215.9596059557343!2d136.363077!3d36.28903!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x380d7f35e13f87ec!2sBeniya%20Mukayu!5e0!3m2!1sen!2sus!4v1580445427115!5m2!1sen!2sus"
          width="100%"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
        />
      </div>
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Transportation from '~/components/Transportation.vue'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle,
    Transportation
  },
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: '交通',
        description: '交通のディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/access',
        image: 'https://mukayu.com/img/ogp/access.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sub-title {
    font-size: $fts-xx-large;
  }
</style>
