<template>
    <div class="rankingList">
        <div class="title">
            <div class="text">
                <div :class="iosCss" @click="handleBtn(3)">IOS热榜</div>
                <div :class="androidCss" @click="handleBtn(2)">安卓热榜</div>
                <div :class="H5Css" @click="handleBtn(1)">H5热榜</div>
            </div>
            <img @click="handleRank" src="@/assets/wap/images/home_ic_more_333@3x.png" alt="">
        </div>
        <div class="main" v-show="this.agentType === 'ios'">
            <div class="li-first">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in ioslistFirst" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 1 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="li-second">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in ioslistSecond" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 4 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="li-third">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in ioslistThird" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 7 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main" v-show="this.agentType === 'android'">
            <div class="li-first">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in androidlistFirst" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 1 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="li-second">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in androidlistSecond" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 4 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="li-third">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in androidlistThird" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 7 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="main" v-show="this.agentType === 'h5'">
            <div class="li-first">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in h5listFirst" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 1 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="li-second">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in h5listSecond" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 4 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="li-third">
                <div @click="handleGo(item.gameId)" class="first-container border" v-for="(item,index) in h5listThird" :key="item.gameId">
                    <div class="img">
                        <img :src="item.gameLogo" alt="IOS/安卓手机游戏">
                        <div class="rank">
                            {{ index + 7 }}
                        </div>
                    </div>
                    <div class="msg">
                        <div class="name">{{ item.gameName }}</div>
                        <div class="info">{{ item.briefIntroduce }}</div>
                        <div class="info-tags">
                            <div v-for="(item, index) in item.gameWelfare" :key="index" :class="['tags', 'tag' + index]">
                                <span class="tag-text">{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data () {
        return {
            ioslist: '',
            ioslistFirst: [],
            ioslistSecond: [],
            ioslistThird: [],
            androidlist: '',
            androidlistFirst: [],
            androidlistSecond: [],
            androidlistThird: [],
            h5list: '',
            h5listFirst: [],
            h5listSecond: [],
            h5listThird: [],
            iosCss: 'text-ios',
            androidCss: 'text-android',
            H5Css: 'text-h5',
            agentType: 'ios'
        }
    },
    computed: mapState({
        isIOS: state => state.isIOS,
        isAndroid: state => state.isAndroid,
        isPc: state => state.isPc
    }),
    created () {
        this.init()
    },
    methods: {
        init () {
            if (this.isIOS) {
                this.handleBtn(3)
            } else if (this.isAndroid) {
                this.handleBtn(2)
            } else if (this.isPc) {
                this.handleBtn(1)
            } else {
                this.handleBtn(3)
            }
        },
        // 获取ios游戏
        getIOSGame (data) {
            if (!this.ioslist) {
                this.$apis.listWapHotGames(data).then((res) => {
                    this.ioslist = res.data.list
                    this.ioslistFirst = this.ioslist.slice(0, 3)
                    this.ioslistSecond = this.ioslist.slice(3, 6)
                    this.ioslistThird = this.ioslist.slice(6, 9)
                })
            }
        },
        // 获取安卓游戏
        getAndroidGame (data) {
            if (!this.androidlist) {
                this.$apis.listWapHotGames(data).then((res) => {
                    this.androidlist = res.data.list
                    this.androidlistFirst = this.androidlist.slice(0, 3)
                    this.androidlistSecond = this.androidlist.slice(3, 6)
                    this.androidlistThird = this.androidlist.slice(6, 9)
                })
            }
        },
        // 获取h5游戏
        getH5Game (data) {
            if (!this.h5list) {
                this.$apis.listWapHotGames(data).then((res) => {
                    this.h5list = res.data.list
                    this.h5listFirst = this.h5list.slice(0, 3)
                    this.h5listSecond = this.h5list.slice(3, 6)
                    this.h5listThird = this.h5list.slice(6, 9)
                })
            }
        },
        handleBtn (num) {
            let data = {
                hotListType: num,
                pageSize: 9,
                currentPage: 1
            }
            this.btnCssInit()
            if (num === 3) {
                this.iosCss = 'text-ios active'
                this.agentType = 'ios'
                this.getIOSGame(data)
            } else if (num === 2) {
                this.androidCss = 'text-android active'
                this.agentType = 'android'
                this.getAndroidGame(data)
            } else if (num === 1) {
                this.H5Css = 'text-h5 active'
                this.agentType = 'h5'
                this.getH5Game(data)
            }
        },
        handleGo (gameId) {
            this.$router.push(`/gameDetail?gameId=${gameId}`)
        },
        handleRank () {
            this.$router.push('/rankList')
        },
        // 按钮样式初始化
        btnCssInit () {
            this.iosCss = 'text-ios'
            this.androidCss = 'text-android'
            this.H5Css = 'text-h5'
        }
    }
}
</script>
<style lang="less" scoped>
@import "./rankingList.less";
</style>
