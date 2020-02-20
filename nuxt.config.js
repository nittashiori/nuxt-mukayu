
const { getConfigForKeys } = require('./lib/config.js')
const ctfConfig = getConfigForKeys([
  'CTF_BLOG_POST_TYPE_ID',
  'CTF_SPACE_ID',
  'CTF_CDA_ACCESS_TOKEN'
])
const { createClient } = require('./plugins/contentful')
const cdaClient = createClient(ctfConfig)

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - mukayu',
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'mukayu' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://example.com' },
      { hid: 'og:title', property: 'og:title', content: 'mukayu' },
      { hid: 'og:description', property: 'og:description', content: '加賀山代温泉、薬師山の高台に静かにたたずむ宿。宿の名の「無何有」とは空っぽの中の豊かさという意味。静かで平和な時間が流れています。' },
      { hid: 'og:image', property: 'og:image', content: 'https://example.com/img/ogp/common.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Istok+Web&display=swap' }
    ],
    __dangerouslyDisableSanitizers: ['script'],
    script: [
      {
        innerHTML: `
        (function(d) {
          var config = {
            kitId: 'uao2mcm',
            scriptTimeout: 3000,
            async: true
          },
          h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
        })(document);
        `,
        type: 'text/javascript'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: false,
  /*
  ** Global CSS
  */
  css: [
    'ress'// Node.js モジュールをロードする
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/contentful' }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    'nuxt-fontawesome',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit'
  ],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixin.scss',
      '~/assets/scss/common.scss'
    ]
  },
  /*
  ** FontAwesome
  */
  fontawesome: {
    imports: [
      {
        set: '@fortawesome/free-solid-svg-icons',
        icons: ['fas']
      }
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  generate: {
    routes () {
      return cdaClient.getEntries(ctfConfig.CTF_BLOG_POST_TYPE_ID)
        .then((entries) => {
          return [
            ...entries.items.map(entry => `/ca_news/${entry.fields.slug}`)
          ]
        })
    }
  },
  env: {
    CTF_SPACE_ID: ctfConfig.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: ctfConfig.CTF_CDA_ACCESS_TOKEN,
    CTF_BLOG_POST_TYPE_ID: ctfConfig.CTF_BLOG_POST_TYPE_ID
  },
  markdownit: {
    injected: true,
    breaks: true,
    html: true
  }
}
