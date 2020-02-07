<template>
  <a
    :href="url"
    class="btn"
    target="_blank"
    rel="nofollow"
  >
    <slot name="label" /></a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      required: true
    }
  }
}
</script>
