import Vue from 'vue'
import App from './App'
import router from './router'

import iView from 'iview';
import 'iview/dist/styles/iview.css'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Mock from './mock'
Mock.bootstrap();

Vue.config.productionTip = true

Vue.use(iView)
Vue.use(Element)

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
