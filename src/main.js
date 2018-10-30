// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import util from './assets/js/util.js'
require('./assets/js/wxsdk.js')
// import { WechatPlugin, ToastPlugin, LoadingPlugin } from 'vux'

// Vue.prototype.host = "http://47.105.59.207:29090/zt-wx";
Vue.prototype.http = util.http;
Vue.prototype.storage = util.storage;

// Vue.use(WechatPlugin)
// Vue.use(ToastPlugin)
// Vue.use(LoadingPlugin)


// Vue.wechat.config({
//   debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
//   appId: 'wx9cb9ed7d7cc504b7', // 必填，公众号的唯一标识
//   timestamp: '', // 必填，生成签名的时间戳
//   nonceStr: '', // 必填，生成签名的随机串
//   signature: '',// 必填，签名
//   jsApiList: [] // 必填，需要使用的JS接口列表
// })


FastClick.attach(document.body)

Vue.config.productionTip = false

// Vue.http.get('/api', ({data}) => {
//   Vue.wechat.config(data.data)
// })

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
