<template>
  <div class="container">
    <div class="content">
      <div class="kv video">
        <iframe
          width="100%"
          src="https://www.youtube.com/embed/NZ84oLS6_Uw"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          title="brandmovie"
        />
      </div>
      <div>
        <div class="cards animation-trigger1">
          <card
            v-for="list in lists"
            :arg="list"
            :key="list.id"
            class="animation-target1 animation-target"
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
  },
  mounted () {
    const scene1 = this.$scrollmagic
      .scene({
        triggerElement: '.animation-trigger1',
        triggerHook: 'onEnter',
        offset: 0,
        duration: 100,
        reverse: false
      })
      .setTween('.animation-target1', {
        css: {
          opacity: '1',
          transform: 'translateY(0)'
        }
      })
    this.$scrollmagic.addScene(scene1)
  }
}
</script>

<style>
</style>
