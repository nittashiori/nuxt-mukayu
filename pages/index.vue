<template>
  <div class="container">
    <div>
      <Header />
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

      <Footer />
    </div>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Card from '~/components/Card.vue'
import Data from '~/store/data.json'

export default {
  components: {
    Header,
    Footer,
    Card
  },
  asyncData (context) {
    return {
      lists: Data.lists
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
