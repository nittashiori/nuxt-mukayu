<template>
  <section class="container">
    <PageTitle>
      料理
    </PageTitle>
    <nav class="page-nav">
      <PageNavItem
        v-for="food in foods"
        :arg="food"
        :key="food.title"
      />
    </nav>
    <div class="content">
      <div class="page-kv">
        <img src="~/static/images/food/J6-0-01d.jpg">
      </div>
    </div>
    <div class="cards">
      <Card
        v-for="food in foods"
        :arg="food"
        :key="food.title"
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
      foods: Data.foods
    }
  }
}
</script>
