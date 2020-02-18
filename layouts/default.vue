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

.container {
  max-width: 960px;
  margin: 40px auto;

  @include media(md, max) {
    margin: 20px auto;
    padding: 0 20px;
  }
}

.video,
.map {
  width: 100%;              /*横幅いっぱいにwidthを指定*/
  padding-bottom: 56.25%;  /*高さをpaddingで指定(16:9)*/
  height: 0px;              /*高さはpaddingで指定するためheightは0に*/
  position: relative;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}

.cards {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, calc((100% - 90px) / 3));
  gap: 45px;
  margin: 45px 0;

  @include media(md, max) {
    grid-template-columns: repeat(2, calc((100% - 20px) / 2));
    gap: 20px;
    margin: 20px 0;
  }
}

.btn-wrap {
  margin: 20px 0 0;
}

.btn {
  width: fit-content;
  display: block;
  padding: 10px 15px;
  background: $black-color;
  color: $white-color;
  text-align: center;

  &:hover {
    opacity: 0.7;
  }

  &--center {
    margin: auto;
  }
}

.btn--center {
  width: fit-content;
  display: block;
  padding: 10px 15px;
  background: $black-color;
  color: $white-color;
  text-align: center;
  margin: auto;

  &:hover {
    opacity: 0.7;
  }
}

.text {
  margin: 20px 0;
}

.text-link {
  color: $gray-color;

  &:hover {
    opacity: 0.7;
  }
}

.page-nav {
  @include flex(wrap, flex-start, flex-start);
  margin: 20px 0;
}

.image-list {
  &__item {
    margin: 20px 0;
  }
}

.grid {
  @include flex(wrap, space-between, strech);

  @include media(md, max) {
    font-display: column;
  }

  &__col2 {
    width: calc((100% - 40px) / 2);

    @include media(md, max) {
      width: 100%;
    }
  }

  &__col3 {
    width: calc((100% - 80px) / 3);

    @include media(md, max) {
      width: 100%;
    }
  }
}
.markdown {
  > * {
    margin: 20px 0 0;
  }
  a {
    text-decoration: underline;
    &:hover {
      text-decoration: none;
    }
  }
}
</style>
