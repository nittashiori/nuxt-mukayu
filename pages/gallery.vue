<template>
  <section class="container">
    <PageTitle>
      ピクチャームービー
    </PageTitle>
    <div class="main-movie">
      <iframe
        width="100%"
        src="https://www.youtube.com/embed/sH87jeRu8zs"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
    <div class="sub-movie">
      <div class="sub-movie__item">
        <iframe
          src="https://www.youtube.com/embed/pX0icH5ZptI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="sub-movie__item">
        <iframe
          src="https://www.youtube.com/embed/pX0icH5ZptI"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </div>
      <div class="sub-movie__item">
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
        <img class="photo-gallery__image" src="http://mukayu.com/wordpress/wp-content/uploads/2016/09/BENIYA_GUEST%E2%97%8E-300x168.jpg" alt="和室">
        <fipcaption class="photo-pallery__caption">
          和室
        </fipcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="http://mukayu.com/wordpress/wp-content/uploads/2016/09/BENIYA_GUEST%E2%97%8E-300x168.jpg" alt="和室">
        <fipcaption class="photo-pallery__caption">
          和室
        </fipcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="http://mukayu.com/wordpress/wp-content/uploads/2016/09/BENIYA_GUEST%E2%97%8E-300x168.jpg" alt="和室">
        <fipcaption class="photo-pallery__caption">
          和室
        </fipcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="http://mukayu.com/wordpress/wp-content/uploads/2016/09/BENIYA_GUEST%E2%97%8E-300x168.jpg" alt="和室">
        <fipcaption class="photo-pallery__caption">
          和室
        </fipcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="http://mukayu.com/wordpress/wp-content/uploads/2016/09/BENIYA_GUEST%E2%97%8E-300x168.jpg" alt="和室">
        <fipcaption class="photo-pallery__caption">
          和室
        </fipcaption>
      </figure>
      <figure class="photo-gallery__item">
        <img class="photo-gallery__image" src="http://mukayu.com/wordpress/wp-content/uploads/2016/09/BENIYA_GUEST%E2%97%8E-300x168.jpg" alt="和室">
        <fipcaption class="photo-pallery__caption">
          和室
        </fipcaption>
      </figure>
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'

export default {
  components: {
    PageTitle
  }
}
</script>
