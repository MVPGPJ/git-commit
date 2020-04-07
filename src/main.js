import Vue from 'vue'
import './utils/config' // 初始化配置挂载
import './plugins/axios'
// import './plugins/moveCode'
import App from './App.vue'
import router from './router/router'
import store from './store/index'
import apis from './api/index'
import { Toast, RadioGroup, Radio } from 'vant' // 常用组件
import './components'
import './assets/less/index.less'
import networkListening from './utils/networkListening'
import VueLazyload from 'vue-lazyload'
import * as filter from './utils/filters'
// import VConsole from 'vconsole'
// import hostConfig from './api/config'
import moment from 'moment'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import reg from '@/utils/validator.js'
import browser from './utils/browser'
import MetaInfo from 'vue-meta-info'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer)

window.browser = browser
Vue.use(networkListening)
Vue.use(MetaInfo)
Vue.use(Toast)
Vue.use(RadioGroup)
Vue.use(Radio)
Vue.use(ElementUI)

// 初始化时间转化插件
Vue.prototype.$moment = moment

// 全局配置Toast
Toast.setDefaultOptions({
    forbidClick: true,
    duration: 1500
})

// 注册VueLazyload
Vue.use(VueLazyload, {
    src: require('./assets/images/logo.png'),
    error: require('./assets/images/imgs/loading.gif'),
    loading: require('./assets/images/imgs/loading.gif'),
    attempt: 1,
    preLoad: 2
})
// 进入新页面位置在顶部
router.afterEach((to, from, next) => {
    window.scrollTo(0, 0)
})

// 注册全局过滤器
Object.keys(filter).forEach(key => {
    Vue.filter(key, filter[key])
})

// vconsole
// hostConfig.vconsole && new VConsole()

// 挂载到Vue身上
Vue.prototype.$Toast = Toast
Vue.prototype.$apis = apis
Vue.prototype.$reg = reg
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
    mounted () {
        document.dispatchEvent(new Event('render-event'))
    }
}).$mount('#app')
