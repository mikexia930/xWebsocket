import Vue from 'vue';
import router from './router';
import App from './App.vue';
import XWebSocket from '../packages/XWebSocket/index';

Vue.config.productionTip = false;

Vue.prototype.XWebsocket = new XWebSocket(
  'ws://82.157.123.54:9010/ajaxchattest',
  null,
  10,
  {
    time: 5,
    message: 'heartbeat',
  },
);

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
