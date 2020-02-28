import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleDown)

Vue.component('fa-icon', FontAwesomeIcon)

Vue.config.productionTip = false
