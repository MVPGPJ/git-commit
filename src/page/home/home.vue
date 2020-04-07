<template>
    <div class="warp">
        <div class="carousel">
            <el-carousel indicator-position="none" height="400px">
                <el-carousel-item v-for="(item, index) in carousel" :key="index">
                    <img :src="item.name" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
        <div class="container top10">
            <h3 class="title">
                新游推荐
                <span class="title-i">
                    <i></i>
                </span>
                <a>更多+</a>
            </h3>
            <ul class="TOP10_con">
                <li
                    v-for="(item, index) in moreGame"
                    :key="index"
                    @mouseenter="getActive($event)"
                    @mouseout="removeActive($event)">
                    <a>
                        <img :src="item.name" alt="">
                        <p>{{ item.title }}</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="container main">
            <div class="main-left">
                <h3 class="title">
                    热门游戏
                    <span class="title-i">
                        <i></i>
                    </span>
                    <a>更多+</a>
                </h3>
                <ul class="left-con">
                    <li
                        v-for="(item, index) in hotGame"
                        :key="index"
                        @mouseenter="getActive($event)"
                        @mouseout="removeActive($event)">
                        <a>
                            <img :src="item.img" alt="">
                        </a>
                        <div class="left-con-detail">
                            <h4>{{ item.title }}</h4>
                            <p>
                                <!-- 平台: -->
                                <!-- <img src="" alt=""> -->
                                <!-- <img src="" alt=""> -->
                            </p>
                            <p>类型: {{ item.type }}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="main-right">
                <h3 class="title">
                    最新开服
                    <span class="title-i">
                        <i></i>
                    </span>
                    <a>更多+</a>
                </h3>
                <ul class="right-con">
                    <li class="right-con-head">
                        <div class="head-time">时间</div>
                        <div class="head-name">游戏</div>
                        <div class="head-serve">区服</div>
                    </li>
                    <li v-for="(item, index) in newServe" :key="index">
                        <a>
                            <div class="kf-time">{{ item.time }}</div>
                            <div class="kf-name">{{ item.name }}</div>
                            <div class="kf-qf">
                                <span v-for="(self, idx) in item.serve" :key="idx">{{ self }}</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container jrtj">
            <h3 class="title">
                今日推荐
                <span class="title-i">
                    <i></i>
                </span>
                <a>更多+</a>
            </h3>
            <div>
                <el-carousel :interval="4000" type="card" width="200px" height="200px">
                    <el-carousel-item v-for="(item, index) in todayGame" :key="index">
                        <div class="carousel-img">
                            <span>{{ item.name }}</span>
                            <img :src="item.img" alt="">
                        </div>
                    </el-carousel-item>
                </el-carousel>
            </div>
        </div>
        <div class="container yxzx">
            <div class="left-con">
                <h3 class="title">
                    游戏资讯
                    <span class="title-i">
                        <i></i>
                    </span>
                    <a>更多+</a>
                </h3>
                <div class="left-con-list">
                    <div class="left-con-left">
                        <div v-for="(item, index) in consulting" :key="index" class="con-left-detail">
                            <a>
                                <img :src="item.img" alt="">
                                <div class="detail-title">
                                    <span>{{ item.name }}</span>
                                </div>
                            </a>
                            <div class="ht"></div>
                        </div>
                    </div>
                    <div class="left-con-right">
                        <div class="con-right-detail">
                            <ul>
                                <li v-for="(item, index) in newsList" :key="index">
                                    <span>{{ item.title }}</span>
                                    <em>|</em>
                                    <a>{{ item.question }}</a>
                                    <div>{{ item.time }}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right-con">
                <h3 class="title">
                    游戏礼包
                    <span class="title-i">
                        <i></i>
                    </span>
                    <a>更多+</a>
                </h3>
                <div class="right-con-detail">
                    <ul>
                        <li v-for="(item, index) in gamePackage" :key="index">
                            <a>
                                <img :src="item.img" alt="">
                                <h4>{{ item.package }}</h4>
                                <p class="name">{{ item.name }}</p>
                                <p class="count">剩余: <span>{{ item.count }}%</span></p>
                                <div @mouseover="isColored($event)" @mouseout="removeIsColored($event)">领取</div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="container rank">
            <div class="rank-hot common" v-for="(item, index) in rankList" :key="index">
                <h3 class="title">
                    {{ item.title }}
                    <span class="title-i">
                        <i></i>
                    </span>
                    <a>更多+</a>
                </h3>
                <ul class="rank-hot-list">
                    <li v-for="(self, idx) in item.hotlist" :key="idx">
                        <div class="show1">
                            <span class="show1-num">{{ idx+1 }}</span>
                            <a>
                                <p>{{ self.name }}</p>
                            </a>
                            <span></span>
                        </div>
                        <div class="show2"></div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="container link">
            <h3 class="title title_left">友情链接</h3>
            <div class="link_con"></div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            carousel: [
                { name: 'https://oss.y8511.cn/data/upload/content/20190824/5d60f05e12cb3.jpg' },
                { name: 'https://oss.y8511.cn/data/upload/content/20190824/5d60d6ac86cff.jpg' },
                { name: 'https://oss.y8511.cn/data/upload/content/20190824/5d60f0fc39b84.jpg' },
                { name: 'https://oss.y8511.cn/data/upload/content/20190824/5d60f17c390c9.jpg' }
            ],
            moreGame: [
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' },
                { title: '玄中记', name: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png' }
            ],
            hotGame: [
                { title: '梦落三生', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演', iosPath: '111', androidPth: '222' },
                { title: '梦落三生', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演', iosPath: '111', androidPth: '222' },
                { title: '梦落三生', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演', iosPath: '111', androidPth: '222' },
                { title: '梦落三生', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演', iosPath: '111', androidPth: '222' },
                { title: '梦落三生', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演', iosPath: '111', androidPth: '222' },
                { title: '梦落三生', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演', iosPath: '111', androidPth: '222' }
            ],
            newServe: [
                { time: '09-10 14:00', name: '风暴部落', serve: ['安卓', '隋唐争斗'] },
                { time: '09-10 14:00', name: '风暴部落', serve: ['安卓', '哈哈'] },
                { time: '09-10 14:00', name: '风暴部落', serve: ['ios', '蔡徐坤'] },
                { time: '09-10 14:00', name: '风暴部落', serve: ['安卓', '隋唐争斗'] },
                { time: '09-10 14:00', name: '风暴部落', serve: ['安卓', '隋唐争斗'] },
                { time: '09-10 14:00', name: '风暴部落', serve: ['安卓', '隋唐争斗'] }
            ],
            todayGame: [
                { img: 'https://oss.y8511.cn/data/upload/content/20190824/5d60f05e12cb3.jpg', name: '梦幻少侠' },
                { img: 'https://oss.y8511.cn/data/upload/content/20190824/5d60d6ac86cff.jpg', name: '梦幻少侠' },
                { img: 'https://oss.y8511.cn/data/upload/content/20190824/5d60f0fc39b84.jpg', name: '梦幻少侠' },
                { img: 'https://oss.y8511.cn/data/upload/content/20190824/5d60f17c390c9.jpg', name: '梦幻少侠' }
            ],
            // 咨询
            consulting: [
                { img: 'https://oss.y8511.cn/data/upload/news/20190824/5d60f8b1a2587.jpg', name: '嗜血沙场即将开服' },
                { img: 'https://oss.y8511.cn/data/upload/news/20190824/5d60f8b1a2587.jpg', name: '嗜血沙场即将开服' },
                { img: 'https://oss.y8511.cn/data/upload/news/20190824/5d60f8b1a2587.jpg', name: '嗜血沙场即将开服' }
            ],
            newsList: [
                { title: '游戏攻略', question: '梦幻少侠游戏攻略', time: '08-26' },
                { title: '游戏攻略', question: '梦幻少侠游戏攻略', time: '08-26' },
                { title: '游戏攻略', question: '梦幻少侠游戏攻略', time: '08-26' },
                { title: '游戏攻略', question: '梦幻少侠游戏攻略', time: '08-26' },
                { title: '游戏攻略', question: '梦幻少侠游戏攻略', time: '08-26' }
            ],
            gamePackage: [
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' },
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' },
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' },
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' },
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' },
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' },
                { img: 'https://oss.y8511.cn/data/upload/card/20190824/5d60a5cb0ac99.gif', package: '超萌专属礼包', name: '玄中记', count: '20' }
            ],
            // hot
            rankList: [
                {
                    title: '热游排行',
                    hotlist: [
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190820/5d5b6174e9207.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190820/5d5b6174e9207.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190820/5d5b6174e9207.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190820/5d5b6174e9207.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190820/5d5b6174e9207.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190820/5d5b6174e9207.png', type: '角色扮演' }
                    ]
                },
                {
                    title: '新游排行',
                    hotlist: [
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190824/5d60b814c33ef.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190824/5d60b814c33ef.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190824/5d60b814c33ef.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190824/5d60b814c33ef.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190824/5d60b814c33ef.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190824/5d60b814c33ef.png', type: '角色扮演' }
                    ]
                },
                {
                    title: '所有排行',
                    hotlist: [
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演' },
                        { name: '梦幻少年', img: 'https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png', type: '角色扮演' }
                    ]
                }
            ]
        }
    },
    methods: {
        getActive (e) {
            e.currentTarget.className = 'isMouseenter'
        },
        removeActive (e) {
            e.currentTarget.className = ''
        },
        isColored (e) {
            e.currentTarget.className = 'isColored'
        },
        removeIsColored (e) {
            e.currentTarget.className = ''
        }
    }
}
</script>>
<style lang="less" scoped>
    .warp {
        width: 100%;
        display: inline-block;
        .el-carousel {
            width: 100%;
            .el-carousel__item h3 {
                color: #475669;
                font-size: 18px;
                opacity: 0.75;
                margin: 0;
            }
            .el-carousel__item:nth-child(2n) {
                background-color: #99a9bf;
            }
            .el-carousel__item:nth-child(2n+1) {
                background-color: #d3dce6;
            }
        }
    }
    .container {
        width: 1200px;
        margin: 0 auto;
        padding: 15px;
        background: #fff;
    }
    .container:after {
        content: "";
        display: block;
        width: 100%;
        clear: both;
    }
    .top10 {
        margin-top: 20px;
        border-bottom: 2px solid #e5e5e5;
        border-radius: 10px;
    }
    .title {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        border-bottom: 1px solid #ccc;
        color: #333;
        padding-left: 0px;
    }
    .title-i i {
        height: 5px;
        background: #ff5e42;
        background: linear-gradient(to right, #fd5152, #fe7f36);
        display: inline-block;
        border-radius: 5px;
        position: absolute;
        left: 0;
        bottom: -3px;
        width: 80px;
    }
    .title> a {
        position: absolute;
        right: 0;
        color: #fe7f36;
        font-size: 12px;
        top: 10px;
    }
    .TOP10_con {
        height: auto;
        margin-top: 10px;
    }
    .TOP10_con li {
        width: 117px;
        list-style-type: none;
        padding: 15px 0;
        transition: all 0.3s;
        background: none;
        border-radius: 10px;
        float: left;
        text-align: center;
        a {
            color: #333;
        }
    }
    .TOP10_con li img {
        transform: none;
        width: 80px;
        height: 80px;
        border: 0;
    }
    .TOP10_con li:nth-child(1) {
        left: 0px;
    }
    // main
    .main {
        margin-top: 20px;
        width: 1200px;
        padding: 0;
        .main-left {
            width: 830px;
            float: left;
            border-bottom: 2px solid #e5e5e5;
            border-radius: 10px;
            .left-con {
                width: 100%;
                margin-top: 10px;
            }
            .left-con:after {
                content: "";
                display: block;
                width: 100%;
                clear: both;
            }
            .left-con li {
                width: 246px;
                height: 100px;
                float: left;
                padding-right: 0px;
                padding: 10px;
                transition: all 0.2s;
                margin-bottom: 0px;
                border-radius: 10px;
                position: relative;
                top: 0px;
                a img {
                    width: 100px;
                    height: 100px;
                    float: left;
                }
                .left-con-detail {
                    width: 136px;
                    padding: 10px 0 10px 10px;
                    text-align: left;
                    position: relative;
                    float: left;
                    color: #999999;
                }
            }
        }
        .main-right {
            width: 350px;
            float: right;
            border-bottom: 2px solid #e5e5e5;
            border-radius: 10px;
            .right-con {
                margin-top: 10px;
                .right-con-head {
                    color: #333;
                    height: 30px;
                    line-height: 30px;
                    overflow: hidden;
                    div {
                        height: 30px;
                        line-height: 30px;
                        float: left;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        text-align: center;
                    }
                    .head-time {
                        width: 89px;
                        background: #f5f5f5;
                        margin-right: 1px;
                    }
                    .head-name {
                        width: 119px;
                        background: #f5f5f5;
                        margin-right: 1px;
                    }
                    .head-serve {
                        width: 110px;
                        background: #f5f5f5;
                    }
                }
                li:nth-child(2) {
                    margin-top: 10px;
                }
                li {
                    div {
                        float: left;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        text-align: center;
                        height: 40px;
                        line-height: 40px;
                        font-size: 14px;
                    }
                    .kf-time {
                        width: 89px;
                        color: #ff4c4c;
                        margin-right: 1px;
                    }
                    .kf-name {
                        width: 119px;
                        margin-right: 1px;
                    }
                    .kf-qf {
                        width: 110px;
                        color: #999;
                        text-align: center;
                        span {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
    }
    // 今日推荐
    .jrtj {
        width: 1200px;
        margin-top: 20px;
        padding-top: 0px;
        border-bottom: 2px solid #e5e5e5;
        border-radius: 10px;
        .carousel-img {
            z-index: 1;
            // position: relative;
            img {
                width: 100%;
            }
            span {
                width: 100%;
                height: 40px;
                position: absolute;
                 background: rgba(0, 0, 0, 0.5);
                bottom: 0;
                z-index: 999;
                font-size: 20px;
                color: #fff;
                text-align: center;
                line-height: 40px;
            }
        }
    }
    // 游戏资讯
    .yxzx {
        width: 1200px;
        margin-top: 20px;
        padding-top: 0px;
        .left-con {
            width: 830px;
            margin-top: 10px;
            float: left;
            border-bottom: 2px solid #e5e5e5;
            border-radius: 10px;
            .left-con-left {
                width: 300px;
                height: auto;
                margin-top: 20px;
                float: left;
                .con-left-detail {
                    width: 300px;
                    height: 170px;
                    float: right;
                    margin-bottom: 20px;
                    position: relative;
                    overflow: hidden;
                    border-radius: 4px;
                    img {
                        width: 100%;
                        height: 100%;
                    }
                    .detail-title {
                        background: rgba(0, 0, 0, 0.5);
                        color: #fff;
                        width: 300px;
                        height: 36px;
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        font-size: 17px;
                        span {
                            display: block;
                            padding: 0 10px;
                            line-height: 36px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            font-weight: bold;
                        }
                    }
                }
            }
            .left-con-right {
                float: left;
                width: 470px;
                margin-left: 30px;
                margin-top: 30px;
                border-top: 1px dotted #e3e3e3;
                li {
                    font-size: 14px;
                    line-height: 28px;
                    width: 470px;
                    overflow: hidden;
                    position: relative;
                    span {
                        color: #00b3fe;
                        display: inline-block;
                        width: auto;
                        float: left;
                    }
                    em {
                        margin: 0 10px;
                        color: #d3d3d3;
                        width: 4px;
                        display: inline-block;
                        float: left;
                    }
                    a {
                        display: inline-block;
                        width: 360px;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        float: left;
                    }
                    div {
                        position: absolute;
                        right: 0px;
                        top: 0px;
                        line-height: 28px;
                        color: #999999;
                    }
                }
            }
        }
        .left-con:after {
            content: "";
            display: block;
            width: 100%;
            clear: both;
        }
        .right-con {
            width: 350px;
            float: right;
            margin-top: 10px;
            border-bottom: 2px solid #e5e5e5;
            border-radius: 10px;
            .right-con-detail {
                margin-top: 6px;
                li {
                    padding: 10px 0px 11px 75px;
                    position: relative;
                    height: 60px;
                    border-bottom: 1px dashed #e3e3e3;
                    img {
                        position: absolute;
                        left: 5px;
                        top: 10px;
                        width: 60px;
                        height: 60px;
                    }
                    h4 {
                        font-size: 14px;
                        font-weight: 400;
                        width: 210px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        color: #525252;
                        margin-top: 0px;
                    }
                    .name {
                        height: 24px;
                        line-height: 24px;
                        color: #6c6c6c;
                        font-size: 12px;
                        width: 176px;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        margin-top: -16px;
                    }
                    .count {
                        height: 20px;
                        line-height: 20px;
                        color: #999;
                        font-size: 12px;
                        margin-top: -15px;
                        span {
                            color: #ff6238;
                        }
                    }
                    div {
                        position: absolute;
                        right: 5px;
                        top: 25px;
                        z-index: 1;
                        width: 60px;
                        height: 26px;
                        line-height: 26px;
                        color: #fff;
                        background: none;
                        border: 1px solid #31d6a2;
                        color: #31d6a2;
                        text-align: center;
                        border-radius: 5px;
                        -webkit-transition: all .3s ease-out;
                        transition: all .3s ease-out;
                        font-size: 14px;
                    }
                }
            }
        }
    }
    // 排行
    .rank {
        padding: 0;
        width: 1200px;
        margin-top: 20px;
        .common {
            width: 356px;
            float: left;
            margin-right: 21px;
        }
        .rank-hot {
            li {
                border-bottom: 0px;
                margin-bottom: 0px;
                padding: 15px 0;
                border-bottom: 1px dashed #cdcdcd;
                min-height: 0px;
                margin: 0px;
            }
        }
    }
    .link {
        border-radius: 10px;
        background: #FFFFFF;
        margin-top: 20px;
        .title {
            border-bottom: 0px;
            padding: 0px;
            padding-left: 10px;
            color: #ff6238;
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            font-weight: normal;
            position: relative;
        }
        .title_left {
            border: 0px;
            color: #434343;
        }
    }
    .isMouseenter {
        box-shadow: 0px 2px 10px 0px rgba(145,145,145,0.52);
        top: -1px;
    }
    .isColored {
        background: #31d6a2;
        color: #fff;
    }
</style>
