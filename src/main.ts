// Import Baklava
import { BaklavaVuePlugin } from '@baklavajs/plugin-renderer-vue';
import '@baklavajs/plugin-renderer-vue/dist/styles.css';

import '@/assets/scss/style.scss'; // Our style

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {Graphs} from "@/app/ir/irCommon";

let rep = JSON.stringify(Graphs.mnist())
console.log(rep)

Vue.use(BaklavaVuePlugin);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
