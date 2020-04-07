<template>
    <div class="layout">
        <div class="layout-nav">
            <div class="main-mod">
                <a class="sy">首页</a>
                <a class="sy">游戏盒子</a>
                <a class="sy">WAP官网</a>
                <ul class="personal-info">
                    <li>
                        <a>您好，欢迎来到巨乐玩游戏官网！</a>|
                    </li>
                    <li>
                        <a>神乐</a>|
                    </li>
                    <li>
                        <a>退出</a>|
                    </li>
                    <li>
                        <a>推荐游戏</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="layout-header">
            <div class="brand-logo" @click="$router.push('/')">
                <img src="@/assets/images/logo.png" alt="">
            </div>
            <ul class="header-nav">
                <li v-for="(item, index) in homeNav" :key="index" @click="goPage(item.path)" @mouseover="getActive()" @mouseleave="removeActived()" :class="item.path === routerPath ? 'isActived' : ''">
                    {{ item.name }}
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            isActived: false,
            homeNav: [
                { name: '首页', path: '/home' },
                { name: '游戏大全', path: '/game' },
                { name: '游戏礼包', path: '/' },
                { name: '充值中心', path: '/' },
                { name: '游戏资讯', path: '/information' },
                { name: '客服中心', path: '/service' },
                { name: '商城中心', path: '/' }
            ],
            // routerPath: '/home'
            routerPath: this.$route.path === '/home' ? '/home' : this.$route.path
        }
    },
    created () {
        // console.log(this.$route.path)
    },
    methods: {
        goPage (path) {
            this.routerPath = path
            this.$router.push(path)
        },
        getActive (e) {
            // e.currentTarget.className = 'isActived'
        },
        removeActived (e) {
            // e.currentTarget.className = ''
        }
    }
}
</script>
<style lang="less" scoped>
.layout {
    width: 100%;
    height: 33px;
    border-bottom: 1px solid #ececec;
    font-weight: normal;
}
.layout-nav {
    width: 1200px;
    height: 33px;
    margin: 0 auto;
    position: relative;
}
.sy {
    line-height: 33px;
    font-size: 12px;
    float: left;
    margin-right: 20px;
}
a {
    color: #333;
    text-decoration: none;
}
.personal-info {
    position: absolute;
    top: 0;
    right: 0;
}
.personal-info li {
    float: left;
    color: #c6c6c6;
    line-height: 33px;
    font-size: 12px;
    a {
        display: inline-block;
        margin: 0 10px;
    }
}
ul,
ol,
li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
// header
.layout-header {
    width: 1200px;
    height: 80px;
    margin: 0 auto;
}
.brand-logo {
    width: 200px;
    height: 80px;
    float: left;
}
.brand-logo img {
    margin-top: 10px;
}
.header-nav {
    overflow: hidden;
    padding-top: 25px;
    float: left;
}
.header-nav li {
    width: 90px;
    height: 30px;
    font-size: 16px;
    float: left;
    text-align: center;
    line-height: 30px;
    border-radius: 20px;
    margin: 0px 5px 0 10px;
}
.header-nav li a {
    display: block;
    color: #333;
}
.isActived {
    background: #ff6238;
    color: #fff;
}
</style>
