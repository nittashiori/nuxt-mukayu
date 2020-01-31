<template>
  <div>
    <section class="transportation">
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
  </div>
</template>
