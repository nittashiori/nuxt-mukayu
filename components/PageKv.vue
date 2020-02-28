<template>
  <div v-lazy-container="{ selector: 'img' }" class="page-kv">
    <picture>
      <slot name="image" />
    </picture>
  </div>
</template>
