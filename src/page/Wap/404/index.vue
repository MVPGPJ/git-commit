<template>
    <div class="wap-404">
        <wap-layout :isLog="login"/>
        <div class="page404">
            <img src="../../../assets/wap/images/404@2x.png" alt="">
            <p class="text">似乎迷路了</p>
            <p class='back' @click="handleBack">返回</p>
        </div>
        <wap-footer v-if="footerShow"/>
    </div>
</template>

<script>
import wapLayout from '@/components/wap/layout'
import wapFooter from '@/components/wap/footer'
export default {
    components: { wapLayout, wapFooter },
    data () {
        return {
            login: '',
            footerShow: true
        }
    },
    created () {
        this.setRem()
    },
    methods: {
        setRem () {
            window.addEventListener('resize', changeSize)
            function changeSize () {
                let docEl = document.documentElement
                let width = docEl.getBoundingClientRect().width
                if (width <= 1024) {
                    docEl.style.fontSize = width / 10 + 'px'
                } else {
                    docEl.style.fontSize = 1024 / 10 + 'px'
                }
            }
            let docEl = document.documentElement
            let width = docEl.getBoundingClientRect().width
            if (width <= 1024) {
                docEl.style.fontSize = width / 10 + 'px'
            } else {
                docEl.style.fontSize = 1024 / 10 + 'px'
            }
        },
        footer (bool) {
            this.footerShow = bool
        },
        lisLogFn (data) {
            if (data === 'log') {
                this.login = 'true'
            }
        },
        handleBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="less" scope>
.wap-404{
    height: 100vh;
    width: 10rem;
    margin: 0 auto;
    .page404{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
        img{
            width: 4rem;
            height: 4rem;
        }
        .text{
            margin: 10px 0 18px 0;
            font-size: .373333rem;
            color: #777;
        }
        .back{
            font-size: .373333rem;
            color: #FDB71C;
        }
    }
}
body {
    margin: 0;
    background: #fff;
}

#app {
    background: #fff;
}

.wap {
    width: 10rem;
    margin: 0 auto;
}

* {
    box-sizing: border-box;
}

html {
    color: #000;
    background: #fff;
    overflow-y: scroll;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%
}

html * {
    outline: 0;
    -webkit-text-size-adjust: none;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0)
}

html,
body {
    font-family: sans-serif
}
body,
div,
dl,
dt,
dd,
ul,
ol,
li,
h1,
h2,
h3,
h4,
h5,
h6,
pre,
code,
form,
fieldset,
legend,
input,
textarea,
p,
blockquote,
th,
td,
hr,
button,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    margin: 0;
    padding: 0
}

input,
select,
textarea {
    font-size: 100%
}

table {
    border-collapse: collapse;
    border-spacing: 0
}

fieldset,
img {
    border: 0
}

abbr,
acronym {
    border: 0;
    font-variant: normal
}

del {
    text-decoration: line-through
}

address,
caption,
cite,
code,
dfn,
em,
th,
var {
    font-style: normal;
    font-weight: 500
}

ol,
ul {
    list-style: none
}

caption,
th {
    text-align: left
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-size: 100%;
    font-weight: 500
}

q:before,
q:after {
    content: ''
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline
}

sup {
    top: -.5em
}

sub {
    bottom: -.25em
}

a:hover {
    text-decoration: underline
}

ins,
a {
    text-decoration: none
}
</style>
