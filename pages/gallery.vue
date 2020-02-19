<template>
  <section class="container">
    <PageTitle>
      {{ meta.title }}
    </PageTitle>
    <div class="kv video">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/sH87jeRu8zs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="sub-video">
      <div class="sub-video__item">
        <iframe
          src="https://www.youtube.com/embed/pX0icH5ZptI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="sub-video__item">
        <iframe
          src="https://www.youtube.com/embed/pX0icH5ZptI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="sub-video__item">
        <iframe
          src="https://www.youtube.com/embed/pX0icH5ZptI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
    </div>
    <div class="photo-gallery">
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="images/J4-3-btn01.jpg" alt="和室">
        <figcaption class="photo-gallery__caption">
          和室
        </figcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="images/J4-3-btn02.jpg" alt="和室">
        <figcaption class="photo-gallery__caption">
          和室
        </figcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="images/J4-5-btn01.jpg" alt="和室">
        <figcaption class="photo-gallery__caption">
          和室
        </figcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="images/J4-6-btn01.jpg" alt="和室">
        <figcaption class="photo-gallery__caption">
          和室
        </figcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="images/J5-0-btn01.jpg" alt="和室">
        <figcaption class="photo-gallery__caption">
          和室
        </figcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="images/J5-1-btn01.jpg" alt="和室">
        <figcaption class="photo-gallery__caption">
          和室
        </figcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import Meta from '~/assets/js/meta.js'

export default {
  components: {
    PageTitle
  },
  mixins: [Meta],
  data () {
    return {
      meta: {
        title: 'ピクチャムービー',
        description: 'ピクチャムービーのディスクリプション。加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。',
        type: 'article',
        url: 'https://mukayu.com/gallery',
        image: 'https://mukayu.com/img/ogp/gallery.jpg'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .sub-video {
    margin: 10px 0;
    @include flex(wrap, flex-start, flex-start);

    @include media(md, max) {
      flex-direction: column;
    }

    &__item {
      width: calc((100% - 20px) / 3);
      padding-bottom: 18.25%;  /*高さをpaddingで指定(16:9)*/
      height: 0px;              /*高さはpaddingで指定するためheightは0に*/
      position: relative;

      @include media(md, max) {
        width: 100%;
        padding-bottom: 56.25%;
        flex-direction: column;
      }

      &:not(:nth-child(3n)) {
        margin: 0 10px 0 0;

        @include media(md, max) {
          margin: 0;
        }
      }

      &:not(:first-child) {
        @include media(md, max) {
          margin: 10px 0 0;
        }
      }
    }

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .photo-gallery {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;

    @include media(md, max) {
      grid-template-columns: 1fr 1fr;
    }

    &__item {
      position: relative;
    }

    &__caption {
      opacity: 0;
      @include flex(wrap, center, center);
      width: 100%;
      height: 100%;
      font-size: $fts-x-large;
      color: $white-color;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      transition: all 0.3s $ease;

      &::before {
        display: block;
        content: "";
        width: 100%;
        height: 100%;
        background: $black-color;
        opacity: 0.7;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }

    &__caption:hover {
      opacity: 1;
    }
  }

</style>
