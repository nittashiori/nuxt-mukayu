<template lang="md">
  <div class="article">
    <section class="article__header">
      <h3 class="article__title">
        <nuxt-link
          :to="{ name: 'ca_news-slug', params: { slug: slug }}"
        >
          {{ title }}
        </nuxt-link>
      </h3>
      <time class="article__time">{{ date }}</time>
      <div @click="pullDownToggle()" :class="{ 'is-open': isOpen }" class="article-pullbutton">
        <fa-icon icon="angle-down"></fa-icon>
      </div>
    </section>
    <transition @enter="start" @after-enter="end" @before-leave="start" @after-leave="end" name="pulldown">
      <div v-show="isOpen" v-html="$md.render(content)" class="article__content markdown">
        {{ content }}
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  },
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
      @include font-en;

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
