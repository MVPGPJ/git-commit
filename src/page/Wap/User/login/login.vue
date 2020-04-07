<template>
    <div class="login">
        <div class="title border">登录</div>
        <div class="logo">
            <img src="@/assets/wap/images/logo.png" alt="">
        </div>
        <div class="login-main">
            <div class="txt">账号</div>
            <div class="login-main-text">
                <input type="text" maxlength="18" v-model="userName" placeholder="请输入手机号或自定义账号">
            </div>
            <div class="txt txt-password">密码</div>
            <div class="login-main-text">
                <input type="password" maxlength="18" v-model="password" placeholder="请输入6～18位密码">
            </div>
            <div @click="handleForget" class="forget">忘记密码？</div>
            <div class="btn-login">
                <div v-if='adopt === -1' class="btn error">
                    <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                    <div class="btn-login-txt">登录</div>
                </div>
                <div @click="handleLogin" v-else class="btn success">
                    <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                    <div class="btn-login-txt">登录</div>
                </div>
            </div>
            <div @click="handleRegister" class="login-register">没有账号？立即注册</div>
        </div>
    </div>
</template>

<script>
import reg from '@/utils/validator.js'
export default {
    data () {
        return {
            userName: '',
            password: '',
            adopt: -1, // 1 验证通过 -1 验证未全部通过
            ROUTER: ''
        }
    },
    beforeRouteEnter (to, from, next) {
        next(vm => {
            vm.ROUTER = from.path
        })
    },
    computed: {
        typeObj () {
            const { userName, password } = this
            return {
                userName, password
            }
        },
        spaceObj () {
            const { userName, password } = this
            return {
                userName, password
            }
        }
    },
    watch: {
        typeObj: {
            handler: function () {
                if (this.userName.length >= 6 && this.password.length >= 6) {
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
                if (this.$reg.isSpace(this.userName) || this.$reg.isSpace(this.password)) {
                    this.userName = this.userName.replace(/\s+/g, '')
                    this.password = this.password.replace(/\s+/g, '')
                } else {
                    return false
                }
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        handleLogin () {
            let data = {
                account: this.userName,
                password: this.password
            }
            // 兼容老用户
            if (reg.isAccount(this.userName) || reg.isPhone(this.userName) || reg.isNum(this.userName)) {
                if (reg.isPwd(this.password)) {
                    this.$apis.loginByPwd(data).then((res) => {
                        this.$Toast(res.message)
                        if (res.code === '2000') {
                            if (this.ROUTER === '/user/register' || this.ROUTER === '/user/forgetPassword') {
                                this.$router.push('/home')
                            } else {
                                this.$router.back()
                            }
                            this.$Toast('登录成功')
                            localStorage.setItem('isLogin', true)
                        }
                    })
                } else {
                    this.$Toast('密码格式错误')
                }
            } else {
                this.$Toast('请输入正确手机号或自定义账号')
            }
        },
        handleForget () {
            this.$router.push('/user/forgetPassword')
        },
        handleRegister () {
            this.$router.push('/user/register')
        }
    }
}
</script>

<style lang="less" scope>
@import "./login.less";
input {
    caret-color: #fdb71c;
}
</style>
