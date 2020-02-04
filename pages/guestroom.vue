<template>
  <section class="container">
    <PageTitle>
      客室
    </PageTitle>
    <nav class="page-nav">
      <PageNavItem
        v-for="guestroom in guestrooms"
        :arg="guestroom"
        :key="guestroom.title"
      />
    </nav>
    <div class="content">
      <div class="page-kv">
        <img src="images/guestroom/J5-0-01.jpg">
      </div>
      <p class="text">
        ◎べにや無何有は、和室8室、洋室2室、和洋室6室、特別室2室の計16室がございます。<br>
        ◎全ての客室からは、自然の山庭の眺めを楽しむことができます。<br>
        ◎全ての客室に露天風呂が付いております。<br>
        ◎客室内の露天風呂の他に男女大浴場、男女露天風呂、男女サウナをご利用いただけます。<br>
        ◎Wi-Fiが全館でご利用いただけます。
      </p>
    </div>
    <div class="cards">
      <Card
        v-for="guestroom in guestrooms"
        :arg="guestroom"
        :key="guestroom.title"
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
      guestrooms: Data.guestrooms
    }
  }
}
</script>
