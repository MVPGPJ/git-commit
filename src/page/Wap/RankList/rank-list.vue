<template>
    <div class="rank-list">
        <div class="choosen-box">
            <span :class="active === 'ios' ? 'activeBtn' : ''" @click="listWapHotGameList('refresh', 'ios')">IOS热榜</span>
            <span :class="active === 'android' ? 'activeBtn' : ''" @click="listWapHotGameList('refresh', 'android')">安卓热榜</span>
            <span :class="active === 'h5' ? 'activeBtn' : ''" @click="listWapHotGameList('refresh', 'h5')">H5热榜</span>
        </div>
        <div class="rank-lists">
            <div class="rank-box" v-for="(item, index) in listWapHotGamesList" @click="goDetail(item.gameId)" :key="index">
                <span v-if="index === 0 || index === 1 || index === 2" class="rank-icon"></span>
                <span v-if="index > 2" :class="['rank-rank',
                            JSON.stringify(index + 1).length === 1 ? 'font-size1' : '',
                            JSON.stringify(index + 1).length === 2 ? 'font-size2' : '',
                            JSON.stringify(index + 1).length === 3 ? 'font-size3' : '']">{{ index + 1 }}.</span>
                <img class="rank-img" :src="item.gameLogo" alt="">
                <div class="rank-info">
                    <p>
                        <span class="game-name">
                            {{ item.gameName }}
                        </span>
                    </p>
                    <p>
                        <span class="game-desc">{{ item.briefIntroduce }}</span>
                    </p>
                    <div class="info-tags">
                        <div v-for="(self, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                            <span class="tag-text">{{ self }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="seekMore">
                <div @click="seekMore"  class="btn border">
                    {{ moreData }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    metaInfo () {
        return {
            title: '巨乐玩，巨乐玩游戏排行榜',
            meta: [
                {
                    name: 'description',
                    content: '巨乐玩游戏，专注手游福利的游戏平台。聚合全网最全变态版bt手游，ios公益服手游下载，为手游爱好者收集了最新手机游戏福利，手游sf、gm版手游及上线送满级vip无限元宝公益服。'
                },
                {
                    name: 'keyWords',
                    content: '巨乐玩游戏，专注手游福利的游戏平台。聚合全网最全变态版bt手游，ios公益服手游下载，为手游爱好者收集了最新手机游戏福利，手游sf、gm版手游及上线送满级vip无限元宝公益服。'
                },
                {
                    property: 'og:url',
                    content: 'https://bt.y8511.cn/rankList/'
                },
                {
                    property: 'og:type',
                    content: 'article'
                },
                {
                    property: 'og:title',
                    content: '巨乐玩，巨乐玩福利手游平台，变态福利手游平台 巨乐玩，福利手游平台'
                },
                {
                    property: 'og:description',
                    content: '巨乐玩游戏，专注手游福利的游戏平台。聚合全网最全变态版bt手游，ios公益服手游下载，为手游爱好者收集了最新手机游戏福利，手游sf、gm版手游及上线送满级vip无限元宝公益服。'
                }
            ],
            link: [{
                rel: 'asstes',
                href: 'https://bt.y8511.cn/rankList/'
            }]
        }
    },
    data () {
        return {
            active: null,
            welfare: [],
            moreData: '查看更多',
            listWapHotGamesList: [],
            currentPage: 0
        }
    },
    computed: mapState({
        isAndroid: state => state.isAndroid,
        isIOS: state => state.isIOS
    }),
    mounted () {
        window.addEventListener('scroll', this.scroll, true)
        if ((document.body.scrollTop || document.documentElement.scrollTop) !== 0) {
            document.body.scrollTop = document.documentElement.scrollTop = 0
        }
    },
    created () {
        this.active = this.isAndroid ? 'android' : this.isIOS ? 'ios' : 'h5'
        if (this.isAndroid) {
            this.listWapHotGameList('refresh', 'android')
        } else if (this.isIOS) {
            this.listWapHotGameList('refresh', 'ios')
        } else {
            this.listWapHotGameList('refresh', 'h5')
        }
    },
    methods: {
        goDetail (id) {
            this.$router.push(`/gameDetail?gameId=${id}`)
        },
        listWapHotGameList (pageType, type) {
            this.active = type
            if (pageType === 'refresh') {
                this.listWapHotGamesList = []
                this.currentPage = 0
                this.moreData = '查看更多'
            }
            this.currentPage++
            let params = {
                hotListType: type === 'android' ? 2 : (type === 'h5' ? 1 : 3),
                pageSize: 20,
                currentPage: pageType === 'refresh' ? 1 : this.currentPage
            }
            this.$apis.listWapHotGames(params).then((res) => {
                if (res.code === '2000') {
                    res.data.list.map(item => {
                        this.listWapHotGamesList.push(item)
                    })
                    if (this.listWapHotGamesList.length < 20) {
                        this.moreData = '没有更多了～'
                    }
                }
            })
        },
        seekMore () {
            this.listWapHotGameList('', this.active)
        }
    }
}
</script>
<style lang="less" scoped>
@import "./rank-list.less";
.h5-tag {
    margin: .05rem 0 0 .1rem;
}
</style>
