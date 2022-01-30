import { createApp } from 'vue';
import VueMobileDetection from 'vue-mobile-detection';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import loadFonts from './plugins/webfontloader';
import router from './router';

loadFonts();

createApp(App).use(router)
  .use(vuetify)
  .use(VueMobileDetection)
  .mount('#app');
