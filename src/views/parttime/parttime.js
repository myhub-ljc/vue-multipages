import Vue from 'vue'
import parttime from './parttime'
import router from '../../router'
import $ from 'jquery'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#parttime',
  router,
  $,
  render: h => h(parttime)
})
