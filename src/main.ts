import './reset.scss';
import Vue from 'vue';
import NoizExample from './views/NoizExample/index.vue';

window.onload = function() {
  if (Enabler.isInitialized()) {
    enablerInitHandler();
  } else {
    Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
  }
}

function enablerInitHandler() {
  new Vue({
    render: (h) => h(NoizExample)
  }).$mount('#app');
}
