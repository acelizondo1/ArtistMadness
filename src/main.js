import 'script-loader!jquery/dist/jquery.min';
import 'script-loader!what-input/dist/what-input.min';
import 'script-loader!foundation-sites/dist/js/foundation.min';

import Vue from 'vue'
import App from './App.vue'


new Vue({
  el: '#app',
  render: h => h(App)
})


