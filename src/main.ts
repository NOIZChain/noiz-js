import './reset.scss';
import Vue from 'vue';
import NoizExample from './views/NoizExample/index.vue';

new Vue({
  render: (h) => h(NoizExample)
}).$mount('#app');
