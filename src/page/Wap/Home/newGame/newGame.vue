<template>
    <div class="newGame">
        <div class="title">
            新游速递
        </div>
        <div class="main">
            <div class="main-game border" v-for="item in list" :key="item.gameId" @click="handleGo(item.gameId)">
                <div class="type">{{ item.gameType }}</div>
                <div class="img">
                    <H5Tag v-if="item.gameKind === 2" class="h5-tag" />
                    <img :src="item.gameLogo" alt="">
                </div>
                <div class="name">{{ item.gameName }}</div>
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
            list: []
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
        getInit () {
            let data = {
                deviceType: this.isIOS ? 3 : 2
            }
            this.$apis.listNewGameRecommend(data).then((res) => {
                this.list = res.data
            })
        },
        handleGo (gameId) {
            this.$router.push(`/gameDetail?gameId=${gameId}`)
        }
    }
}
</script>
<style lang="less" scoped>
@import "./newGame.less";
.h5-tag {
    position: absolute;
    top: 0.13rem;
    right: 0.13rem;
}
</style>
