<template>
    <div class="warp">
        <div class="container game-list game-sx">
            <h2 class="title title_left">
                <span class="title-i">
                    <i></i>
                </span>
                游戏列表
            </h2>
            <ul class="game-list-select">
                <li>
                    <span>平台分类：</span>
                    <div class="select-type">
                        <a href="" class="active">所有</a>
                        <a href="">IOS</a>
                        <a href="">Android</a>
                    </div>
                </li>
                <li>
                    <span>游戏分类：</span>
                    <div class="select-type">
                        <a href="" class="active">全部</a>
                        <a href="">角色扮演</a>
                        <a href="">回合游戏</a>
                        <a href="">传奇游戏</a>
                        <a href="">卡牌游戏</a>
                        <a href="">动作放置</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="container game-list game-lb">
            <div class="game-list-con">
                <div class="game-list-detail">
                    <a href="">
                        <img src="https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png" alt="">
                    </a>
                    <div class="game-list-word">
                        <a href="">
                            <h4>西游封魔录</h4>
                        </a>
                        <span>类型：角色扮演</span>
                        <p>简介：天地初开，三界分明，人族、神族、妖族并立，虽互有攻伐，却依然共存千年，直到封神大战开启。封神之战，三界秩序崩坏，天地一片混乱。拥有神识之力的你，为了人间重新回归和平，你毅然担负起重任，走上了消灭妖魔的道路。百种英雄，策略搭配，同服竞技，热血战斗，跨服竞技，争做三界之主！</p>
                        <a href="" class="gw-btn">游戏专题</a>
                        <a href="" class="gw-btn">领取礼包</a>
                    </div>
                </div>
                <div class="game-list-detail">
                    <a href="">
                        <img src="https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png" alt="">
                    </a>
                    <div class="game-list-word">
                        <a href="">
                            <h4>西游封魔录</h4>
                        </a>
                        <span>类型：角色扮演</span>
                        <p>简介：天地初开，三界分明，人族、神族、妖族并立，虽互有攻伐，却依然共存千年，直到封神大战开启。封神之战，三界秩序崩坏，天地一片混乱。拥有神识之力的你，为了人间重新回归和平，你毅然担负起重任，走上了消灭妖魔的道路。百种英雄，策略搭配，同服竞技，热血战斗，跨服竞技，争做三界之主！</p>
                        <a href="" class="gw-btn">游戏专题</a>
                        <a href="" class="gw-btn">领取礼包</a>
                    </div>
                </div>
                <div class="game-list-detail">
                    <a href="">
                        <img src="https://oss.y8511.cn/data/upload/game/20190823/5d5f860179bda.png" alt="">
                    </a>
                    <div class="game-list-word">
                        <a href="">
                            <h4>西游封魔录</h4>
                        </a>
                        <span>类型：角色扮演</span>
                        <p>简介：天地初开，三界分明，人族、神族、妖族并立，虽互有攻伐，却依然共存千年，直到封神大战开启。封神之战，三界秩序崩坏，天地一片混乱。拥有神识之力的你，为了人间重新回归和平，你毅然担负起重任，走上了消灭妖魔的道路。百种英雄，策略搭配，同服竞技，热血战斗，跨服竞技，争做三界之主！</p>
                        <a href="" class="gw-btn">游戏专题</a>
                        <a href="" class="gw-btn">领取礼包</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
body {
    font-family: 微软雅黑;
    font-size: 12px;
    position: relative;
    min-width: 1200px;
    margin: 0px;
    padding: 0px;
    background: rgb(250, 250, 250);
}
.warp {
    display: inline-block;
    width: 100%;
    .title {
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        font-weight: normal;
        position: relative;
        border-bottom: 1px solid #ccc;
        color: #333;
        padding-left: 0px;
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
    }
    .game-list {
        background: #FFFFFF;
        margin-top: 20px;
    }
    .game-sx {
        width: 1170px;
        border-bottom: 2px solid #e5e5e5;
        border-radius: 10px;
        .game-list-select {
            border: 0px;
            margin: 0px;
            padding: 20px 0 0 0;
            li {
                min-height: 43px;
                span {
                    width: 95px;
                    color: #333333;
                    text-align: left;
                    font-size: 14px;
                    line-height: 34px;
                    display: inline-block;
                    float: none;
                }
                .select-type {
                    float: none;
                    display: inline-block;
                    a {
                        width: 78px;
                        height: 32px;
                        line-height: 32px;
                        color: #666;
                        font-size: 14px;
                        display: inline-block;
                        text-align: center;
                        background: #f5f5f5;
                        border-radius: 4px;
                        margin: 0 5px;
                        font-weight: 500;
                    }
                }
            }
        }
    }
    .game-lb {
        padding: 0px;
        background: none;
        width: 1200px;
        margin-top: 20px;
        .game-list-con {
            min-height: 350px;
            width: 1227px;
            border: 0px;
            margin: 0px;
            .game-list-detail {
                margin: 0px 13px 13px 0;
                background: #fff;
                width: 360px;
                border: 1px solid #f5f5f5;
                border-radius: 10px;
                padding: 15px;
                transition: all .2s;
                position: relative;
                top: 0px;
                float: left;
                img {
                    width: 120px;
                    height: 120px;
                    float: left;
                }
                .game-list-word {
                    width: 224px;
                    float: left;
                    margin-left: 15px;
                    line-height: 1.5;
                    h4 {
                        color: #5d5d5d;
                        font-size: 18px;
                        font-weight: 500;
                        margin: 0;
                    }
                    span {
                        color: #ff6238;
                        display: inline-block;
                        margin-top: 4px;
                        font-size: 14px;
                        margin-right: 20px;
                    }
                    p {
                        font-size: 14px;
                        width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        color: #999999;
                        margin-top: 4px;
                    }
                    .gw-btn {
                        margin: 0 20px 0 0;
                        font-size: 15px;
                        padding: 5px 20px;
                        border-radius: 5px;
                        display: block;
                        float: left;
                        background: linear-gradient(to right, #fb4b4d, #ff7138);
                        color: #fff;
                        &:first-child {
                            background: linear-gradient(to right, #fb4b4d, #ff7138);
                            color: #fff;
                            border: 0px;
                        }
                        &:last-child {
                            margin: 0 0px 0 0;
                            border: 0px;
                            color: #fff;
                            background: linear-gradient(to right, #27cab6, #3adb9d);
                        }
                    }
                }
            }
        }
    }
}
.active {
    color: #fff !important;
    background: #ff6238 !important;
    box-shadow: 0px 2px 10px 0px rgba(255, 98, 56, 0.5);
}
</style>
