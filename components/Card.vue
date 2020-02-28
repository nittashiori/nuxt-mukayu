<template>
  <nuxt-link
    :to="arg.link"
    class="card"
  >
    <figure class="figure">
      <picture>
        <source :srcset="`${arg.webp}`" type="image/webp">
        <img :src="`${arg.image}`" :alt="`${arg.title}イメージ`">
      </picture>

      <figcaption class="figure-caption">
        {{ arg.title }}
      </figcaption>
    </figure>
  </nuxt-link>
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
  .animation-target {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.4s $fadeCubic;
  }
</style>
