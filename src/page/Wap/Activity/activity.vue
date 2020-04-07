<template>
    <div class="activity">
        <div class="choosen-box">
            <span :class="active === 'activity' ? 'activeBtn' : ''" @click="listPost('refresh', 'activity')">活动</span>
            <span :class="active === 'news' ? 'activeBtn' : ''" @click="listPost('refresh', 'news')">新闻</span>
            <span :class="active === 'strategy' ? 'activeBtn' : ''" @click="listPost('refresh', 'strategy')">攻略</span>
        </div>
        <div class="activity-list">
            <div class="activity-box" v-for="(item, index) in listPostList" :key="index">
                <div @click="goDetail(item.id)" class="activity-info">
                    <p>
                        <span class="activity-title">{{ item.postTitle }}</span>
                    </p>
                    <p>
                        <span class="activity-desc">{{ item.digest }}</span>
                    </p>
                    <p>
                        <span class="activity-time">{{ item.postTime }}</span>
                    </p>
                </div>
                <img class="activity-img" :src="item.imagePath" alt="">
            </div>
        </div>
        <div @click="seekMore" class="seekMore">{{ moreData }}</div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            active: 'activity',
            posttype: 5,
            moreData: '查看更多',
            listPostList: [],
            currentPage: 0
        }
    },
    created () {
        this.listPost('', 'activity')
    },
    methods: {
        listPost (pageType, type) {
            this.active = type
            if (pageType === 'refresh') {
                this.listPostList = []
                this.currentPage = 0
                this.moreData = '查看更多'
            }
            if (this.active === 'activity') {
                this.posttype = 5
            } else if (this.active === 'news') {
                this.posttype = 3
            } else if (this.active === 'strategy') {
                this.posttype = 4
            }
            this.currentPage++
            let params = {
                postType: this.posttype,
                currentPage: pageType === 'refresh' ? 1 : this.currentPage,
                pageSize: 20
            }
            this.$apis.listPost(params).then((res) => {
                if (res.code === '2000') {
                    if (res.data.list.length === 0 || res.data.list.length < 10) {
                        this.moreData = '没有更多了～'
                    }
                    res.data.list.map((item) => {
                        this.listPostList.push(item)
                    })
                }
            })
        },
        goDetail (id) {
            this.$router.push(`/information/?id=${id}`)
        },
        seekMore () {
            this.listPost('', this.active)
        }
    }
}
</script>
<style lang="less" scoped>
@import "./activity.less";
</style>
