<template>
    <div class="wap">
        <wap-layout :isLog="login" />
        <router-view @footer="footer" @isLogFn="lisLogFn" class="content" />
        <wap-footer v-if="footerShow" />
    </div>
</template>

<script>
import wapLayout from '@/components/wap/layout'
import wapFooter from '@/components/wap/footer'
export default {
    components: { wapLayout, wapFooter },
    data () {
        return {
            login: '',
            footerShow: true
        }
    },
    created () {
        this.setRem()
    },
    methods: {
        setRem () {
            window.addEventListener('resize', changeSize)
            function changeSize () {
                let docEl = document.documentElement
                let width = docEl.getBoundingClientRect().width
                if (width <= 1024) {
                    docEl.style.fontSize = width / 10 + 'px'
                } else {
                    docEl.style.fontSize = 1024 / 10 + 'px'
                }
            }
            let docEl = document.documentElement
            let width = docEl.getBoundingClientRect().width
            if (width <= 1024) {
                docEl.style.fontSize = width / 10 + 'px'
            } else {
                docEl.style.fontSize = 1024 / 10 + 'px'
            }
        },
        footer (bool) {
            this.footerShow = bool
        },
        lisLogFn (data) {
            if (data === 'log') {
                this.login = 'true'
            }
        }
    }
}
</script>

<style lang="less">
@import "./index.less";
</style>
