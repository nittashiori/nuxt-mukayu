<template>
  <a
    :href="arg.link"
    class="card"
  >
    <figure class="figure">
      <img :src="`${arg.image}`" :alt="`${arg.title}イメージ`">
      <figcaption class="figure-caption">
        {{ arg.title }}
      </figcaption>
    </figure>
  </a>
</template>

<script>
export default {
  props: {
    arg: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    display: block;
    transition: all 0.3s $ease;

    &:hover {
      opacity: 0.7;
    }
  }
  .figure-image {
    display: block;
    height: auto;
  }
  .figure-caption {
    width: 100%;
    padding: 10px 15px;
    background: $black-color;
    color: $white-color;
    font-size: $fts-small;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
</style>
