import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';


Vue.config.productionTip = false

import tree from './components/tree';
import item from './components/item';
import search from './components/search';


Vue.component('tree', tree);
Vue.component('item', item);
Vue.component('search', search);

new Vue({
  render: h => h(App),
}).$mount('#app')
