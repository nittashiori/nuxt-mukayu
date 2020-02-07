<template>
  <div class="article">
    <section class="article__header">
      <h3 class="article__title">
        <a href="/">方林円庭の会 ありがたし花2019</a>
      </h3>
      <time class="article__time">2019年 2月 24日</time>
      <div @click="pullDownToggle()" :class="{ 'is-open': isOpen }" class="article-pullbutton">
        <font-awesome-icon icon="angle-down" />
      </div>
    </section>
    <transition @enter="start" @after-enter="end" @before-leave="start" @after-leave="end" name="pulldown">
      <div v-show="isOpen" class="article__content">
        <div class="article__image">
          <img src="images/ca_news/DSC_0044.jpg">
        </div>
        <div class="article__image">
          <img src="images/ca_news/2018-05-13-12.57.01.jpg">
        </div>
        <p class="article__text">
          方林円庭の会 「ありがたし花」2019<br>
          日時・場所<br>
          2019年5月12日 日曜日<br>
          草木に仕える花士（はなのふ）として、大自然や神仏に花を献ずる活動をしている花士・珠寳（しゅほう）氏とともに自然の中で草木花と親しむ豊かな時間を楽しみます。<br>
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      width: 0,
      openFlag: false
    }
  },
  mounted () {
    this.handleResize()
    window.addEventListener('resize', this.handleResize)
    if (this.width <= 768) {
      this.isOpen = false
    } else {
      this.isOpen = true
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    // ウィンドウサイズを変更したときの処理
    handleResize () {
      this.width = window.innerWidth
      // PCサイズになったら記事を全て表示させる
      if (this.width >= 768) {
        this.isOpen = true
      }
      // SPで開閉したときの状態に戻す
      if (this.width <= 780 && this.openFlag === false) {
        this.isOpen = false
      }
    },
    // プルダウンボタンをクリックしたときの処理
    pullDownToggle () {
      this.isOpen = !this.isOpen
      this.openFlag = !this.openFlag
    },
    start (el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end (el) {
      el.style.height = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .article {
    padding: 0 0 40px;

    @include media(md, max) {
      padding: 0 0 25px;
    }

    &:not(:first-child) {
      padding: 40px 0;
      border-top: 1px solid $black-color;

      @include media(md, max) {
        padding: 25px 0;
      }
    }

    &__header {
      position: relative;
    }

    &__title {
      font-size: $fts-xx-large;

      @include media(md, max) {
        width: calc(100% - 50px);
        font-size: $fts-x-large;
      }
    }

    &__time {
      margin: 5px 0 0;
      font-family: 'PT Serif Caption', Georgia, Times, "Times New Roman", serif;

      @include media(md, max) {
        width: calc(100% - 50px);
      }
    }

    &__content {
      margin: 20px 0 0;
      transition: height 0.5s $ease;

      @include media(md, max) {
        overflow: hidden;
      }
    }

    .pulldown-enter-active,
    .pulldown-leave-active {
      will-change: height, opacity;
      transition: height 0.5s $ease, opacity 0.4s $ease;
      overflow: hidden;
    }

    .pulldown-enter,
    .pulldown-leave-to {
      height: 0 !important;
      opacity: 0;
    }

    &__image {
      margin: 10px 0;
    }

    &__text {
      margin: 20px 0;
    }
  }

  .article-pullbutton {
    display: none;

    @include media(md, max) {
      @include flex(wrap, center, center);
      width: 40px;
      height: 40px;
      background: $gray-color;
      position: absolute;
      top: 0;
      right: 0;
      transition: all 0.3s $ease;
    }

    &:hover {
      opacity: 0.7;
    }

    svg {
      color: $white-color;
      font-size: $fts-x-large;
      transition: all 0.3s $ease;
    }
  }

  .article-pullbutton.is-open {

    svg {
      transform: rotate(180deg);
    }
  }
</style>
