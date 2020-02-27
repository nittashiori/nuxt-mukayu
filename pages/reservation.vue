<template>
  <section class="container">
    <page-title>
      {{ meta.title }}
    </page-title>
    <view-video>
      <iframe
        slot="video"
        width="100%"
        src="https://www.youtube.com/embed/sH87jeRu8zs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </view-video>
    <p class="text">
      お予約は、インターネット、またはお電話にてお申し込みください。
    </p>
    <div class="grid">
      <div class="grid__col2 wrap">
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
      <section class="grid__col2 section search">
        <h3 class="sub-title">
          インターネット空室検索
        </h3>
        <section class="search__item">
          <h4 class="search__title search__title--full">
            ・チェックイン日
            <span class="search__checkbox"><label><input type="checkbox">日付未定</label></span>
          </h4>
          <div class="search__select">
            <select class="obj_year" name="obj_year" tabindex="1">
              <option value="2020">
                2020
              </option>
              <option value="2021">
                2021
              </option>
              <option value="2022">
                2022
              </option>
              <option value="2023">
                2023
              </option>
            </select>
            <p class="search__unit">
              年
            </p>
          </div>
          <div class="search__select">
            <select class="obj_year" name="obj_year" tabindex="1">
              <option value="1">
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3">
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
              <option value="6">
                6
              </option>
              <option value="7">
                7
              </option>
              <option value="8">
                8
              </option>
              <option value="9">
                9
              </option>
              <option value="10">
                10
              </option>
              <option value="11">
                11
              </option>
              <option value="12">
                12
              </option>
            </select>
            <p class="search__unit">
              月
            </p>
          </div>
          <div class="search__select">
            <select class="obj_year" name="obj_year" tabindex="1">
              <option value="1">
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3">
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
              <option value="6">
                6
              </option>
              <option value="7">
                7
              </option>
              <option value="8">
                8
              </option>
              <option value="9">
                9
              </option>
              <option value="10">
                10
              </option>
              <option value="11">
                11
              </option>
              <option value="12">
                12
              </option>
              <option value="13">
                13
              </option>
              <option value="14">
                14
              </option>
              <option value="15">
                15
              </option>
              <option value="16">
                16
              </option>
              <option value="17">
                17
              </option>
              <option value="18">
                18
              </option>
              <option value="19">
                19
              </option>
              <option value="20">
                20
              </option>
              <option value="21">
                21
              </option>
              <option value="22">
                22
              </option>
              <option value="23">
                23
              </option>
              <option value="24">
                24
              </option>
              <option value="25">
                25
              </option>
              <option value="26">
                26
              </option>
              <option value="27">
                27
              </option>
              <option value="28">
                28
              </option>
              <option value="29">
                29
              </option>
              <option value="30">
                30
              </option>
              <option value="31">
                31
              </option>
            </select>
            <p class="search__unit">
              日
            </p>
          </div>
        </section>
        <section class="search__item">
          <h4 class="search__title">
            ・1室あたりの人数
          </h4>
          <div class="search__select">
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
            <p class="search__unit">
              人
            </p>
          </div>
        </section>
        <section class="search__item">
          <h4 class="search__title">
            ・1室あたりの人数
          </h4>
          <div class="search__select">
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
            <p class="search__unit">
              泊
            </p>
          </div>
        </section>
        <section class="search__item">
          <h4 class="search__title">
            ・室数
          </h4>
          <div class="search__select">
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
            <p class="search__unit">
              室
            </p>
          </div>
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
import ViewVideo from '~/components/ViewVideo.vue'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle,
    ViewVideo
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

<style lang="scss" scoped>
  .sub-title {
    font-size: $fts-xx-large;
  }
  .section {
    &:not(:nth-of-type(1)) {
      margin: 40px 0 0;
    }
  }
  .freedial {
    margin: 5px 0;
    font-size: $fts-xxx-large;
  }
  .search {
    background: #e5e5e5;
    padding: 20px;

    &__item {
      @include flex(wrap, flex-start, center);

      @include media(md, max) {
        @include flex(wrap, space-between, center);
      }

      &:not(:first-child) {
        margin: 20px 0 0;
      }
    }

    &__title {
      font-size: $fts-large;
    }

    &__title--full {
      width: 100%;
      @include flex(wrap, space-between, center);
    }

    &__checkbox {
      display: inline-block;
    }

    &__select {
      margin: 10px 0 0 20px;
      @include flex(wrap, flex-start, flex-start);
    }

    &__unit {
      margin: 0 0 0 5px;
    }
  }
</style>
