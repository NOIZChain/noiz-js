import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import router from './router';
import './reset.scss'
import { createLocalization } from './locale'
import { Noiz } from './client';
import { NLPChat } from './client/nlp';

Vue.config.productionTip = false;
Vue.use(VueI18n)

const i18n = createLocalization()
const noiz = new Noiz({
  host: 'http://localhost:1337',
  graphQLEndpoint: '/graphql'
})
noiz.initSession()

const chat = new NLPChat(noiz);

(window as any).chat = chat

new Vue({
  router,
  render: (h) => h(App),
  i18n,
}).$mount('#app');
