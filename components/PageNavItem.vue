<template>
  <div class="page-innder-nav__item">
    <a
      :href="arg.link"
    >
      {{ arg.title }}
    </a>
  </div>
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
