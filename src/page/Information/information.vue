<template>
    <div class="warp">
        <div class="container news-list">
            <div class="left news-left">
                <div class="dh-box">
                    <h3 class="title title_left">
                        <span class="title-i">
                            <i></i>
                        </span>
                        游戏资讯
                    </h3>
                    <ul>
                        <li class="news-active">
                            <a href="">全部资讯</a>
                        </li>
                        <li>
                            <a href="">游戏新闻</a>
                        </li>
                        <li>
                            <a href="">游戏攻略</a>
                        </li>
                        <li>
                            <a href="">游戏活动</a>
                        </li>
                    </ul>
                </div>
                <div class="news-lists">
                    <div class="news-lb">
                        <ul>
                            <li>
                                <div class="news-box">
                                    <div class="news-img">
                                        <a href="">
                                            <img src="https://ys-btbox-pre.oss-cn-shanghai.aliyuncs.com/data/upload/news/20191122/5dd7a3e472bbe.png" alt="">
                                        </a>
                                    </div>
                                    <div class="news-nr">
                                        <h3>
                                            <a href="">梦幻少侠周末活动</a>
                                        </h3>
                                        <p>活动时间：2019年11月23日00:00至11月24日23:59</p>
                                        <div class="news-xx">
                                            <span class="news-time">
                                                <i></i>
                                                2019-11-22 17:01:16
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="line"></div>
                            </li>
                            <li>
                                <div class="news-box">
                                    <div class="news-img">
                                        <a href="">
                                            <img src="https://ys-btbox-pre.oss-cn-shanghai.aliyuncs.com/data/upload/news/20191122/5dd7a3e472bbe.png" alt="">
                                        </a>
                                    </div>
                                    <div class="news-nr">
                                        <h3>
                                            <a href="">梦幻少侠周末活动</a>
                                        </h3>
                                        <p>活动时间：2019年11月23日00:00至11月24日23:59</p>
                                        <div class="news-xx">
                                            <span class="news-time">
                                                <i></i>
                                                2019-11-22 17:01:16
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="line"></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="right news-right">
                <div class="xw-rm">
                    <h3 class="title title-left">
                        <span class="title-i">
                            <i></i>
                        </span>
                        热门资讯
                    </h3>
                    <ul>
                        <li>
                            <a href="">《我有上将》合服公告</a>
                        </li>
                        <li>
                            <a href="">《我有上将》合服公告</a>
                        </li>
                    </ul>
                </div>
                <div class="m-r">
                    <h3 class="title title-left">
                        <span class="title-i">
                            <i></i>
                        </span>
                        热门游戏
                        <a href="">更多+</a>
                    </h3>
                    <ul class="m-r-con">
                        <li class="active">
                            <div class="show2">
                                <a href="">
                                    <img src="https://ys-btbox-pre.oss-cn-shanghai.aliyuncs.com/data/upload/game/20191123/5dd8a7bcab190.png" alt="">
                                </a>
                                <div class="show2-con">
                                    <a href="">
                                        <p class="game-name">傲世龙城BT</p>
                                    </a>
                                    <p class="ph-bb">类型：传奇游戏</p>
                                    <a href="" class="m-r-c-btn1 down-btn">下载</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="less" scoped>
.warp {
    width: 100%;
    display: inline-block;
    .news-list {
        background: #FFFFFF;
        margin-top: 20px;
        width: 1200px;
        .news-left {
            width: 830px;
        }
        .left {
            float: left;
            .dh-box {
                background: #fff;
                padding: 15px;
                margin-bottom: 20px;
                padding-top: 0px;
                border-bottom: 2px solid #e5e5e5;
                border-radius: 10px;
                ul {
                    padding: 30px 0 15px 0;
                    li {
                        display: inline-block;
                        height: 40px;
                        line-height: 40px;
                        background: #f5f5f5;
                        font-size: 16px;
                        text-align: center;
                        margin: 0 10px;
                        border-radius: 4px;
                        a {
                            display: block;
                            padding: 0 30px;
                        }
                    }
                }
            }
            .news-lists {
                background: #fff;
                padding: 15px;
                border-bottom: 2px solid #e5e5e5;
                border-radius: 10px;
                .news-lb li {
                    padding: 0 0 15px 0;
                    margin-bottom: 15px;
                    border-bottom: 1px solid #eaeaea;
                    position: relative;
                    .news-box {
                        overflow: hidden;
                        .news-img {
                            width: 200px;
                            height: 113px;
                            float: left;
                            img {
                                width: 100%;
                                height: 100%;
                                border-radius: 4px;
                            }
                        }
                        .news-nr {
                            float: left;
                            margin-left: 20px;
                            width: 580px;
                            h3 {
                                margin-top: 0;
                                a {
                                    font-size: 18px;
                                    font-weight: 500;
                                    color: #333;
                                    transition: color 0.3s ease;
                                    display: block;
                                    overflow: hidden;
                                    white-space: nowrap;
                                    text-overflow: ellipsis;
                                    margin-bottom: 15px;
                                }
                            }
                            p {
                                color: #858585;
                                line-height: 24px;
                                overflow: hidden;
                                text-overflow: ellipsis;
                                display: -webkit-box;
                                -webkit-line-clamp: 2;
                                -webkit-box-orient: vertical;
                                height: 44px;
                            }
                            .news-xx {
                                color: #9e9e9e;
                                margin-top: 10px;
                                overflow: hidden;
                                .news-time {
                                    float: right;
                                }
                                .iconfont {
                                    font-size: 15px;
                                    margin-right: 5px;
                                    color: #fe7f36;
                                }
                            }
                        }
                        .line {
                            position: absolute;
                            bottom: -1px;
                            left: 0;
                            width: 100%;
                            height: 1px;
                            background-color: #f9f9f9;
                        }
                    }
                }
            }
        }
        .news-right {
            width: 350px;
        }
        .right {
            float: right;
            .xw-rm, .gl-rm, .hd-rm {
                background: #fff;
                padding: 15px;
                margin-bottom: 20px;
                padding-top: 0px;
                border-bottom: 2px solid #e5e5e5;
                border-radius: 10px;
                ul {
                    margin-top: 15px;
                    li {
                        height: 30px;
                        line-height: 30px;
                        list-style: inside disc;
                        color: #bbb;
                        padding: 5px 0;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        a {
                            color: #525252;
                            font-size: 14px;
                        }
                    }
                }
            }
            .m-r {
                border-bottom: 2px solid #e5e5e5;
                border-radius: 10px;
                padding-top: 0px;
                .m-r-con {
                    margin-top: 10px;
                    width: 100%;
                    li {
                        display: inline-block;
                        width: 100%;
                        border-bottom: 1px solid #f4f4f4;
                        margin-bottom: 0px;
                        padding: 15px 0;
                        min-height: 0px;
                        margin: 0px;
                        .show2 {
                            margin-bottom: 0px;
                            img {
                                box-shadow: 0px 3px 6px #cacaca;
                                border-radius: 10px;
                                width: 60px;
                                height: 60px;
                                float: left;
                            }
                            .show2-con {
                                width: 254px;
                                float: right;
                                position: relative;
                                height: 60px;
                                a {
                                    p {
                                        margin-top: 0;
                                        width: 136px;
                                        font-size: 18px;
                                        float: none;
                                        overflow: hidden;
                                        text-overflow: ellipsis;
                                        white-space: nowrap;
                                        color: #525252;
                                    }
                                }
                                p {
                                    margin-top: 0;
                                    color: #9e9e9e;
                                    margin-top: 10px;
                                    font-size: 14px;
                                    overflow: hidden;
                                    text-overflow: ellipsis;
                                    white-space: nowrap;
                                }
                                .down-btn {
                                    width: 70px;
                                    height: 27px;
                                    background: none;
                                    background-position: -133px 0px;
                                    top: 45%;
                                    border: 1px solid #fe7f36;
                                    border-radius: 5px;
                                    color: #fe7f36;
                                    &:hover {
                                        background: #fe7f36;
                                        color: #fff;
                                    }
                                }
                                .m-r-c-btn1 {
                                    position: absolute;
                                    margin-top: -15px;
                                    right: 0;
                                    display: block;
                                    width: 80px;
                                    text-align: center;
                                    line-height: 27px;
                                    font-size: 14px;
                                }
                            }
                        }
                    }
                }
            }
        }
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
        a {
            color: #fe7f36;
            font-size: 12px;
            top: 10px;
            position: absolute;
            right: 0;
            font-weight: normal;
        }
    }
}
.news-active {
    background: #fe7f36 !important;
    box-shadow: 0px 2px 10px 0px rgba(255, 98, 56, 0.5) !important;
    a {
        color: #fff !important;
    }
}
</style>
