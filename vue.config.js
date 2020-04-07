const PrerenderSPAPlugin = require('prerender-spa-plugin')
const Renderer = PrerenderSPAPlugin.PuppeteerRenderer
const path = require('path')

module.exports = {
    // 基本路径
    publicPath: '/',
    // 输出文件目录
    outputDir: 'dist',
    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,
    // webpack配置
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    chainWebpack: () => { },
    configureWebpack: () => {
        return {
            plugins: [
                new PrerenderSPAPlugin({
                    // 生成文件的路径，也可以与webpakc打包的一致。
                    // 这个目录只能有一级，如果目录层次大于一级，在生成的时候不会有任何错误提示，在预渲染的时候只会卡着不动。
                    staticDir: path.join(__dirname, 'dist'),
                    // 对应自己的路由文件，比如a有参数，就需要写成 /a/param1。
                    routes: ['/', '/home', '/gameDetail', '/information'],
                    // server: {
                    //     proxy: {
                    //         "/web": {
                    //             target: "http://172.16.17.38:8081",
                    //             secure: false
                    //         }
                    //     }
                    // },
                    renderer: new Renderer({
                        // inject: {
                        //     foo: 'bar'
                        // },
                        // headless: false,
                        // 在 main.js 中 document.dispatchEvent(new Event('render-event'))，两者的事件名称要对应上。
                        // renderAfterTime: 5000
                        renderAfterDocumentEvent: 'render-event'
                    })
                })
            ]
        }
    },
    // 生产环境是否生成 sourceMap 文件
    productionSourceMap: true,
    // css相关配置
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            // 定制vant样式
            less: {
                modifyVars: {
                    red: '#FA5A5A',
                    blue: '#4A90E2',
                    orange: '#F67B29',
                    'text-color': '#333',
                    'active-color': '#F67B29'
                }
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        modules: false
    },
    // use thread-loader for babel & TS in production build
    // enabled by default if the machine has more than 1 cores
    parallel: require('os').cpus().length > 1,
    // webpack-dev-server 相关配置
    devServer: {
        open: true,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        // proxy: {
        //     "/web": {
        //         target: 'http://bt-jlwweb-dev.y8511.cn',
        //         changeOrigin: true, //是否跨域
        //         pathRewrite: {
        //             '^/web': '' //需要rewrite重写的,
        //         }
        //     }
        // }, // 设置代理
        disableHostCheck: true, // 解决npm安装无法热更新问题
        overlay: {
            warnings: true,
            errors: true
        }, // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
        before: app => { }
    },
    // 第三方插件配置
    pluginOptions: {
        // ...
    }
}
