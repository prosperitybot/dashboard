import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router'
import VueMobileDetection from 'vue-mobile-detection'

loadFonts()

createApp(App).use(router)
  .use(vuetify)
  .use(VueMobileDetection)
  .mount('#app')
