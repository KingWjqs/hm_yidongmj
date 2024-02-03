import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/utils/vant_cli'
import ArticleItem from '@/components/ArticleItem.vue'
Vue.config.productionTip = false

Vue.component('ArticleItem', ArticleItem)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
