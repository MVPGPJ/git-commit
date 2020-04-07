<template>
    <div class="search">
        <div class="search-box">
            <div class="search-border">
                <img src="@/assets/wap/search.png" alt="">
                <i v-if="gameName" @click="initSearch('')" class="clear-icon"></i>
                <input v-model="gameName" type="text">
                <a @click="searchGame" class="search-text">搜索</a>
            </div>
        </div>
        <div class="hot-recommend" v-if="!searchGameList">
            <span class="hot-text">热门推荐</span>
            <div class="hot-box">
                <a v-for="(item, index) in listHotWordsList" :key="index" @click="initSearch(item)">{{ item }}</a>
            </div>
        </div>
        <div class="search-lists" v-if="searchGameList">
            <div class="search-box" v-for="(item, index) in searchGameList" @click="goDetail(item.gameId)" :key="index">
                <img class="search-img" :src="item.gameLogo" alt="">
                <div class="search-info">
                    <p>
                        <span class="game-name">{{ item.gameName }}</span>
                        <H5Tag v-if="item.gameKind === 2" class="h5-tag"/>
                    </p>
                    <p>
                        <span class="game-desc">{{ item.briefIntroduce }}</span>
                    </p>
                    <div class="info-tags">
                        <div v-for="(self, idx) in item.gameWelfare" :key="idx" :class="['tags', 'tag' + idx]">
                            <span class="tag-text">{{ self }}</span>
                        </div>
                    </div>
                </div>
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
            gameName: '',
            listHotWordsList: null,
            searchGameList: null
        }
    },
    computed: mapState({
        isAndroid: state => state.isAndroid
    }),
    created () {
        this.listHotWords()
    },
    methods: {
        // 热词
        listHotWords () {
            this.$apis.listHotWords().then((res) => {
                if (res.code === '2000') {
                    this.listHotWordsList = res.data
                } else {
                    this.$Toast(res.message)
                }
            }).catch((error) => {
                this.$Toast(error.message)
            })
        },
        // 初始化输入框
        initSearch (gameName) {
            this.gameName = ''
            this.gameName = gameName
        },
        // 查询游戏
        searchGame () {
            let params = {
                gameName: this.gameName,
                deviceType: this.isAndroid ? 2 : 3
            }
            this.$apis.searchGame(params).then((res) => {
                if (res.code === '2000') {
                    this.searchGameList = res.data.list
                } else {
                    this.$Toast(res.message)
                }
            }).catch((error) => {
                this.$Toast(error.message)
            })
        },
        goDetail (gameId) {
            this.$router.push(`/gameDetail?gameId=${gameId}`)
        }
    }
}
</script>
<style lang="less" scoped>
@import './search.less';
.h5-tag {
    margin: .05rem 0 0 .1rem;
}
</style>
