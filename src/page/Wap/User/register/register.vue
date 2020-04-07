<template>
    <div class="register-contain">
        <div v-if="type === 'register'" class="register">
            <div class="nav border">
                <div @click="handleNavLeft" :class="navLeftCss">
                    <span>手机号注册</span>
                    <div class="active-line" />
                </div>
                <div @click="handleNavRight" :class="navRightCss">
                    <span>自定义注册</span>
                    <div class="active-line" />
                </div>
            </div>
            <div v-show="isPhoneRegister" class="main">
                <div class="txt phone">手机号</div>
                <div class="text">
                    <input type="text" maxlength="11" v-model="phone" placeholder="请输入手机号">
                </div>
                <div class="txt code">验证码</div>
                <div class="text text-code">
                    <input type="text" maxlength="6" v-model="code" placeholder="请输入验证码">
                    <div @click="getCode" class="code-btn border" :disabled="!show">
                        <span v-show="show">获取验证码</span>
                        <span v-show="!show" class="count">{{count}} s</span>
                    </div>
                </div>
                <div class="txt code">密码</div>
                <div class="text">
                    <input type="password" maxlength="18" v-model="password" placeholder="请输入6～18位密码">
                </div>
                <div class="agreement">
                    <div class="hook">
                        <img @click="handleHookShow" v-show="hookShow === -1" src="@/assets/wap/images/hook_no.png" alt="">
                        <img @click="handleHookShow" v-show="hookShow === 1" src="@/assets/wap/images/hook@3x.png" alt="">
                    </div>
                    <div class="agreement-text">
                        <p>
                            <span>同意</span>
                            <span @click="handleAgent" class="agreement-txt">巨乐玩用户协议</span>
                        </p>
                    </div>
                </div>
                <div class="btn-login">
                    <div v-if='adopt === -1' class="btn error">
                        <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                        <div class="btn-login-txt">注册</div>
                    </div>
                    <div @click="handlePhoneRegister" v-else class="btn success">
                        <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                        <div class="btn-login-txt">注册</div>
                    </div>
                </div>
                <div @click="handleLogin" class="footer-login">已有账号？去登录</div>
            </div>
            <div v-show="isDetermination" class="main">
                <div class="txt phone">账号</div>
                <div class="text">
                    <input type="text" maxlength="18" v-model="determination" placeholder="请输入6～18位账号">
                </div>
                <div class="txt code">密码</div>
                <div class="text">
                    <input type="password" maxlength="18" v-model="passwordDetermination" placeholder="请输入6～18位密码">
                </div>
                <div class="txt code captcha">请完成验证</div>
                <div class="captcha" id="captcha" />
                <!-- <div class="agreement">
                    <div class="hook">
                        <img @click="handleHookShowDetermination" v-show="hookShowDetermination == -1" src="@/assets/wap/images/hook_no.png" alt="">
                        <img @click="handleHookShowDetermination" v-show="hookShowDetermination == 1" src="@/assets/wap/images/hook@3x.png" alt="">
                    </div>
                    <div class="txt code">密码</div>
                    <div class="text">
                        <input type="password" maxlength="18" v-model="passwordDetermination" placeholder="请输入6～18位密码">
                    </div>
                    <div class="txt code captcha">请完成验证</div>
                    <div class="captcha" id="captcha"></div>
                </div> -->
                <div class="agreement">
                    <div class="hook">
                        <img @click="handleHookShowDetermination" v-show="hookShowDetermination === -1" src="@/assets/wap/images/hook_no.png" alt="">
                        <img @click="handleHookShowDetermination" v-show="hookShowDetermination === 1" src="@/assets/wap/images/hook@3x.png" alt="">
                    </div>
                    <div class="agreement-text">
                        <p>
                            <span>同意</span>
                            <span @click="handleAgent" class="agreement-txt">巨乐玩用户协议</span>
                        </p>
                    </div>
                </div>
                <div class="btn-login">
                    <div v-if='adoptCustom === -1' class="btn error">
                        <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                        <div class="btn-login-txt">注册</div>
                    </div>
                    <div @click="handleCustomRegister" v-else class="btn success">
                        <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                        <div class="btn-login-txt">注册</div>
                    </div>
                </div>
                <div @click="handleLogin" class="footer-login">已有账号？去登录</div>
            </div>
            <!-- <div @click="handleLogin" class="footer-login">已有账号？去登录</div> -->
        </div>
        <!-- </div> -->
        <agreement v-if="type === 'agreement'" />
        <div v-if="type === 'agreement'" @click="type = 'register'" class="back-btn">
            <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
            <div class="btn-login-txt">回到注册</div>
        </div>
    </div>
</template>

<script>
import reg from '@/utils/validator.js'
import Vue from 'vue'
import agreement from '@/page/Wap/Agreement'
// 定时器时间
const TIME_COUNT = 60
export default {
    components: { agreement },
    data () {
        return {
            type: 'register',
            phone: '',
            code: '',
            password: '',
            determination: '',
            passwordDetermination: '',
            moveToken: '',
            hookShowDetermination: -1,
            adopt: -1,
            adoptCustom: -1,
            hookShow: -1,
            moveCode: false,
            isPhoneRegister: true,
            isDetermination: false,
            navLeftCss: 'active',
            navRightCss: '',
            show: true,
            timer: null,
            count: 0
        }
    },
    computed: {
        typeObj () {
            const { phone, code, password, hookShow } = this
            return {
                phone, code, password, hookShow
            }
        },
        determinationObj () {
            const { determination, passwordDetermination, hookShowDetermination, moveCode } = this
            return {
                determination, passwordDetermination, hookShowDetermination, moveCode
            }
        },
        spaceObj () {
            const { phone, code, password, determination, passwordDetermination } = this
            return {
                phone, code, password, determination, passwordDetermination
            }
        }
    },
    watch: {
        typeObj: {
            handler: function () {
                if (this.phone.length === 11 && this.code.length >= 4 && this.password.length >= 6 && this.hookShow === 1) {
                    this.adopt = 1
                } else {
                    this.adopt = -1
                }
            },
            deep: true,
            immediate: true
        },
        determinationObj: {
            handler: function () {
                if (this.determination.length >= 6 && this.passwordDetermination.length >= 6 && this.hookShowDetermination === 1) {
                    this.adoptCustom = 1
                } else {
                    this.adoptCustom = -1
                }
            },
            deep: true,
            immediate: true
        },
        spaceObj: {
            handler: function () {
                if (this.$reg.isSpace(this.phone) || this.$reg.isSpace(this.code) || this.$reg.isSpace(this.password) || this.$reg.isSpace(this.determination) || this.$reg.isSpace(this.passwordDetermination)) {
                    this.phone = this.phone.replace(/\s+/g, '')
                    this.code = this.code.replace(/\s+/g, '')
                    this.password = this.password.replace(/\s+/g, '')
                    this.determination = this.determination.replace(/\s+/g, '')
                    this.passwordDetermination = this.passwordDetermination.replace(/\s+/g, '')
                } else {
                    return false
                }
            },
            deep: true,
            immediate: true
        }
    },
    created () {
        this.Init()
    },
    methods: {
        Init () {
            if (this.$route.query.id) {
                this.navRightCss = 'active'
                this.navLeftCss = ''
                this.isPhoneRegister = false
                this.isDetermination = true
            }
            // 若使用降级方案引用初始化js
            // initNECaptcha替换成initNECaptchaWithFallback
            window.initNECaptcha({
                captchaId: '11e9956ab2c74a869904557b67b1e335',
                element: '#captcha',
                mode: 'float',
                width: '9.2rem',
                onVerify: function (err, data) {
                    if (err) return
                    // console.log(data.validate)
                    Vue.prototype.$MOVE_TOKEN = data.validate
                }
            }, function onload (instance) {
            }, function onerror (err) {
                // 初始化失败后触发该函数，err对象描述当前错误信息
                console.log(err)
            })

            // 数据还原
            // // sessionStorage.setItem
            // console.log(sessionStorage.getItem('hookShow') === -1)
            // this.phone = sessionStorage.getItem('phone') ? sessionStorage.getItem('phone') : ''
            // this.code = sessionStorage.getItem('code') ? sessionStorage.getItem('code') : ''
            // this.password = sessionStorage.getItem('password') ? sessionStorage.getItem('password') : ''
            // this.hookShow = sessionStorage.getItem('hookShow') ? sessionStorage.getItem('hookShow') : -1
            // this.determination = sessionStorage.getItem('determination') ? sessionStorage.getItem('determination') : ''
            // this.passwordDetermination = sessionStorage.getItem('passwordDetermination') ? sessionStorage.getItem('passwordDetermination') : ''
            // this.moveCode = sessionStorage.getItem('moveCode') ? sessionStorage.getItem('moveCode') : ''
            // this.hookShowDetermination = sessionStorage.getItem('hookShowDetermination') ? sessionStorage.getItem('hookShowDetermination') : -1
        },
        handleNavLeft () {
            if (this.navLeftCss !== 'active') {
                this.navLeftCss = 'active'
                this.navRightCss = ''
                this.isPhoneRegister = true
                this.isDetermination = false
            }
        },
        handleNavRight () {
            if (this.navRightCss !== 'active') {
                this.navRightCss = 'active'
                this.navLeftCss = ''
                this.isPhoneRegister = false
                this.isDetermination = true
            }
        },
        handleHookShow () {
            if (this.hookShow === 1) {
                this.hookShow = -1
            } else {
                this.hookShow = 1
            }
        },
        handleHookShowDetermination () {
            if (this.hookShowDetermination === 1) {
                this.hookShowDetermination = -1
            } else {
                this.hookShowDetermination = 1
            }
        },
        getCode () {
            let data = {
                mobile: this.phone,
                vcodeType: 13
            }
            if (this.count === 0) {
                if (!this.phone) {
                    this.$Toast('手机号不能为空')
                } else if (reg.isPhone(this.phone)) {
                    this.$apis.getVcode(data).then((res) => {
                        // this = res.uid
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
                    this.$Toast('手机号错误')
                }
            }
        },
        handlePhoneRegister () {
            sessionStorage.clear()
            let data = {
                account: this.phone,
                password: this.password,
                vcode: this.code,
                agreementFlag: 1
            }
            if (reg.isPhone(this.phone)) {
                this.$apis.mobileRegister(data).then((res) => {
                    if (res.code === '2000') {
                        let data = {
                            account: this.phone,
                            password: this.password
                        }
                        this.$apis.loginByPwd(data).then(res => {
                            if (res.code === '2000') {
                                localStorage.setItem('isLogin', true)
                                this.$router.push('/home')
                            } else {
                                this.$Toast('登录失败')
                            }
                        })
                        this.$Toast('注册成功')
                    } else {
                        this.$Toast(res.message)
                    }
                })
            } else {
                this.$Toast('手机号错误')
            }
        },
        handleCustomRegister () {
            // sessionStorage.clear()
            this.moveToken = this.$MOVE_TOKEN
            if (this.moveToken) {
                let data = {
                    account: this.determination,
                    password: this.passwordDetermination,
                    slideToken: this.moveToken,
                    agreementFlag: 1
                }
                if (reg.isAccount(this.determination)) {
                    this.$apis.customRegister(data).then((res) => {
                        if (res.code === '2000') {
                            let data = {
                                account: this.determination,
                                password: this.passwordDetermination
                            }
                            this.$apis.loginByPwd(data).then(res => {
                                if (res.code === '2000') {
                                    localStorage.setItem('isLogin', true)
                                    this.$router.push('/home')
                                } else {
                                    this.$Toast('登录失败')
                                }
                            })
                            // setTimeout(() => {
                            //     this.$router.push('/home')
                            // }, 1000)
                            this.$Toast('注册成功')
                        } else {
                            window.initNECaptcha({
                                captchaId: '11e9956ab2c74a869904557b67b1e335',
                                element: '#captcha',
                                mode: 'float',
                                width: '9.2rem',
                                onVerify: function (err, data) {
                                    if (err) return
                                    Vue.prototype.$MOVE_TOKEN = data.validate
                                }
                            }, function onload (instance) {
                            }, function onerror (err) {
                                // 初始化失败后触发该函数，err对象描述当前错误信息
                                console.log(err)
                            })
                            this.$Toast(res.message)
                        }
                    })
                } else {
                    this.$Toast('账号为数字或英文，必须含英文')
                }
            } else {
                this.$Toast('请完成滑动验证')
            }
        },
        handleLogin () {
            this.$router.push('/user/login')
        },
        handleAgent () {
            // this.$router.push('/agreement')
            this.type = 'agreement'
            // sessionStorage.setItem('phone', this.phone)
            // sessionStorage.setItem('code', this.code)
            // sessionStorage.setItem('password', this.password)
            // sessionStorage.setItem('hookShow', this.hookShow)
            // sessionStorage.setItem('determination', this.determination)
            // sessionStorage.setItem('passwordDetermination', this.passwordDetermination)
            // sessionStorage.setItem('moveCode', this.moveCode)
            // sessionStorage.setItem('hookShowDetermination', this.hookShowDetermination)
            // this.$router.push('/agreement')
        }
    }
}
</script>

<style lang="less" scope>
@import "./register.less";
input {
    caret-color: #fdb71c;
}
</style>
