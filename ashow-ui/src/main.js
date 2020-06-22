import Vue from 'vue'
import App from './App.vue'

// 注册组件
import AsButton from './components/button.vue'

// 全局引入图标文件
import './assets/fonts/iconfont.scss'

Vue.config.productionTip = false

Vue.component(AsButton.name, AsButton)

new Vue({
  render: h => h(App),
}).$mount('#app')
