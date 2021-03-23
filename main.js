import Vue from 'vue'
import App from './App'

import $H from './common/request.js';
Vue.prototype.$H = $H

import store from './store/index.js';
Vue.prototype.$store = store

// Vue.prototype.REQUEST_URL = 'https://app.chengguan888.com/public/';
Vue.prototype.REQUEST_URL = 'https://live.91banse.cn/public/';
// Vue.prototype.REQUEST_URL = 'http://chengguansxy.dianjinkeji.cn/public/';
Vue.prototype.IMG_URL = 'https://app.chengguan888.com/uploads/';
Vue.prototype.IMG_URL2 = 'https://app.chengguan888.com';
Vue.prototype.IMG_URL1 = 'https://app.chengguan888.com/uploads/images/';
Vue.prototype.icon_url = 'https://app.chengguan888.com/public/uploads/face/';


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	store,
    ...App
})
app.$mount()
