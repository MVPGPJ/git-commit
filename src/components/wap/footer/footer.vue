<template>
    <div class="wap-footer">
        <footer>
            <div class="main">
                <div class="main-top">
                    <div @click="handlePopup" class="left">
                        <img src="@/assets/wap/images/home_ic_public@3x.png" alt="巨乐玩公众号">
                        <p>关注公众号</p>
                    </div>
                    <div @click="handlePC" class="right">
                        <img src="@/assets/wap/images/home_ic_pc@3x.png" alt="巨乐玩PC">
                        <p>访问PC版</p>
                    </div>
                </div>
                <div class="main-middle">
                    <p>Copyright © 2019-2021 All rights reserved</p>
                    <p>绍兴一游网络科技有限公司@版权所有</p>
                    <p>浙网文（2017）9684-741号</p>
                    <p @click="handleICP">浙ICP备17032872号-3</p>
                </div>
                <div class="main-bottom">
                    <img src="@/assets/wap/images/home_ic_call@3x.png" alt="">
                    <p @click="handleUdesk">有问题？<span>联系客服</span></p>
                </div>
            </div>
        </footer>
        <div class="popup" v-if="popupShow">
            <div class="popup-bg"></div>
            <div class="qrcode">
                <div class="qr-title">专注手游福利平台</div>
                <img class="qrcode-bg" src="@/assets/wap/images/code_popup_ic@3x.png" alt="">
                <img class="qrcode-img" :src="codeImg" alt="">
                <div class="qrcode-btn">
                    <div @click="handleDownQrcode()" class="txt">保存二维码</div>
                </div>
                <div class="close">
                    <img @click="handleClose" class="qrcode-close" src="@/assets/wap/images/gift_popup_ic_close@3x.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import imgUrl from '@/assets/wap/images/qrcode.jpg'
export default {
    data () {
        return {
            popupShow: false,
            codeImg: imgUrl
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.ROUTER = from.path
        })
    },
    methods: {
        handleUdesk () {
            location.href = 'https://yushiwangluo.udesk.cn/im_client/?web_plugin_id=94071&group_id=144171'
        },
        handlePC () {
            if (window.location.hostname === 'bt-dev.y8511.cn') {
                window.location.href = 'http://www-dev.y8511.cn/?jlw=wap'
            } else if (window.location.hostname === 'bt-test.y8511.cn') {
                window.location.href = 'http://www-test.y8511.cn/?jlw=wap'
            } else if (window.location.hostname === 'bt-pre.y8511.cn') {
                window.location.href = 'https://www.y8511.cn/?jlw=wap'
            } else if (window.location.hostname === 'bt.y8511.cn') {
                window.location.href = 'https://www.y8511.cn/?jlw=wap'
            } else {
                window.location.href = 'https://www.y8511.cn/?jlw=wap'
            }
        },
        handlePopup () {
            this.popupShow = true
        },
        handleClose () {
            this.popupShow = false
        },
        handleDownQrcode () {
            let a = document.createElement('a')
            a.download = name || 'pic'
            a.href = this.codeImg
            a.click()
        },
        handleICP () {
            location.href = 'http://www.beian.miit.gov.cn'
        }
    }
}
</script>
<style lang="less" scope>
@import "./footer.less";
</style>
