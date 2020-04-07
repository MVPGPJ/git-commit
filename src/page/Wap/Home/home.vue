<template>
    <main class="main">
        <Banner></Banner>
        <Information></Information>
        <NewGame></NewGame>
        <RankingList></RankingList>
        <Recommend></Recommend>
    </main>
</template>

<script>
export default {
    metaInfo () {
        return {
            title: '巨乐玩，巨乐玩福利手游平台，变态福利手游平台 巨乐玩，福利手游平台',
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
                    content: 'https://bt.y8511.cn/home/'
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
                href: 'https://bt.y8511.cn/home/'
            }]
        }
    }
}
</script>

<script>
import Banner from './banner/'
import Information from './information/'
import NewGame from './newGame/'
import RankingList from './rankingList/'
import Recommend from './recommend/'
export default {
    components: {
        Banner, Information, NewGame, RankingList, Recommend
    }
}
</script>
