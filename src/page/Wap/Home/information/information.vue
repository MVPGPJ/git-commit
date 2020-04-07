<template>
    <div class="information">
        <div class="title">
            <div class="text">
                最新资讯
            </div>
            <img @click="$router.push('/activity')" src="@/assets/wap/images/home_ic_more_333@3x.png" alt="">
        </div>
        <div class="mation">
            <div @click="handleInformation(item.id)" class="main border" v-for="item in list" :key="item.id">
                <img v-if="item.imagePath" class="img" :src="item.imagePath" alt="巨乐玩">
                <div v-else class="img img-bg"></div>
                <div class="msg">
                    <div class="type">
                        <div v-if="item.postType == '新闻'" class="news">
                            <span class="border">{{ item.postType }}</span>{{ item.postTitle }}
                        </div>
                        <div v-if="item.postType == '活动'" class="activity">
                            <span class="border">{{ item.postType }}</span>{{ item.postTitle }}
                        </div>
                        <div v-if="item.postType == '攻略'" class="strategy">
                            <span class="border">{{ item.postType }}</span>{{ item.postTitle }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            list: []
        }
    },
    created () {
        this.getInit()
    },
    methods: {
        getInit () {
            this.$apis.listNewPost().then((res) => {
                this.list = res.data
            })
        },
        handleGo () {
            this.$router.push('/activity')
        },
        handleInformation (id) {
            this.$router.push(`/information?id=${id}`)
        }
    }
}
</script>

<style lang="less" scoped>
@import "./information.less";
</style>
