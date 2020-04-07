<template>
    <div id="app">
        <router-view />
        <offline v-show="isOffline" @online="onlineFn" />
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'app',
    data () {
        return {
            isOffline: false
        }
    },
    computed: mapState({
        isPc: state => state.isPc
    }),
    mounted () {
        // 2020/04/04  制灰
        let time = Date.parse(new Date())
        if (time >= 1585929600000 && time < 1586016000000) {
            let html = document.getElementsByTagName('html')[0]
            html.style.filter = 'grayscale(100%)'
            html.style.filter = 'progid:DXImageTransform.Microsoft.BasicImage(grayscale=1)'
        }
    },
    created () {
        window.addEventListener('load', () => {
            window.addEventListener('online', () => {
                this.isOffline = false
            })
            window.addEventListener('offline', () => {
                this.isOffline = true
            })
        })
    },
    methods: {
        onlineFn () {
            this.isOffline = false
        }
    }
}
</script>

<style lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
    background: #fff;
    margin: 0 !important;
}
</style>
