import Vue from 'vue'
import App from './App.vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './vuex/store'
import router from './router'
import echarts from 'echarts'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(MintUI)

Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
