import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import './reset.scss'
import { createLocalization } from './locale'

Vue.config.productionTip = false;
Vue.use(VueI18n)

const i18n = createLocalization()

new Vue({
  router,
  render: (h) => h(App),
  i18n,
}).$mount('#app');
