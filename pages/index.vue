<template>
  <div class="container">
    <div>
      <div class="content">
        <div class="kv">
          <iframe
            width="100%"
            src="https://www.youtube.com/embed/NZ84oLS6_Uw"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div class="cards">
          <Card
            v-for="list in lists"
            :arg="list"
            :key="list.title"
          />
        </div>
        <!-- .cards -->
      </div>
      <!-- content -->
    </div>
  </div>
</template>

<script>
import Card from '~/components/Card.vue'
import Data from '~/store/data.json'

export default {
  components: {
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
