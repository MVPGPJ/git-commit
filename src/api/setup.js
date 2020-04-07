import axios from 'axios'
import Vue from 'vue'
import hostConfig from './config'
import routers from '../router/router'
import browser from '@/utils/browser.js'
const baseUrl = hostConfig.apiHost
const apiConfig = axios.create({
    // 设置超时时间
    timeout: 10000,
    // 请求的baseUrl
    baseURL: baseUrl,
    // 请求头部信息
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'OS-TYPE': (() => {
            if (browser.isPc) {
                return 1
            } else if (browser.isAndroid) {
                return 2
            } else {
                return 3
            }
        })()
    },
    withCredentials: true,
    // 请求参数转换
    transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
            if (data[it] === 0 || (data[it] || data[it] === '') || data[it] === false) {
                if (ret !== '') ret += '&'
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it])
            }
        }
        return ret
    }]
})

// 请求拦截
apiConfig.interceptors.request.use(config => {
    // Vue.prototype.$Toast.loading({
    //     loadingType: 'spinner',
    //     message: '加载中...',
    //     duration: 0
    // })
    if (!config.data) {
        config.data = {}
    }
    return config
}, err => {
    return Promise.reject(err)
})
apiConfig.interceptors.response.use(res => {
    const route = routers.history.pending || routers.history.current
    if (res.data.code === '2001' || res.data.code === '2002') {
        // 特殊处理
        localStorage.clear()
        if (route.path !== '/home' && route.name !== '404') {
            routers.replace('/')
        }
    } else if (res.data.code !== '2000') {
        Vue.prototype.$Toast(res.data.message || '请求失败')
    } else {
        // Vue.prototype.$.clear()
    }
    let json = res.data
    if (typeof json === 'string') {
        json = JSON.parse(json)
    }
    return json
}, err => {
    // Vue.prototype.$Toast('服务器异常，请稍后重试')
    return Promise.reject(err)
})

export function createAPI (url, method, data) {
    let config = {
        method: method,
        url: url,
        data
    }
    return apiConfig(config)
}
