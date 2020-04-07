<template>
    <div class="password">
        <div class="nav">
            <div class="nav-s home">首页</div>
            <img src="@/assets/wap/images/nav_ic_next@3x.png" alt="">
            <div class="nav-s users">个人中心</div>
            <img src="@/assets/wap/images/nav_ic_next@3x.png" alt="">
            <div class="nav-s bandPhone">修改密码</div>
        </div>
        <div class="main">
            <div class="txt phone">原密码</div>
            <div class="text">
                <input type="password" maxlength="18" v-model="oldPassword" placeholder="请输入原密码">
            </div>
            <div class="txt code">新密码</div>
            <div class="text text-code">
                <input type="password" maxlength="18" v-model="password" placeholder="请输入新密码">
            </div>
            <div class="txt code">确认新密码</div>
            <div class="text text-code">
                <input type="password" maxlength="18" v-model="newPassword" placeholder="请输入确认新密码">
            </div>
            <div class="btn-login">
                <div v-if='adopt === -1' class="btn error">
                    <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                    <div class="btn-login-txt">确认修改</div>
                </div>
                <div @click="handleBanding" v-else class="btn success">
                    <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                    <div class="btn-login-txt">确认修改</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import reg from '@/utils/validator.js'
export default {
    data () {
        return {
            oldPassword: '',
            password: '',
            newPassword: '',
            adopt: -1
        }
    },
    computed: {
        typeObj () {
            const { oldPassword, password, newPassword } = this
            return {
                oldPassword, password, newPassword
            }
        },
        spaceObj () {
            const { oldPassword, password, newPassword } = this
            return {
                oldPassword, password, newPassword
            }
        }
    },
    watch: {
        typeObj: {
            handler: function () {
                if (this.oldPassword.length >= 6 && this.password.length >= 6 && this.newPassword.length >= 6) {
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
                if (this.$reg.isSpace(this.oldPassword) || this.$reg.isSpace(this.password) || this.$reg.isSpace(this.newPassword)) {
                    this.oldPassword = this.oldPassword.replace(/\s+/g, '')
                    this.password = this.password.replace(/\s+/g, '')
                    this.newPassword = this.newPassword.replace(/\s+/g, '')
                } else {
                    return false
                }
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        handleBanding () {
            let data = {
                oldPassword: this.oldPassword,
                newPassword: this.newPassword
            }
            if (reg.isPwd(this.oldPassword)) {
                if (reg.isPwd(this.password)) {
                    if (this.oldPassword === this.password) {
                        this.$Toast('原密码和新密码一致')
                    } else {
                        if (this.newPassword === this.password) {
                            // api
                            this.$apis.updatePassword(data).then((res) => {
                                if (res.code === '2000') {
                                    setTimeout(() => {
                                        this.$router.back(-1)
                                    }, 1000)
                                    this.$Toast('修改成功')
                                } else {
                                    this.$Toast(res.message)
                                }
                            })
                        } else {
                            this.$Toast('两次输入新密码不一致')
                        }
                    }
                } else {
                    this.$Toast('新密码格式错误')
                }
            } else {
                this.$Tsoast('原密码格式错误')
            }
        }
    }
}
</script>
<style lang="less" scope>
@import "./password.less";
input {
    caret-color: #fdb71c;
}
</style>
