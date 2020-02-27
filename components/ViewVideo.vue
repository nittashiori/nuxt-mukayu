<template>
  <div class="kv video">
    <lazy-component @loaded="handler" tag="div">
      <slot name="video" />
    </lazy-component>
  </div>
</template>

<script>
export default {
  methods: {
    handler () {
      console.log('loaded') // eslint-disable-line
    }
  }
}
</script>

<style lang="scss">
  .video {
    transition: all 0.3s $fadeCubic;
  }
</style>
