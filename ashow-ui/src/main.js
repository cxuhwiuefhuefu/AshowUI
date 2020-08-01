import Vue from 'vue'
import App from './App.vue'

// 引入按钮组件
import AsButton from './components/button.vue'
// 引入弹窗对话组价
import AsDialog from './components/dialog.vue'
// 引入输入框组件
import AsInput from './components/input.vue'



// 全局引入图标文件
import './assets/fonts/iconfont.scss'

Vue.config.productionTip = false



Vue.component(AsButton.name, AsButton)
Vue.component(AsDialog.name, AsDialog)
Vue.component(AsInput.name, AsInput)


new Vue({
  render: h => h(App),
}).$mount('#app')
