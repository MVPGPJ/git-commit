<template>
    <div class="warp">
        <div class="service-banner">
            <div class="service-banner-wrap">
                <div class="service-btn-warp">
                    <a href="" class="service-btn"></a>
                    <a href="" class="question-btn"></a>
                </div>
            </div>
        </div>
        <div class="service-content">
            <div class="service-wrap">
                <div class="list-box">
                    <div class="list-mask">
                        <div class="list-t">
                            <i class="pay-icon"></i>
                            <a href="">充值问题</a>
                        </div>
                    </div>
                    <div class="service-c">
                        <ul></ul>
                    </div>
                </div>
                <div class="list-box">
                    <div class="list-mask">
                        <div class="list-t">
                            <i class="account-icon"></i>
                            <a href="">账号问题</a>
                        </div>
                    </div>
                    <div class="service-c">
                        <ul>
                            <li>
                                <a href="">巨乐玩福利</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="list-box">
                    <div class="list-mask">
                        <div class="list-t">
                            <i class="game-icon"></i>
                            <a href="">游戏问题</a>
                        </div>
                    </div>
                    <div class="service-c">
                        <ul>
                            <li>
                                <a href="">巨乐玩福利</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.warp {
    width: 100%;
    display: inline-block;
    .service-banner {
        background: url(./img/banner-box.png) center 0 no-repeat;
        .service-banner-wrap {
            height: 320px;
            margin: 0 auto;
            background: url(./img/banner.png) center 0 no-repeat;
            .service-btn-warp {
                width: 1260px;
                height: auto;
                margin: 0 auto;
                position: relative;
                .service-btn {
                    width: 207px;
                    height: 77px;
                    float: right;
                    background: url(./img/service-btn.jpg) left top no-repeat;
                    background-size: 100% 100%;
                    margin: 55px 20px 0 0;
                }
                .question-btn {
                    width: 207px;
                    height: 77px;
                    background: url(./img/question-btn.jpg) left top no-repeat;
                    background-size: 100% 100%;
                    position: absolute;
                    right: 20px;
                    top: 150px;
                }
            }
        }
    }
    .service-content {
        min-width: 1200px;
        max-width: 1920px;
        height: 400px;
        margin: 0 auto;
        padding-top: 30px;
        .service-wrap {
            width: 1150px;
            margin: 0 auto;
            .list-box {
                width: 349px;
                height: 321px;
                margin-left: 50px;
                background-color: #fff;
                box-shadow: 1px 10px 10px #e6e6e6;
                position: relative;
                float: left;
                &:nth-child(1) {
                    margin-left: 0;
                }
                .list-mask {
                    width: 100%;
                    height: 98px;
                    .list-t {
                        font-size: 22px;
                        line-height: 60px;
                        padding: 25px 0 0 87px;
                        a {
                            color: #000;
                        }
                        .pay-icon {
                            width: 50px;
                            height: 50px;
                            display: block;
                            float: left;
                            margin-right: 20px;
                            background: url(./img/pay-icon.png) left top no-repeat;
                            background-size: 100%;
                        }
                        .account-icon {
                            width: 50px;
                            height: 50px;
                            display: block;
                            float: left;
                            margin-right: 20px;
                            background: url(./img/account-icon.png) left top no-repeat;
                            background-size: 100%;
                        }
                        .game-icon {
                            width: 50px;
                            height: 50px;
                            display: block;
                            float: left;
                            margin-right: 20px;
                            background: url(./img/game-icon.png) left top no-repeat;
                            background-size: 100%;
                        }
                    }
                }
                .service-c {
                    width: 313px;
                    height: 205px;
                    margin: 0 auto;
                    padding: 20px 0;
                    border-top: 1px dotted #e6e6e6;
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
