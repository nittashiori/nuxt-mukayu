<template>
  <section class="grid__col3 transportation">
    <h3 class="transportation__title">
      <slot name="title" />
    </h3>
    <p class="text">
      <slot name="text" />
    </p>
    <div class="btn-wrap">
      <slot name="button" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .transportation {
    margin: 0 0 40px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;

    &__title {
      font-size: $fts-xx-large;
    }
  }
</style>
