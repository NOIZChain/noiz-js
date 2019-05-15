import './reset.scss';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import { createLocalization } from './locale';
import { NLPChat } from './client/nlp';
import { noiz, nlpChat } from './noiz';
import { Noiz } from './client';

Vue.config.productionTip = false;
Vue.use(VueI18n)

const i18n = createLocalization()

new Vue({
  router,
  render: (h) => h(App),
  i18n,
  props: {
    nlpChat: NLPChat,
    noiz: Noiz
  },
  propsData: {
    nlpChat,
    noiz
  }
}).$mount('#app');
