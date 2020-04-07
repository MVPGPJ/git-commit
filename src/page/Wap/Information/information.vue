<template>
    <div class="information">
        <div class="detail-nav">
            <span>首页 > 资讯 > 资讯详情</span>
        </div>
        <div class="information-header">
            <div class="information-title">
                <span>{{ getPostList.title }}</span>
            </div>
            <div class="information-desc">
                <span class="information-time">{{ getPostList.date }}</span>
                <span class="information-version">{{ getPostList.gameName }}</span>
            </div>
        </div>
        <div class="information-content">
            <span v-html="getPostList.content"></span>
        </div>
    </div>
</template>
<script>
export default {
    metaInfo () {
        return {
            title: '巨乐玩，巨乐玩游戏详情',
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
                href: 'https://bt.y8511.cn/information/'
            }]
        }
    },
    data () {
        return {
            id: this.$route.query.id,
            getPostList: {
                content: '符文类型很多，攻击符文、防御符文、命中符文、破甲符文、闪避符文、抗暴符文、暴击符文、锋芒符文、守护符文、坚盾符文、卸甲符文、经验符文、连击抵抗符文及双属性铭文（下面有具体介绍），其中锋芒符文、守护符文、坚盾符文、卸甲符文、经验符文的属性为百分比属性。',
                date: '2019-08-27',
                gameName: '九州伏魔录V版',
                title: '重磅资讯！重磅资讯！！走过路过不要错过，马上获取尊贵VIP特权'
            }
        }
    },
    created () {
        this.getPost()
        // console.log(this.id)
    },
    methods: {
        getPost () {
            let params = {
                id: this.id
            }
            this.$apis.getPost(params).then((res) => {
                if (res.code === '2000') {
                    this.getPostList = res.data
                } else {
                    this.$Toast(res.message)
                }
            }).catch((error) => {
                this.$Toast(error.message)
            })
        }
    }
}
</script>
<style lang="less" scoped>
@import "./information.less";
</style>
