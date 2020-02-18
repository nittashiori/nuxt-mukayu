<template lang="md">
  <div class="article">
    <section class="article__header">
      <h3 class="article__title">
        {{ title }}
      </h3>
      <time class="article__time">{{ date }}</time>
    </section>
    <div v-html="$md.render(content)" class="article__content markdown">
      {{ content }}
    </div>
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
    content: {
      type: String,
      required: true
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
  }
</style>
