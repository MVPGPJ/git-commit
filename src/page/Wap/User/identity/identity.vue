<template>
    <div class="identity">
        <div class="nav">
            <div class="nav-s home">首页</div>
            <img src="@/assets/wap/images/nav_ic_next@3x.png" alt="">
            <div class="nav-s users">个人中心</div>
            <img src="@/assets/wap/images/nav_ic_next@3x.png" alt="">
            <div class="nav-s bandPhone">身份认证</div>
        </div>
        <div class="main">
            <div class="txt name">姓名</div>
            <div class="text">
                <input type="text" maxlength="30" v-model="name" placeholder="请输入姓名">
            </div>
            <div class="txt code">身份证号</div>
            <div class="text text-code">
                <input type="text" maxlength="18" v-model="IDcard" placeholder="请输入身份证号">
            </div>
            <div class="btn-login">
                <div v-if='adopt === -1' class="btn error">
                    <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                    <div class="btn-login-txt">认证</div>
                </div>
                <div @click="handleIdentity" v-else class="btn success">
                    <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                    <div class="btn-login-txt">认证</div>
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
            name: '',
            IDcard: '',
            user: {}
        }
    },
    computed: {
        typeObj () {
            const { name, IDcard } = this
            return {
                name, IDcard
            }
        },
        spaceObj () {
            const { name, IDcard } = this
            return {
                name, IDcard
            }
        }
    },
    watch: {
        typeObj: {
            handler: function () {
                if (this.name.length > 0 && this.IDcard.length === 18) {
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
                if (this.$reg.isSpace(this.name) || this.$reg.isSpace(this.IDcard)) {
                    this.name = this.name.replace(/\s+/g, '')
                    this.IDcard = this.IDcard.replace(/\s+/g, '')
                } else {
                    return false
                }
            },
            deep: true,
            immediate: true
        }
    },
    created () {
        // this.getInit()
    },
    methods: {
        handleIdentity () {
            let data = {
                idCard: this.IDcard,
                realname: this.name
            }
            if (reg.isIdentity(this.IDcard)) {
                this.$apis.verifyIdCard(data).then(res => {
                    if (res.code === '2000') {
                        this.$Toast('认证成功')
                        this.$router.push('/user')
                    }
                })
            } else {
                this.$Toast('身份证格式错误')
            }
        }
    }
}
</script>
<style lang="less" scope>
@import "./identity.less";
input {
    caret-color: #fdb71c;
}
</style>
