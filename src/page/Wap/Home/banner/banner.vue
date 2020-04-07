<template>
    <div class="banner" v-if="banner.length">
        <swiper id="swiperBox" v-bind:options="swiperOption" ref="Swiper">
            <swiper-slide v-for="item in banner" :key="item.gameId">
                <img @click="handleGame(item.slideUrl,item.gameId)" :src="item.imageUrl" :alt="item.gameName">
            </swiper-slide>
        </swiper>
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
import 'swiper/css/swiper.css'
// import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    data () {
        return {
            banner: [],
            swiperOption: {
                height: 200,
                speed: 2000, // 切换速度
                // watchOverflow: true, // 当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航等。默认不开启这个功能。
                loop: true, // 开启循环模式
                slidesPerView: 1,
                spaceBetween: 0,
                preventClicksPropagation: true, // 阻止click冒泡。拖动Swiper时阻止click事件。
                simulateTouch: true, // 鼠标模拟手机触摸。默认为true，Swiper接受鼠标点击、拖动。
                // 滑动方向
                direction: 'horizontal',
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true
                },
                autoplay: {
                    delay: 2000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true
                },
                on: {
                    touchEnd: function (event) {
                        // 你的事件
                    }
                }
            }
        }
    },
    components: {
        swiper,
        swiperSlide
    },
    computed: {
        swiper () {
            return this.$refs.Swiper.swiper
        }
    },
    created () {
        this.getInit()
    },
    methods: {
        getInit () {
            this.$apis.getBanners().then((res) => {
                this.banner = res.data
            })
        },
        handleGame (url, gameId) {
            if (url !== '') {
                window.location.href = url
            } else {
                this.$router.push(`/gameDetail?gameId=${gameId}`)
            }
        }
    }
}
</script>

<style lang="less">
@import "./banner.less";
</style>
