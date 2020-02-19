<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
    <GlobalNavSp />
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import GlobalNavSp from '~/components/GlobalNavSp'

export default {
  components: {
    Header,
    Footer,
    GlobalNavSp
  }
}
</script>

<style lang="scss">
html {
  @include font-ja;
  font-size: $fts-reset;
  background: $body-color;
  overflow-x: hidden;
}

body {
  font-size: $fts-regular;
  color: $text-color;
  border-bottom: 40px solid $black-color;
  overflow-x: hidden;
  position: relative;
}

body > * ::selection {
  background: #E9EFE8;
}

h1,h2,h3,h4,h5,h6 {
  font-weight: normal;
}

p {
  font-size: $fts-regular;
  line-height: 1.5;
}

ul, li {
  list-style-type: none;
}

a {
  color: $text-color;
  text-decoration: none;
  transition: all 0.3s $ease;
}

img {
  width: 100%;
  vertical-align: bottom;
}

address {
  font-style: normal;
}

select {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: -internal-light-dark-color(black, white);
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: menulist;
  box-sizing: border-box;
  align-items: center;
  white-space: pre;
  -webkit-rtl-ordering: logical;
  background-color: rgb(248, 248, 248);
  cursor: default;
  margin: 0em;
  font: 400 11px system-ui;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(166, 166, 166);
  border-image: initial;
}
</style>
