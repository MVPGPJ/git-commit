/**
 * 配置
 */
/**
 * 初始化
 *
 */
// (function () {
//     let ua = navigator.userAgent.toLowerCase()
//     let isMac = /mac os x/.test(ua)
//     window.isMobile = /mobile|wegt/.test(ua)
// }())

// 网易云顿
let url = 'https://cstaticdun.126.net/load.min.js' + '?t=' + getTimestamp(1 * 60 * 1000) // 时长1分钟，建议时长分钟级别
loadScript(url, function () {
    // 进行初始化验证码等后续逻辑
    // initNECaptcha({
    //     captchaId: '11e9956ab2c74a869904557b67b1e335',
    //     element: '#captcha',
    //     mode: 'float',
    //     width: '320px'
    // })
})

function getTimestamp (msec) {
    msec = !msec && msec !== 0 ? msec : 1
    return parseInt((new Date()).valueOf() / msec, 10)
}

function loadScript (src, cb) {
    let head = document.head || document.getElementsByTagName('head')[0]
    let script = document.createElement('script')
    cb = cb || function () { }
    script.type = 'text/javascript'
    script.src = src
    if (!('onload' in script)) {
        script.onreadystatechange = function () {
            if (this.readyState !== 'complete' && this.readyState !== 'loaded') return
            this.onreadystatechange = null
            cb(script)
        }
    }
    script.onload = function () {
        this.onload = null
        cb(script)
    }
    head.appendChild(script)
}
