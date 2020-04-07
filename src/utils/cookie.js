/* eslint-disable */
import encode from './encode'
import decode from './decode'

// 默认域名
const domain = location.hostname.replace(/^(\w|\d)+\./, '')

// 默认路径
const path = '/'

// 默认安全
const secure = false

export default {

    /**
     * 获取key值
     * @param key
     * @return {string|null}
     */
    get: function (key) {
        return decode(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encode(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },

    /**
     * 设置cookie
     * @param key key
     * @param value 值
     * @param opts 选项 {expires, domain, path, secure}
     */
    set: (key, value, opts) => {

        opts = Object.assign({
            path,
            domain,
            secure,
            // 有效期
            expires: new Date().setTime(Date.now() + 864e5),
        }, opts);

        // key为空, 或者key为关键字, 退出方法
        if (!key || /^(?:expires|path|domain|secure)$/i.test(key)) {
            return false;
        }

        // 有效期 1year = 31536e6, 1month = 2592e6, 1days = 864e5, 1hour = 36e5, 1min = 6e4;
        if (typeof opts.expires === 'number') {
            if (opts.expires === Infinity) {
                opts.expires = '9999/12/31 23:59:59:999'
            } else if (opts.expires / 1e12 < 1) {
                opts.expires = Date.now() + opts.expires;
            }
        }
        opts.expires = new Date(opts.expires);

        // 如果日期错误
        if (/invalid date/i.test(opts.expires.toString())) {
            opts.expires = new Date().setTime(Date.now() + 864e5);
        }
        opts.expires = new Date(+opts.expires + 288e5);

        document.cookie = ([
            encode(key) + '=' + encode(value),
            opts.expires ? '; expires=' + opts.expires.toUTCString() : '',
            opts.path ? '; path=' + opts.path : '',
            opts.domain ? '; domain=' + opts.domain : '',
            opts.secure ? '; secure' : '',
        ].join(''));
        return true;
    },
    remove: function (key, opts) {
        opts = Object.assign({
            domain,
            path
        }, opts);
        if (!key || !this.has(key)) {
            return false;
        }
        document.cookie = encode(key) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (opts.domain ? "; domain=" + opts.domain : "") + (opts.path ? "; path=" + opts.path : "");
        return true;
    },
    has: function (key) {
        return (new RegExp("(?:^|;\\s*)" + encode(key).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    }
};
