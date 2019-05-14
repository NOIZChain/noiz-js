import './reset.scss';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import { createLocalization } from './locale';
import { NLPChat } from './client/nlp';
import noiz from './noiz';

Vue.config.productionTip = false;
Vue.use(VueI18n)

const i18n = createLocalization()
const nlpChat = new NLPChat(noiz);

(window as any).chat = nlpChat

new Vue({
  router,
  render: (h) => h(App),
  i18n,
  props: {
    nlpChat: NLPChat
  },
  propsData: {
    nlpChat
  }
}).$mount('#app');
