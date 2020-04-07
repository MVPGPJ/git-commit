<template>
    <header class="wap-header">
        <div class="header-left">
            <div v-show="isLogin" style="width:0;height:0;"></div>
            <div class="header-logo">
                <img @click="handleHome" src="@/assets/wap/images/nav_logo@3x.png" alt="巨乐玩">
            </div>
            <div class="download-app" @click="handleDown">
                <img src="@/assets/wap/images/nav_ic_down@3x.png" alt="下载巨乐玩APP">
                <div class="download-text">
                    下载APP
                </div>
            </div>
        </div>
        <div class="header-right">
            <div @click="handleSearch" class="search">
                <img src="@/assets/wap/images/nav_ic_search@3x.png" alt="搜索巨乐玩游戏">
            </div>
            <div class="header-login">
                <div class="header-container">
                    <img @click="handleLogin" v-if="flag === 1" src="@/assets/wap/images/personal_head_not@3x.png" alt="注册巨乐玩">
                    <img @click="handleReg" v-else :src="this.imgAvator" alt="登录巨乐玩">
                    <div class="login-handle" v-if="langShow === 1">
                        <img @click="handleSet" class="user" src="@/assets/wap/images/nav_ic_set@3x.png" alt="登录巨乐玩">
                        <img @click="handleLogout" class="back" src="@/assets/wap/images/nav_ic_exit@3x.png" alt="登录巨乐玩">
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapState } from 'vuex'
let headPic = require('@/assets/wap/images/personal_head@3x.png')
export default {
    props: ['isLog'],
    data () {
        return {
            user: '',
            flag: 1,
            langShow: -1,
            imgAvator: '',
            propInfo: ''
        }
    },
    computed: {
        isLogin () {
            if (this.isLog === 'true') {
                this.getUserInfo()
                return true
            } else {
                return false
            }
        },
        ...mapState({
            isIOS: state => state.isIOS,
            isAndroid: state => state.isAndroid,
            isPc: state => state.isPc

        })
    },
    created () {
        this.Init()
    },
    watch: {
        '$route': 'getPath'
    },
    methods: {
        getPath () {
            if (localStorage.getItem('isLogin') === 'true') {
                this.getUserInfo()
            } else {
            }
        },
        getUserInfo () {
            this.langShow = -1
            if (localStorage.getItem('isLogin') === 'true') {
                this.$apis.getUserInfo().then(res => {
                    if (res.code === '2000') {
                        this.user = res.data
                        this.flag = -1
                        if (res.data.avatar === '' || res.data.avatar.indexOf('http') === -1) {
                            this.imgAvator = headPic
                        } else {
                            this.imgAvator = res.data.avatar
                        }
                    } else {
                        localStorage.setItem('isLogin', false)
                        this.flag = 1
                        this.langShow = -1
                        this.$Toast(res.message)
                    }
                })
            } else {
                // this.$router.push('/user/login')
            }
        },
        Init () {
            if (localStorage.getItem('isLogin') === 'true') {
                this.$apis.getUserInfo().then(res => {
                    if (res.code === '2000') {
                        this.user = res.data
                        this.flag = -1
                        if (res.data.avatar === '' || res.data.avatar.indexOf('http') === -1) {
                            this.imgAvator = headPic
                        } else {
                            this.imgAvator = res.data.avatar
                        }
                    } else {
                        this.$Toast(res.message)
                        localStorage.setItem('isLogin', false)
                        this.flag = 1
                        this.langShow = -1
                    }
                })
            } else {
                this.flag = 1
                this.langShow = -1
            }
        },
        // 下载巨乐玩APP
        handleDown () {
            let data = {
                gameId: 2,
                deviceType: this.isIOS ? 3 : 2
            }
            this.$apis.getDownloadUrl(data).then(res => {
                if (res.code === '2000') {
                    window.location.href = res.data.stringData
                } else {
                    this.$Toast(res.msg)
                }
            })
        },
        // 登录
        handleLogin () {
            if (this.$route.path === '/user/login') {
                return false
            } else {
                this.$router.push('/user/login')
                this.langShow = -1
            }
        },
        // 小状态栏显示
        handleReg () {
            if (this.langShow === 1) {
                this.langShow = -1
            } else {
                this.langShow = 1
            }
        },
        // logo返回首页
        handleHome () {
            if (this.$route.path === '/home') {
                return false
            } else {
                this.$router.push('/home')
                this.langShow = -1
            }
        },
        handleSearch () {
            if (this.$route.path === '/search') {
                return false
            } else {
                this.$router.push('/search')
                this.langShow = -1
            }
        },
        // 跳转个人中心页面
        handleSet () {
            if (this.$route.path === '/user') {
                return false
            } else {
                this.$router.push('/user')
                this.langShow = -1
            }
        },
        handleLogout () {
            // 登出
            this.$apis.logout().then((res) => {
                if (res.code === '2000') {
                    this.langShow = -1
                    this.flag = 1
                    localStorage.setItem('isLogin', false)
                    if (this.$route.path === '/home') {
                        return false
                    } else {
                        this.$router.push('/home')
                    }
                }
            })
        }
    }
}
</script>

<style lang="less" scope>
@import "./layout.less";
</style>
