<template>
  <a
    :href="arg.link"
    class="card"
  >
    <figure class="figure">
      <picture class="figure-image">
        <img :src="`${arg.image}`" :alt="`${arg.title}イメージ`">
      </picture>
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
