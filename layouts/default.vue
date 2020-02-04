<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang="scss">
html {
  @include font-ja;
  font-size: $fts-reset;
}

body {
  font-size: $fts-regular;
}

ul, li {
  list-style-type: none;
}

.container {
  margin: 0 auto;
}
</style>
