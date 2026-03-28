import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faSpotify, faYoutube } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebook, faInstagram, faSpotify, faYoutube)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})