<template>
    <div class="recommend">
        <div class="title">
            编辑推荐
        </div>
        <div class="main border" v-for="(item,index) in list" :key="index">
            <div class="contain" @click="handleGo(item.gameId)">
                <div class="game-bg">
                    <img v-if="item.imageUrl" class="img" :src="item.imageUrl" alt="游戏">
                    <div v-else class="img img-bg"></div>
                    <div class="tags">
                        <div class="item-tag" v-for="(tags,index) in item.welfare" :key="index">
                            <span>|</span>
                            <div class="text">{{ tags }}</div>
                        </div>
                    </div>
                </div>
                <div class="game">
                    <div class="game-img">
                        <img :src="item.gameLogo" alt="">
                    </div>
                    <div class="game-msg">
                        <div class="game-name">{{ item.gameName }}</div>
                        <H5Tag v-if="item.gameKind === 2" class="h5-tag" />
                        <div class="game-info">{{ item.briefIntroduce }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="more" v-if="showMore">
            <div class="btn border" @click="handleGetMore">
                查看更多
            </div>
        </div>
    </div>
</template>

<script>
import H5Tag from '@/components/wap/h5Tag/h5Tag.vue'
import { mapState } from 'vuex'

export default {
    components: {
        H5Tag
    },
    data () {
        return {
            list: [],
            currentPage: 1,
            showMore: true
        }
    },
    computed: mapState({
        isIOS: state => state.isIOS,
        isAndroid: state => state.isAndroid,
        isPc: state => state.isPc
    }),
    created () {
        this.getInit()
    },
    methods: {
        handleGetMore () {
            this.currentPage++
            let data = {
                gameKind: 0,
                deviceType: this.isIOS ? 3 : 2,
                currentPage: this.currentPage,
                pageSize: 5
            }
            this.$apis.queryAuthorRecommend(data).then((res) => {
                if (res.code === '2000') {
                    let msg = res.data.list
                    if (res.data.total <= (this.currentPage * 5)) {
                        this.showMore = false
                    }
                    msg.forEach(item => {
                        this.list.push(item)
                    })
                }
            })
        },
        getInit () {
            let data = {
                gameKind: 0,
                deviceType: this.isIOS ? 3 : 2,
                currentPage: this.currentPage,
                pageSize: 5
            }
            this.$apis.queryAuthorRecommend(data).then((res) => {
                if (res.code === '2000') {
                    this.list = res.data.list
                    if (res.data.total <= (this.currentPage * 5)) {
                        this.showMore = false
                    }
                } else {
                    this.showMore = false
                }
            })
        },
        handleGo (gameId) {
            this.$router.push(`/gameDetail?gameId=${gameId}`)
        }
    }
}
</script>

<style lang="less" scoped>
@import "./recommend.less";
.h5-tag {
    margin: .32rem 0 0 .1rem;
}
</style>
