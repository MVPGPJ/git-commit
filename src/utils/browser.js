/* eslint-disable */
/**
 * 浏览器信息统计
 */

import firstLetterUpperCase from '../utils/firstLetterUpperCase'

const ua = navigator.userAgent.toLowerCase();

const browser = {

    ua,

    isQQ: / qq/.test(ua),

    isWechat: /micromessenger/.test(ua),

    isMac: /mac os x/.test(ua),

    isIos: !!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),

    isUc: /ucbrowser/.test(ua),

    isMobile: /mobile|wegt/.test(ua),
    isPc: !(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)),
    isAndroid: ua.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1

    // // QQ浏览器mobile
    // isMQq: /mqqbrowser/.test(ua),

    // // QQ内置浏览器
    // isQqApp: /qq\/\d/.test(ua)
};
['mobile', 'chrome', 'firefox', 'linux', 'windows', 'android', 'iphone', 'ipad'].forEach(item => {
    browser['is' + firstLetterUpperCase(item)] = ua.includes(item);
})

browser.isSafari = /version.*safari/.test(ua) && browser.isMac;


// 判断是在苹果环境或者游戏猫中
browser.isApple = browser.isIos


browser.isPc = !browser.isMobile
browser.isIosApp = browser.isApp && browser.isIos
browser.isAndroidApp = browser.isApp && !browser.isIosApp


export default browser;
