import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '/api'

new Vue({
  render: h => h(App),
}).$mount('#app')
