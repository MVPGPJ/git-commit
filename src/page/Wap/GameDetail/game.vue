<template>
    <div class="game-detail">
        <div class="detail-nav">
            <span @click="$router.push('/home')">首页 > 游戏 > 游戏详情</span>
        </div>
        <div></div>
        <div class="game-box">
            <div class="package-img">
                <img :src="imageUrl" alt="">
                <span class="mb-bg" v-if="gameSize">{{ gameSize }}</span>
            </div>
            <div class="package-info">
                <p>
                    <span class="package-name">
                        {{ gameName }}
                        <H5Tag v-if="gameUrl" class="h5-tag" />
                    </span>
                </p>
                <p>
                    <span class="package-desc">{{ gameIntroduce }}</span>
                </p>
                <div class="info-tags">
                    <div v-for="(item, index) in welfare" :key="index" :class="['tags', 'tag' + index]">
                        <span class="tag-text">{{ item }}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="choosen-box">
            <span :class="active === 'detail' ? 'activeBtn' : ''" @click="choosenBtn('detail')">详情</span>
            <span :class="active === 'gift' ? 'activeBtn' : ''" @click="choosenBtn('gift')">礼包</span>
        </div>
        <!-- 详情 -->
        <div class="detail" v-if="detail === 'true'">
            <div class="game-banner">
                <ul>
                    <template v-if="photoList">
                        <li v-for="(item, index) in photoList" :key="index">
                            <!-- <div :style="{'background-image': 'url(' + item.url +')'}"></div> -->
                            <img v-image-preview :src="item.url" alt="">
                        </li>
                    </template>
                </ul>
            </div>
            <!-- 游戏简介 -->
            <div class="welfare-content1">
                <div class="welfare-list">
                    <span v-html="content" :class="collapse === 'up' ? 'up' : 'on'"></span>
                    <div v-if="collapse === 'up'" @click="expandCollapseHandler('on')" class="expandBtn">更多</div>
                    <div v-if="collapse === 'on'" @click="expandCollapseHandler('up')" class="collapseBtn">收起</div>
                </div>
            </div>
            <!-- 福利 -->
            <div class="welfare-content" v-if="boxContentList && JSON.stringify(boxContentList) !== '[]' && boxContentList !== []">
                <div class="package-title">
                    <span>福利</span>
                </div>
                <div class="welfare-list" :class="collapse1 === 'up' ? 'up' : 'on'">
                    <span v-for="(item, index) in boxContentList" :key="index">{{ item }}</span>
                    <div v-if="collapse1 === 'up'" @click="expandCollapseHandler1('on')" class="expandBtn">更多</div>
                    <div v-if="collapse1 === 'on'" @click="expandCollapseHandler1('up')" class="collapseBtn">收起</div>
                </div>
            </div>
            <!-- 充值返利 -->
            <div class="welfare-content" v-if="rebateList && JSON.stringify(rebateList) !== '[]' && rebateList !== []">
                <div class="package-title">
                    <span>充值返利</span>
                </div>
                <div class="welfare-list" :class="collapse2 === 'up' ? 'up' : 'on'">
                    <span v-for="(item, index) in rebateList" :key="index">{{ item }}</span>
                    <div v-if="collapse2 === 'up'" @click="expandCollapseHandler2('on')" class="expandBtn">更多</div>
                    <div v-if="collapse2 === 'on'" @click="expandCollapseHandler2('up')" class="collapseBtn">收起</div>
                </div>
            </div>
            <!-- VIP表 -->
            <div class="welfare-content" v-if="vipList && JSON.stringify(vipList) !== '[]' && vipList !== []">
                <div class="package-title">
                    <span>VIP表</span>
                </div>
                <div class="welfare-list" :class="collapse3 === 'up' ? 'up' : 'on'">
                    <span v-for="(item, index) in vipList" :key="index">{{ item }}</span>
                    <div v-if="collapse3 === 'up'" @click="expandCollapseHandler3('on')" class="expandBtn">更多</div>
                    <div v-if="collapse3 === 'on'" @click="expandCollapseHandler3('up')" class="collapseBtn">收起</div>
                </div>
            </div>
            <!-- 开服信息 -->
            <div class="package-title" v-if="listOpenServerList && JSON.stringify(listOpenServerList) !== '[]' && listOpenServerList !== []">
                <span>开服信息</span>
            </div>
            <div class="serve-content" v-if="listOpenServerList && JSON.stringify(listOpenServerList) !== '[]' && listOpenServerList !== []">
                <div class="serve-box">
                    <div class="serve-information" v-for="(item, index) in listOpenServerList" :key="index">
                        <div @click="addActive(index)" :class="['serve-name', (index === activeIdx) ? 'serveActive' : '']">{{ item.openServerName }}</div>
                        <div :class="['serve-time', (index === activeIdx) ? 'timeActive' : '']">{{ item.openServerTime }}</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 礼包 -->
        <div class="gift" v-else>
            <div class="gift-content" v-if="JSON.stringify(giftLists) !== '[]' && giftLists !== []">
                <div class="package-title">
                    <span>精选礼包</span>
                </div>
                <div class="gift-list">
                    <ul>
                        <li v-for="(item, index) in giftLists" :key="index">
                            <div @click="giftDetail(item.id)" class="left-box">
                                <p>
                                    <span class="gift-name">{{item.giftName}}</span>
                                </p>
                                <p>
                                    <span class="gift-lists">{{ item.giftContent }}</span>
                                </p>
                            </div>
                            <a class="gift-receive">
                                <img @click="receiceGift" v-if="item.status === 0" src="@/assets/wap/receive.png" alt="">
                                <span v-if="item.status === 1" class="have-receive">已领取</span>
                                <span v-if="item.status === 3" class="not-receive">已领完</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 相关推荐 -->
        <div class="package-content">
            <div class="package-title">
                <span>相关推荐</span>
            </div>
            <div class="recommend-list">
                <ul>
                    <li v-for="(item, index) in mayLikeGameList" :key="index" @click="goGameDetail(item.gameId)">
                        <p>
                            <span class="game-type">{{ item.gameType }}</span>
                        </p>
                        <p>
                            <img class="game-img" :src="item.gameLogo" alt="">
                            <H5Tag v-if="item.gameKind === 2" class="h5-tag-img" />
                        </p>
                        <p>
                            <span class="game-name">{{ item.gameName }}</span>
                        </p>
                    </li>
                </ul>
            </div>
        </div>
        <div v-if="show.pop" class="gift-pop">
            <div class="mask"></div>
            <div @click="showPop" class="close-dialog"></div>
            <div @click="downGame('app')" class="down-app"></div>
            <img src="@/assets/wap/gift_pop.png" alt="">
        </div>
        <div class="down-box">
            <div v-if='gameUrl' class="down-bottom">
                <img @click="handleH5Game" class="down-btn" src="@/assets/wap/btn_down.png" alt="">
                <span @click="handleH5Game" class="down-text">进入游戏</span>
            </div>
            <div v-else class="down-bottom">
                <img @click="downGame('game')" class="down-btn" src="@/assets/wap/btn_down.png" alt="">
                <span @click="downGame('game')" class="down-text">即刻下载</span>
            </div>
        </div>
    </div>
</template>
<script>
import H5Tag from '@/components/wap/h5Tag/h5Tag.vue'
import { mapState } from 'vuex'

export default {
    // seo-meta
    name: 'async',
    metaInfo () {
        return {
            title: this.gameName,
            meta: [{
                name: 'keyWords',
                content: this.welfare
            }],
            link: [{
                rel: 'asstes',
                href: 'https://bt.y8511.cn/gameDetail/'
            }]
        }
    },
    components: {
        H5Tag
    },
    data () {
        return {
            gameId: this.$route.query.gameId,
            isLogin: localStorage.getItem('isLogin'),
            show: {
                pop: false
            },
            detail: 'true',
            collapse: 'up',
            collapse1: 'up',
            collapse2: 'up',
            collapse3: 'up',
            active: 'detail',
            imageUrl: null,
            gameName: null,
            gameIntroduce: null,
            gameUrl: null,
            welfare: [],
            gameSize: '250M',
            excerpt: null,
            activeIdx: 0,
            photoList: null,
            // 福利
            boxContentList: [],
            // 返利
            rebateList: [],
            // vip列表
            vipList: [],
            gameDetail: [],
            mayLikeGameList: [],
            // 开服信息
            listOpenServerList: [],
            giftLists: [],
            content: null
        }
    },
    computed: mapState({
        isAndroid: state => state.isAndroid
    }),
    created () {
        this.getGameDetails()
        this.listOpenServer()
        this.$emit('footer', false)
    },
    mounted () {
        setTimeout(() => {
            this.pageName = 'async'
        }, 2000)
    },
    methods: {
        receiceGift () {
            if (this.isLogin === 'true') {
                this.show.pop = true
            } else {
                this.$router.push('/user/login')
            }
        },
        showPop () {
            if (this.show.pop) {
                this.show.pop = false
            }
        },
        choosenBtn (type) {
            this.active = type
            this.detail = type === 'detail' ? 'true' : 'false'
            if (type === 'gift') {
                this.listGameGiftNoLogin()
            }
        },
        giftDetail (id) {
            this.$router.push('/giftDetail/' + id)
            // if (this.isLogin) {
            //     this.$router.push('/giftDetail/' + id)
            // } else {
            //     this.$router.push('/login')
            // }
        },
        expandCollapseHandler (bool) {
            this.collapse = bool
        },
        expandCollapseHandler1 (bool) {
            this.collapse1 = bool
        },
        expandCollapseHandler2 (bool) {
            this.collapse2 = bool
        },
        expandCollapseHandler3 (bool) {
            this.collapse3 = bool
        },
        // 开服信息
        listOpenServer () {
            let params = {
                gameId: this.gameId,
                deviceType: this.isAndroid ? 2 : 3
            }
            this.$apis.listOpenServer(params).then((res) => {
                if (res.code === '2000') {
                    this.listOpenServerList = res.data
                }
            })
        },
        // 详情
        getGameDetails () {
            let params = {
                gameId: this.gameId,
                deviceType: this.isAndroid ? 2 : 3
            }
            this.$apis.getGameDetails(params).then((res) => {
                if (res.code === '2000') {
                    this.gameDetail = res.data.gameDetail
                    this.imageUrl = this.gameDetail.imageUrl
                    this.gameName = this.gameDetail.gameName
                    this.gameIntroduce = this.gameDetail.gameIntroduce // desc
                    this.welfare = this.gameDetail.welfare
                    this.gameSize = this.gameDetail.gameSize
                    this.photoList = this.gameDetail.photoList
                    this.excerpt = this.gameDetail.excerpt
                    this.boxContentList = this.gameDetail.boxContentList
                    this.rebateList = this.gameDetail.rebateList
                    this.vipList = this.gameDetail.vipList
                    this.mayLikeGameList = res.data.mayLikeGameList
                    this.content = this.gameDetail.content
                    this.gameUrl = this.gameDetail.gameUrl
                    if (this.content.indexOf('&lt;') > -1) {
                        this.content = this.content.replace(/&lt;/g, '<')
                    }
                    if (this.content.indexOf('&gt;') > -1) {
                        this.content = this.content.replace(/&gt;/g, '>')
                    }
                }
            })
        },
        addActive (index) {
            this.activeIdx = index
        },
        // 登陆状态下
        listGameGift () {
            let params = {
                gameId: this.gameId
            }
            this.$apis.listGameGift(params).then((res) => {
                if (res.code === '2000') {
                    this.giftLists = res.data
                }
            })
        },
        // 非登陆状态下
        listGameGiftNoLogin () {
            let params = {
                gameId: this.gameId
            }
            this.$apis.listGameGiftNoLogin(params).then((res) => {
                if (res.code === '2000') {
                    this.giftLists = res.data
                }
            })
        },
        goGameDetail (id) {
            this.$router.push(`/gameDetail1?gameId=${id}`)
        },
        // 下载APP
        downGame (type) {
            let params = {
                gameId: type === 'app' ? 2 : this.gameId,
                deviceType: this.isAndroid ? 2 : 3
            }
            this.$apis.getDownloadUrl(params).then((res) => {
                if (res.code === '2000') {
                    window.location.href = res.data.stringData
                } else {
                    this.$Toast(res.message)
                }
            }).catch((error) => {
                this.$Toast(error.message)
            })
        },
        // 打开h5游戏
        handleH5Game () {
            window.open(this.gameUrl, '_blank')
        }
    }
}
</script>
<style lang="less" scoped>
@import "./game.less";
.h5-tag {
    display: inline-block;
    position: relative;
    top: -.04rem;
    left: .05rem;
}

.h5-tag-img {
   position: absolute;
   top: .1333rem;
   right: .57rem;
}
</style>
