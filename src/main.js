import Vue from 'vue';

import router from './router';

import App from './App';
import './scss/main.scss';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
