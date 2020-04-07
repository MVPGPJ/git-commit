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
                <input type="text" disabled maxlength="30" v-model="name" placeholder="请输入姓名">
            </div>
            <div class="txt code">身份证号</div>
            <div class="text text-code">
                <input type="text" disabled maxlength="18" v-model="IDcard" placeholder="请输入身份证号">
            </div>
            <!-- <div class="btn-login">
                <div v-if='adopt === -1' class="btn error">
                    <img src="@/assets/wap/images/btn_down_disabled@3x.png" alt="">
                    <div class="txt">认证</div>
                </div>
                <div @click="handleIdentity" v-else class="btn success">
                    <img src="@/assets/wap/images/btn_down_nor@3x.png" alt="">
                    <div class="txt">认证</div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            name: '',
            IDcard: ''
        }
    },
    created () {
        this.getInit()
    },
    methods: {
        getInit () {
            this.name = this.$route.params.realname
            this.IDcard = this.$route.params.idCard
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
