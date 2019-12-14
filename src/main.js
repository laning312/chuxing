import Vue from 'vue'
import App from './App'
import '../src/common/css/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: ['^pages/index/main'],
    "permission": {
      "scope.userLocation": {
        "desc": "你的位置信息将用于小程序位置接口的效果展示" // 高速公路行驶持续后台定位
      }
    },
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1b1b1f',
      navigationBarTitleText: '滴滴出行',
      navigationBarTextStyle: 'white'
    }
  }
}
