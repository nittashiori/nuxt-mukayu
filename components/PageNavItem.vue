<template>
  <a
    :href="arg.link"
    class="page-innder-nav__item"
  >
    {{ arg.title }}
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
  .page-innder-nav__item {
    display: block;
    margin: 0 20px 0 0;

    @include media(md, max) {
      margin: 0 20px 10px 0;
    }

    &:hover {
      opacity: 0.7;
    }
  }
</style>
