// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import  GlobalComponent  from './components/GlobalComponent'
import * as directives from './components/directive/index'

import * as filters from './components/filters/index'
Vue.config.productionTip = false
Vue.component("GlobalComponent",GlobalComponent)
Vue.use(GlobalComponent)

  // 遍历所有导出的过滤器并添加到全局过滤器

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
 })

 Object.keys(directives).forEach((key) => {
  Vue.directive(key,directives[key])
 })
/* eslint-disable no-new */
new Vue(
  {
  el: '#app',
  router,
  components: { App,GlobalComponent },
  template: '<App/>',

})
