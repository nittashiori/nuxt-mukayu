<template>
  <section class="container">
    <PageTitle>
      施設
    </PageTitle>
    <nav class="page-nav">
      <PageNavItem
        v-for="facilitie in facilities"
        :arg="facilitie"
        :key="facilitie.title"
      />
    </nav>
    <div class="content">
      <div class="page-kv">
        <img src="~/static/images/facilities/J7-0-01.jpg">
      </div>
      <p class="text">
        ・Wi-Fi が全館でご利用いただけます。
      </p>
    </div>
    <div class="cards">
      <Card
        v-for="facilitie in facilities"
        :arg="facilitie"
        :key="facilitie.title"
      />
    </div>
  </section>
</template>

<script>
import PageTitle from '~/components/PageTitle.vue'
import PageNavItem from '~/components/PageNavItem.vue'
import Card from '~/components/Card.vue'
import Data from '~/store/data.json'

export default {
  components: {
    PageTitle,
    PageNavItem,
    Card
  },
  asyncData (context) {
    return {
      facilities: Data.facilities
    }
  }
}
</script>
