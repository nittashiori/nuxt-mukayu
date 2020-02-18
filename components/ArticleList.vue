<template lang="md">
  <div class="article-list">
    <ArticleNews
      v-for="post in posts"
      :title="post.fields.title"
      :content="post.fields.content"
      :date="post.fields.date"
      :slug="post.fields.slug"
      :key="post.fields.slug"
      class="article-group"
    />
    <ArticleNews />
  </div>
</template>

<script>
import ArticleNews from '~/components/ArticleNews.vue'
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  component: {
    ArticleNews
  }
}
</script>

<style lang="scss" scoped>
  .article-list {
    margin: 20px 0 0;
    transition: height 0.5s $ease;

    @include media(md, max) {
      overflow: hidden;
    }
  }
</style>
