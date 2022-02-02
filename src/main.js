import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import { Row, Col, Input, Button, Pagination } from 'element-ui';
import router from './router/index';
import moment from 'moment';

Vue.config.productionTip = false
Vue.use(Row);
Vue.use(Col);
Vue.use(Input);
Vue.use(Button);
Vue.use(Pagination);

Vue.prototype.$moment = moment;


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
