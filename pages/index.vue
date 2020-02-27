<template>
  <div class="container">
    <div class="content">
      <view-video>
        <iframe
          slot="video"
          width="100%"
          src="https://www.youtube.com/embed/NZ84oLS6_Uw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        />
      </view-video>
      <div>
        <div class="cards">
          <card
            v-for="list in lists"
            :arg="list"
            :key="list.id"
          />
        </div>
      <!-- .cards -->
      </div>
    <!-- content -->
    </div>
  </div>
</template>

<script>
import ViewVideo from '~/components/ViewVideo.vue'
import Card from '~/components/Card.vue'
import Data from '~/store/data.json'

export default {
  components: {
    ViewVideo,
    Card
  },
  head () {
    return {
      titleTemplate: null,
      title: 'mukayu'
    }
  },
  asyncData (context) {
    return {
      lists: Data.lists
    }
  }
}
</script>

<style>
</style>
