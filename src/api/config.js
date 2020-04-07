// 不同环境的请求配置
const prodConfigs = {
    'bt.y8511.cn': {
        apiHost: 'https://bt-jlwweb.y8511.cn'
    },
    'bt-pre.y8511.cn': {
        apiHost: 'https://bt-jlwweb-pre.y8511.cn'
    },
    'bt-dev.y8511.cn': {
        apiHost: 'http://bt-jlwweb-dev.y8511.cn'
    },
    'bt-test.y8511.cn': {
        apiHost: 'http://bt-jlwweb-test.y8511.cn'
    },
    '172.16.17.236': {
        apiHost: 'http://bt-jlwweb-dev.y8511.cn'
    },
    '172.16.17.48': {
        apiHost: 'http://172.16.17.38:8081'
    },
    'localhost': {
        apiHost: 'http://bt-jlwweb-dev.y8511.cn'
    }
}
// 本地默认
// const devConfig = {
//     apiHost: '',
//     domain: '',
//     staticHost: '',
//     vconsole: true
// }
const hostConfig = prodConfigs[location.hostname]
if (hostConfig) {
    window.baseUrl = hostConfig.apiHost
}
// module.exports = {
//     host: hostConfig
// }
export default hostConfig
