<template>
    <div class="game-detail">
        <div class="detail-nav">
            <span @click="$router.push('/home')">首页 > 游戏 > 礼包详情</span>
        </div>
        <div></div>
        <div class="game-box">
            <div class="package-img">
                <img :src="giftPicUrl" alt="">
            </div>
            <div class="package-info">
                <p>
                    <span class="package-name">{{ gameName }}</span>
                </p>
                <p>
                    <span class="package-desc">{{ giftIntroduce }}</span>
                </p>
                <p>
                    <span class="package-time">有效期至：{{ $moment(endDate).format('YYYY-DD-MM hh:mm:ss') }}</span>
                </p>
            </div>
        </div>
        <div class="line"></div>
        <div class="package-content">
            <div class="package-title">
                <span>礼包内容</span>
            </div>
            <div class="package-list">
                <ul>
                    <li v-html="giftContent"></li>
                </ul>
            </div>
        </div>
        <div class="package-intruduce">
            <div class="package-title">
                <span>使用说明</span>
            </div>
            <div class="intruduce">
                <span>
                    点击主界面【功能】-【设置】-【激活码】，输入激活码后点击“兑换”即可领取
                </span>
            </div>
        </div>
        <div @click="show.pop = true" class="receive-gift">
            <img src="@/assets/wap/receive_gift.png" alt="领取礼包">
            <span>领取礼包</span>
        </div>
        <div v-if="show.pop" class="gift-pop">
            <div class="mask"></div>
            <div @click="showPop" class="close-dialog"></div>
            <div @click="downGame" class="down-app"></div>
            <img src="@/assets/wap/gift_pop.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            id: this.$route.params.id,
            getGiftList: null,
            giftContentList: [],
            giftContent: null,
            gameName: null,
            endDate: null,
            giftIntroduce: null,
            giftPicUrl: null,
            show: {
                pop: false
            }
        }
    },
    created () {
        this.getGift()
        this.$emit('footer', false)
    },
    methods: {
        getGift () {
            let params = {
                giftId: this.id
            }
            this.$apis.getGift(params).then((res) => {
                if (res.code === '2000') {
                    this.getGiftList = res.data
                    this.gameName = this.getGiftList.gameName
                    this.endDate = this.getGiftList.endDate
                    this.giftIntroduce = this.getGiftList.giftIntroduce
                    this.giftPicUrl = this.getGiftList.giftPicUrl
                    this.giftContentList = this.getGiftList.giftContentList
                    this.giftContent = this.getGiftList.giftContent
                }
            })
        },
        showPop () {
            if (this.show.pop) {
                this.show.pop = false
            }
        },
        // 下载APP
        downGame () {
            let params = {
                gameId: 2,
                deviceType: this.isAndroid ? 2 : 3
            }
            this.$apis.getDownloadUrl(params).then((res) => {
                if (res.code === '2000') {
                    window.location.href = res.data.stringData
                } else {
                    this.$Toast(res.msg)
                }
            }).catch((error) => {
                this.$Toast(error.msg)
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import "./gift-detail.less";
</style>
