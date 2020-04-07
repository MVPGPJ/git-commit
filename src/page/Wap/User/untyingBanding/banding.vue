<template>
    <div class="banding">
        <div class="nav">
            <div class="nav-s home">首页</div>
            <img src="@/assets/wap/images/nav_ic_next@3x.png" alt="">
            <div class="nav-s users">个人中心</div>
            <img src="@/assets/wap/images/nav_ic_next@3x.png" alt="">
            <div class="nav-s bandPhone">解绑手机</div>
        </div>
        <div class="main">
            <div class="txt phone">手机号</div>
            <div class="text">
                <input type="text" disabled maxlength="11" v-model="phone" placeholder="请输入手机号">
            </div>
            <div class="txt code">验证码</div>
            <div class="text text-code">
                <input type="text" maxlength="6" v-model="code" placeholder="请输入验证码">
                <div @click="getCode" class="code-btn border" :disabled="!show">
                    <span v-show="show">获取验证码</span>
                    <span v-show="!show" class="count">{{count}} s</span>
                </div>
            </div>
            <div class="btn-login">
                <div v-if='adopt === -1' class="btn error">
                    <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                    <div class="btn-login-txt">下一步</div>
                </div>
                <div @click="handleRegister" v-else class="btn success">
                    <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                    <div class="btn-login-txt">下一步</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import reg from '@/utils/validator.js'
// 定时器时间
const TIME_COUNT = 60
export default {
    data () {
        return {
            phone: '',
            code: '',
            adopt: -1,
            show: true,
            timer: null,
            count: 0
        }
    },
    computed: {
        typeObj () {
            const { phone, code } = this
            return {
                phone, code
            }
        },
        spaceObj () {
            const { phone, code } = this
            return {
                phone, code
            }
        }
    },
    watch: {
        typeObj: {
            handler: function () {
                if (this.phone.length === 11 && this.code.length >= 4) {
                    this.adopt = 1
                } else {
                    this.adopt = -1
                }
            },
            deep: true,
            immediate: true
        },
        spaceObj: {
            handler: function () {
                if (this.$reg.isSpace(this.phone) || this.$reg.isSpace(this.code)) {
                    this.phone = this.phone.replace(/\s+/g, '')
                    this.code = this.code.replace(/\s+/g, '')
                } else {
                    return false
                }
            },
            deep: true,
            immediate: true
        }
    },
    mounted () {
        this.getCode()
        this.phone = this.$route.params.mobile
        let character = this.$route.params.mobile
        let phnumAfter = character.substr(0, 3) + '****' + character.substr(7)
        this.phone = phnumAfter
    },
    methods: {
        getCode () {
            let data = {
                mobile: parseInt(this.$route.params.mobile),
                vcodeType: 16
            }
            if (reg.isPhone(this.$route.params.mobile)) {
                this.$apis.getVcode(data).then((res) => {
                    if (res.code === '2000') {
                        this.$Toast('验证码已发送')
                        if (!this.timer) {
                            this.count = TIME_COUNT
                            this.show = false
                            this.timer = setInterval(() => {
                                if (this.count > 0 && this.count <= TIME_COUNT) {
                                    this.count--
                                } else {
                                    this.show = true
                                    clearInterval(this.timer)
                                    this.timer = null
                                }
                            }, 1000)
                        }
                    } else {
                        this.$Toast(res.message)
                    }
                })
            } else {
                this.$Toast('手机号格式错误')
            }
        },
        handleRegister () {
            let data = {
                vcode: this.code
            }
            if (reg.isPhone(this.$route.params.mobile)) {
                this.$apis.unbindPhone(data).then((res) => {
                    if (res.code === '2000') {
                        this.$Toast('解绑成功')
                        this.$router.push('/user/changebanding')
                    } else {
                        this.$Toast(res.message)
                    }
                })
            } else {
                this.$Toast('手机号格式错误')
            }
        }
    }
}
</script>
<style lang="less" scope>
@import "./banding.less";
input {
    caret-color: #fdb71c;
}
</style>
