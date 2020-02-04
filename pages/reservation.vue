<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="movie">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/sH87jeRu8zs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <p class="text">
      お予約は、インターネット、またはお電話にてお申し込みください。
    </p>
    <div class="grid">
      <section class="section">
        <h3 class="sub-title">
          インターネットからのご予約
        </h3>
        <p class="text">
          「べにや無何有インターネット予約サイト」では、最新のプラン情報をご案内しております。下記リンクから、予約ページにアクセスしてください。<br>
          ※未就学児、乳幼児のご来館はご遠慮いただいております。<br>
          ※小学生以上ご来館いただけます。<br>
          ※8名様以上の団体でのご予約はお断りしております。
        </p>
        <div class="btn-wrap">
          <a class="btn" href="http://www.489pro.com/asp/489/menu.asp?id=17000013&lan=JPN">インターネット予約ページへ</a>
        </div>
      </section>
      <section class="section">
        <h3 class="sub-title">
          お電話でのご予約
        </h3>
        <p class="text freedial">
          フリーダイヤル 0120-07-1340
        </p>
        <p class="text">
          予約係が、お部屋タイプ・料金などの打ち合わせをさせていただきます。
        </p>
      </section>
    </div>
    <div class="grid">
      <section class="section search">
        <h3 class="sub-title">
          インターネット空室検索
        </h3>
        <section class="search-item">
          <h4 class="search-title">
            チェックイン日
          </h4>
          <select class="obj_year" name="obj_year" tabindex="1">
            <option value="2020">
              2020
            </option><option value="2021">
              2021
            </option><option value="2022">
              2022
            </option><option value="2023">
              2023
            </option>
          </select>
          <p class="search-unit">
            年
          </p>
        </section>
        <section>
          <h4 class="search-title">
            1室あたりの人数
          </h4>
          <select class="obj_per_num" name="obj_per_num" tabindex="5">
            <option value="1">
              1
            </option><option value="2">
              2
            </option><option value="3">
              3
            </option><option value="4">
              4
            </option><option value="5">
              5
            </option><option value="6">
              6
            </option><option value="7">
              7
            </option><option value="8">
              8
            </option><option value="9">
              9
            </option><option value="10">
              10
            </option>
          </select>
          <p class="search-unit">
            人
          </p>
        </section>
        <section>
          <h4 class="search-title">
            1室あたりの人数
          </h4>
          <select class="obj_stay_num" name="obj_stay_num" tabindex="6">
            <option value="1">
              1
            </option><option value="2">
              2
            </option><option value="3">
              3
            </option><option value="4">
              4
            </option><option value="5">
              5
            </option><option value="6">
              6
            </option><option value="7">
              7
            </option><option value="8">
              8
            </option><option value="9">
              9
            </option><option value="10">
              10
            </option>
          </select>
          <p class="search-unit">
            泊
          </p>
        </section>
        <section>
          <h4 class="search-title">
            室数
          </h4>
          <select class="obj_room_num" name="obj_room_num" tabindex="7">
            <option value="1">
              1
            </option><option value="2">
              2
            </option><option value="3">
              3
            </option><option value="4">
              4
            </option><option value="5">
              5
            </option><option value="6">
              6
            </option><option value="7">
              7
            </option><option value="8">
              8
            </option><option value="9">
              9
            </option><option value="10">
              10
            </option>
          </select>
          <p class="search-unit">
            室
          </p>
        </section>
        <div class="btn-wrap">
          <a class="btn" href="/">空室検索</a>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle
  },
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: 'ご予約',
        description: 'ご予約のディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/reservation',
        image: 'https://mukayu.com/img/ogp/reservation.jpg'
      }
    }
  }
}
</script>
