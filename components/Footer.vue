<template>
  <footer class="footer">
    <section>
      <h2>インターネット予約</h2>
    </section>
    <div>
      <div class="footer__name">
        <logo />
        <p>加賀山代温泉<br>べにや無何有 むかゆう</p>
      </div>
      <address>
        〒922-0242<br>
        石川県加賀市山代温泉55-1-3<br>
        フリーダイヤル 0120-07-1340<br>
        TEL 0761-77-1340<br>
        FAX 0761-76-1340<br>
        E-mail beniya@mukayu.com<br>
        <nuxt-link
          to="/"
          class="text-link"
        >
          ※採用情報はこちら
        </nuxt-link>
      </address>
    </div>
  </footer>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>
