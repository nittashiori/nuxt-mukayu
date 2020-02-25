import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  lazyComponent: true,
  preLoad: 1.3,
  attempt: 1,
  observer: true,
  fade: true,
  speed: 20,
  time: 300,

  observerOptions: {
    rootMargin: '0px',
    threshold: 0.1
  }
})
