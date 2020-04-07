import Vue from 'vue'
import Vuex from 'vuex'
// import { homeModule } from './modules/home'
Vue.use(Vuex)
const ua = navigator.userAgent
const state = {
    changeableNum: 1,
    isWeixin: ua.indexOf('MicroMessenger') > -1,
    // isQq: ua.indexOf('QQ') > -1 && ua.indexOf('MQQBrowser') === -1,
    isQq: (/MQQBrowser/i.test(ua) && /QQ/i.test((ua).split('MQQBrowser'))) || (ua.indexOf('QQ') > -1 && ua.indexOf('MQQBrowser') === -1),
    isAndroid: ua.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1,
    isBaiduBoxApp: ua.toLocaleLowerCase().indexOf('baiduboxapp') > -1, // box
    isIOS: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
    isPc: !(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)),
    isAndroidQq: (ua.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1) && (ua.indexOf('QQ') > -1 && ua.indexOf('MQQBrowser') === -1),
    isIosQq: (!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) && (ua.indexOf('QQ') > -1 && ua.indexOf('MQQBrowser') === -1),
    isApp: /jyh_mobile/.test(ua)
}
const store = new Vuex.Store({
    state
})
export default store
