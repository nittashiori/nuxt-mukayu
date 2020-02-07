<template>
  <h2 class="page-title">
    <slot />
  </h2>
</template>

<style lang="scss" scoped>
  .page-title {
    margin: 10px 0 20px;
    font-size: $fts-x-heading;
    color: $gray-color;

    @include media(md, max) {
      font-size: $fts-heading;
    }
  }
</style>
